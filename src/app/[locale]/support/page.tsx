"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Card from "@/components/Card";
import FAQ from "@/components/FAQ";
import Button from "@/components/Button";

const supportSections = [
  {
    title: "Getting Started",
    description: "New to iDma? Start here to learn the basics and set up your first session.",
    links: [
      { text: "Quick Start Guide", href: "/downloads" },
      { text: "System Requirements", href: "/product" },
      { text: "Installation Instructions", href: "/downloads" },
    ],
  },
  {
    title: "Troubleshooting",
    description: "Common issues and solutions to help you resolve problems quickly.",
    links: [
      { text: "Connection Issues", href: "#" },
      { text: "Sync Problems", href: "#" },
      { text: "Device Compatibility", href: "#" },
    ],
  },
  {
    title: "Firmware & Software Updates",
    description: "Stay up to date with the latest features and improvements.",
    links: [
      { text: "Update Instructions", href: "#" },
      { text: "Release Notes", href: "#" },
      { text: "Version History", href: "#" },
    ],
  },
  {
    title: "Warranty & Returns",
    description: "Information about warranty coverage and return policies.",
    links: [
      { text: "Warranty Terms", href: "#" },
      { text: "Return Policy", href: "#" },
      { text: "RMA Process", href: "#" },
    ],
  },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredFAQs = siteConfig.faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <>
      {/* Hero */}
      <Section background="black">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Find answers to common questions, access documentation, and get help when you need it.
            </p>
          </div>
        </Container>
      </Section>

      {/* Support Sections */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {supportSections.map((section, index) => (
              <Card key={index} hover>
                <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-blue-600 hover:text-blue-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      >
                        {link.text} →
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Searchable FAQ */}
      <Section background="gray">
        <Container size="md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search frequently asked questions"
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-gray-600">
                Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
          <FAQ items={filteredFAQs.length > 0 ? filteredFAQs : siteConfig.faqs} />
        </Container>
      </Section>

      {/* Contact Support */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our support team is here to assist you. Contact us and we&apos;ll get back to you as soon as possible.
            </p>
            <Button href="/contact?subject=Support" variant="primary" size="lg">
              Contact Support
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
