import { sql } from "@vercel/postgres";
import "dotenv/config";  // 환경 변수 로드

// 채팅방 목록 가져오기
export async function fetchChatrooms() {
    try {
        const data = await sql`SELECT *
                               FROM chatrooms
                               ORDER BY created_time DESC`;
        return data.rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch chatrooms.");
    }
}

// 특정 채팅방의 채팅 목록 가져오기
export async function fetchChats(chatroomId) {
    try {
        const data = await sql`
            SELECT *
            FROM chats
            WHERE chatroom_id = ${chatroomId}
            ORDER BY pinned DESC, created_time DESC;
        `;
        return data.rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch chats.");
    }
}

// 새로운 채팅 추가
export async function addChat(chatroomId, username, content) {
    try {
        const result = await sql`
            INSERT INTO chats (chatroom_id, username, content, likes, pinned)
            VALUES (${chatroomId}, ${username}, ${content}, 0, FALSE) RETURNING *;
        `;
        return result.rows[0];
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to add chat.");
    }
}

// 특정 채팅을 핀 고정
export async function pinChat(chatId) {
    try {
        await sql`
            UPDATE chats
            SET pinned = NOT pinned
            WHERE id = ${chatId}
        `;
        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to update pinned status.");
    }
}

export async function likeChat(chatId, newLikes) {
    console.log(newLikes);
    try {
        const result = await sql`
                UPDATE chats
                SET likes = ${newLikes}
                WHERE id = ${chatId}
                    RETURNING likes;
            `;
        return { success: true, likes: result.rows[0].likes };
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to like chat.");
    }
}

export async function deleteChatroom(chatroomId) {
    try {
        await sql`
            DELETE
            FROM chatrooms
            WHERE id = ${chatroomId}
        `;
        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to delete chatroom.");
    }
}

export async function deleteChat(chatId) {
    try {
        await sql`
            DELETE
            FROM chats
            WHERE id = ${chatId}
        `;
        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to delete chat.");
    }
}

// 검색어에 따른 채팅 필터링
export async function fetchFilteredChats(chatroomId, query = '') {
    try {
        let sqlQuery;
        if (!query) {
            sqlQuery = await sql`
                SELECT id, chatroom_id, username, content, likes, pinned, created_time
                FROM chats
                WHERE chatroom_id = ${chatroomId}
                ORDER BY pinned DESC, created_time DESC
            `;
        } else {
            sqlQuery = await sql`
                SELECT id, chatroom_id, username, content, likes, pinned, created_time
                FROM chats
                WHERE chatroom_id = ${chatroomId}
                AND (
                    content ILIKE ${`%${query}%`} OR  -- 대소문자 구분 없이 content 검색
                    username ILIKE ${`%${query}%`}    -- 대소문자 구분 없이 username 검색
                )
                ORDER BY pinned DESC, created_time DESC
            `;
        }

        return sqlQuery.rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch filtered chats.");
    }
}
