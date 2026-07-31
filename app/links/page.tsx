import Image from "next/image";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { pageMetadata } from "@/lib/seo";
import { Mic2, Calendar, Handshake, Mic, FileText, Mail } from "lucide-react";
import "./links.css";

export const metadata = pageMetadata({
  title: "Ralph's Links — Ralph Estep Jr.",
  description:
    "Everything Ralph Estep Jr. is doing right now — The Content Creator's Accountant, coaching, shows, articles, and more, all in one place.",
  path: "/links",
  image: "/images/links-og.png",
});

const LINKS = [
  { title: "The Content Creator's Accountant", href: "https://contentcreatorsaccountant.com/", icon: Mic2 },
  { title: "Book a Free Discovery Call", href: "/schedule/discovery", icon: Calendar },
  { title: "Business Coaching", href: "/coaching", icon: Handshake },
  { title: "All Shows", href: "/shows", icon: Mic },
  { title: "Articles & Insights", href: "/articles", icon: FileText },
  { title: "Contact Ralph", href: "https://www.ralphestepjr.com/contact", icon: Mail },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ralph-estep-jr/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ralph.v.estep/",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TheContentCreatorsAccountant",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z",
  },
];

export default function LinksPage() {
  return (
    <div className="links-page">
      <div className="links-page-radial" aria-hidden="true" />
      <div className="links-card">
        <div className="links-header hero-in" style={{ animationDelay: "0.05s" }}>
          <div className="links-avatar">
            <Image src="/images/ralph-headshot.png" alt="Ralph Estep Jr." width={80} height={80} priority />
          </div>
          <h1>Ralph Estep Jr.</h1>
          <p>LPA · Business Coach · Podcaster</p>
        </div>

        <span className="gold-rule hero-in" style={{ animationDelay: "0.15s" }} />

        <div className="links-list">
          {LINKS.map((link, i) => {
            const external = link.href.startsWith("http");
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener" : undefined}
                className="links-row hero-in"
                style={{ animationDelay: `${0.2 + i * 0.06}s` }}
              >
                <span className="links-row-icon"><Icon size={17} strokeWidth={1.75} /></span>
                <span className="links-row-title">{link.title}</span>
                <span className="links-row-chevron" aria-hidden="true">→</span>
              </a>
            );
          })}
        </div>

        <div className="links-email hero-in" style={{ animationDelay: "0.6s" }}>
          <EmailCaptureForm
            className="email-form"
            formStyle={{ maxWidth: "320px", margin: "0 auto", flexDirection: "row" }}
            inputStyle={{ padding: "7px 12px", fontSize: "12px", borderRadius: "4px 0 0 4px" }}
            buttonStyle={{ padding: "7px 12px", fontSize: "10px", borderRadius: "0 4px 4px 0" }}
            placeholder="Feedback, testimonial, or question?"
            buttonLabel="Send"
            location="Links Page"
          />
        </div>

        <div className="links-socials hero-in" style={{ animationDelay: "0.68s" }}>
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener"
              className="links-social-link"
              aria-label={social.label}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>

        <p className="links-footer hero-in" style={{ animationDelay: "0.74s" }}>© 2026 Ralph Estep Jr.</p>
      </div>
    </div>
  );
}
