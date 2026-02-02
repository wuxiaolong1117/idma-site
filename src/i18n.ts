import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es", "fr", "de", "ja", "ko", "zh-cn", "zh-tw", "ru", "ar"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    // Explicitly return locale to satisfy RequestConfig type
    locale: locale as string
  };
});
