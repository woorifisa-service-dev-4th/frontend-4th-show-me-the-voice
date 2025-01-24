"use client";

import { Suspense, useState } from "react";
import Card from "@/app/ui/Card";
import DropdownMenuDemo from "@/app/ui/Dropdown";
import { Select } from "@radix-ui/react-select";
import SelectDemo from "@/app/ui/Select";
import TooltipCustom from "@/app/ui/ToolTipCustom";
import Modal from "@/app/ui/Modal";
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
  const selectOptions = { popular: "Popular", recent: "Recent" };
  const [modalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = () => {
    setIsModalOpen(true); // This will open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // This will close the modal
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-10">
        {/* Back Button */}
        <button className="text-gray-600 hover:text-gray-800">
          &larr; Back
        </button>

        <div className="flex items-center space-x-2">
          <SelectDemo defaultValue={"popular"}>{selectOptions}</SelectDemo>
        </div>

        <div className="text-gray-600">10 Questions</div>
      </header>

      <main className="p-4">
        <Suspense fallback={<SkeletonLoader />}>
          <CardList />
        </Suspense>

        {/* <div className="absolute bottom-4 right-4">
          <TooltipCustom onClickAction={openModal} />
        </div>
        {modalOpen && <Modal onClose={closeModal}></Modal>} */}
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
        <Card
          key={card.id}
          content={card.content}
          username={card.username}
          likes={0}
        ></Card>
      ))}
    </div>
  );
};
