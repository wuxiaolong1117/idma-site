"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Navigation");
  const tHome = useTranslations("HomePage.hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Map href to translation keys
  const getLabel = (href: string) => {
    const key = href.replace("/", "") || "home";
    // Convert camelCase keys from config if needed, or simple mapping
    const map: Record<string, string> = {
      "/product": "product",
      "/solutions": "solutions",
      "/pricing": "pricing",
      "/case-studies": "caseStudies",
      "/partners": "partners",
      "/downloads": "downloads",
      "/support": "support",
      "/about": "about",
      "/contact": "contact"
    };
    return t(map[href] || key);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              aria-label={`${siteConfig.productName} home`}
              className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              <Image
                src="/logo.png"
                alt={`${siteConfig.productName} logo`}
                width={120}
                height={40}
                priority
                className="h-9 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <div className="flex items-center space-x-6 mr-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  {getLabel(item.href)}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3 pl-2 border-l border-gray-200">
              <LanguageSwitcher />
              <Button href="/contact" variant="primary" size="sm">
                {tHome("ctaPrimary")}
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-1">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {getLabel(item.href)}
                </Link>
              ))}
              <div className="pt-4">
                <Button href="/contact" variant="primary" size="sm" className="w-full">
                  {tHome("ctaPrimary")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
