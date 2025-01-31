const hostChatroomCards = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    roomName: `room ${i + 1}`,
    code: (i + 1) * 1111,
    startDate: 250124 + i,
    endDate: 250125 + i,
    password: '1234'
}));

const hostChatCards = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    username: `anonymous ${i + 1}`,
    content: `This is the description for card ${i + 1}`,
}));

const chatRoomData = Array.from({ length: 5 }, (_, i) => ({
    chatRoomId: i + 1,
    title: `Chat Room ${i + 1}`,
    messages: Array.from({ length: 8 }, (__, j) => ({
        guestId: j + 1,
        username: `Anonymous${j + 1}`,
        content: `Message ${j + 1} from Room ${i + 1}`,
        likes: Math.floor(Math.random() * 10) + 1, // Random likes between 1 and 10
        createDate: new Date(Date.now() + j * 60000).toISOString(), // Incremental timestamp for messages
    })),
}));


export async function fetchHostChatroomData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return hostChatroomCards;
}
export function fetchHostChatData() {
    return hostChatCards;
}

export async function fetchGuestChatRoomData() {
    await new Promise((resolve) => setTimeout(resolve, 100)); // 테스트용 지연
    return chatRoomData;
}

export function fetchGuestChatData() {
    return chatRoomData;
}