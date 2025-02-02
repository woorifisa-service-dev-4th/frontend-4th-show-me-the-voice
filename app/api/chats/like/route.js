import { likeChat } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req) {
    try {
        const { chatId } = await req.json();
        const result = await likeChat(chatId);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
