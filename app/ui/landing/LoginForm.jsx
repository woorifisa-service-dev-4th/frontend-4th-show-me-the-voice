import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // 이메일 검증 함수
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  // 폼 제출 시 이메일 검증
  const handleSubmit = (e) => {
    e.preventDefault();

    // 이메일 검증
    if (!validateEmail(email)) {
      setEmailError("올바른 이메일 주소를 입력해주세요.");
    } else {
      setEmailError(""); // 이메일이 유효한 경우 에러 메시지 초기화
      setFormSubmitted(true); // 폼이 제출되었음을 상태로 관리
    }
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        className="p-3 border rounded-md w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

      <input
        type="password"
        placeholder="Password"
        className="p-3 border rounded-md w-64"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* 폼이 제출되었을 때만 링크 이동 */}
      {formSubmitted ? (
        <Link href="/chatlist">
          <div className="bg-button_color text-white p-3 rounded-md hover:bg-sub_color text-center">
            미팅 열기
          </div>
        </Link>
      ) : (
        <button
          type="submit"
          className="bg-button_color text-white p-3 rounded-md hover:bg-sub_color text-center"
        >
          미팅 열기
        </button>
      )}
    </form>
  );
}
