import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "black"; 
}

export default function Section({
  children,
  className = "",
  id,
  background = "white",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    // Apple off-white for alternating sections
    gray: "bg-[#F5F5F7]", 
    // High contrast black section (e.g. for "Pro" features or footer CTA)
    black: "bg-black text-white", 
  };
  
  // Mapping legacy 'blue' to 'gray' or 'black' if passed, to prevent breaking
  const bgClass = backgrounds[background as keyof typeof backgrounds] || backgrounds.gray;
  
  return (
    <section id={id} className={`py-20 md:py-32 ${bgClass} ${className}`}>
      {children}
    </section>
  );
}
