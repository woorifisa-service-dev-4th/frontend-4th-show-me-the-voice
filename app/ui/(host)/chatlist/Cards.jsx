import Card from "@/app/ui/Card";
import {getCardsByOrderOption} from "@/app/lib/data"

export  async function CardWrapper() {
    const cards = await getCardsByOrderOption('popular');
    return (
        <div>
            {cards.map((card) => (
                <Card key={card.id} card={card}>
                </Card>
            ))}
        </div>
    );
}