import type { ComponentProps } from "react";

type BadgeProps = ComponentProps<"span"> & {
  variant?: "default" | "secondary";
};

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variantClass =
    variant === "secondary"
      ? "bg-secondary text-secondary-foreground"
      : "bg-primary text-primary-foreground";

  return (
    <span
      className={`inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold ${variantClass} ${className}`}
      {...props}
    />
  );
}