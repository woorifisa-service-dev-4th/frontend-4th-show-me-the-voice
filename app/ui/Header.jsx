import { Bell, Home, Search, User } from "lucide-react"

export function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
            <h1 className="text-xl font-bold">SocialFeed</h1>
            <nav className="flex space-x-4">
                <Home size={24} />
                <Search size={24} />
                <Bell size={24} />
                <User size={24} />
            </nav>
        </header>
    )
}

