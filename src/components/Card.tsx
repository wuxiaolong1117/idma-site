import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  // Apple Style: Large radius, subtle border/shadow, white bg
  // Note: 'card-apple' utility class in globals.css handles most of this now, 
  // but we keep base classes here for flexibility if not using the utility.
  
  const baseStyles = "bg-white rounded-3xl p-0 border border-gray-100 shadow-sm overflow-hidden";
  const hoverStyles = hover ? "transition-all duration-500 hover:shadow-md hover:-translate-y-1" : "";
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
