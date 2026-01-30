import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Flexible pricing plans for iDma. Choose from Starter, School, or Enterprise plans to fit your needs.",
  openGraph: {
    title: "Pricing | iDma",
    description: "Flexible pricing plans for iDma. Choose from Starter, School, or Enterprise plans to fit your needs.",
  },
};

export default function PricingPage() {
  const { starter, school, enterprise } = siteConfig.pricing;
  
  return (
    <>
      {/* Hero */}
      <Section background="black">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Choose the plan that fits your needs. All plans include core features with 
              additional capabilities as you scale.
            </p>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Note: Exact pricing may vary by region and deployment option. Contact us for 
              detailed pricing information for your specific requirements.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pricing Cards */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <Card className="relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{starter.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{starter.price}</span>
                  {starter.period && (
                    <span className="text-gray-600 ml-2">{starter.period}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{starter.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {starter.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="outline" className="w-full">
                Get Started
              </Button>
            </Card>

            {/* School - Featured */}
            <Card className="relative border-2 border-blue-600 shadow-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{school.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{school.price}</span>
                  {school.period && (
                    <span className="text-gray-600 ml-2">{school.period}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{school.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {school.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" className="w-full">
                Get Started
              </Button>
            </Card>

            {/* Enterprise */}
            <Card className="relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{enterprise.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{enterprise.price}</span>
                  {enterprise.period && (
                    <span className="text-gray-600 ml-2">{enterprise.period}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{enterprise.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {enterprise.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Additional Info */}
      <Section background="gray">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Pricing?
            </h2>
            <p className="text-gray-600 mb-6">
              Our pricing is designed to be flexible and scalable. We offer discounts for 
              annual commitments, educational institutions, and volume deployments. 
              Enterprise pricing is customized based on your specific requirements, 
              including deployment options, integrations, and support levels.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What&apos;s Included</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Software license</li>
                  <li>• Regular updates</li>
                  <li>• Support (varies by plan)</li>
                  <li>• Training resources</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Additional Options</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hardware recommendations</li>
                  <li>• Custom integrations</li>
                  <li>• Professional services</li>
                  <li>• Extended support</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us for Custom Pricing
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
