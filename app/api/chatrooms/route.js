import { fetchChatrooms } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const chatrooms = await fetchChatrooms();
        return NextResponse.json(chatrooms);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}