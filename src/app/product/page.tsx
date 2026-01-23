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

      {/* Zoom Integration */}
      <Section background="gray">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Seamless Zoom Integration
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bring Handwriting Back to Your Zoom Meetings - Naturally. Write on Paper, Share on Zoom - Instantly.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Problem</h3>
                  <p className="text-gray-700">
                    Do you struggle to write clearly with a mouse or stylus during Zoom calls? Does explaining complex ideas on a smooth screen feel awkward and slow? You are not alone - traditional handwriting is still the fastest way to think and collaborate, yet most remote tools don&apos;t support it.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-700">
                    Our smart handwriting notebook integrates seamlessly with Zoom, letting you write naturally with pen and paper while everyone sees your notes in real time. No new hardware, no steep learning curve - just open the app in Zoom and start writing.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2 border-blue-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">👥</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Collaborative Mode</h4>
                        <p className="text-gray-600 text-sm">
                          All participants can see the handwritten content in real-time, making it perfect for team discussions, brainstorming sessions, or collaborative learning.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="border-2 border-blue-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Dual-Screen Mode</h4>
                        <p className="text-gray-600 text-sm">
                          Students and teachers can share handwritten content on separate screens, with the ability to compare and annotate. This is a unique feature Zoom doesn&apos;t offer!
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="border-2 border-blue-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">✏️</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Real-Time Annotations</h4>
                        <p className="text-gray-600 text-sm">
                          Teachers can mark up students&apos; handwriting directly on the screen, bringing the classroom experience to life even in a virtual environment.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="border-2 border-blue-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🔗</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Seamless Integration</h4>
                        <p className="text-gray-600 text-sm">
                          Our product combines Zoom&apos;s video capabilities with iDma&apos;s handwriting functionality, ensuring a smooth experience without disrupting your workflow.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Perfect For */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Perfect for:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-700">Teachers & Trainers giving interactive online lessons</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-700">Remote Teams brainstorming or planning projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-700">Students & Study Groups working through problems together</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-700">Tutors & Coaches explaining concepts visually</span>
                  </div>
                </div>
              </div>
            </div>
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
