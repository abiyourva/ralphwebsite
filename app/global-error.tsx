"use client";

import { useEffect } from "react";

// Same stale-deployment self-heal as app/error.tsx, but for the rare case
// where the root layout itself throws — Next.js requires this file to
// render its own <html>/<body> since there's no surviving layout to nest
// inside, so no site CSS or components can be assumed to be available here.
const STALE_DEPLOY_PATTERN = /removeChild|insertBefore|NotFoundError|ChunkLoadError|Failed to fetch dynamically imported module|Loading chunk/i;
const AUTO_RELOAD_KEY = "ralph-auto-reloaded-once";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);

    const looksStale = STALE_DEPLOY_PATTERN.test(error.message) || STALE_DEPLOY_PATTERN.test(error.name);
    if (looksStale && !sessionStorage.getItem(AUTO_RELOAD_KEY)) {
      sessionStorage.setItem(AUTO_RELOAD_KEY, "1");
      window.location.reload();
    }
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "24px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1 style={{ marginBottom: "16px" }}>Something went wrong</h1>
          <p style={{ maxWidth: "480px", marginBottom: "32px", color: "#555" }}>
            This page hit a snag — usually a quick reload clears it right up.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              padding: "12px 24px",
              borderRadius: "6px",
              border: "none",
              background: "#1B2D4F",
              color: "#fff",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Reload page
          </button>
        </div>
      </body>
    </html>
  );
}
