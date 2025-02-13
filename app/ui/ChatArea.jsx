
import { Heart, Pin } from "lucide-react"


const chats = [
    {
      id: 1,
      username: "user1",
      content: "Next.js 13에서 'app' 디렉토리를 사용하는 장점은 무엇인가요?",
      likes: 5,
      created_date: "2025-01-20T17:00:00Z",
      is_pinned: false,
      pinned_at: null
    },
    {
      id: 2,
      username: "user2",
      content: "Next.js 13에서 페이지 라우팅이 더 쉬워지는 이유는?",
      likes: 10,
      created_date: "2025-01-20T17:00:00Z",
      is_pinned: true,
      pinned_at: "2025-01-28T03:27:15.011Z"
    },
    {
      id: 3,
      username: "user3",
      content: "Next.js에서 API 라우트를 간단하게 설정하는 방법은?",
      likes: 15,
      created_date: "2025-01-20T17:00:00Z",
      is_pinned: true,
      pinned_at: "2025-01-28T03:02:57.288Z"
    },
    {
      id: 4,
      username: "user4",
      content: "Next.js 13의 SSR과 CSR 차이점은 무엇인가요?",
      likes: 20,
      created_date: "2025-01-20T17:00:00Z",
      is_pinned: false,
      pinned_at: null
    },
    {
      id: 5,
      username: "user5",
      content: "Next.js 13에서 'app' 디렉토리를 활용한 새로운 기능은?",
      likes: 25,
      created_date: "2025-01-20T17:00:00Z",
      is_pinned: false,
      pinned_at: null
    },
    {
      id: 6,
      username: "user6",
      content: "Next.js 13에서 데이터 패칭을 최적화하는 방법은?",
      likes: 30,
      created_date: "2025-01-20T17:00:00Z",
      is_pinned: false,
      pinned_at: null
    },
    {
      id: 7,
      username: "user7",
      content: "Next.js에서 이미지 최적화가 중요한 이유는 무엇인가요?",
      likes: 35,
      created_date: "2025-01-20T17:00:00Z",
      is_pinned: false,
      pinned_at: null
    },
    {
      id: 8,
      username: "user8",
      content: "Next.js 13의 동적 라우팅 설정 방법에 대해 설명해주세요.",
      likes: 40,
      created_date: "2025-01-20T17:00:00Z",
      is_pinned: false,
      pinned_at: null
    },
    {
      id: 9,
      username: "user9",
      content: "Next.js에서 성능 최적화를 위해 권장되는 방법은?",
      likes: 45,
      created_date: "2025-01-20T17:00:00Z",
      is_pinned: false,
      pinned_at: null
    },
    {
      id: 10,
      username: "user10",
      content: "Next.js 13에서 'use client' 선언의 의미는 무엇인가요?",
      likes: 50,
      created_date: "2025-01-20T17:00:00Z",
      is_pinned: false,
      pinned_at: null
    }
  ]


export default function ChatArea() {
    const sortedChats = chats.sort((a, b) => {
      return new Date(b.created_date).getTime() - new Date(a.created_date).getTime()
    })

    return (
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {sortedChats.map((chat) => (
          <div key={chat.id} className="flex flex-col gap-1">
            <div className="flex items-start gap-2">
              <div className={`chat-bubble ${
                chat.is_pinned ? "chat-bubble-green" : "chat-bubble-gray"
              }`}>
                <span className="font-bold">{chat.username}</span>
                <p>{chat.content}</p>
                <div className="text-xs text-gray-500 mt-1">
                  {new Date(chat.created_date).toLocaleString()}
                </div>
              </div>
              {/* like */}
              <button className="mt-2 flex items-center">
                <span className="text-xs text-gray-500">{chat.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }