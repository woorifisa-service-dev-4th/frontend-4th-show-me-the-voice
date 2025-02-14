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
                    username: 'user' + crypto.randomUUID().replace(/-/g, ''),
                    content: message,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setMessage('');
            router.refresh(); // 채팅 목록 갱신
            if (onRefresh) {
                onRefresh();
            }
        } catch (error) {
            console.error('Failed to send message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-4">
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-full text-sm focus:outline-none"
                    placeholder="메시지를 입력하세요.."
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="p-3 rounded-md highlight-green text-white"
                    disabled={isLoading}
                >
                    {isLoading ? 'Sending...' : 'Send'}
                    <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 rotate-90 transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                </button>
            </div>
            <div className="mt-2 text-sm text-green-600">User4 에게 답장하는중...</div>
        </form>
    );
}