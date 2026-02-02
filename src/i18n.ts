import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es", "fr", "de", "ja", "ko", "zh-cn", "zh-tw", "ru", "ar"];

export default getRequestConfig(async ({ locale }) => {
  let messages;
  const normalizedLocale = locale ? locale.toLowerCase() : "en";
  let finalLocale = normalizedLocale;

  try {
    // Try to load the requested locale (normalized to lowercase)
    messages = (await import(`./messages/${normalizedLocale}.json`)).default;
  } catch (error) {
    // If not found or error, fallback to English
    console.error(`Failed to load messages for locale: ${locale}`, error);
    messages = (await import(`./messages/en.json`)).default;
    finalLocale = "en";
  }

  return {
    messages,
    locale: finalLocale as string
  };
});
