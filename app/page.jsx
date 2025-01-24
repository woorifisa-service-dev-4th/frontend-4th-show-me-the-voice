import Card from "./ui/Card"
import { Header } from "./ui/Header"


export default function Home() {
    return (
        <main className="bg-gray-100 min-h-screen">
            <Header />
            <div className="p-4">
                <Card
                    username="김철수"
                    content="오늘 날씨가 정말 좋네요! 여러분은 어떻게 보내고 계신가요?"
                    likes={15}
                    comments={3}
                />
                <Card username="이영희" content="새로운 프로젝트를 시작했어요. 너무 신나고 기대돼요!" likes={24} comments={7} />
                <Card
                    username="박지민"
                    content="주말에 가족들과 함께 등산 다녀왔어요. 정말 좋은 시간이었습니다."
                    likes={32}
                    comments={12}
                />
                  <Card
                    username="박지민"
                    content="주말에 가족들과 함께 등산 다녀왔어요. 정말 좋은 시간이었습니다."
                    likes={32}
                    comments={12}
                />
                 <Card
                    username="박지민"
                    content="주말에 가족들과 함께 등산 다녀왔어요. 정말 좋은 시간이었습니다."
                    likes={32}
                    comments={12}
                />
                 <Card
                    username="박지민"
                    content="주말에 가족들과 함께 등산 다녀왔어요. 정말 좋은 시간이었습니다."
                    likes={32}
                    comments={12}
                />
                 <Card
                    username="박지민"
                    content="주말에 가족들과 함께 등산 다녀왔어요. 정말 좋은 시간이었습니다."
                    likes={32}
                    comments={12}
                />
            </div>
        </main>
    )
}

