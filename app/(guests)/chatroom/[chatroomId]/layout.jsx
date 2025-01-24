import React from 'react';

import { Header } from '@/app/ui/Header';
import SubHeader from '@/app/ui/SubHeader';

export default function GuestChatroomLayout({ children }) {

    const selectOptions = { popular: 'Popular', recent: 'Recent'};

    return (
         <>
            <Header />
            <SubHeader selectOptions={selectOptions} />
            <div className="h-screen overflow-y-auto">
                <div className="bg-gray-50 min-h-full">
                    <div className="p-9">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
