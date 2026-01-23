import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for iDma international Ltd.",
  openGraph: {
    title: "Terms of Service | iDma",
    description: "Terms of service for iDma international Ltd.",
  },
};

const LAST_UPDATED = "January 22, 2026";

export default function TermsPage() {
  return (
    <>
      <Section background="blue">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using the services provided by {siteConfig.companyName} 
                (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), including the {siteConfig.productName} platform 
                and website, you agree to be bound by these Terms of Service (&quot;Terms&quot;). 
                If you do not agree to these Terms, you may not use our services.
              </p>
              <p className="text-gray-700">
                These Terms apply to all users of our services, including but not limited to 
                educators, administrators, students, and organizations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 mb-4">
                {siteConfig.productName} provides a platform for real-time handwriting capture, 
                dual-board interactive tutoring, AI-assisted documentation, and related educational 
                and collaboration tools. Our services include software, cloud infrastructure 
                (where applicable), and support services as described in your subscription plan.
              </p>
              <p className="text-gray-700">
                We reserve the right to modify, suspend, or discontinue any aspect of our services 
                at any time, with or without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration and Security</h2>
              <p className="text-gray-700 mb-4">
                To use certain features of our services, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your account information to keep it accurate</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-700 mb-4">
                You agree not to use our services to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others, including intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Interfere with or disrupt the services or servers</li>
                <li>Attempt to gain unauthorized access to any part of the services</li>
                <li>Use automated systems to access the services without authorization</li>
                <li>Reverse engineer, decompile, or disassemble any software provided</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of our services, including but not limited 
                to software, text, graphics, logos, and trademarks, are owned by {siteConfig.companyName} 
                or its licensors and are protected by international copyright, trademark, and other 
                intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                You retain ownership of content you create or upload using our services. By using our 
                services, you grant us a license to use, store, and process your content as necessary 
                to provide and improve our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Subscription and Payment</h2>
              <p className="text-gray-700 mb-4">
                Subscription fees are billed in advance on a monthly or annual basis, as selected 
                during registration. You agree to pay all fees associated with your subscription.
              </p>
              <p className="text-gray-700 mb-4">
                We reserve the right to change our pricing with reasonable notice. Price changes 
                will apply to subsequent billing periods.
              </p>
              <p className="text-gray-700">
                Refunds are handled according to our refund policy, which may vary by region and 
                subscription type. Contact us for specific refund terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy</h2>
              <p className="text-gray-700">
                Your use of our services is also governed by our Privacy Policy. Please review our 
                Privacy Policy to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers and Limitations of Liability</h2>
              <p className="text-gray-700 mb-4">
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, 
                either express or implied. We do not guarantee that our services will be uninterrupted, 
                error-free, or completely secure.
              </p>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, {siteConfig.companyName} shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, or any 
                loss of profits or revenues, whether incurred directly or indirectly, or any loss of 
                data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify and hold harmless {siteConfig.companyName}, its officers, 
                directors, employees, and agents from any claims, damages, losses, liabilities, 
                and expenses (including legal fees) arising out of your use of our services, 
                violation of these Terms, or infringement of any rights of another party.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to our services immediately, 
                without prior notice, for any reason, including if you breach these Terms.
              </p>
              <p className="text-gray-700">
                Upon termination, your right to use the services will cease immediately. We may 
                delete your account and data in accordance with our data retention policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of 
                {siteConfig.address.country}, without regard to its conflict of law provisions. 
                Any disputes arising from these Terms or your use of our services shall be subject 
                to the exclusive jurisdiction of the courts in {siteConfig.address.city}, 
                {siteConfig.address.country}.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. We will notify you of 
                material changes by posting the updated Terms on this page and updating the 
                &quot;Last updated&quot; date. Your continued use of our services after such changes 
                constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us:
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
