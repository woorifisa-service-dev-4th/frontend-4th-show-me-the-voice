import React, {Suspense} from "react";
import {SkeletonLoader} from "@/app/ui/skeletons";
import {CardWrapper} from "@/app/ui/(host)/chatlist/Cards";
import {ChatListHeader} from "@/app/ui/(host)/chatlist/Header";

export default async function Page({ params }) {
    const {chatlistId} = await params;

    return (
        <>
            <ChatListHeader/>
            <Suspense fallback={<SkeletonLoader/>}>
                <CardWrapper chatroomId={chatlistId}/>
            </Suspense>
        </>
    );
}