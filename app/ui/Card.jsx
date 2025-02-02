
import LikeButton from "@/app/ui/(host)/chatlist/Likes";
import DropdownMenuDemo from "./Dropdown";

export default function Card({card, onRefresh}) {
    const {id, pinned, content, username, likes} = card;

    return (
        <div className={`p-4 rounded-lg shadow mb-4 ${
            pinned ? 'bg-yellow-100' : 'bg-white'
        }`}>
            <div className={"flex justify-between"}>

                <h2 className="font-bold mb-2">{username}</h2>
                <DropdownMenuDemo id={id} onRefresh={onRefresh}/>
            </div>

            <p className="mt-2">{content}</p>
            <div className="flex justify-end text-gray-500 mt-2">
                <LikeButton id={id} initialLikes={likes}/>
            </div>
        </div>
    );
}