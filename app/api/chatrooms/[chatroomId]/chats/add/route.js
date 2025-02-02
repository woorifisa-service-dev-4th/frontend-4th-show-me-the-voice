import { addChat } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { chatroomId, username, content } = await req.json();
        const newChat = await addChat(chatroomId, username, content);
        return NextResponse.json(newChat);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
