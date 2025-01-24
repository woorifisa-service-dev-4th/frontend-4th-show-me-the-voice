import { Suspense } from "react";
import Card from "@/app/ui/Card";
import DropdownMenuDemo from "@/app/ui/Dropdown";
import { Select } from "@radix-ui/react-select";
import SelectDemo from "@/app/ui/Select";
import { SkeletonLoader } from "@/app/ui/skeletons";
import { fetchHostChatData } from "../../testdata";


export default async function Page() {
    const selectOptions = { popular: 'Popular', recent: 'Recent' };
    const cards = fetchHostChatData();
    return (
        <Suspense fallback={<SkeletonLoader />}>
            {cards.map((card) => (
                <Card key={card.id} content={card.content} username={card.username} likes={0}>
                </Card>
            ))}
        </Suspense>
    );
}
