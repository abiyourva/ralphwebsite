"use client";

import { useEffect, useId, useRef } from "react";

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
    __onRecaptchaLoad?: () => void;
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = "recaptcha-script";

// Renders Google's "I'm not a robot" checkbox and reports the verification
// token up via onChange. Renders nothing until NEXT_PUBLIC_RECAPTCHA_SITE_KEY
// is configured, so forms keep working while reCAPTCHA is being set up.
export default function RecaptchaCheckbox({ onChange }: { onChange: (token: string | null) => void }) {
  const containerId = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);

  useEffect(() => {
    if (!SITE_KEY) return;

    function renderWidget() {
      if (!containerRef.current || widgetId.current !== null || !window.grecaptcha) return;
      widgetId.current = window.grecaptcha.render(containerRef.current, {
        sitekey: SITE_KEY as string,
        callback: (token: string) => onChange(token),
        "expired-callback": () => onChange(null),
      });
    }

    if (window.grecaptcha) {
      renderWidget();
      return;
    }

    if (!document.getElementById(SCRIPT_ID)) {
      window.__onRecaptchaLoad = renderWidget;
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://www.google.com/recaptcha/api.js?onload=__onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      window.__onRecaptchaLoad = renderWidget;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!SITE_KEY) return null;

  return <div id={containerId} ref={containerRef} style={{ margin: "12px 0" }} />;
}
