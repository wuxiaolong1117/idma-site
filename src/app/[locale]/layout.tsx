import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { siteConfig } from "@/config/site";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

const locales = ["en", "es", "fr", "de", "ja", "ko", "zh-cn", "zh-tw", "ru", "ar"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <GoogleAnalytics />
      </NextIntlClientProvider>
    </>
  );
}
