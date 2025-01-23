import { Heart, MessageCircle, Share } from "lucide-react"

export function Card({ username, content, likes, comments }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <h2 className="font-bold mb-2">{username}</h2>
            <p className="mb-4">{content}</p>
            <div className="flex justify-between text-gray-500">
                <button className="flex items-center">
                    <Heart size={20} className="mr-1" /> {likes}
                </button>
                <button className="flex items-center">
                    <MessageCircle size={20} className="mr-1" /> {comments}
                </button>
                <button className="flex items-center">
                    <Share size={20} />
                </button>
            </div>
        </div>
    )
}

