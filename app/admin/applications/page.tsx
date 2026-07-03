import type { Metadata } from "next";
import { getKitSubscribersWithField } from "@/lib/kit";
import { parseApplication } from "./parseApplication";
import "./applications.css";

export const metadata: Metadata = {
  title: "Co-Host Applications — Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function ApplicationsAdminPage() {
  const subscribers = await getKitSubscribersWithField("cohost_application").catch(() => null);

  if (!subscribers) {
    return (
      <main className="admin-apps">
        <div className="admin-apps-wrap">
          <h1>Co-Host Applications</h1>
          <p className="admin-apps-error">Couldn&apos;t load applications from Kit. Check the server logs.</p>
        </div>
      </main>
    );
  }

  const sorted = [...subscribers].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <main className="admin-apps">
      <div className="admin-apps-wrap">
        <h1>Co-Host Applications</h1>
        <p className="admin-apps-count">
          {sorted.length} application{sorted.length === 1 ? "" : "s"}
        </p>

        {sorted.length === 0 && <p className="admin-apps-empty">No applications yet.</p>}

        {sorted.map((sub) => {
          const raw = sub.fields?.cohost_application;
          if (!raw) return null;
          const { submittedAt, sections } = parseApplication(raw);

          return (
            <details key={sub.id} className="applicant-card">
              <summary className="applicant-summary">
                <span className="applicant-name">{sub.first_name || sub.email_address}</span>
                <span className="applicant-email">{sub.email_address}</span>
                <span className={`applicant-state applicant-state-${sub.state}`}>{sub.state}</span>
                <span className="applicant-date">{submittedAt || sub.created_at}</span>
              </summary>

              <div className="applicant-body">
                {sections.map((section, i) => (
                  <div className="applicant-section" key={i}>
                    <h3>{section.title}</h3>
                    {section.items.map((qa, j) => (
                      <div className="applicant-qa" key={j}>
                        <p className="applicant-q">{qa.question}</p>
                        <p className="applicant-a">{qa.answer || "(no answer)"}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </main>
  );
}
