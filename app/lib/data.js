export async function fetchCards() {
    const res = await fetch("http://localhost:3001/chats", {
        cache: "no-store", // 항상 최신 데이터를 가져오기 위해 캐싱 비활성화
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json(); // JSON 데이터를 반환
}
export async function getCardsByOrderOption(options, query){
    const order= (options === 'popular')?'desc':'asc';
    const res = await fetch(`http://localhost:3001/chats?_sort=is_pinned,pinned_order,${options}&_order=desc,asc,${order}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    if( query) {
        return data.filter((card) => 
            card.content.toLowerCase().includes(query.toLowerCase())
        );
    }
    return data; // query 없으면 정렬된 전체 데이터 반환
}
export async function deleteCard(id) {
    const res = await fetch(`http://localhost:3000/api/chats/${id}`, {
        method: "DELETE", // DELETE 메서드를 사용하여 삭제 요청
    });

    if (!res.ok) {
        throw new Error("Failed to delete card");
    }

    return {success: true, id}; // 성공적으로 삭제된 경우 ID 반환
}

//id를 입력받고 좋아요수를 하나 늘려주는 함수.
export async function getCardById(id) {
    const response = await fetch(`http://localhost:3001/chats/${id}`);
    if (!response.ok) {
        throw new Error("Failed to delete card");
    }
    return response.json();
}

export async function patchLikes (id,updatedLikes) {
    try {
        // 좋아요 수를 서버에 업데이트
        const result = await fetch(`http://localhost:3000/api/chats/${id}/like`, {
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
       await fetch(`http://localhost:3000/api/chats/${id}/pin`, {
           method:'PATCH',
           headers: {
               'Content-Type': 'application/json',
           },
       })
   }catch (error) {
       console.error('Error updating pin status:', error);
   }
}

// export async function fetchCardsByQuery(query) {
//   const url = `http://localhost:3001/chats`; // 모든 데이터 가져오기

//   const res = await fetch(url, { cache: "no-store" });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const data = await res.json();

//   // query를 기반으로 content 필드 필터링
//   if (query) {
//     return data.filter((card) =>
//       card.content.toLowerCase().includes(query.toLowerCase())
//     );
//   }

//   return data; // query가 없으면 모든 데이터 반환
// }