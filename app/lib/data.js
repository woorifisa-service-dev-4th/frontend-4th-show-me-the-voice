export async function fetchCards() {
    const res = await fetch("/api/chats", {
        cache: "no-store", // 항상 최신 데이터를 가져오기 위해 캐싱 비활성화
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json(); // JSON 데이터를 반환
}

export async function deleteCard(id) {
    const res = await fetch(`/api/chats/${id}`, {
        method: "DELETE", // DELETE 메서드를 사용하여 삭제 요청
    });

    if (!res.ok) {
        throw new Error("Failed to delete card");
    }

    return {success: true, id}; // 성공적으로 삭제된 경우 ID 반환
}

export async function patchLikes (id,updatedLikes) {
    try {
        // 좋아요 수를 서버에 업데이트
        const result = await fetch(`/api/chats/${id}/like`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({likes: updatedLikes}),
        });
        return result.json();
    } catch (error) {
        console.error("Failed to toggle like:", error);
    }
}

export async function patchPin(id) {
   try{
       await fetch(`/api/chats/${id}/pin`, {
           method:'PATCH',
           headers: {
               'Content-Type': 'application/json',
           },
       })
   }catch (error) {
       console.error('Error updating pin status:', error);
   }
}

