import { forwardRef, type ReactNode, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface DarkSurfaceCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export const DarkSurfaceCard = forwardRef<HTMLDivElement, DarkSurfaceCardProps>(
  function DarkSurfaceCard({ children, className, hover = true, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[#090909] rounded-xl",
          "shadow-[rgba(0,153,255,0.15)_0px_0px_0px_1px]",
          hover &&
            "transition-all duration-200 hover:shadow-[rgba(0,153,255,0.3)_0px_0px_0px_1px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
