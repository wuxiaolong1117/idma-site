import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  // Apple Style: Pill shape, smooth transitions, tracking tight
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-tight rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Classic Apple Blue Button
    primary: "bg-[#0071E3] text-white hover:bg-[#0077ED] active:scale-95 shadow-sm hover:shadow-md",
    // Light Gray Secondary (e.g. "Learn More")
    secondary: "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]",
    // Outline (White bg, Blue border)
    outline: "border border-[#0071E3] text-[#0071E3] bg-transparent hover:bg-[#0071E3] hover:text-white",
    // Text Link style (Chevron usually added by consumer)
    text: "text-[#0071E3] hover:underline bg-transparent p-0",
  };
  
  const sizes = {
    sm: "px-4 py-1.5 text-sm",     // Compact
    md: "px-6 py-2.5 text-[15px]", // Standard
    lg: "px-8 py-3.5 text-[17px]", // Hero CTA
  };

  // Text variant ignores padding
  const sizeClass = variant === 'text' ? '' : sizes[size];
  
  const classes = `${baseStyles} ${variants[variant]} ${sizeClass} ${className}`;
  
  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
