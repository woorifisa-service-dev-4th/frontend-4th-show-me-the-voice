// @/app/ui/NewModalWrapper.jsx
"use client";
import NewModal from "@/app/ui/NewModal";
import { Plus } from "lucide-react";
import ChatlistForm from "./ChatlistForm";

export default function NewModalWrapper() {
  return (
    <NewModal>
      <NewModal.Open>
        <button className="p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 bg-blue-400">
          <Plus className="w-6 h-6" color="#ffffff" />
        </button>
      </NewModal.Open>
      <NewModal.Dialog>
        <ChatlistForm />
      </NewModal.Dialog>
    </NewModal>
  );
}