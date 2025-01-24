import RootLayout from '@/app/layout';
import React from 'react';

import { Header } from '@/app/ui/Header';

export default function GuestChatroomLayout({ children }) {
    return (
        <>
            <Header />
                <div className="bg-gray-100 min-h-screen">
                    <div className="p-4 ">
                        {children}
                    </div>
                </div>
        </>
    );
}
