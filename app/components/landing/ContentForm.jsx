import { useState } from "react";
import { PinInput } from "./PinInput";

export function ContentForm() {
  // 상태 정의 (입장 코드와 입력값 상태)
  const [value, setValue] = useState(["", "", "", ""]);
  const [entryCode, setEntryCode] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 상태

  // 입장 코드 검증 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    const validCode = "1234"; // 예시로 설정한 입장 코드 (서버에서 검증할 수도 있음)

    if (entryCode === validCode) {
      alert("입장 성공!");
      // 입장 후 동작 (예: 다른 페이지로 리디렉션 등)
    } else {
      setErrorMessage("입장 코드가 잘못되었습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* 가로로 배치하기 위해 flex 사용 */}

        <div className="flex items-center justify-center">
          {" "}
          <PinInput
            variant="filled"
            size="lg"
            value={value}
            onValueChange={(e) => setValue(e.value)}
          />
        </div>

        {/* 오류 메시지 표시 */}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      </form>
    </>
  );
}
