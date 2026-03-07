import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const styles = `
  .nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    height: var(--navbar-height);
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    padding: 0 2rem;
    transition: box-shadow var(--transition-slow);
    font-family: var(--font-body);
  }

  .nav.scrolled {
    box-shadow: var(--shadow-md);
  }

  .nav-inner {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    user-select: none;
    flex-shrink: 0;
  }

  .nav-logo-mark {
    width: 32px;
    height: 32px;
    background: var(--primary);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition);
  }

  .nav-logo:hover .nav-logo-mark {
    transform: rotate(-8deg) scale(1.08);
  }

  .nav-logo-mark svg {
    width: 17px;
    height: 17px;
    fill: white;
  }

  .nav-logo-text {
    font-family: var(--font-body);
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--text);
    white-space: nowrap;
  }

  .nav-logo-text span {
    color: var(--primary);
  }

  .nav-location {
    display: flex;
    align-items: center;
    gap: 5px;
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 5px 12px;
    cursor: pointer;
    transition: border-color var(--transition), background var(--transition);
    flex-shrink: 0;
  }

  .nav-location:hover {
    border-color: var(--primary);
    background: var(--primary-light);
  }

  .nav-location svg {
    width: 13px;
    height: 13px;
    fill: var(--primary);
    flex-shrink: 0;
  }

  .nav-location span {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-2);
    letter-spacing: 0.01em;
  }

  .nav-location-arrow {
    fill: var(--muted) !important;
    width: 10px !important;
    height: 10px !important;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.1rem;
    flex: 1;
    justify-content: center;
    list-style: none;
  }

  .nav-links a {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--muted);
    padding: 0.45rem 0.85rem;
    border-radius: var(--radius-sm);
    transition: color var(--transition), background var(--transition);
    letter-spacing: 0.01em;
    text-decoration: none;
    display: block;
  }

  .nav-links a:hover {
    color: var(--text);
    background: var(--surface);
  }

  .nav-links a.active {
    color: var(--primary);
    background: var(--primary-light);
    font-weight: 600;
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-shrink: 0;
  }

  .nav-worker-btn {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-2);
    padding: 0.48rem 1rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border-2);
    background: var(--bg);
    transition: all var(--transition);
    letter-spacing: 0.01em;
    white-space: nowrap;
    cursor: pointer;
    font-family: var(--font-body);
  }

  .nav-worker-btn:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--primary-light);
  }

  .nav-login-btn {
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    background: var(--primary);
    padding: 0.5rem 1.15rem;
    border-radius: var(--radius-md);
    border: none;
    transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
    box-shadow: var(--shadow-primary);
    letter-spacing: 0.01em;
    white-space: nowrap;
    cursor: pointer;
    font-family: var(--font-body);
  }

  .nav-login-btn:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 24px rgba(37,99,235,0.35);
  }

  .nav-login-btn:active {
    transform: translateY(0);
  }

  .nav-hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 36px;
    height: 36px;
    padding: 4px;
    border-radius: var(--radius-sm);
    transition: background var(--transition);
    background: none;
    border: none;
    cursor: pointer;
  }

  .nav-hamburger:hover {
    background: var(--surface);
  }

  .nav-hamburger span {
    display: block;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
  }

  .nav-hamburger span:nth-child(1) { width: 22px; }
  .nav-hamburger span:nth-child(2) { width: 15px; }
  .nav-hamburger span:nth-child(3) { width: 22px; }

  .nav-hamburger.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
    width: 22px;
  }
  .nav-hamburger.open span:nth-child(2) { opacity: 0; }
  .nav-hamburger.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
    width: 22px;
  }

  .nav-mobile {
    position: fixed;
    top: var(--navbar-height);
    left: 0; right: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 1rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    z-index: 99;
    box-shadow: var(--shadow-lg);
    transform: translateY(-6px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .nav-mobile.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .nav-mobile a {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-2);
    padding: 0.75rem 0.5rem;
    border-bottom: 1px solid var(--border);
    transition: color var(--transition);
    text-decoration: none;
    display: block;
  }

  .nav-mobile a:last-of-type { border-bottom: none; }
  .nav-mobile a:hover { color: var(--primary); }

  .nav-mobile-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid var(--border);
  }

  .nav-mobile-buttons button {
    padding: 0.75rem;
    border-radius: var(--radius-md);
    font-size: 0.9rem;
    font-weight: 600;
    width: 100%;
    font-family: var(--font-body);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .nav-right { display: none; }
    .nav-location { display: none; }
    .nav-hamburger { display: flex; }
  }

  @media (max-width: 480px) {
    .nav { padding: 0 1rem; }
  }
`;

const navLinks = ["Services", "How It Works", "About"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{styles}</style>

      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">

          {/* Logo */}
          <div className="nav-logo" onClick={() => navigate("/")}>
            <div className="nav-logo-mark">
              <svg viewBox="0 0 24 24">
                <path d="M13 2L4.5 13.5H11L10 22L20 10.5H13.5L13 2Z" />
              </svg>
            </div>
            <span className="nav-logo-text">
              Now<span>Fix</span>
            </span>
          </div>

          {/* Location */}
          <div className="nav-location">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>Bikaner, RJ</span>
            <svg className="nav-location-arrow" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link}>
                <a href="#" className={active === link ? "active" : ""} onClick={e => { e.preventDefault(); setActive(link); }}>
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Buttons */}
          <div className="nav-right">
            <button
              className="nav-worker-btn"
              onClick={() => navigate("/join")}
            >
              Join as Worker
            </button>
            <button
              className="nav-login-btn"
              onClick={() => navigate("/login")}
            >
              Login →
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile${menuOpen ? " open" : ""}`}>
        {navLinks.map(link => (
          <a key={link} href="#" onClick={e => { e.preventDefault(); setActive(link); setMenuOpen(false); }}>
            {link}
          </a>
        ))}
        <div className="nav-mobile-buttons">
          <button
            className="nav-worker-btn"
            style={{ border: "1px solid var(--border-2)", color: "var(--text-2)" }}
            onClick={() => { navigate("/join"); setMenuOpen(false); }}
          >
            Join as Worker
          </button>
          <button
            className="nav-login-btn"
            style={{ background: "var(--primary)", color: "white" }}
            onClick={() => { navigate("/login"); setMenuOpen(false); }}
          >
            Login →
          </button>
        </div>
      </div>
    </>
  );
}