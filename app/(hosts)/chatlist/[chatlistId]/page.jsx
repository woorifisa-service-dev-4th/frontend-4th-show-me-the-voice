import { Suspense } from "react";
import Card from "@/app/ui/Card";
import DropdownMenuDemo from "@/app/ui/Dropdown";
import { Select } from "@radix-ui/react-select";
import SelectDemo from "@/app/ui/Select";
import { SkeletonLoader } from "@/app/ui/skeletons";
import { fetchHostChatData } from "../../testdata";
import {CardWrapper} from "@/app/ui/Cards";


export default async function Page() {
    const selectOptions = { popular: 'Popular', recent: 'Recent' };
    const cards = fetchHostChatData();
    return (
        <Suspense fallback={<SkeletonLoader />}>
           <CardWrapper/>
        </Suspense>
    );
}
