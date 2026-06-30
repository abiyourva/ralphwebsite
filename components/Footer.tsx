import Link from "next/link";

// 4-column site footer + bottom bar. Appears on every page via app/layout.tsx.
export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">Ralph Estep Jr.</div>
            <p>
              Licensed Public Accountant (LPA), business coach, author, and podcaster.
              Helping everyday people build real financial confidence.
            </p>
            <p className="footer-address">
              Saggio Management Group
              <br />
              1100 Dutch Neck Road, Middletown, DE
              <br />
              <a href="mailto:ralph@ralphestepjr.com">ralph@ralphestepjr.com</a>
            </p>
          </div>
          <div>
            <p className="footer-col-label">Shows</p>
            <div className="footer-links">
              <Link href="/shows#bfc" className="footer-link">Becoming Financially Confident</Link>
              <Link href="/shows#fcc" className="footer-link">Financially Confident Christian</Link>
              <Link href="/shows#truth" className="footer-link">Truth Unveiled with Ralph</Link>
              <Link href="/shows#content-creator" className="footer-link">The Content Creator&apos;s Accountant</Link>
            </div>
          </div>
          <div>
            <p className="footer-col-label">Work Together</p>
            <div className="footer-links">
              <Link href="/coaching" className="footer-link">Coaching</Link>
              <Link href="/speaking" className="footer-link">Speaking</Link>
              <Link href="/resources" className="footer-link">Books &amp; Resources</Link>
              <a href="https://saggioaccounting.com" target="_blank" rel="noopener" className="footer-link">
                Accounting Services ↗
              </a>
            </div>
          </div>
          <div>
            <p className="footer-col-label">More</p>
            <div className="footer-links">
              <Link href="/about" className="footer-link">About Ralph</Link>
              <Link href="/press" className="footer-link">Media Kit / Press</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <a href="https://contentcreatorsaccountant.com/audit" target="_blank" rel="noopener" className="footer-link">
                Free Creator Audit ↗
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Ralph Estep Jr. · Saggio Management Group · All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
