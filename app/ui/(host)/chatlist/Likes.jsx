'use client';

import {useState} from 'react';
import {Heart} from 'lucide-react';
import {patchLikes} from "@/app/lib/data";

export default function LikeButton({id, initialLikes}) {
    const [likes, setLikes] = useState(initialLikes);
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = async () => {
        try {
            let updatedLikes = isLiked ? (likes - 1 > 0) ? likes - 1 : 0 : likes + 1;
            const res = await patchLikes(id, updatedLikes);
            setLikes(res.likes);
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
