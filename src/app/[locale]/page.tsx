import { useTranslations } from "next-intl";
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
import { siteConfig } from "@/config/site";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-24 pb-16">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              className="text-apple-display text-5xl md:text-6xl mb-6"
              dangerouslySetInnerHTML={{ __html: t.raw("hero.title") }}
            />
            <p className="text-xl md:text-2xl text-[#86868B] mb-10 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                {t("hero.ctaPrimary")}
              </Button>
              <Button href="/solutions" variant="secondary" size="lg">
                {t("hero.ctaSecondary")}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Product Lineup */}
      <Section background="gray">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* PP-100 */}
            <Card className="flex flex-col h-full card-apple overflow-hidden">
              <div className="aspect-[4/3] bg-[#F5F5F7] relative flex items-center justify-center p-0">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/pp-100.jpg" 
                    alt="iDma PP-100" 
                    fill 
                    className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#0071E3] uppercase mb-2 block">{t("products.pp100.category")}</span>
                  <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-2">{t("products.pp100.title")}</h3>
                  <p className="text-[#86868B] font-medium">{t("products.pp100.subtitle")}</p>
                </div>
                <p className="text-[#1D1D1F] mb-6 flex-grow">{t("products.pp100.description")}</p>
                <ul className="space-y-3 mb-8 text-sm text-[#424245]">
                  <li className="flex items-start"><span className="text-[#0071E3] mr-2">✓</span> {t("products.pp100.feature1")}</li>
                  <li className="flex items-start"><span className="text-[#0071E3] mr-2">✓</span> {t("products.pp100.feature2")}</li>
                  <li className="flex items-start"><span className="text-[#0071E3] mr-2">✓</span> {t("products.pp100.feature3")}</li>
                </ul>
                <Button href="/contact" variant="primary" className="w-full">{t("products.pp100.cta")}</Button>
              </div>
            </Card>

            {/* PP-110 */}
            <Card className="flex flex-col h-full card-apple overflow-hidden">
              <div className="aspect-[4/3] bg-[#F5F5F7] relative flex items-center justify-center p-0">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/pp-110.jpg" 
                    alt="iDma PP-110" 
                    fill 
                    className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#0071E3] uppercase mb-2 block">{t("products.pp110.category")}</span>
                  <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-2">{t("products.pp110.title")}</h3>
                  <p className="text-[#86868B] font-medium">{t("products.pp110.subtitle")}</p>
                </div>
                <p className="text-[#1D1D1F] mb-6 flex-grow">{t("products.pp110.description")}</p>
                <ul className="space-y-3 mb-8 text-sm text-[#424245]">
                  <li className="flex items-start"><span className="text-[#0071E3] mr-2">✓</span> {t("products.pp110.feature1")}</li>
                  <li className="flex items-start"><span className="text-[#0071E3] mr-2">✓</span> {t("products.pp110.feature2")}</li>
                  <li className="flex items-start"><span className="text-[#0071E3] mr-2">✓</span> {t("products.pp110.feature3")}</li>
                </ul>
                <Button href="/contact" variant="primary" className="w-full">{t("products.pp110.cta")}</Button>
              </div>
            </Card>

            {/* PP-120 */}
            <Card className="flex flex-col h-full card-apple overflow-hidden">
              <div className="aspect-[4/3] bg-[#F5F5F7] relative flex items-center justify-center p-0">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/pp-120.jpg" 
                    alt="iDma PP-120" 
                    fill 
                    className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#0071E3] uppercase mb-2 block">{t("products.pp120.category")}</span>
                  <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-2">{t("products.pp120.title")}</h3>
                  <p className="text-[#86868B] font-medium">{t("products.pp120.subtitle")}</p>
                </div>
                <p className="text-[#1D1D1F] mb-6 flex-grow">{t("products.pp120.description")}</p>
                <ul className="space-y-3 mb-8 text-sm text-[#424245]">
                  <li className="flex items-start"><span className="text-[#0071E3] mr-2">✓</span> {t("products.pp120.feature1")}</li>
                  <li className="flex items-start"><span className="text-[#0071E3] mr-2">✓</span> {t("products.pp120.feature2")}</li>
                  <li className="flex items-start"><span className="text-[#0071E3] mr-2">✓</span> {t("products.pp120.feature3")}</li>
                </ul>
                <Button href="/contact" variant="primary" className="w-full">{t("products.pp120.cta")}</Button>
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
              <h2 
                className="text-apple-display text-4xl mb-6"
                dangerouslySetInnerHTML={{ __html: t.raw("zoom.title") }}
              />
              <p className="text-xl text-[#86868B] max-w-3xl mx-auto">
                {t("zoom.subtitle")}
              </p>
            </div>
            
            <div className="bg-[#F5F5F7] rounded-3xl p-8 md:p-12">
               <div className="max-w-4xl mx-auto mb-12 shadow-2xl rounded-2xl overflow-hidden">
                  <ZoomIntegrationPoster />
               </div>
               
               <div className="grid md:grid-cols-2 gap-12">
                 <div>
                   <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4">{t("zoom.seamlessTitle")}</h3>
                   <p className="text-[#424245] leading-relaxed">{t("zoom.seamlessDesc")}</p>
                 </div>
                 <div>
                   <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4">{t("zoom.secureTitle")}</h3>
                   <p className="text-[#424245] leading-relaxed">{t("zoom.secureDesc")}</p>
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
              {t("ctaFinal.title")}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                {t("ctaFinal.primary")}
              </Button>
              <Button href="/downloads" variant="secondary" size="lg">
                {t("ctaFinal.secondary")}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
