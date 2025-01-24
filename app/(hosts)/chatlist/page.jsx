import ChatroomCard from "@/app/ui/ChatroomCard";
import { SkeletonLoader } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page() {
    const selectOptions = { popular: 'Popular', recent: 'Recent' };
    return (
        <Suspense fallback={<SkeletonLoader />}>
            <ChatroomCard />
        </Suspense>
    );
}
