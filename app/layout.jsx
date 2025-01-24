import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  languages: "ko",
  title: "Mobile View Layout",
  description: "A web application with mobile-first layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Theme appearance={"light"} scaling={"0%"}>
          <div className="min-h-screen bg-gray-100 ">
            <div className="flex items-center justify-center h-screen bg-beige ">
              <div className="w-full h-full min-w-[375px] max-w-[475px] max-h-[812px] bg-white shadow-lg custom-scroll">
                {children}
              </div>
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
