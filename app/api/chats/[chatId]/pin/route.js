import {pinChat} from "@/app/lib/db";
import {NextResponse} from "next/server";

export async function PATCH(req,{params}) {
    try {
        const {chatId} = await params;
        const result = await pinChat(chatId);
        if (!result) {
            return NextResponse.json({ error: "Failed to update pinned status" }, { status: 500 });
        }

        return NextResponse.json(result);  // ✅ 반드시 `NextResponse` 반환
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
