import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Partners",
  description: "Join the iDma partner program. Partner with us to bring smart handwriting solutions to more educators and organizations.",
  openGraph: {
    title: "Partners | iDma",
    description: "Join the iDma partner program. Partner with us to bring smart handwriting solutions to more educators and organizations.",
  },
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <Section background="blue">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partner with iDma
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join our partner program and help bring innovative handwriting and interactive 
              learning solutions to schools, tutoring centers, and enterprises worldwide.
            </p>
          </div>
        </Container>
      </Section>

      {/* Who Should Partner */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Should Partner with Us?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-xl font-semibold mb-3">Educational Technology Resellers</h3>
              <p className="text-gray-600 mb-4">
                If you sell educational technology solutions to schools and institutions, 
                iDma can complement your product portfolio and provide additional value to your customers.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">System Integrators</h3>
              <p className="text-gray-600 mb-4">
                Integrate iDma into larger educational or enterprise solutions. We provide 
                APIs and support for custom integrations that meet your clients&apos; specific needs.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Training & Consulting Firms</h3>
              <p className="text-gray-600 mb-4">
                Offer iDma as part of your training and consulting services. Help your 
                clients implement effective remote learning and collaboration solutions.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner Benefits
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <h3 className="text-xl font-semibold mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Access partner pricing that allows you to offer competitive rates while 
                maintaining healthy margins.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Marketing Support</h3>
              <p className="text-gray-600">
                Receive marketing materials, case studies, and co-marketing opportunities 
                to help promote iDma to your customers.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Technical Training</h3>
              <p className="text-gray-600">
                Get comprehensive training on iDma products, deployment options, and 
                integration capabilities to better serve your customers.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Access to partner support channels and resources to help you succeed 
                in selling and implementing iDma solutions.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Onboarding Steps */}
      <Section>
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Become a Partner
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Submit Partner Inquiry",
                description: "Fill out our partner inquiry form to express your interest and provide information about your organization.",
              },
              {
                step: "2",
                title: "Initial Discussion",
                description: "We'll schedule a call to discuss your business model, target markets, and how iDma fits into your offerings.",
              },
              {
                step: "3",
                title: "Partnership Agreement",
                description: "Review and sign the partnership agreement, which outlines terms, pricing, and support levels.",
              },
              {
                step: "4",
                title: "Onboarding & Training",
                description: "Complete partner onboarding, receive training materials, and get access to partner resources and support.",
              },
            ].map((item) => (
              <Card key={item.step} className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 mr-4">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our partner program and how we can work together.
            </p>
            <Link href="/contact?subject=Partnership">
              <Button variant="secondary" size="lg">
                Submit Partner Inquiry
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
