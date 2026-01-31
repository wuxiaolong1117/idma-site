import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ZoomIntegrationPoster from "@/components/ZoomIntegrationPoster";

export const metadata: Metadata = {
  title: "Products",
  description: "Discover iDma's range of AI-powered handwriting devices for business and education.",
};

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <Section background="white" className="pt-24 pb-16">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-apple-display text-5xl md:text-6xl mb-6">
              Smart Handwriting. <span className="text-[#0071E3]">Reimagined.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#86868B] mb-10 leading-relaxed">
              Experience the natural feel of pen on paper, instantly digitized and enhanced by AI.
              Designed for modern meetings, creative collaboration, and personalized education.
            </p>
          </div>
        </Container>
      </Section>

      {/* Product Lineup */}
      <Section background="gray">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* PP-100: AI Smart Meeting Notebook */}
            <Card className="flex flex-col h-full card-apple overflow-hidden">
              <div className="aspect-[4/3] bg-[#F5F5F7] relative flex items-center justify-center p-8">
                {/* Placeholder for Product Image */}
                <div className="text-6xl">📓</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#0071E3] uppercase mb-2 block">Business</span>
                  <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-2">iDma PP-100</h3>
                  <p className="text-[#86868B] font-medium">AI Smart Meeting Notebook</p>
                </div>
                <p className="text-[#1D1D1F] mb-6 flex-grow">
                  Your exclusive AI meeting assistant. Write on real paper with a natural feel, 
                  and let our AI digitize, organize, and summarize your notes instantly.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-[#424245]">
                  <li className="flex items-start">
                    <span className="text-[#0071E3] mr-2">✓</span> Real Paper Feel
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0071E3] mr-2">✓</span> Instant AI Sync & Digitization
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0071E3] mr-2">✓</span> Meeting Minutes Ready Instantly
                  </li>
                </ul>
                <Button href="/contact" variant="primary" className="w-full">
                  Request Info
                </Button>
              </div>
            </Card>

            {/* PP-110: Smart Sync Whiteboard */}
            <Card className="flex flex-col h-full card-apple overflow-hidden">
              <div className="aspect-[4/3] bg-[#F5F5F7] relative flex items-center justify-center p-8">
                {/* Placeholder for Product Image */}
                <div className="text-6xl">💡</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#0071E3] uppercase mb-2 block">Collaboration</span>
                  <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-2">iDma PP-110</h3>
                  <p className="text-[#86868B] font-medium">Smart Sync Whiteboard</p>
                </div>
                <p className="text-[#1D1D1F] mb-6 flex-grow">
                  Instant collaboration for agile teams. Sync handwriting directly to digital screens 
                  in real-time. Essential for brainstorming sessions and hybrid work environments.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-[#424245]">
                  <li className="flex items-start">
                    <span className="text-[#0071E3] mr-2">✓</span> Live Paper-to-Screen Sync
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0071E3] mr-2">✓</span> Ideal for Small Groups
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0071E3] mr-2">✓</span> Draw, Write & Share Instantly
                  </li>
                </ul>
                <Button href="/contact" variant="primary" className="w-full">
                  Request Info
                </Button>
              </div>
            </Card>

            {/* PP-120: AI Smart Tutoring System */}
            <Card className="flex flex-col h-full card-apple overflow-hidden">
              <div className="aspect-[4/3] bg-[#F5F5F7] relative flex items-center justify-center p-8">
                {/* Placeholder for Product Image */}
                <div className="text-6xl">🎓</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#0071E3] uppercase mb-2 block">Education</span>
                  <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-2">iDma PP-120</h3>
                  <p className="text-[#86868B] font-medium">AI Smart Tutoring System</p>
                </div>
                <p className="text-[#1D1D1F] mb-6 flex-grow">
                  AI-powered personalized tutoring. Built for precision education, blending 
                  traditional handwriting with AI analysis to track progress and enhance learning outcomes.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-[#424245]">
                  <li className="flex items-start">
                    <span className="text-[#0071E3] mr-2">✓</span> Precision Teaching Tools
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0071E3] mr-2">✓</span> Natural Handwriting Interaction
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0071E3] mr-2">✓</span> AI-Enhanced Learning Analytics
                  </li>
                </ul>
                <Button href="/contact" variant="primary" className="w-full">
                  Request Info
                </Button>
              </div>
            </Card>

          </div>
        </Container>
      </Section>

      {/* Feature Deep Dive (Zoom) */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-16">
              <h2 className="text-apple-display text-4xl mb-6">
                Works perfectly with <span className="text-[#0071E3]">Zoom</span>.
              </h2>
              <p className="text-xl text-[#86868B] max-w-3xl mx-auto">
                No complex setup. No new software to learn. Just connect and start writing 
                to share your ideas instantly in any Zoom meeting.
              </p>
            </div>
            
            <div className="bg-[#F5F5F7] rounded-3xl p-8 md:p-12">
               <div className="max-w-4xl mx-auto mb-12 shadow-2xl rounded-2xl overflow-hidden">
                  <ZoomIntegrationPoster />
               </div>
               
               <div className="grid md:grid-cols-2 gap-12">
                 <div>
                   <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4">Seamless Integration</h3>
                   <p className="text-[#424245] leading-relaxed">
                     Our hardware integrates directly with Zoom's whiteboard and screen sharing capabilities.
                     Whether you are teaching a math class or brainstorming a product roadmap, 
                     your handwriting appears on screen with zero lag.
                   </p>
                 </div>
                 <div>
                   <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4">Secure & Private</h3>
                   <p className="text-[#424245] leading-relaxed">
                     Security is built-in, not bolted on. Your data is encrypted end-to-end, 
                     and we comply with GDPR standards to ensure your meeting content remains 
                     confidential and secure.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gray" className="py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-apple-display text-4xl mb-8">
              Ready to transform your workflow?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Contact Sales
              </Button>
              <Button href="/downloads" variant="secondary" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
