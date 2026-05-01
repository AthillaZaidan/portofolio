import { cn } from "@/lib/utils";

interface DarkSurfaceCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function DarkSurfaceCard({
  children,
  className,
  hover = true,
}: DarkSurfaceCardProps) {
  return (
    <div
      className={cn(
        "bg-[#090909] rounded-xl",
        "shadow-[rgba(0,153,255,0.15)_0px_0px_0px_1px]",
        hover &&
          "transition-all duration-200 hover:shadow-[rgba(0,153,255,0.3)_0px_0px_0px_1px] hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}