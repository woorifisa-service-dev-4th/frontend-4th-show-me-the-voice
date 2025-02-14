
import LikeButton from "@/app/ui/(host)/chatlist/Likes";
import DropdownMenuDemo from "./Dropdown";

export default function Card({ card, onRefresh }) {
    const { id, pinned, content, username, likes, created_time } = card;

    return (
        <div className="gap-2">
            <div className={`chat-bubble ${pinned ? "chat-bubble-green" : "chat-bubble-gray"
                }`}>
                <div className={"flex justify-between gap-3"}>
                    <h2 className="font-bold mt-2">{username}</h2>
                    <DropdownMenuDemo id={id} onRefresh={onRefresh} />
                </div>
                <p className="mt-2">{content}</p>
                <div className="flex justify-between">
                    <div className="text-xs text-gray-500 mt-3">
                        {new Date(created_time).toLocaleString()}
                    </div>
                    <div className="mt-2 flex flex-end">
                        <LikeButton id={id} initialLikes={likes} />
                    </div>
                </div>

            </div>
        </div>
    );
}