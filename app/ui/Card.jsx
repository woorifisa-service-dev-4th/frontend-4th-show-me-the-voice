import DropdownMenuDemo from "@/app/ui/(host)/chatlist/Dropdown";
import LikeButton from "@/app/ui/(host)/chatlist/Likes";

export default function Card({card}) {
    const {id,is_pinned, content, username, likes} = card;

    return (
        <div className={`p-4 rounded-lg shadow mb-4 ${
            is_pinned ? 'bg-yellow-100' : 'bg-white'
        }`}>
            <div className={"flex justify-between"}>

                <h2 className="font-bold mb-2">{username}</h2>
                <DropdownMenuDemo id={id}/>
            </div>

            <p className="mb-4">{content}</p>
            <div className="flex justify-end text-gray-500">
                <LikeButton id={id} initialLikes={likes}/>
            </div>
        </div>
    );
}