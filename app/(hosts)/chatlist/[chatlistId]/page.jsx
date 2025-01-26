import {Suspense} from "react";
import {SkeletonLoader} from "@/app/ui/skeletons";
import {CardWrapper} from "@/app/ui/Cards";


export default function Page() {
    return (
        <Suspense fallback={<SkeletonLoader/>}>
            <CardWrapper />
        </Suspense>
    );
}
