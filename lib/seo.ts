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

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
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
  "@id": `${SITE_URL}/#ralph`,
  name: "Ralph Estep Jr.",
  jobTitle: "Licensed Public Accountant",
  description:
    "Licensed Public Accountant, business coach, author, and podcaster helping everyday people build real financial confidence.",
  url: SITE_URL,
  image: `${SITE_URL}/images/ralph-headshot.png`,
  sameAs: [
    "https://www.linkedin.com/in/ralph-estep-jr/",
    "https://www.facebook.com/ralph.v.estep/",
    "https://www.youtube.com/@BecomingFinanciallyConfident",
    "https://www.financiallyconfidentchristian.com/",
    "https://www.truthunveiledwithralph.com/",
    "https://contentcreatorsaccountant.com/",
    "https://saggioaccounting.com/",
  ],
  knowsAbout: [
    "Personal finance",
    "Tax preparation",
    "Small business accounting",
    "Budgeting",
    "Debt payoff",
    "Faith-based financial stewardship",
    "Content creator finances",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Saggio Management Group",
    url: "https://saggioaccounting.com",
  },
};

// LocalBusiness entity for the accounting practice — address matches the
// office info displayed on /contact.
export const accountingServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${SITE_URL}/#saggio`,
  name: "Saggio Management Group",
  url: "https://saggioaccounting.com",
  image: `${SITE_URL}/images/ralph-headshot.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1100 Dutch Neck Road",
    addressLocality: "Middletown",
    addressRegion: "DE",
    postalCode: "19709",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Delaware" },
    { "@type": "Country", name: "United States" },
  ],
  founder: { "@id": `${SITE_URL}/#ralph` },
  sameAs: ["https://saggioaccounting.com/"],
};

export function podcastSeriesJsonLd({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name,
    description,
    url,
    ...(image ? { image: `${SITE_URL}${image}` } : {}),
    author: { "@id": `${SITE_URL}/#ralph` },
  };
}
