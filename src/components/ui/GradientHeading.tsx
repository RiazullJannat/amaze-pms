import * as React from "react";
import { cn } from "@/src/lib/utils";

interface GradientHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function GradientHeading({
  className,
  as: Component = "h2",
  children,
  ...props
}: GradientHeadingProps) {
  return (
    <Component
      className={cn(
        "bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
