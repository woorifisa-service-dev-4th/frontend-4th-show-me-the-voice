"use client";

import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable"; // 스와이프 기능 추가
import LoginForm from "./ui/landing/LoginForm";
import PasscodeForm from "./ui/landing/PasscodeForm";
import localIcon from "../public/images/logo.png";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  // 스와이프 이벤트 핸들러
  const handlers = useSwipeable({
    onSwipedLeft: () => setIsLogin(false), // 왼쪽으로 스와이프하면 PasscodeForm 표시
    onSwipedRight: () => setIsLogin(true), // 오른쪽으로 스와이프하면 LoginForm 표시
    preventScrollOnSwipe: true, // 스와이프 중 기본 스크롤 방지
    trackMouse: true, // 마우스 드래그로도 스와이프 가능
  });

  return (
    <div
      {...handlers} // 스와이프 이벤트 바인딩
      className="min-h-screen flex flex-col items-center justify-center pt-14 bg-gradient-to-r from-green-100 via-green-200 to-green-300"
    >
      <main className="flex flex-col justify-between items-center w-full h-screen py-10">
        {/* 상단 로고 */}
        <div className="text-center my-2">
          {" "}
          {/* 여백 조정 */}
          <Image src={localIcon} alt="Logo" width={150} height={50} />
        </div>

        {/* 상태에 따라 LoginForm 또는 PasscodeForm 표시 */}
        <div className="flex-1 flex items-center justify-center w-full">
          {isLogin ? <LoginForm /> : <PasscodeForm />}
        </div>

        {/* 하단 화살표 스와이프 유도 메시지 */}
        <div className="text-center text-white animate-bounce my-10">
          {/* 여백 조정 */}
          <p>
            {!isLogin
              ? "미팅을 열고 싶으신가요?"
              : "미팅에 참여하고 싶으신가요?"}
          </p>
          <p>
            {isLogin
              ? "왼쪽으로 스와이프하세요 →"
              : "← 오른쪽으로 스와이프하세요"}
          </p>
        </div>
      </main>
    </div>
  );
}
