import StepRunner from "@/components/StepRunner";
import hash from "@/lessons/hash_evidence";
import pow from "@/lessons/pow_nonce";
import mempool from "@/lessons/mempool_queue";

export default function Page() {
  const lessons = [hash, pow, mempool];
  return (
    <main className="max-w-5xl mx-auto p-6 grid gap-6">
      <h1 className="text-2xl font-bold">Simulador Pythonless</h1>
      <p className="text-gray-600">Aprende qué hace Python al ejecutar código… sin ejecutar Python.</p>
      {lessons.map((l, i) => (
        <section key={i} className="border rounded-2xl p-4">
          <StepRunner lesson={l} />
        </section>
      ))}
    </main>
  );
}
