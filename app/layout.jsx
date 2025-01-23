import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Mobile View Layout",
    description: "A web application with mobile-first layout",
}

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
        <body className={inter.className}>
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-full h-full max-w-[375px] max-h-[812px] bg-white overflow-y-auto shadow-lg">{children}</div>
        </div>
        </body>
        </html>
    )
}

