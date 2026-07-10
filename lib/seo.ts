import type { Metadata } from "next";

export const SITE_URL = "https://www.ralphestepjr.com";
export const SITE_NAME = "Ralph Estep Jr.";
const DEFAULT_OG_IMAGE = "/images/ralph-headshot.png";

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description?: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ralph Estep Jr.",
  jobTitle: "Licensed Public Accountant",
  url: SITE_URL,
  image: `${SITE_URL}/images/ralph-headshot.png`,
  sameAs: ["https://www.linkedin.com/in/ralph-estep-jr/", "https://www.facebook.com/ralph.v.estep/"],
  worksFor: {
    "@type": "Organization",
    name: "Saggio Management Group",
    url: SITE_URL,
  },
};
