import { Lesson } from "@/lib/types";
import { makeStep, resetStepCounter } from "@/lib/builder"; // <-- ¡ESTA LÍNEA LO SOLUCIONA!

resetStepCounter();

const code = `dificultad = 3
nonce = 0
hash = ""
while not hash.startswith("0"*dificultad):
    nonce += 1
    # hash = sha256(cabecera + str(nonce)).hexdigest()  # simulado
    hash = "0" * (nonce == 3 ? 3 : 2) + "abc"         # hack didáctico
print("Bloque minado con nonce", nonce)`;

const lesson: Lesson = {
  title: "Prueba de Trabajo: encontrar nonce (simulado)",
  description: "Visualiza el bucle que busca un hash con prefijo de ceros, sin SHA real.",
  code,
  steps: [
    makeStep({
      highlight: { line: 1 },
      code: "dificultad = 3",
      what: "Fija la dificultad.",
      why: "Controla el coste de minado.",
      appData: "Regula throughput.",
      appLaw: "Impacto energético y legal.",
      state: { globals: { dificultad: "3" } },
    }),
    makeStep({
      highlight: { line: 2 },
      code: "nonce = 0",
      what: "Inicia contador de nonce.",
      why: "Parámetro que se prueba.",
      appData: "Búsqueda incremental.",
      appLaw: "Prueba del esfuerzo.",
      state: { globals: { nonce: "0" } },
    }),
    makeStep({
      highlight: { line: 7 },
      code: "print(...)",
      what: "Muestra nonce encontrado.",
      why: "Indica éxito.",
      appData: "Telemetría.",
      appLaw: "Registro probatorio.",
      state: { io: { out: ["Bloque minado con nonce 3"] } },
    }),
  ],
};
export default lesson;
