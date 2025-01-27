'use client';
import {deleteCard, getCardById, patchPin} from "@/app/lib/data";

export const deleteAction = async (id) => {
    try {
        await deleteCard(id); // 서버에서 삭제 작업 수행

    } catch (error) {
        console.error("Failed to delete card:", error);
    }
};

export const pinAction = async (id) =>{
    const card = await getCardById(id);

    // 2. 핀 상태를 업데이트
    const updatedPinStatus = !card.is_pinned; // 핀 상태 반전
    const now = updatedPinStatus ? new Date().toISOString() : null; // 핀 시간 설정

    const updatedData = {
        is_pinned: updatedPinStatus,
        pinned_at: now,
    };
    // 3. JSON 서버에 PATCH 요청으로 업데이트
    await patchPin(id, updatedData);
}
