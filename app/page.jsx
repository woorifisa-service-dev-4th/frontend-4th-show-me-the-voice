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
      <div></div>
      <div className="p-4 bg-primary w-full h-full max-w-[375px] max-h-[812px]">
        <Toggle isOn={isToggleOn} onToggle={() => setIsToggleOn(!isToggleOn)} />

        {isToggleOn ? <ContentForm /> : <LoginForm />}
      </div>
    </>
  );
}
