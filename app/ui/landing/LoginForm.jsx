export default function LoginForm() {
  return (
    <form className="flex flex-col space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="p-3 border rounded-md w-64"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-3 border rounded-md w-64"
      />
      <button className="bg-sub_color text-white p-3 rounded-md hover:bg-sub_color">
        미팅 열기
      </button>
    </form>
  );
}
