import Card from "@/app/ui/Card";
import { fetchChats } from "@/app/lib/db";

export async function CardWrapper({chatroomId}) {
    const cards = await fetchChats(Number(chatroomId));
    return (
        <div>
            {cards.map((card) => (
                <Card key={card.id} card={card}>
                </Card>
            ))}
        </div>
    );
}