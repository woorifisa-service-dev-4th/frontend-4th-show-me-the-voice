import { fetchChats } from "@/app/lib/db";

import Card from "../../Card";
import SubHeader from "./SubHeader";

export async function CardWrapper({ chatroomId }) {


    const cards = await fetchChats(Number(chatroomId));

    return (
        <>
            <SubHeader chatroomId={chatroomId} />
            <div>
                {cards.map((card) => (
                    <Card key={card.id} card={card}>
                    </Card>
                ))}
            </div>
        </>

    );
}