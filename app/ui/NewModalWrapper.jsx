// @/app/ui/NewModalWrapper.jsx
"use client";
import NewModal from "@/app/ui/NewModal";
import { Plus } from "lucide-react";
import ChatlistForm from "./ChatlistForm";

export default function NewModalWrapper() {
  return (
    <NewModal>
      <NewModal.Open>
        <div className="flex justify-end">
          <button className="fixed bottom-7 z-30 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 highlight-green">
            <Plus className="w-6 h-6" color="#ffffff" />
          </button>
        </div>
      </NewModal.Open>
      <NewModal.Dialog>
        <ChatlistForm />
      </NewModal.Dialog>
    </NewModal>
  );
}