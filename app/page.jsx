"use client";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Toggle } from "./components/landing/Toggle";
import { LoginForm } from "./components/landing/LoginForm";
import { ContentForm } from "./components/landing/ContentForm";

export default function Home() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <>
      <div className="p-4 bg-primary w-full h-full max-w-[375px] max-h-[812px] relative">
        <div className="text-white text-3xl mb-6">Slido</div>

        {/* Fixed Toggle Button */}
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 z-10">
          <Toggle
            isOn={isToggleOn}
            onToggle={() => setIsToggleOn(!isToggleOn)}
          />
        </div>

        {/* Content (Forms below the fixed Toggle) */}
        <div className="mt-24 flex items-center justify-center">
          <div className="p-6 rounded-lg w-full max-w-[375px]">
            {/* Forms below the Toggle */}
            {isToggleOn ? <ContentForm /> : <LoginForm />}
          </div>
        </div>
      </div>
    </>
  );
}
