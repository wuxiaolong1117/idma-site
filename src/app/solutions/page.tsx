import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Discover iDma solutions for 1:1 tutoring, small group classes, classroom capture, and enterprise training.",
  openGraph: {
    title: "Solutions | iDma",
    description: "Discover iDma solutions for 1:1 tutoring, small group classes, classroom capture, and enterprise training.",
  },
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="blue">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions for Every Use Case
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Whether you&apos;re delivering 1:1 tutoring, managing classroom sessions, 
              or conducting enterprise training, iDma can help enhance your teaching and collaboration.
            </p>
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section>
        <Container>
          <div className="space-y-16">
            {/* 1:1 Tutoring */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1:1 Tutoring</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Perfect for individual tutoring sessions where real-time interaction and 
                  immediate feedback are essential. The dual-board setup enables tutors to 
                  see student work instantly and provide corrections as they happen.
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Real-time dual-board interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Instant correction and feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Session replay for review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>AI-assisted session summaries</span>
                  </li>
                </ul>
                <Button href="/contact" variant="primary">
                  Get Started
                </Button>
              </div>
              <Card className="bg-blue-50 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍🏫👨‍🎓</div>
                  <p className="text-gray-700 font-medium">
                    Teacher and student each have their own device, enabling seamless two-way interaction.
                  </p>
                </div>
              </Card>
            </div>

            {/* Small Group Classes */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="bg-green-50 p-8 order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-gray-700 font-medium">
                    Multiple students can participate, with the teacher&apos;s board visible to all.
                  </p>
                </div>
              </Card>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Small Group Classes</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Ideal for small group tutoring and workshops. The teacher&apos;s handwriting 
                  is shared with all participants, while individual students can contribute 
                  when called upon.
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Shared teacher board for all students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Individual student participation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Classroom management tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Group session recordings</span>
                  </li>
                </ul>
                <Button href="/contact" variant="primary">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Classroom Capture */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Classroom Capture</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Capture classroom teaching sessions for students who need to review material 
                  later or for those who couldn&apos;t attend. All handwriting and annotations 
                  are recorded automatically.
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Automatic lesson recording</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Full replay capability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Export to various formats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Integration with school LMS</span>
                  </li>
                </ul>
                <Button href="/contact" variant="primary">
                  Get Started
                </Button>
              </div>
              <Card className="bg-purple-50 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📹</div>
                  <p className="text-gray-700 font-medium">
                    Every stroke is captured, making it easy to review and share lessons.
                  </p>
                </div>
              </Card>
            </div>

            {/* Meeting Minutes / Knowledge Capture */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="bg-orange-50 p-8 order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl mb-4">💼</div>
                  <p className="text-gray-700 font-medium">
                    Capture whiteboard sessions, diagrams, and collaborative notes during meetings.
                  </p>
                </div>
              </Card>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Meeting Minutes & Knowledge Capture
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Designed for enterprise training and knowledge sharing. Capture whiteboard 
                  discussions, diagrams, and collaborative notes during meetings. AI summaries 
                  help document key points and action items.
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Real-time collaborative notes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>AI-assisted meeting summaries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Export to documentation systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Secure on-premises deployment option</span>
                  </li>
                </ul>
                <Button href="/contact" variant="primary">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Deployment Options */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Deployment Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the deployment model that best fits your organization&apos;s needs and security requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-2xl font-semibold mb-3">Cloud</h3>
              <p className="text-gray-600 mb-4">
                Fully managed cloud deployment with automatic updates and scalable infrastructure. 
                Ideal for most schools and tutoring centers.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Quick setup</li>
                <li>✓ Automatic updates</li>
                <li>✓ Scalable infrastructure</li>
                <li>✓ Managed backups</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-2xl font-semibold mb-3">On-Premises</h3>
              <p className="text-gray-600 mb-4">
                Deploy iDma on your own servers for maximum control and data sovereignty. 
                Suitable for enterprises with strict security requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Full data control</li>
                <li>✓ Custom security policies</li>
                <li>✓ Integration with existing systems</li>
                <li>✓ Dedicated support</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-2xl font-semibold mb-3">Hybrid</h3>
              <p className="text-gray-600 mb-4">
                Combine cloud and on-premises components to balance flexibility with control. 
                Perfect for organizations with mixed requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Flexible architecture</li>
                <li>✓ Sensitive data on-premises</li>
                <li>✓ Cloud features where needed</li>
                <li>✓ Custom configuration</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find the Right Solution for You
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your specific needs and deployment preferences.
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
