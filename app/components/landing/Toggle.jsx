export function Toggle({ isOn, onToggle }) {
  return (
    <div className="flex items-center justify-center m-[10px]">
      <button
        className={`w-10 h-5 rounded-full ${
          isOn ? "bg-secondary" : "bg-gray-400"
        }`}
        onClick={onToggle}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
            isOn ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </button>
    </div>
  );
}
