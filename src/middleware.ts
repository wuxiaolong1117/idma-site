import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "es", "fr", "de", "ja", "ko", "zh-CN", "zh-TW", "ru", "ar"],

  // Used when no locale matches
  defaultLocale: "en",
  
  // Detects browser language automatically
  localeDetection: true,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|es|fr|de|ja|ko|zh-CN|zh-TW|ru|ar)/:path*"],
};
