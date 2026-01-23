import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "See how schools, tutoring centers, and enterprises are using iDma to improve teaching and training outcomes.",
  openGraph: {
    title: "Case Studies | iDma",
    description: "See how schools, tutoring centers, and enterprises are using iDma to improve teaching and training outcomes.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="blue">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Discover how educational institutions and organizations are using iDma to 
              enhance their teaching and training programs.
            </p>
          </div>
        </Container>
      </Section>

      {/* Case Study Cards */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.caseStudies.map((study) => (
              <Card key={study.slug} hover className="flex flex-col">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {study.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{study.excerpt}</p>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <p className="text-sm font-semibold text-blue-600 mb-1">Key Outcome:</p>
                  <p className="text-sm text-gray-700">{study.outcome}</p>
                  <p className="text-xs text-gray-500 mt-2">{study.location}</p>
                </div>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Read Full Case Study
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to See Similar Results?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how iDma can help your organization achieve better outcomes.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              {siteConfig.cta.primary}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
