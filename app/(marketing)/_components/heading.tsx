"use client";

import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Horse
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton>
          <Button>
            Get Horseon free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
