import { User } from "lucide-react"

export function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 text-white">
            <h1 className="text-xl font-bold">생생정호통</h1>
            <nav className="flex space-x-4">
                <User size={24} />
            </nav>
        </header>
    )
}

