'use client'

import ChatroomCard from "@/app/ui/ChatroomCard";
import SelectDemo from "@/app/ui/Select";
import { Suspense } from "react";

const SkeletonCard = () => {
    return (
        <div className="p-4 bg-gray-200 rounded-md animate-pulse h-32 w-full mb-4"></div>
    );
};

const SkeletonLoader = () => {
    return (
        <div>
            {Array.from({ length: 5 }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
};

export default function Page() {
    const selectOptions = { popular: 'Popular', recent: 'Recent'};
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-10">
                {/* Back Button */}
                <button className="text-gray-600 hover:text-gray-800">
                    &larr; Back
                </button>

                {/* Center Sorting Options */}
                <div className="flex items-center space-x-2">
                    <SelectDemo defaultValue={'popular'}>{selectOptions}</SelectDemo>
                </div>

                {/* Question Count */}
                <div className="text-gray-600">10 Questions</div>
            </header>

            {/* Main Content Section */}
            <main className="p-4">
                <Suspense fallback={<SkeletonLoader />}>
                    {/* Replace this with the actual card components */}
                    <CardList />
                </Suspense>
            </main>
        </div>
    );
}

const CardList = () => {
    const cards = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        roomName: `room ${i + 1}`,
        code: (i+1)*1111,
        startDate: 250124+i,
        endDate: 250125+i,
        password: '1234'
    }));

    return (
        <div>
            {cards.map((card) => (
                <ChatroomCard key={card.id}>{card}
                </ChatroomCard>
            ))}
        </div>
    );
};