import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const baseStyles = "bg-white rounded-lg shadow-md p-6 border border-gray-200";
  const hoverStyles = hover ? "transition-shadow hover:shadow-lg" : "";
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
