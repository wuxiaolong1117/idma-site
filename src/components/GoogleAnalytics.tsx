"use client";

import Script from "next/script";
import { siteConfig } from "@/config/site";

export default function GoogleAnalytics() {
  const gaId = siteConfig.analytics.googleAnalyticsId;

  if (!gaId) {
    return null;
  }

  return (
    <>
      {/* Google tag (gtag.js) - 放在 head 中以确保 Google 能检测到 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}
