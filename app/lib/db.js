import { sql } from "@vercel/postgres";
import "dotenv/config";  // 환경 변수 로드

// 채팅방 목록 가져오기
export async function fetchChatrooms() {
    try {
        const data = await sql`SELECT * FROM chatrooms ORDER BY created_date DESC`;
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
      SELECT * FROM chats WHERE chatroom_id = ${chatroomId} ORDER BY id ASC
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
      VALUES (${chatroomId}, ${username}, ${content}, 0, FALSE)
      RETURNING *;
    `;
        return result.rows[0];
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to add chat.");
    }
}

// 특정 채팅을 핀 고정
export async function pinChat(chatId, pinned) {
    try {
        await sql`
      UPDATE chats SET pinned = ${pinned} WHERE id = ${chatId}
    `;
        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to update pinned status.");
    }
}

// 좋아요 증가
export async function likeChat(chatId) {
    try {
        await sql`
      UPDATE chats SET likes = likes + 1 WHERE id = ${chatId}
    `;
        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to like chat.");
    }
}
export async function deleteChatroom(chatroomId) {
    try {
        await sql`
            DELETE FROM chatrooms WHERE id = ${chatroomId}
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
            DELETE FROM chats WHERE id = ${chatId}
        `;
        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to delete chat.");
    }
}