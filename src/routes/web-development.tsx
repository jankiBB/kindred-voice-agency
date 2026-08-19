import { createFileRoute } from "@tanstack/react-router";
import { WebNav } from "@/components/web/web-nav";
import { WebHero } from "@/components/web/web-hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { WebServices } from "@/components/web/web-services";
import { StackTabs } from "@/components/web/stack-tabs";
import { CompareSlider } from "@/components/web/compare-slider";
import { Vitals } from "@/components/web/vitals";
import { WebWork } from "@/components/web/web-work";
import { WebProcess } from "@/components/web/web-process";
import { WebPricing } from "@/components/web/web-pricing";
import { WebFaq, webFaqs } from "@/components/web/web-faq";
import { WebCta, WebFooter } from "@/components/web/web-cta";

const url = "https://kindred-voice-agency.lovable.app/web-development";
const title = "Web Development Agency in Mumbai | Bombay Blokes";
const description =
  "Bombay Blokes is a web design and development agency in Mumbai building custom websites, Shopify ecommerce stores and web apps that load in under a second and convert.";

export const Route = createFileRoute("/web-development")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
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
              url,
              areaServed: "Mumbai, India",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressCountry: "IN",
              },
            },
            {
              "@type": "Service",
              serviceType: "Web design and development",
              provider: { "@type": "Organization", name: "Bombay Blokes" },
              areaServed: "India",
            },
            {
              "@type": "FAQPage",
              mainEntity: webFaqs.map((f) => ({
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
  component: WebDevelopmentPage,
});

function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <WebNav />
      <main>
        <WebHero />
        <LogoMarquee />
        <WebServices />
        <StackTabs />
        <CompareSlider />
        <Vitals />
        <WebWork />
        <WebProcess />
        <WebPricing />
        <WebFaq />
        <WebCta />
      </main>
      <WebFooter />
    </div>
  );
}
