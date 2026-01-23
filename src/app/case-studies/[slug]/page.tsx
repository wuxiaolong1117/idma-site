import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";

export async function generateStaticParams() {
  return siteConfig.caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = siteConfig.caseStudies.find((s) => s.slug === params.slug);
  
  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }
  
  return {
    title: `${study.title} | Case Studies`,
    description: study.excerpt,
    openGraph: {
      title: `${study.title} | iDma Case Studies`,
      description: study.excerpt,
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = siteConfig.caseStudies.find((s) => s.slug === params.slug);
  
  if (!study) {
    notFound();
  }
  
  // Generate sample content based on the case study
  const content = {
    "st-james-mathematics": {
      challenge: "The mathematics department at St. James School needed a way to deliver effective remote tutoring sessions. Traditional video calls with screen sharing lacked the immediacy of in-person teaching, and students often struggled to follow along with complex problem-solving steps.",
      solution: "St. James implemented iDma dual-board technology, providing both tutors and students with iDma devices. This enabled real-time handwriting synchronization, allowing tutors to see student work instantly and provide immediate corrections.",
      results: [
        "Reduced time spent re-explaining steps by 40%",
        "Improved student engagement during remote sessions",
        "Enhanced ability to track student progress through lesson replays",
        "Positive feedback from both tutors and students",
      ],
      quote: "The dual-board setup has transformed our remote tutoring. Students can now see corrections in real-time, which has significantly improved their understanding and reduced the need for repeated explanations.",
      quoteAuthor: "Sarah Chen, Head of Mathematics",
    },
    "elite-tutoring-centre": {
      challenge: "Elite Tutoring Centre was scaling their 1:1 tutoring services but found it challenging to maintain detailed session documentation. Tutors were spending significant time writing session summaries, and parents wanted more visibility into their children's progress.",
      solution: "Elite Tutoring Centre adopted iDma with AI-assisted summaries and lesson replay features. This automated the documentation process while providing rich, detailed session reports for parents.",
      results: [
        "Improved parent satisfaction scores by 35%",
        "Reduced administrative time for tutors by approximately 3 hours per week",
        "Enhanced session documentation quality and consistency",
        "Better parent-tutor communication through shared session replays",
      ],
      quote: "The AI summaries feature saves our tutors hours each week. We can focus on teaching rather than note-taking, and parents appreciate the detailed session reports that help them understand their child's progress.",
      quoteAuthor: "Michael Thompson, Director",
    },
    "techcorp-training": {
      challenge: "TechCorp's corporate training team needed a solution to improve knowledge retention in technical training sessions. Traditional presentations and video recordings weren't engaging enough, and participants struggled to review complex technical concepts later.",
      solution: "TechCorp implemented iDma for their training sessions, enabling trainers to use handwriting for diagrams, code explanations, and step-by-step technical walkthroughs. The replay and export features allowed participants to review sessions at their own pace.",
      results: [
        "Increased knowledge retention rates by 28%",
        "Improved participant engagement during training sessions",
        "Enhanced ability to review and reference training content",
        "Positive feedback on the interactive learning experience",
      ],
      quote: "Our training sessions are now more engaging and effective. The ability to replay lessons and export content has improved knowledge retention across our teams, and trainers appreciate the natural flow of handwriting-based instruction.",
      quoteAuthor: "Dr. Emma Wilson, Corporate Training Manager",
    },
  }[study.slug] || {
    challenge: "Sample challenge description.",
    solution: "Sample solution description.",
    results: ["Sample result 1", "Sample result 2"],
    quote: "Sample testimonial quote.",
    quoteAuthor: "Sample Author",
  };
  
  return (
    <>
      {/* Hero */}
      <Section background="blue">
        <Container>
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
                {study.type}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {study.title}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-2">
              {study.location}
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {study.excerpt}
            </p>
          </div>
        </Container>
      </Section>

      {/* Challenge */}
      <Section>
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-lg text-gray-700">{content.challenge}</p>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section background="gray">
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Solution</h2>
            <p className="text-lg text-gray-700">{content.solution}</p>
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section>
        <Container size="md">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.results.map((result, index) => (
                <Card key={index}>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl font-bold mr-3">✓</span>
                    <p className="text-gray-700">{result}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Quote */}
      <Section background="blue">
        <Container size="md">
          <Card className="bg-white">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-blue-600 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-gray-700 italic mb-4">&ldquo;{content.quote}&rdquo;</p>
              <p className="text-gray-600 font-semibold">— {content.quoteAuthor}</p>
            </div>
          </Card>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interested in Similar Results?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how iDma can help your organization achieve better outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                {siteConfig.cta.primary}
              </Button>
              <Button href="/case-studies" variant="outline" size="lg">
                View All Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
