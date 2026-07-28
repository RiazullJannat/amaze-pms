import * as React from "react";
import { cn } from "@/src/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export function Section({ className, container = true, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 md:py-32 overflow-hidden", className)} {...props}>
      {container ? (
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
