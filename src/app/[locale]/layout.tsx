import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { siteConfig } from "@/config/site";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.productName,
    template: `%s | ${siteConfig.productName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords as unknown as string[],
  authors: [{ name: siteConfig.companyName }],
  creator: siteConfig.companyName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.websiteUrl,
    siteName: siteConfig.productName,
    title: siteConfig.productName,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.websiteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.productName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.productName,
    description: siteConfig.description,
    images: [`${siteConfig.websiteUrl}/og-image.png`],
    creator: "@idma",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/your-kit-id.css" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <GoogleAnalytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
