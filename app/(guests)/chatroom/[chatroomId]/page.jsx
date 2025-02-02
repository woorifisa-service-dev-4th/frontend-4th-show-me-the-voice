
import React, {Suspense} from "react";
import  CardWrapper  from '@/app/ui/(guest)/chatroom/Cards';
import { SkeletonLoader } from '@/app/ui/skeletons';


export default async function ChatRoomPage({params}) {
    const {chatroomId} = await params;
    return (
        <div>
            <Suspense fallback={<SkeletonLoader/>}>
                <CardWrapper chatroomId={chatroomId}/>
            </Suspense>
        </div>
    );
};