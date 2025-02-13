
import  ChatArea  from "../ui/ChatArea"
import ChatInput from "../ui/ChatInput"

import { Header } from "../ui/Header"


export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ChatArea />
      <ChatInput />
    </div>
  )
}

