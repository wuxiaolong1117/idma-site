import Link from "next/link";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Section background="blue">
        <Container>
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/" variant="primary" size="lg">
                Go Home
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
