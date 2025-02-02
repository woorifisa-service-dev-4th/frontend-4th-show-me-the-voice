'use client';

import { fetchChats, fetchFilteredChats } from "@/app/lib/db";

import Card from "../../Card";
import SubHeader from "./SubHeader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CardWrapper({ chatroomId }) {

    const [cards, setCards] = useState([]);
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';

    const fetchData = async () => {
        try {
            const response = await fetch(`/api/chats?chatroomId=${chatroomId}&query=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch chats');
            }
            const data = await response.json();
            setCards(data);
        } catch (error) {
            console.error('Failed to load chats:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [chatroomId, query]);

    return (
        <>
            <SubHeader />
            <div>
                {cards.map((card) => (
                    <Card key={card.id} card={card} onRefresh={fetchData}>
                    </Card>
                ))}
            </div>
        </>

    );
}