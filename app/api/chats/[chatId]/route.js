import { deleteChat, fetchFilteredChats } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        const {chatId} = await params;
        const result = await deleteChat(Number(chatId));
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}