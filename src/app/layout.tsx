import "./globals.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.productName,
  description: siteConfig.description,
};

// This is the TRUE Root Layout. It handles HTML/BODY for EVERY page.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
