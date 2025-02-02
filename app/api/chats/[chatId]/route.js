import { deleteChat } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        const result = await deleteChat(Number(params.chatId));
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
