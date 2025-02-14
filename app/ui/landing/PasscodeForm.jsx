"use client";
import Link from 'next/link'
import { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js의 useRouter 훅 가져오기

export default function PasscodeForm() {
  const router = useRouter(); // useRouter 훅 초기화
  const [code, setCode] = useState(""); // 방 코드 상태 관리
  const [showPasswordInput, setShowPasswordInput] = useState(false); // 비밀번호 입력칸 표시 여부
  const [password, setPassword] = useState(""); // 비밀번호 상태 관리

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (code.trim() !== "") {
      // 코드가 입력되었으면 버튼 숨기고 비밀번호 입력칸 표시
      setShowPasswordInput(true);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.trim() !== "") {
      // 비밀번호가 입력되었으면 chatroom 페이지로 이동
      router.push("/chatroom");
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* 코드 입력 필드 */}
      <form onSubmit={handleCodeSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Room Code"
          className="p-3 border rounded-md w-64"
          disabled={showPasswordInput} // 비밀번호 입력 시 코드 필드 비활성화
        />
        {!showPasswordInput && (
          <button
            type="submit"
            className="bg-button_color text-sub_color p-3 rounded-md hover:bg-sub_color hover:text-white"
          >
            코드 입력
          </button>
        )}
      </form>

      {/* 비밀번호 입력 필드 */}
      {showPasswordInput && (
          <form className="flex flex-col space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Room Password"
            className="p-3 border rounded-md w-64"
          />
          <Link
            href="/chatroom/1"
            className="bg-button_color text-sub_color p-3 rounded-md hover:bg-sub_color hover:text-white text-center"
          >
            비밀번호 입력
          </Link>
        </form>
      )}
    </div>
  );
}
