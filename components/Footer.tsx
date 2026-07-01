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
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/ralph-estep-jr/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ralph.v.estep/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
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
