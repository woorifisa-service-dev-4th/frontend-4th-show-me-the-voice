import React from "react";

import { Header } from "@/app/ui/Header";

export default function HostLayout({ children }) {
  return (
    <>
      <Header />
      <div className="h-screen overflow-y-auto">
        <div className="bg-gray-50 min-h-screen">
          <div className="p-4 ">{children}</div>
        </div>
      </div>
    </>
  );
}
