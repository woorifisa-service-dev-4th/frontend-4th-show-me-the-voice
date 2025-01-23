import { Heart } from "lucide-react";

export default function Page() {
    return (
            <div className="bg-white p-4 rounded-lg shadow mb-4">
                <h2 className="font-bold mb-2">김철수</h2>
                <p className="mb-4">안녕하세요</p>
                <div className="flex justify-end text-gray-500">
                    <button className="flex items-center">
                        <Heart size={20} className="mr-1" /> {2}
                    </button>
                </div>
            </div>
        );
}