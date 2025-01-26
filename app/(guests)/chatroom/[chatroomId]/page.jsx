
import Card from '@/app/ui/Card';
import React from 'react';


const ChatRoomPage = () => {
    //TODO : 채팅 데이터
    const chatRoomData = {
        chatRoomId: 1,
        title: 'Chat Room 1',
        messages: [
            { guestId: 1, nickname: 'Anonymous1', content: 'Hello' , likes: 1},
            { guestId: 2, nickname: 'Anonymous2', content: 'Hi there!',  likes: 1 },
            { guestId: 3, nickname: 'Anonymous3', content: 'there!',  likes: 1 },
            { guestId: 4, nickname: 'Anonymous4', content: 'ere!',  likes: 1 },
            { guestId: 5, nickname: 'Anonymous5', content: 're!',  likes: 1 },
            { guestId: 6, nickname: 'Anonymous6', content: 're!',  likes: 1 },
            { guestId: 7, nickname: 'Anonymous7', content: 're!',  likes: 1 },
            { guestId: 8, nickname: 'Anonymous8', content: 're!',  likes: 1 },

        ],
    };
    return (
        <div>
            {chatRoomData.messages.map((card) => (
                <Card key={card.guestId} content={card.content} username={card.nickname} likes={card.likes}>
                </Card>
            ))}
        </div>
    );
};

export default ChatRoomPage;