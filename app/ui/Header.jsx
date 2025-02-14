import { ChevronDown } from "lucide-react"


export function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-[#E8F3E8]">
      <div className="flex items-center gap-2">
        <img
           src="/logo.png"
           alt="Logo"
           className="w-14 h-14"
        />
      </div>
      <button className="flex items-center gap-1 text-sm">
        유정호
        <ChevronDown className="w-4 h-4" />
      </button>
    </header>
  )
}

