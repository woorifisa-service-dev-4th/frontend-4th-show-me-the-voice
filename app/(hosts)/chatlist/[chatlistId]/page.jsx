import React, {Suspense} from "react";
import {SkeletonLoader} from "@/app/ui/skeletons";
import {CardWrapper} from "@/app/ui/(host)/chatlist/Cards";
import {ChatListHeader} from "@/app/ui/(host)/chatlist/Header";

export default function Page() {
    return (
        <>
            <ChatListHeader/>
            <Suspense fallback={<SkeletonLoader/>}>
                <CardWrapper/>
            </Suspense>
        </>
    );
}