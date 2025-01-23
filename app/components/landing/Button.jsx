export function Button({ type = "button", className, children, onClick }) {
  return (
    <button
      type={type}
      className={`px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
