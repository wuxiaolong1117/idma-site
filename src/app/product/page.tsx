import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Product",
  description: "Learn about the iDma hardware and software ecosystem for smart handwriting and interactive learning.",
  openGraph: {
    title: "Product | iDma",
    description: "Learn about the iDma hardware and software ecosystem for smart handwriting and interactive learning.",
  },
};

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <Section background="blue">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {siteConfig.productName} Hardware + Software Ecosystem
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              A complete solution combining compatible digital writing devices with powerful 
              software for real-time handwriting capture, dual-board interaction, and AI-assisted documentation.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              {siteConfig.cta.primary}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Hardware + Software Overview */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hardware</h2>
              <p className="text-lg text-gray-600 mb-6">
                iDma works with compatible digital pens and tablets that support real-time 
                handwriting capture. We provide a list of recommended devices that have been 
                tested and optimized for the best experience.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Compatible digital pens and tablets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Low-latency pressure-sensitive input</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Cross-platform device support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Recommended device list provided</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Software</h2>
              <p className="text-lg text-gray-600 mb-6">
                The iDma software platform provides real-time synchronization, dual-board 
                interaction, AI-assisted summaries, and seamless integration with video 
                conferencing tools.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Real-time ink synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Dual-board interactive mode</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>AI-assisted lesson summaries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Video platform integration</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Comparison */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Traditional vs. iDma Dual-Board
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">
                    Traditional Video + Whiteboard
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-blue-600">
                    iDma Dual-Board
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium">Real-time handwriting sync</td>
                  <td className="border border-gray-300 px-6 py-4 text-center">Limited</td>
                  <td className="border border-gray-300 px-6 py-4 text-center bg-blue-50">✓ Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium">Dual-board interaction</td>
                  <td className="border border-gray-300 px-6 py-4 text-center">No</td>
                  <td className="border border-gray-300 px-6 py-4 text-center bg-blue-50">✓ Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium">Lesson replay</td>
                  <td className="border border-gray-300 px-6 py-4 text-center">Manual recording</td>
                  <td className="border border-gray-300 px-6 py-4 text-center bg-blue-50">✓ Automatic</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium">AI summaries</td>
                  <td className="border border-gray-300 px-6 py-4 text-center">No</td>
                  <td className="border border-gray-300 px-6 py-4 text-center bg-blue-50">✓ Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium">Low-latency correction</td>
                  <td className="border border-gray-300 px-6 py-4 text-center">High latency</td>
                  <td className="border border-gray-300 px-6 py-4 text-center bg-blue-50">✓ Low latency</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium">Export & sharing</td>
                  <td className="border border-gray-300 px-6 py-4 text-center">Manual</td>
                  <td className="border border-gray-300 px-6 py-4 text-center bg-blue-50">✓ Built-in</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Connect Devices",
                description: "Both teacher and student connect their iDma-compatible devices to the platform.",
              },
              {
                step: "2",
                title: "Start Session",
                description: "Begin a tutoring or teaching session. The dual-board mode activates automatically.",
              },
              {
                step: "3",
                title: "Write & Collaborate",
                description: "Handwriting appears in real-time on both screens. Corrections and annotations sync instantly.",
              },
              {
                step: "4",
                title: "Review & Export",
                description: "Access lesson replays, AI-generated summaries, and export content for later review.",
              },
            ].map((item) => (
              <Card key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
              Experience {siteConfig.productName} for Yourself
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Request a demo to see how the hardware and software work together.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              {siteConfig.cta.primary}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
