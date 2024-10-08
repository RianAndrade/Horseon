"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div
      className="
    max-w-3xl
    space-y-4"
    >
      <h1
        className="
        text-3xl
        sm:text-5xl
        md:text-6xl
        font-bold"
      >
        Suas Ideias, Documentos, e Planos. Unificados, Bem Vindo ao{" "}
        <span className="underline">Horseon</span>
      </h1>
      <h3
        className="
        text-base
        sm:text-xl
        md:text-2xl
        font-medium"
      >
        {" "}
        Horseon is the connected workspaca where <br /> better, faster work
        happens.
      </h3>
      <Button>
        Enter Horse
        <ArrowRight />
      </Button>
    </div>
  );
};
