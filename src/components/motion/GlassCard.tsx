import * as React from "react";
import { cn } from "@/src/lib/utils";

export function GlassCard({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md",
        "transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
