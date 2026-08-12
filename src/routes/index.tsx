import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { Services } from "@/components/services";
import { CreativeWall } from "@/components/creative-wall";
import { CaseStudies } from "@/components/case-studies";
import { WhyUs } from "@/components/why-us";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Faq, faqs } from "@/components/faq";
import { FinalCta, SiteFooter } from "@/components/final-cta";

const title = "Social Media Marketing Agency in Mumbai | Bombay Blokes";
const description =
  "Bombay Blokes is a social media marketing agency in Mumbai. Strategy, content production, social media management and community for brands that want a premium presence.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              name: "Bombay Blokes",
              description,
              areaServed: "Mumbai, India",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressCountry: "IN",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <CreativeWall />
        <CaseStudies />
        <WhyUs />
        <Process />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
