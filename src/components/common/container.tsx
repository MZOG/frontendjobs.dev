import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto px-5 max-w-5xl", className && className)}>
      {children}
    </div>
  );
}
