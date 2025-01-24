"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable"; // 스와이프 기능 추가
import LoginForm from "./ui/landing/LoginForm";
import PasscodeForm from "./ui/landing/PasscodeForm";
import Modal from "./ui/Modal";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

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
      className="min-h-screen flex flex-col items-center justify-center pt-20 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400"
    >
      <div></div>
      <main className="flex flex-col items-center space-y-10">
        <div className="absolute top-10 left-0 right-0 p-4 text-center">
          <h1 className="text-3xl font-bold text-white">Slido</h1>
        </div>

        <div>
          {/* 상태에 따라 LoginForm 또는 PasscodeForm 표시 */}
          {!isLogin ? <LoginForm /> : <PasscodeForm />}
        </div>

        {/* 하단 화살표 스와이프 유도 메시지 */}
        <div className="absolute bottom-10 text-center text-gray-600 animate-bounce text-white">
          {isLogin ? (
            <>
              <p>미팅을 열고 싶으신가요?</p>
              <p>왼쪽으로 스와이프하세요 →</p>
            </>
          ) : (
            <>
              <p>미팅에 참여하고 싶으신가요?</p>
              <p>← 오른쪽으로 스와이프하세요</p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
