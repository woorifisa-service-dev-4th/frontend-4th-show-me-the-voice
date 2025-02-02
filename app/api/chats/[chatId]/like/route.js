import { likeChat } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req,{params}) {
    try {
        const { chatId } = await params;
        const { likes } = await req.json();
        if (!chatId || isNaN(Number(likes))) {
            return NextResponse.json({ error: "채팅 ID가 올바르지 않거나, 좋아요 숫자가 올바르지 않습니다." }, { status: 400 });
        }
        const result = await likeChat(chatId,likes);
        return NextResponse.json({ likes: result.likes });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
