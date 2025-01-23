import { Button } from "./Button";

export function Input({ type = "text", placeholder, className }) {
  return (
    <>
      <div className="relative w-full">
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full border border-gray-300 rounded-md px-3 py-2 ${className}`}
        />
        <Button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-2"
        >
          입장
        </Button>
      </div>
    </>
  );
}
