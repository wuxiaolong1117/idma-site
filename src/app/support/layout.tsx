import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get support for iDma. Find answers to common questions, access documentation, and contact our support team.",
  openGraph: {
    title: "Support | iDma",
    description: "Get support for iDma. Find answers to common questions, access documentation, and contact our support team.",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
