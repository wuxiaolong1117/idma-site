import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "iDma international Ltd privacy policy and data protection information.",
  openGraph: {
    title: "Privacy Policy | iDma",
    description: "iDma international Ltd privacy policy and data protection information.",
  },
};

const LAST_UPDATED = "January 22, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Section background="black">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                {siteConfig.companyName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you use our services, including the {siteConfig.productName} platform 
                and our website.
              </p>
              <p className="text-gray-700">
                Please read this Privacy Policy carefully. By using our services, you agree to the 
                collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide</h3>
              <p className="text-gray-700 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Account registration information (name, email address, organization)</li>
                <li>Contact information when you reach out to us</li>
                <li>Payment and billing information (processed through secure third-party providers)</li>
                <li>Content you create or upload using our services</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                We automatically collect certain information when you use our services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Device information (device type, operating system, browser type)</li>
                <li>Usage data (features used, session duration, interaction patterns)</li>
                <li>Log data (IP address, access times, error logs)</li>
                <li>Handwriting and annotation data (stored securely according to your deployment option)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
              <p className="text-gray-700 mb-4">
                We offer multiple deployment options to meet different security and privacy requirements:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Cloud Deployment:</strong> Data is stored on secure cloud infrastructure with encryption in transit and at rest.</li>
                <li><strong>On-Premises Deployment:</strong> Data remains on your own servers, giving you full control.</li>
                <li><strong>Hybrid Deployment:</strong> Combination of cloud and on-premises storage based on your configuration.</li>
              </ul>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With service providers who assist us in operating our services (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer (merger, acquisition, etc.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your information</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us at{" "}
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:text-blue-700">
                  {siteConfig.contactEmail}
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children&apos;s Privacy</h2>
              <p className="text-gray-700">
                Our services are designed for use by educational institutions and organizations. 
                When used in educational settings, we comply with applicable laws regarding 
                children&apos;s privacy, including COPPA and GDPR where applicable. Educational 
                institutions are responsible for obtaining necessary consents from parents or guardians.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700">
                Your information may be transferred to and processed in countries other than your 
                country of residence. We ensure appropriate safeguards are in place to protect your 
                information in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new Privacy Policy on this page and updating the 
                &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically 
                for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>{siteConfig.companyName}</strong><br />
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.postcode}<br />
                  {siteConfig.address.country}<br />
                  Email: <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:text-blue-700">{siteConfig.contactEmail}</a>
                </p>
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
