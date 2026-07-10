import type { Metadata } from "next";
import { getKitSubscribersWithField, getKitSubscriberIdsForTag, type KitSubscriber } from "@/lib/kit";
import { parseApplication } from "./parseApplication";
import "./applications.css";

export const metadata: Metadata = {
  title: "Co-Host Applications — Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const WAITLISTED_TAG_ID = "21048243";

export default async function ApplicationsAdminPage() {
  let subscribers: KitSubscriber[];
  try {
    subscribers = await getKitSubscribersWithField("cohost_application");
  } catch (err) {
    const loadError = err instanceof Error ? err.message : String(err);
    return (
      <main className="admin-apps">
        <div className="admin-apps-wrap">
          <h1>Co-Host Applications</h1>
          <p className="admin-apps-error">Couldn&apos;t load applications from Kit.</p>
          <pre className="admin-apps-error-detail">{loadError}</pre>
        </div>
      </main>
    );
  }

  const sorted = [...subscribers].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  let waitlistedIds: Set<number>;
  try {
    waitlistedIds = await getKitSubscriberIdsForTag(WAITLISTED_TAG_ID);
  } catch {
    waitlistedIds = new Set();
  }

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
          const status = waitlistedIds.has(sub.id) ? "waitlisted" : sub.state;

          return (
            <details key={sub.id} className="applicant-card">
              <summary className="applicant-summary">
                <span className="applicant-name">{sub.first_name || sub.email_address}</span>
                <span className="applicant-email">{sub.email_address}</span>
                <span className={`applicant-state applicant-state-${status}`}>{status}</span>
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
