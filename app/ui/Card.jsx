import { Heart } from "lucide-react";
import DropdownMenuDemo from "@/app/ui/Dropdown";

export default function Card({id,username,content, likes}) {
    return (
            <div className="bg-white p-4 rounded-lg shadow mb-4">
                <div className={"flex justify-between"}>
                    <h2 className="font-bold mb-2">{username}</h2>
                    <DropdownMenuDemo id={id}/>
                </div>

                <p className="mb-4">{content}</p>
                <div className="flex justify-end text-gray-500">
                    <button className="flex items-center">
                        <Heart size={20} className="mr-1" /> {likes}
                    </button>
                </div>
            </div>
        );
}