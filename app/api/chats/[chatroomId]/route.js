import { fetchChats } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const chats = await fetchChats(Number(params.chatroomId));
        return NextResponse.json(chats);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
