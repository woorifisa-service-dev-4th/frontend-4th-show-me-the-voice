
import React, {Suspense} from "react";
import { CardWrapper } from '@/app/ui/(guest)/chatroom/Cards';
import { SkeletonLoader } from '@/app/ui/skeletons';


export default function ChatRoomPage({params, searchParams}) {
    const chatroomId = params?.chatroomId; // params에서 chatroomId 추출
    console.log("Chatroom ID in page.jsx:", chatroomId); // 값 확인
    return (
        <div>
            <Suspense fallback={<SkeletonLoader/>}>
                <CardWrapper chatroomId={chatroomId} searchParams={searchParams}/>
            </Suspense>
        </div>
    );
};