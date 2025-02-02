import { deleteChatroom } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        const result = await deleteChatroom(Number(params.chatroomId));
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
