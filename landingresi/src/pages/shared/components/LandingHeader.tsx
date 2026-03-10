import { useState } from "react";

export interface LandingNavItem {
  label: string;
  href: string;
}

interface LandingHeaderProps {
  logoText: string;
  navItems: LandingNavItem[];
}

export default function LandingHeader({ logoText, navItems }: LandingHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="landing-header">
      <nav className="landing-nav">
        <div className="nav-logo">
          <div className="logo-icon">
            <svg className="logo-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <span className="logo-text">{logoText}</span>
        </div>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <button className="nav-mobile-button" onClick={() => setMenuOpen((prev) => !prev)}>
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-menu">
          <div className="nav-mobile-links">
            {navItems.map((item) => (
              <a key={`mobile-${item.href}`} href={item.href} className="nav-mobile-link">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
