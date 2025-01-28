
import { fetchCardsByQuery, getCardsByOrderOption } from "@/app/lib/data";
import Card from "../../Card";
import SubHeader from "./SubHeader";

export async function CardWrapper({ searchParams }) {

    const query = searchParams.query || ''; 

    console.log(query);

    // const cards = await fetchCardsByQuery(query);

    const cards = await getCardsByOrderOption('popular', query);
    return (
        <>
        <SubHeader/>
         <div>
            {cards.map((card) => (
                <Card key={card.id} card={card}>
                </Card>
            ))}
        </div>
        </>
       
    );
}