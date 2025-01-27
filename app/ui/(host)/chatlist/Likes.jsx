'use client';

import {useState} from 'react';
import {Heart} from 'lucide-react';
import {getCardById, patchLikes} from "@/app/lib/data";

export default function LikeButton({id,initialLikes}) {
    const [likes, setLikes] = useState(initialLikes); // 초기 좋아요 수 (서버에서 불러올 때까지 null)
    const [isLiked, setIsLiked] = useState(false); // 좋아요 여부

    // 좋아요 상태 업데이트
    const toggleLike = async () => {
        try {
            // JSON 서버에서 현재 좋아요 수를 조회
            const card = await getCardById(id);
            const updatedLikes = isLiked ? card.likes - 1 : card.likes + 1;

            await patchLikes(id,updatedLikes);

            // 클라이언트 상태 업데이트
            setLikes(updatedLikes);
            setIsLiked(!isLiked);
        } catch (error) {
            console.error("Failed to toggle like:", error);
        }
    };
    return (
        <button
            onClick={toggleLike}
            className={`flex items-center ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
        >
            <Heart size={20} className="mr-1"/>
            {likes !== null ? likes : '...'}
        </button>
    );
}
