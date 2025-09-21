import { Step } from "./types";

let counter = 0;

export function makeStep(p: Omit<Step, "index" | "id">): Step {
  return { id: `s${++counter}`, index: counter, ...p };
}

export function resetStepCounter() {
  counter = 0;
}

