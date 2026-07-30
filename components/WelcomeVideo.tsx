"use client";

import Script from "next/script";

export default function WelcomeVideo() {
  return (
    <>
      <Script src="https://embed.voomly.com/embed/embed-build.js" strategy="lazyOnload" />
      <div
        className="voomly-embed"
        data-id="WyfUo5G8iQzVmEZbx06c8MEKgFwyRT5gQ3shSWsL1JyoWnRkP"
        data-ratio="1.777778"
        data-type="v"
        data-skin-color="rgba(25,45,78,1)"
        data-shadow=""
        style={{
          width: "100%",
          aspectRatio: "1.77778 / 1",
          background: "linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%)",
          borderRadius: "10px",
        }}
      />
    </>
  );
}
