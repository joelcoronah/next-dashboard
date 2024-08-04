"use client";
import React, { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);

  return (
    <div className="flex flex-col items-center justify-center w-full select-none">
      <span className="text-9xl"> {count}</span>
      <div className="flex">
        <button
          className={`flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2
        ${count === 0 ? " bg-gray-600 opacity-50 select-none	" : ""}
        `}
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 select-none	"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
};
