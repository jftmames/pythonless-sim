"use client";
import React, { useState } from "react";
import CodeView from "./CodeView";
import StateView from "./StateView";
import ExplainCards from "./ExplainCards";
import type { Lesson } from "@/lib/types";

export default function StepRunner({ lesson }: { lesson: Lesson }) {
  const [idx, setIdx] = useState(0);
  const step = lesson.steps[idx];
  const total = lesson.steps.length;
  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(total - 1, i + 1));

  return (
    <div className="grid gap-4">
      <div>
        <h2 className="text-xl font-semibold">{lesson.title}</h2>
        <p className="text-gray-600">{lesson.description}</p>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={prev} className="px-3 py-2 border rounded">
          Anterior
        </button>
        <button onClick={next} className="px-3 py-2 border rounded">
          Siguiente
        </button>
        <span className="text-sm text-gray-600">
          {idx + 1}/{total}
        </span>
      </div>

      <CodeView code={lesson.code} activeLine={step.highlight.line} />
      <ExplainCards
        what={step.what}
        why={step.why}
        appData={step.appData}
        appLaw={step.appLaw}
      />
      <StateView
        globals={step.state.globals}
        stack={step.state.stack}
        io={step.state.io}
      />
    </div>
  );
}

