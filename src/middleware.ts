import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "es", "fr", "de", "ja", "ko", "zh-cn", "zh-tw", "ru", "ar"],

  // Used when no locale matches
  defaultLocale: "en",
  
  // Detects browser language automatically
  localeDetection: true,
});

export const config = {
  // Match all pathnames except for:
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /images, /downloads, /logo.png (static files)
  // - /favicon.ico, /robots.txt (static files)
  matcher: ['/((?!api|_next|_vercel|images|downloads|.*\\..*).*)']
};
