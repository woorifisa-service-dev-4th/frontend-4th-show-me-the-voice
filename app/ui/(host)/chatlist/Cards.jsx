import Card from "@/app/ui/Card";
import {fetchCards, getCardsByOrderOption} from "@/app/lib/data"

export  async function CardWrapper() {
    const cards = await getCardsByOrderOption('popular');
    return (
        <div>
            {cards.map((card) => (
                <Card key={card.id} id={card.id} content={card.content} username={card.username} likes={card.likes}>
                </Card>
            ))}
        </div>
    );
}