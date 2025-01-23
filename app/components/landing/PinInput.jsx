import { useState } from "react";

export function PinInput() {
  // PIN 값을 관리하는 상태 (배열로 여러 개의 입력값을 관리)
  const [pin, setPin] = useState(["", "", "", ""]);

  // 입력값 변경 함수
  const handleChange = (e, index) => {
    const newPin = [...pin];
    newPin[index] = e.target.value.slice(0, 1); // 한 자릿수만 입력되도록
    setPin(newPin);

    // 입력 후 자동으로 다음 입력으로 포커스를 이동
    if (e.target.value.length === 1 && index < 3) {
      document.getElementById(`pin-input-${index + 1}`).focus();
    }
  };

  // 키보드 입력시 포커스를 이동하는 함수
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && pin[index] === "") {
      document.getElementById(`pin-input-${index - 1}`).focus();
    }
  };

  // 제출 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    const pinCode = pin.join(""); // 배열을 문자열로 변환
    alert(`입력한 PIN: ${pinCode}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="flex space-x-2 mb-4">
        {pin.map((value, index) => (
          <input
            key={index}
            id={`pin-input-${index}`}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center text-xl border border-gray-400 rounded-md"
            autoFocus={index === 0} // 첫 번째 입력 필드에 포커스를 자동으로 설정
          />
        ))}
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        제출
      </button>
    </form>
  );
}
