"use client";

import { useEffect, useId, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        params: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
        }
      ) => number;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

// Renders Google's "I'm not a robot" checkbox and reports the verification
// token up via onChange. Renders nothing until NEXT_PUBLIC_RECAPTCHA_SITE_KEY
// is configured, so forms keep working while reCAPTCHA is being set up.
//
// Loaded via next/script rather than a hand-rolled document.head.appendChild —
// manually mutating <head> fought with Next's own head reconciliation on
// client-side route changes and threw "removeChild: not a child of this node".
export default function RecaptchaCheckbox({ onChange }: { onChange: (token: string | null) => void }) {
  const containerId = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!SITE_KEY || !scriptReady) return;
    if (!containerRef.current || widgetId.current !== null || !window.grecaptcha) return;
    widgetId.current = window.grecaptcha.render(containerRef.current, {
      sitekey: SITE_KEY as string,
      callback: (token: string) => onChange(token),
      "expired-callback": () => onChange(null),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptReady]);

  if (!SITE_KEY) return null;

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div id={containerId} ref={containerRef} style={{ margin: "12px 0" }} />
    </>
  );
}
