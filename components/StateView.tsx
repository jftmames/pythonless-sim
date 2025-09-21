"use client";
import React from "react";
import type { Frame } from "@/lib/types";

function KV({ obj }: { obj: Record<string, string> | undefined }) {
  if (!obj || !Object.keys(obj).length)
    return <div className="text-gray-500">—</div>;
  return (
    <table className="w-full text-xs border">
      <tbody>
        {Object.entries(obj).map(([k, v]) => (
          <tr key={k} className="border-t">
            <td className="p-2 font-mono align-top w-40">{k}</td>
            <td className="p-2 font-mono break-all">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function StateView({
  globals,
  stack,
  io,
}: {
  globals?: Record<string, string>;
  stack?: Frame[];
  io?: { out?: string[]; log?: string[] };
}) {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      <div className="border rounded-2xl p-3">
        <div className="text-xs uppercase text-gray-500 mb-1">Variables</div>
        <KV obj={globals} />
      </div>
      <div className="border rounded-2xl p-3">
        <div className="text-xs uppercase text-gray-500 mb-1">
          Pila de llamadas
        </div>
        {!stack?.length ? (
          <div className="text-gray-500">—</div>
        ) : (
          <ul className="text-xs font-mono">
            {stack.map((f, i) => (
              <li key={i}>
                #{i + 1} {f.function}({Object.keys(f.locals || {}).join(", ")})
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="border rounded-2xl p-3">
        <div className="text-xs uppercase text-gray-500 mb-1">IO / Logs</div>
        <div className="text-xs font-mono whitespace-pre-wrap">
          {(io?.out || []).map((x, i) => (
            <div key={i}>{x}</div>
          ))}
          {(io?.log || []).map((x, i) => (
            <div key={"l" + i} className="text-gray-600">
              {x}
            </div>
          ))}
          {!((io?.out?.length || 0) + (io?.log?.length || 0)) && (
            <div className="text-gray-500">—</div>
          )}
        </div>
      </div>
    </div>
  );
}

