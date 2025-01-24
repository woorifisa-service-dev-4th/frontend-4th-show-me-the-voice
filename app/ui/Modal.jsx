import React from "react";

const Modal = ({ children, onClose }) => {
  const handleBackdropClick = () => {
    onClose(); // 모달을 닫는 함수 호출
  };

  return (
    <>
      <div
        data-cy="modal-backdrop"
        className="fixed top-0 left-0 w-full h-full backdrop-blur-md z-1"
        onClick={handleBackdropClick}
      ></div>

      <div className="fixed z-10 w-64 h-64 p-8 m-0 transform -translate-x-1/2 -translate-y-1/2 border-none rounded-lg shadow-xl top-1/2 left-1/2 bg-white">
        {children}
      </div>
    </>
  );
};

export default Modal;
