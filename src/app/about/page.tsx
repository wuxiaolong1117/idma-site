import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about iDma international Ltd and our mission to enhance interactive learning and collaboration.",
  openGraph: {
    title: "About | iDma",
    description: "Learn about iDma international Ltd and our mission to enhance interactive learning and collaboration.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section background="blue">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About {siteConfig.companyName}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We&apos;re dedicated to enhancing interactive learning and collaboration through 
              innovative handwriting capture technology.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section>
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At {siteConfig.companyName}, we believe that handwriting plays a valuable role 
              in learning and communication. Our mission is to make real-time handwriting 
              capture and interactive collaboration accessible to educators, tutors, and 
              training professionals worldwide.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We&apos;re committed to developing technology that supports effective teaching 
              and learning, while respecting privacy, security, and the diverse needs of 
              educational institutions and organizations.
            </p>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Focus on Education</h3>
              <p className="text-gray-600">
                Everything we build is designed with educators and learners in mind, 
                prioritizing usability and educational outcomes.
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Privacy & Security</h3>
              <p className="text-gray-600">
                We take data protection seriously, offering flexible deployment options 
                and compliance with regional regulations.
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-gray-600">
                We work closely with our customers and partners to understand their needs 
                and continuously improve our solutions.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Contact Info */}
      <Section>
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.postcode}<br />
                  {siteConfig.address.country}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600">
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    {siteConfig.contactEmail}
                  </a>
                  <br />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
