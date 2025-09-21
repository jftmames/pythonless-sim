import { Lesson } from "@/lib/types";
import { makeStep, resetStepCounter } from "@/lib/builder"; // <-- Línea necesaria

resetStepCounter();

const code = `mempool = []
mempool.append({"id":1,"fee":120})
mempool.append({"id":2,"fee":80})
next_tx = mempool.pop(0)
print(next_tx)`;

const lesson: Lesson = {
  title: "Mempool (cola de transacciones)",
  description: "Simulación de cómo se manejan transacciones pendientes.",
  code,
  steps: [
    makeStep({
      highlight: { line: 1 },
      code: "mempool = []",
      what: "Crea lista vacía de transacciones.",
      why: "Acumula las pendientes.",
      appData: "Buffer de eventos.",
      appLaw: "Orden de llegada importa.",
      state: { globals: { mempool: "[]" } },
    }),
    makeStep({
      highlight: { line: 2 },
      code: 'mempool.append({"id":1,"fee":120})',
      what: "Añade transacción con fee 120.",
      why: "Registrar en la cola.",
      appData: "Back-pressure.",
      appLaw: "Trazabilidad.",
      state: { globals: { mempool: '[{"id":1,"fee":120}]' } },
    }),
     makeStep({
      highlight: { line: 3 },
      code: 'mempool.append({"id":2,"fee":80})',
      what: "Añade transacción con fee 80.",
      why: "Registrar en la cola.",
      appData: "Back-pressure.",
      appLaw: "Trazabilidad.",
      state: { globals: { mempool: '[{"id":1,"fee":120}, {"id":2,"fee":80}]' } },
    }),
    makeStep({
      highlight: { line: 4 },
      code: "next_tx = mempool.pop(0)",
      what: "Saca el primer elemento de la cola.",
      why: "Procesar en orden de llegada (FIFO).",
      appData: "Scheduler simple.",
      appLaw: "Prioridad temporal.",
      state: { globals: { mempool: '[{"id":2,"fee":80}]', next_tx: '{"id":1,"fee":120}' } },
    }),
    makeStep({
      highlight: { line: 5 },
      code: "print(next_tx)",
      what: "Muestra la siguiente transacción.",
      why: "Ejecución del scheduler.",
      appData: "Logs.",
      appLaw: "Transparencia de mempool.",
      state: { io: { out: ['{"id":1, "fee":120}'] } },
    }),
  ],
};

export default lesson;
