"use client";

import { useEffect } from "react";

// Signatures of a stale-deployment mismatch: a browser tab left open across
// a new deploy fetches a route with the old JS still in memory, and either
// the chunk itself 404s or React's reconciliation throws trying to remove a
// DOM node its old tree no longer agrees with the server on. A hard reload
// always fixes it since it re-fetches everything fresh, so we do that
// automatically once per session rather than showing the visitor a dead end.
const STALE_DEPLOY_PATTERN = /removeChild|insertBefore|NotFoundError|ChunkLoadError|Failed to fetch dynamically imported module|Loading chunk/i;
const AUTO_RELOAD_KEY = "ralph-auto-reloaded-once";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);

    const looksStale = STALE_DEPLOY_PATTERN.test(error.message) || STALE_DEPLOY_PATTERN.test(error.name);
    if (looksStale && !sessionStorage.getItem(AUTO_RELOAD_KEY)) {
      sessionStorage.setItem(AUTO_RELOAD_KEY, "1");
      window.location.reload();
    }
  }, [error]);

  return (
    <div
      className="section-sm text-center"
      style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      <h1 style={{ marginBottom: "16px" }}>Something went wrong</h1>
      <p style={{ maxWidth: "480px", marginBottom: "32px" }}>
        This page hit a snag — usually a quick reload clears it right up.
      </p>
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
        <button type="button" className="btn btn-navy" onClick={() => window.location.reload()}>
          Reload page
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  );
}
