export async function fetchCards() {
    const res = await fetch("http://localhost:3001/chats", {
        cache: "no-store", // 항상 최신 데이터를 가져오기 위해 캐싱 비활성화
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json(); // JSON 데이터를 반환
}