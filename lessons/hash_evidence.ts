import { Lesson } from "@/lib/types";
import { makeStep, resetStepCounter } from "@/lib/builder";

resetStepCounter();

const code = `import hashlib, json
// ... (resto del código de la lección)
print(json.dumps(acta))`;

const lesson: Lesson = {
  title: "Acta de evidencia: generar huella SHA-256 (simulado)",
  description: "Paso a paso de lo que hace Python al calcular y registrar una huella, sin ejecutar Python.",
  code,
  steps: [
    makeStep({
      highlight: { line: 1 },
      code: "import hashlib, json",
      what: "Carga las herramientas para hash y para serializar a JSON.",
      why: "Reutilizas implementaciones probadas; menos errores críticos.",
      appData: "Checksums reproducibles para control de integridad en datasets.",
      appLaw: "Uso de librerías estándar aceptadas en peritajes (hash + acta JSON).",
      state: { globals: { hashlib: "<module>", json: "<module>" }, stack: [] }
    }),
    // ... (todos los demás pasos)
  ]
};

export default lesson;
