import { pinChat } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req) {
    try {
        const { chatId, pinned } = await req.json();
        const result = await pinChat(chatId, pinned);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
