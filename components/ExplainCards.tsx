"use client";
import React from "react";

export default function ExplainCards({
  what,
  why,
  appData,
  appLaw,
}: {
  what: string;
  why: string;
  appData: string;
  appLaw: string;
}) {
  const Card = ({ title, children }: { title: string; children: any }) => (
    <div className="border rounded-2xl p-3">
      <div className="text-xs uppercase text-gray-500 mb-1">{title}</div>
      <div className="text-sm">{children}</div>
    </div>
  );
  return (
    <div className="grid md:grid-cols-4 gap-3">
      <Card title="Qué hace">{what}</Card>
      <Card title="Por qué importa">{why}</Card>
      <Card title="Aplicación en Datos">{appData}</Card>
      <Card title="Aplicación en Derecho">{appLaw}</Card>
    </div>
  );
}

