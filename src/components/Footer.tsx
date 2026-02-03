import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{siteConfig.companyName}</h3>
            <p className="text-sm mb-4">{siteConfig.tagline}</p>
            <div className="space-y-2 text-sm">
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.city}, {siteConfig.address.postcode}</p>
              <p>{siteConfig.address.country}</p>
              <p>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  {siteConfig.contactEmail}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>
          
          {/* Products & Solutions */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              {t("columns.products")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/product" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  {t("links.product")}
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  {t("links.solutions")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  {t("links.pricing")}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  {t("links.caseStudies")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              {t("columns.resources")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/partners" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  {t("links.partners")}
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  {t("links.downloads")}
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  {t("links.support")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  {t("links.about")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal & Social */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              {t("columns.legal")}
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  {t("links.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  {t("links.terms")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  {t("links.contact")}
                </Link>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              )}
              {siteConfig.social.x && (
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} {siteConfig.companyName}. {t("rights")}</p>
          <p className="text-gray-600 text-xs mt-2">Locale: {locale}</p>
        </div>
      </div>
    </footer>
  );
}
