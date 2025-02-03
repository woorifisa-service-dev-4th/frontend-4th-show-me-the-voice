const hostChatroomCards = Array.from({ length: 7 }, (_, i) => ({
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

export async function fetchHostChatroomData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return hostChatroomCards;
}
export function fetchHostChatData() {
    return hostChatCards;
}

export function addHostChatroomData(formData) {
    const {
        roomName,
        startDate,
        endDate,
        password
    } = formData;

    const newData = {
        id: hostChatroomCards.length,
        roomName,
        code: (hostChatroomCards.length + 1) * 1111,
        startDate,
        endDate,
        password
    }

    hostChatroomCards.push(newData);
    console.log(hostChatroomCards);

    return hostChatroomCards;
}