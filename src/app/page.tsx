import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import VideoEmbed from "@/components/VideoEmbed";
import SocialShare from "@/components/SocialShare";
import ZoomIntegrationPoster from "@/components/ZoomIntegrationPoster";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.productName} - ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.companyName,
  url: siteConfig.websiteUrl,
  logo: `${siteConfig.websiteUrl}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "Customer Service",
    email: siteConfig.contactEmail,
    areaServed: "GB",
    availableLanguage: "English",
  },
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.youtube,
    siteConfig.social.x,
  ].filter(Boolean),
};

export default function Home() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Hero Section */}
      <Section background="blue" className="pt-8 md:pt-16">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {siteConfig.productName}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {siteConfig.tagline}
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Real-time handwriting capture and dual-board interactive tutoring for schools, 
              tutoring centers, educators, and enterprise training teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                {siteConfig.cta.primary}
              </Button>
              <Button href="/solutions" variant="outline" size="lg">
                Explore Solutions
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Handwriting Matters */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Handwriting Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Research in learning science suggests that handwriting can support cognitive 
              development and information retention. iDma is designed to capture the natural 
              flow of handwritten communication, making it easier to explain complex concepts, 
              work through problems step-by-step, and maintain engagement in remote learning 
              and training environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center">
              <h3 className="text-xl font-semibold mb-3">Cognitive Engagement</h3>
              <p className="text-gray-600">
                Handwriting can help support active learning and information processing, 
                making it a valuable tool in educational settings.
              </p>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-semibold mb-3">Step-by-Step Clarity</h3>
              <p className="text-gray-600">
                Complex problems become clearer when you can see each step written out in real-time, 
                enabling better understanding and correction.
              </p>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-semibold mb-3">Natural Communication</h3>
              <p className="text-gray-600">
                Handwriting maintains the natural flow of teaching and learning, supporting 
                more intuitive interactions between educators and students.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Zoom Integration Feature */}
      <Section background="blue">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Bring Handwriting Back to Your Zoom Meetings - Naturally
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                  Write on Paper, Share on Zoom - Instantly. Our smart handwriting notebook integrates seamlessly with Zoom, letting you write naturally with pen and paper while everyone sees your notes in real time.
                </p>
                {/* English Version Poster - Replacing Chinese Image */}
                <div className="max-w-5xl mx-auto mb-8">
                  <ZoomIntegrationPoster />
                </div>
              </div>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-2 border-red-200 bg-red-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Problem</h3>
                  <p className="text-gray-700">
                    Do you struggle to write clearly with a mouse or stylus during Zoom calls? Does explaining complex ideas on a smooth screen feel awkward and slow? You are not alone - traditional handwriting is still the fastest way to think and collaborate, yet most remote tools don&apos;t support it.
                  </p>
                </Card>
                <Card className="border-2 border-blue-200 bg-blue-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-700">
                    No new hardware, no steep learning curve - just open the app in Zoom and start writing. Our smart handwriting notebook integrates seamlessly with Zoom, letting you write naturally with pen and paper while everyone sees your notes in real time.
                  </p>
                </Card>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>
              </div>

              {/* Perfect For */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4 text-center">Perfect for:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">Teachers & Trainers giving interactive online lessons</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">Remote Teams brainstorming or planning projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">Students & Study Groups working through problems together</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">Tutors & Coaches explaining concepts visually</span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button href="/product" variant="primary" size="lg">
                  Learn More About Zoom Integration
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Video Demo Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See iDma in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Watch how iDma transforms remote teaching and learning with real-time handwriting capture.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {/* 示例：YouTube 视频 - 替换为你的实际视频 ID 或 URL */}
            <VideoEmbed
              youtubeUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
              title="iDma 产品演示视频"
              className="mb-8"
            />
            {/* 或者使用本地视频：
            <VideoEmbed
              localVideo="/videos/demo.mp4"
              title="iDma 产品演示视频"
              className="mb-8"
            />
            */}
          </div>
        </Container>
      </Section>

      {/* Dual-Board Interactive Tutoring */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dual-Board Interactive Tutoring
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Both teacher and student have their own iDma device, enabling real-time 
              collaboration and interactive correction.
            </p>
          </div>
          
          {/* Simple Diagram Layout */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Teacher Side */}
              <Card className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Teacher Device</h3>
                <p className="text-gray-600 mb-4">
                  Teacher writes on their iDma device. Handwriting appears instantly on 
                  student&apos;s screen.
                </p>
                <div className="bg-gray-100 rounded p-4 text-sm text-gray-700">
                  Writing syncs in real-time
                </div>
              </Card>
              
              {/* Connection Arrow */}
              <div className="hidden md:block text-center">
                <div className="text-4xl text-blue-600">⇄</div>
                <p className="text-sm text-gray-600 mt-2">Real-time sync</p>
              </div>
              
              {/* Student Side */}
              <Card className="text-center md:col-start-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Student Device</h3>
                <p className="text-gray-600 mb-4">
                  Student can write back, ask questions, and receive corrections in real-time. 
                  Both boards stay synchronized.
                </p>
                <div className="bg-gray-100 rounded p-4 text-sm text-gray-700">
                  Interactive collaboration
                </div>
              </Card>
            </div>
            
            {/* Mobile: Connection indicator */}
            <div className="md:hidden text-center my-6">
              <div className="text-2xl text-blue-600">⇅</div>
              <p className="text-sm text-gray-600">Real-time sync</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* For Schools / Tutors / Enterprises */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Your Needs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card hover className="text-center">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-2xl font-semibold mb-3">For Schools</h3>
              <p className="text-gray-600 mb-4">
                Enhance classroom teaching with real-time handwriting capture, lesson replay, 
                and classroom management tools designed for educational institutions.
              </p>
              <Button href="/solutions" variant="outline" size="sm">
                Learn More
              </Button>
            </Card>
            <Card hover className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-semibold mb-3">For Tutors</h3>
              <p className="text-gray-600 mb-4">
                Deliver engaging 1:1 and small group sessions with dual-board interaction, 
                AI-assisted summaries, and seamless remote collaboration.
              </p>
              <Button href="/solutions" variant="outline" size="sm">
                Learn More
              </Button>
            </Card>
            <Card hover className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-semibold mb-3">For Enterprises</h3>
              <p className="text-gray-600 mb-4">
                Support training and knowledge sharing with secure deployment options, 
                meeting minutes capture, and export capabilities for your teams.
              </p>
              <Button href="/solutions" variant="outline" size="sm">
                Learn More
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Key Features */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need for effective interactive learning and collaboration.
            </p>
          </div>
          <FeatureGrid
            features={siteConfig.features.map((f) => ({ title: f }))}
            columns={4}
          />
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section background="gray">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ items={siteConfig.faqs} />
        </Container>
      </Section>

      {/* Final CTA Banner */}
      <Section background="blue">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Request a demo to see how iDma can transform your teaching and training sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/contact" variant="secondary" size="lg">
                {siteConfig.cta.primary}
              </Button>
              <Button href="/downloads" variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                {siteConfig.cta.secondary}
              </Button>
            </div>
            {/* 社交媒体分享 */}
            <div className="flex justify-center">
              <SocialShare className="text-white" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
