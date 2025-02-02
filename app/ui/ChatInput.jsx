'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ChatInput({ chatroomId, onRefresh }) {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        setIsLoading(true);
        try {
            const response = await fetch(`/api/chatrooms/${chatroomId}/chats/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chatroomId: Number(chatroomId),
                    username : 'user'+crypto.randomUUID().replace(/-/g, ''),
                    content: message,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setMessage('');
            router.refresh(); // 채팅 목록 갱신
            if(onRefresh) {
                onRefresh();
            }
        } catch (error) {
            console.error('Failed to send message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t">
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-4 py-2 border rounded"
                placeholder="메시지를 입력하세요.."
                disabled={isLoading}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
                disabled={isLoading}
            >
                {isLoading ? 'Sending...' : 'Send'}
            </button>
        </form>
    );
}