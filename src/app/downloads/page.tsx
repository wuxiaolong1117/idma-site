import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Download iDma resources including brochures, datasheets, quick start guides, and IT deployment documentation.",
  openGraph: {
    title: "Downloads | iDma",
    description: "Download iDma resources including brochures, datasheets, quick start guides, and IT deployment documentation.",
  },
};

const downloads = [
  {
    title: "Product Brochure",
    description: "Comprehensive overview of iDma features, use cases, and benefits.",
    file: "/downloads/brochure.pdf",
    size: "2.5 MB",
    type: "PDF",
  },
  {
    title: "Technical Datasheet",
    description: "Detailed technical specifications, system requirements, and compatibility information.",
    file: "/downloads/datasheet.pdf",
    size: "1.8 MB",
    type: "PDF",
  },
  {
    title: "Quick Start Guide",
    description: "Get up and running quickly with step-by-step instructions for first-time users.",
    file: "/downloads/quick-start.pdf",
    size: "1.2 MB",
    type: "PDF",
  },
  {
    title: "IT Deployment Guide",
    description: "Technical documentation for IT administrators covering installation, configuration, and deployment options.",
    file: "/downloads/deployment-guide.pdf",
    size: "3.1 MB",
    type: "PDF",
  },
];

export default function DownloadsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="blue">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Downloads
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Access product brochures, technical documentation, guides, and other resources 
              to help you learn more about iDma.
            </p>
          </div>
        </Container>
      </Section>

      {/* Download Cards */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {downloads.map((download, index) => (
              <Card key={index} hover>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {download.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{download.description}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>{download.type}</span>
                      <span>•</span>
                      <span>{download.size}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={download.file}
                  download
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Download
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Additional Resources */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need More Information?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              If you need additional resources or have questions about any of our materials, 
              please don&apos;t hesitate to contact us.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
