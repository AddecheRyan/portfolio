"use client";

import { useState } from "react";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ryanaddeche43@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
    <span className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block rounded bg-gray-300 px-3 py-1 text-sm whitespace-nowrap">
        {"ryanaddeche43@gmail.com"}
      </span>
      <button onClick={handleCopy} className="flex items-center cursor-pointer">
        <img src="email.svg" alt="email" className="w-12 h-12" />
      </button>
      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-8 hidden group-hover:block rounded bg-gray-300 px-3 py-1 text-sm whitespace-nowrap">
        {copied ? "Copied!" : "click icon to copy email"}
      </span>
    </div>
  );
}