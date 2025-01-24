export const SkeletonCard = () => {
    return (
        <div className="p-4 bg-gray-200 rounded-md animate-pulse h-32 w-full mb-4"></div>
    );
};

export const SkeletonLoader = () => {
    return (
        <div>
            {Array.from({ length: 5 }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
};