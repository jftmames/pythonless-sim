"use client";
import React from "react";

export default function CodeView({
  code,
  activeLine,
}: {
  code: string;
  activeLine: number;
}) {
  return (
    <pre className="bg-gray-50 p-3 rounded border overflow-auto text-sm leading-6">
      {code.split("\n").map((ln, i) => {
        const n = i + 1;
        const active = n === activeLine;
        return (
          <div key={i} className={active ? "bg-yellow-100" : undefined}>
            <span className="text-gray-400 select-none pr-3 w-8 inline-block text-right">
              {n}
            </span>
            <code>{ln || " "}</code>
          </div>
        );
      })}
    </pre>
  );
}

