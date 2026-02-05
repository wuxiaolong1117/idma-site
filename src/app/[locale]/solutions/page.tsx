import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Discover iDma solutions for 1:1 tutoring, small group classes, classroom capture, and enterprise training.",
};

export default async function SolutionsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "SolutionsPage" });

  return (
    <>
      {/* Hero */}
      <Section background="black">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              {t("hero.subtitle")}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("tutoring.title")}</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t("tutoring.description")}
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("tutoring.features.1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("tutoring.features.2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("tutoring.features.3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("tutoring.features.4")}</span>
                  </li>
                </ul>
                <Button href="/contact" variant="primary">
                  {t("cta.button")}
                </Button>
              </div>
              <Card className="bg-blue-50 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍🏫👨‍🎓</div>
                  <p className="text-gray-700 font-medium">
                    {t("tutoring.card")}
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
                    {t("smallGroup.card")}
                  </p>
                </div>
              </Card>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("smallGroup.title")}</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t("smallGroup.description")}
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("smallGroup.features.1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("smallGroup.features.2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("smallGroup.features.3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("smallGroup.features.4")}</span>
                  </li>
                </ul>
                <Button href="/contact" variant="primary">
                  {t("cta.button")}
                </Button>
              </div>
            </div>

            {/* Classroom Capture */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("classroom.title")}</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t("classroom.description")}
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("classroom.features.1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("classroom.features.2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("classroom.features.3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("classroom.features.4")}</span>
                  </li>
                </ul>
                <Button href="/contact" variant="primary">
                  {t("cta.button")}
                </Button>
              </div>
              <Card className="bg-purple-50 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📹</div>
                  <p className="text-gray-700 font-medium">
                    {t("classroom.card")}
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
                    {t("enterprise.card")}
                  </p>
                </div>
              </Card>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t("enterprise.title")}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t("enterprise.description")}
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("enterprise.features.1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("enterprise.features.2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("enterprise.features.3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{t("enterprise.features.4")}</span>
                  </li>
                </ul>
                <Button href="/contact" variant="primary">
                  {t("cta.button")}
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
              {t("deployment.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("deployment.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-2xl font-semibold mb-3">{t("deployment.cloud.title")}</h3>
              <p className="text-gray-600 mb-4">
                {t("deployment.cloud.description")}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ {t("deployment.cloud.features.1")}</li>
                <li>✓ {t("deployment.cloud.features.2")}</li>
                <li>✓ {t("deployment.cloud.features.3")}</li>
                <li>✓ {t("deployment.cloud.features.4")}</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-2xl font-semibold mb-3">{t("deployment.onPremises.title")}</h3>
              <p className="text-gray-600 mb-4">
                {t("deployment.onPremises.description")}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ {t("deployment.onPremises.features.1")}</li>
                <li>✓ {t("deployment.onPremises.features.2")}</li>
                <li>✓ {t("deployment.onPremises.features.3")}</li>
                <li>✓ {t("deployment.onPremises.features.4")}</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-2xl font-semibold mb-3">{t("deployment.hybrid.title")}</h3>
              <p className="text-gray-600 mb-4">
                {t("deployment.hybrid.description")}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ {t("deployment.hybrid.features.1")}</li>
                <li>✓ {t("deployment.hybrid.features.2")}</li>
                <li>✓ {t("deployment.hybrid.features.3")}</li>
                <li>✓ {t("deployment.hybrid.features.4")}</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="black">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              {t("cta.button")}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
