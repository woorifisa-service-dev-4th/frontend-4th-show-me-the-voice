import { Pencil, Trash2 } from "lucide-react";
import ClipboardButton from "./ClipboardButton";
import { fetchHostChatroomData } from "../(hosts)/testdata";

export default async function ChatroomCard() {
    const datas = await fetchHostChatroomData();
    // const { roomName, code, startDate, endDate, password } = data;
    
    return (
        <>
            {datas.map((data, _) => {
                return (
                    <div className="bg-white p-4 rounded-lg shadow mb-4"
                        key={data.id}>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <h2 className="font-bold mb-2">{data.roomName}</h2>
                            <span className="text-gray-500">{`# ${data.code}`}</span>
                        </div>
                        <ClipboardButton value={`http://localhost:3000/chatroom/${data.code}`} />
                    </div>
                    <div className="flex justify-between">
                        <p className="mb-4">{`${data.startDate} ~ ${data.endDate}`}</p>
                        <div className="flex">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-sm font-medium transition-colors 
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                          disabled:opacity-50 disabled:pointer-events-none ring-offset-background
                          bg-primary text-primary-foreground hover:bg-primary/90">
                                <Pencil className="h-4 w-4"/>
                            </button>
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-sm font-medium transition-colors 
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                          disabled:opacity-50 disabled:pointer-events-none ring-offset-background
                          bg-primary text-primary-foreground hover:bg-primary/90">
                                <Trash2 className="h-4 w-4"/>
                            </button>
                        </div>
                    </div>
                </div>
                )
            })}
        </>

    );
}