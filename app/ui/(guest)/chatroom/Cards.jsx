'use client';

import Card from "../../Card";
import SubHeader from "./SubHeader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ChatInput from "../../ChatInput";

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
            <div className="flex flex-col h-screen">
                <SubHeader />
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cards.map((card) => (
                        <Card key={card.id} card={card} onRefresh={fetchData}   />
                    ))}
                </div>
                <div className="fixed bottom-0 w-full max-w-[475px] mx-auto left-1/2 transform -translate-x-1/2 bg-white shadow-md z-1000">
                    <ChatInput
                        chatroomId={chatroomId}
                        onRefresh={fetchData}
                    />
                </div>
            </div>

        </>

    );
}