import { fetchChats, fetchFilteredChats } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const chatroomId = searchParams.get('chatroomId');
    const query = searchParams.get('query');

    try {
        const chats = !query || query === 'null' || query === ''
           ? await fetchChats(Number(chatroomId))
           : await fetchFilteredChats(Number(chatroomId), query);
        return NextResponse.json(chats);
    } catch (error) {
        console.error("Failed to fetch chats:", error);
        return NextResponse.json(
            { error: "Failed to fetch chats" },
            { status: 500 }
        );
    }
}
