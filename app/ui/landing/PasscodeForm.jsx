"use client";
import { useRouter } from "next/navigation"; // Next.js의 useRouter 훅 가져오기

export default function PasscodeForm() {
  const router = useRouter(); // useRouter 훅 초기화

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    router.push("/chatroom"); // "/guest" 페이지로 이동
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Enter Code"
        className="p-3 border rounded-md w-64"
      />
      <button
        type="submit"
        className="bg-white text-sub_color p-3 rounded-md hover:bg-sub_color hover:text-white"
      >
        코드 입력
      </button>
    </form>
  );
}
