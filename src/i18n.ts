import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es", "fr", "de", "ja", "ko", "zh-cn", "zh-tw", "ru", "ar"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // If undefined (during build), fallback to 'en' to prevent crash
  const safeLocale = locales.includes(locale as any) ? locale : "en";

  return {
    messages: (await import(`./messages/${safeLocale}.json`)).default,
    // Explicitly return locale to satisfy RequestConfig type
    locale: safeLocale as string
  };
});
