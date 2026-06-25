import Link from "next/link";

// 4-column site footer + bottom bar. Appears on every page via app/layout.tsx.
export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ fontSize: "1.15rem", marginBottom: "4px" }}>
              Ralph Estep <span className="accent" style={{ color: "var(--gold)" }}>Jr.</span>
            </div>
            <p>
              Licensed Public Accountant (LPA), business coach, author, and podcaster.
              Helping everyday people build real financial confidence — not just
              information, but the tools to act on it.
            </p>
            <p style={{ marginTop: "12px", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
              Saggio Management Group
              <br />
              1100 Dutch Neck Road, Middletown, DE
              <br />
              <a href="mailto:ralph@askralph.com" style={{ color: "rgba(255,255,255,0.5)" }}>
                ralph@askralph.com
              </a>
            </p>
          </div>
          <div className="footer-col">
            <h4>Shows</h4>
            <ul>
              <li><Link href="/shows#bfc">Becoming Financially Confident</Link></li>
              <li><Link href="/shows#fcc">Financially Confident Christian</Link></li>
              <li><Link href="/shows#truth">Truth Unveiled with Ralph</Link></li>
              <li><Link href="/shows#content-creator">The Content Creator&apos;s Accountant</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Work Together</h4>
            <ul>
              <li><Link href="/coaching">Coaching</Link></li>
              <li><Link href="/speaking">Speaking</Link></li>
              <li><Link href="/resources">Books &amp; Resources</Link></li>
              <li>
                <a href="https://saggioaccounting.com" target="_blank" rel="noopener">
                  Accounting Services ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>More</h4>
            <ul>
              <li><Link href="/about">About Ralph</Link></li>
              <li><Link href="/press">Media Kit / Press</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li>
                <a href="https://contentcreatorsaccountant.com/audit" target="_blank" rel="noopener">
                  Free Creator Audit ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Ralph Estep Jr. · Saggio Management Group · All rights reserved.</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
