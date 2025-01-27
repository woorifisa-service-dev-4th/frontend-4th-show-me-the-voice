import Link from "next/link";
import React from "react";

export const ChatListHeader = () => {
    return (
        <>
            <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-10">
                <Link href="/chatlist">
                    <button className="text-gray-600 hover:text-gray-800">
                        &larr; Back
                    </button>
                </Link>
            </header>
            &nbsp;
        </>
    );
};


