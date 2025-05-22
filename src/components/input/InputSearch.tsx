"use client";

import clsx from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function InputSearch({
  className,
  placholder,
  onChange,
}: {
  className?: string;
  placholder?: string;
  onChange?: any;
}) {
  return (
    <div className={twMerge(clsx("flex items-center relative", className))}>
      <input
        className="w-full border-0 focus:ring-0 pl-6 pr-10 py-3 bg-gray-100 rounded-xl shadow text-neutral-900 text-md"
        type="text"
        placeholder={placholder}
        onChange={onChange}
      />
      <button
        onClick={() => alert("teest")}
        type="button"
        style={{ backgroundImage: "url(/assets/search.svg)" }}
        className="bg-no-repeat bg-center w-10 h-10 absolute right-2"
      ></button>
    </div>
  );
}

export default InputSearch;
