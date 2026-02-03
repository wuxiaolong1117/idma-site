import { getRequestConfig } from "next-intl/server";

// Explicitly map locales to their files to avoid dynamic import issues in production
const messageImports: Record<string, any> = {
  "en": () => import("./messages/en.json"),
  "es": () => import("./messages/es.json"),
  "fr": () => import("./messages/fr.json"),
  "de": () => import("./messages/de.json"),
  "ja": () => import("./messages/ja.json"),
  "ko": () => import("./messages/ko.json"),
  "zh-cn": () => import("./messages/zh-cn.json"),
  "zh-tw": () => import("./messages/zh-tw.json"),
  "ru": () => import("./messages/ru.json"),
  "ar": () => import("./messages/ar.json"),
};

export default getRequestConfig(async ({ locale }) => {
  // Normalize locale to lowercase to ensure matching (e.g. zh-CN -> zh-cn)
  const normalizedLocale = locale ? locale.toLowerCase() : "en";
  
  // Find the import function, default to English if not found
  const importFn = messageImports[normalizedLocale] || messageImports["en"];
  
  let messages;
  try {
    messages = (await importFn()).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${normalizedLocale}`, error);
    // Fallback to English
    messages = (await messageImports["en"]()).default;
  }

  return {
    messages,
    locale: normalizedLocale
  };
});
