'use client';

import { fetchChats, fetchFilteredChats } from "@/app/lib/db";

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
            <div className="relative flex flex-col h-full pb-[60px]">
                <SubHeader />
                <div className="flex-1 overflow-y-auto p-2 bg-gray-100">
                    {cards.map((card) => (
                        <Card key={card.id} card={card} onRefresh={fetchData} />
                    ))}
                </div>
                <ChatInput
                    chatroomId={chatroomId}
                    onRefresh={fetchData}
                    className="absolute bottom-0 left-0 w-full bg-white p-2 shadow-md z-10"
                />
            </div>
        </>

    );
}