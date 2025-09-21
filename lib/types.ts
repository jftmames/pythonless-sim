export type Frame = {
  function: string;
  locals: Record<string, string>;
};

export type Step = {
  id: string;
  index: number;
  highlight: { line: number; colStart?: number; colEnd?: number };
  code: string;
  what: string;
  why: string;
  appData: string;
  appLaw: string;
  state: {
    globals?: Record<string, string>;
    stack?: Frame[];
    io?: { out?: string[]; log?: string[] };
  };
  notes?: string;
};

export type Lesson = {
  title: string;
  description: string;
  code: string;
  steps: Step[];
};

