import { useRef } from "react";
export default function Square({ value, onSquareClick, number, finalHand }) {
  const buttonRef = useRef(null);
  if (number === finalHand) {
    console.log("this is final");
    buttonRef.current.style.background = "pink";
  }
  return (
    <>
      <button
        ref={buttonRef}
        onClick={onSquareClick}
        className="bg-gray-500 hover:bg-gray-200 text-white px-4 py-2 "
      >
        {value}
      </button>
    </>
  );
}
