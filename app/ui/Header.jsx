import { User } from "lucide-react"
import Image from "next/image"

export function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 text-white">
            <div className="flex items-center space-x-2">
                <Image src="/logo.png" width={100} height={100} alt="logo" />
            </div>
            <nav className="flex space-x-4">
                <User size={24} />
            </nav>
        </header>
    )
}

