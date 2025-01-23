import { Button } from "./Button";
import { Input } from "./Input";
export function LoginForm() {
  return (
    <div className="flex items-center justify-center  bg-beige">
      <form className="space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="사용자 이름"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          로그인
        </Button>
      </form>
    </div>
  );
}
