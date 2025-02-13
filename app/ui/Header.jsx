import { ChevronDown } from "lucide-react"


export function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-[#E8F3E8]">
      <div className="flex items-center gap-2">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dIhl4ybl3VHY2MxHEuuK8TW6sZaKt1.png"
          alt="Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <span className="text-sm">채팅룸페이지</span>
      </div>
      <button className="flex items-center gap-1 text-sm">
        유정호
        <ChevronDown className="w-4 h-4" />
      </button>
    </header>
  )
}

