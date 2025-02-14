import Card from "@/app/ui/Card";
import { fetchChats } from "@/app/lib/db";

export async function CardWrapper({chatroomId}) {
    const cards = await fetchChats(Number(chatroomId));
    return (
        <div>
             <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cards.map((card) => (
                <Card key={card.id} card={card} />
            ))}
                </div>
        </div>
    );
}