import type { ComponentProps } from "react";

type ButtonVariant = "default" | "ghost";
type ButtonSize = "default" | "sm";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function buttonVariants({
  variant = "default",
  size = "default",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
} = {}) {
  const variantClass =
    variant === "ghost"
      ? "hover:bg-accent hover:text-accent-foreground"
      : "bg-primary text-primary-foreground hover:bg-primary/90";
  const sizeClass = size === "sm" ? "h-9 px-3" : "h-10 px-4 py-2";

  return `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${variantClass} ${sizeClass}`;
}

export function Button({
  className = "",
  variant,
  size,
  ...props
}: ButtonProps) {
  return <button className={`${buttonVariants({ variant, size })} ${className}`} {...props} />;
}