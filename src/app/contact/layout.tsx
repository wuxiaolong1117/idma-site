import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact iDma international Ltd. Get in touch with our team to learn more about our products and services.",
  openGraph: {
    title: "Contact | iDma",
    description: "Contact iDma international Ltd. Get in touch with our team to learn more about our products and services.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
