import Card from "@/app/ui/Card";
import {fetchCards} from "@/app/lib/data"

export  async function CardWrapper() {
    const cards = await fetchCards();
    return (
        <div>
            {cards.map((card) => (
                <Card key={card.id} id={card.id} content={card.content} username={card.username} likes={0}>
                </Card>
            ))}
        </div>
    );
}