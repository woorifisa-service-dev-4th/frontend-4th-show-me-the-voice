'use client';
import {deleteCard} from "@/app/lib/data";

export const deleteAction = async (id) => {
    try {
        await deleteCard(id); // 서버에서 삭제 작업 수행

    } catch (error) {
        console.error("Failed to delete card:", error);
    }
};