"use client";

import { Suspense } from "react";
import Card from "@/app/components/Card";

// Skeleton Loader Component
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

export default function Layout() {
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
                    <button className="text-gray-600 hover:text-gray-800">Popular</button>
                    <span>|</span>
                    <button className="text-gray-600 hover:text-gray-800">Recent</button>
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

// Example CardList Component (Replace with your actual logic)
const CardList = () => {
    const cards = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        username: `anonymous ${i + 1}`,
        content: `This is the description for card ${i + 1}`,
    }));

    return (
        <div>
            {cards.map((card) => (
                <Card key={card.id} content={card.content} username={card.username} likes={0}>
                </Card>
            ))}
        </div>
    );
};
