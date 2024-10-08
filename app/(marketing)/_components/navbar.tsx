"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div className={cn( "z-50 bg-background top-0 flex items-cente w-full p-6", scrolled && "borde-b shadow-sm"",
    )}>
      <p>rolassss</p>
    </div>

  );
};
