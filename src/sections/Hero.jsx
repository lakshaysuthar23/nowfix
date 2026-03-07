import { useNavigate } from "react-router-dom";

const styles = `
  .hero {
    padding-top: var(--navbar-height);
    background: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-inner {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 36px 1.5rem 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--primary-light);
    border: 1px solid rgba(37, 99, 235, 0.2);
    border-radius: 20px;
    padding: 4px 12px;
    margin-bottom: 20px;
  }

  .hero-badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--primary);
    animation: blink 2s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .hero-badge span {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--primary);
    letter-spacing: 0.02em;
  }

  .hero-headline {
    font-family: var(--font-display);
    font-size: clamp(2.4rem, 5.5vw, 3.8rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.15;
    color: var(--text);
    margin-bottom: 14px;
    max-width: 640px;
    padding-bottom: 4px;
  }

  .hero-headline-gradient {
    background: linear-gradient(90deg, #2563eb 0%, #06b6d4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline;
  }

  .hero-sub {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.7;
    max-width: 380px;
    margin-bottom: 24px;
    font-weight: 400;
  }

  .hero-cta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 28px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero-btn-primary {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    background: var(--primary);
    padding: 0.65rem 1.5rem;
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    box-shadow: var(--shadow-primary);
    transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
  }

  .hero-btn-primary:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(37,99,235,0.35);
  }

  .hero-btn-primary:active { transform: translateY(0); }

  .hero-btn-secondary {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-2);
    background: var(--bg);
    padding: 0.65rem 1.5rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border-2);
    cursor: pointer;
    transition: all var(--transition);
  }

  .hero-btn-secondary:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--primary-light);
    transform: translateY(-2px);
  }

  .hero-btn-secondary:active { transform: translateY(0); }

  .hero-trust {
    display: flex;
    align-items: stretch;
    margin-bottom: 36px;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    width: 100%;
    max-width: 700px;
  }

  .hero-trust-item {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 14px 16px;
    background: var(--bg);
    transition: background var(--transition);
    position: relative;
  }

  .hero-trust-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 18%;
    height: 64%;
    width: 1px;
    background: var(--border);
  }

  .hero-trust-item:hover { background: var(--bg-2); }

  .hero-trust-icon-wrap {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .hero-trust-text { text-align: left; }

  .hero-trust-value {
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--text-2);
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .hero-trust-label {
    font-size: 0.67rem;
    color: var(--muted);
    font-weight: 500;
    line-height: 1.3;
    margin-top: 1px;
  }

  .hero-services-wrap { width: 100%; max-width: 900px; }

  .hero-services-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .hero-services-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.01em;
  }

  .hero-services-link {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--primary);
    cursor: pointer;
    border: none;
    background: none;
    font-family: var(--font-body);
    transition: opacity var(--transition);
  }

  .hero-services-link:hover { opacity: 0.7; }

  .hero-services-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
  }

  .hero-svc-card {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px 6px 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-sm);
  }

  .hero-svc-card:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
    background: var(--primary-light);
  }

  .hero-svc-icon-wrap {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  .hero-svc-card:hover .hero-svc-icon-wrap { transform: scale(1.08); }

  .hero-svc-icon-wrap svg {
    width: 23px;
    height: 23px;
  }

  .hero-svc-name {
    font-size: 0.68rem;
    font-weight: 600;
    color: var(--text-2);
    text-align: center;
    line-height: 1.3;
    transition: color 0.2s ease;
  }

  .hero-svc-card:hover .hero-svc-name { color: var(--primary); }

  @media (max-width: 768px) {
    .hero-services-grid { grid-template-columns: repeat(4, 1fr); gap: 8px; }
    .hero-trust-item.hidden-mobile { display: none; }
    .hero-trust { max-width: 100%; }
    .hero-trust-item { padding: 13px 12px; gap: 8px; }
  }

  @media (max-width: 520px) {
    .hero-btn-primary, .hero-btn-secondary { width: 100%; text-align: center; }
    .hero-cta { flex-direction: column; width: 100%; max-width: 300px; }
  }
`;

const services = [
  {
    name: "Plumbing",
    color: "#eff6ff",
    iconColor: "#2563eb",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v4h4V6h4v2h4V4a2 2 0 0 0-2-2z"/>
        <path d="M4 8v10a2 2 0 0 0 2 2h3"/>
        <path d="M14 8v4"/>
        <path d="M18 12h-8"/>
        <path d="M18 12a4 4 0 0 1 0 8h-5"/>
        <path d="M11 16H9"/>
        <path d="M9 20v-4"/>
      </svg>
    ),
  },
  {
    name: "Electrician",
    color: "#fefce8",
    iconColor: "#ca8a04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    name: "AC Repair",
    color: "#f0fdf4",
    iconColor: "#16a34a",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="8" rx="2"/>
        <path d="M7 14v4"/>
        <path d="M12 14v4"/>
        <path d="M17 14v4"/>
        <path d="M6 10h.01"/>
        <path d="M10 10h4"/>
      </svg>
    ),
  },
  {
    name: "Cleaning",
    color: "#fdf4ff",
    iconColor: "#a21caf",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22l4-1 12.5-12.5a2.12 2.12 0 0 0-3-3L4 18l-1 4z"/>
        <path d="M14.5 5.5l3 3"/>
        <line x1="8" y1="22" x2="8" y2="18"/>
        <line x1="4" y1="19" x2="8" y2="19"/>
      </svg>
    ),
  },
  {
    name: "Carpentry",
    color: "#fff7ed",
    iconColor: "#c2410c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0a2.12 2.12 0 0 1 0-3L12 9"/>
        <path d="M17.64 15L22 10.64"/>
        <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/>
      </svg>
    ),
  },
  {
    name: "Appliance Repair",
    color: "#eff6ff",
    iconColor: "#1d4ed8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8"/>
        <path d="M12 17v4"/>
        <path d="M7 8h.01"/>
        <path d="M11 8h.01"/>
      </svg>
    ),
  },
  {
    name: "Painting",
    color: "#fff1f2",
    iconColor: "#e11d48",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3z"/>
        <path d="M9 8c-2 3-4 3.5-7 4l8 8c1-.5 3.5-2 4-7"/>
        <path d="M14.5 17.5L4.5 15"/>
      </svg>
    ),
  },
  {
    name: "Pest Control",
    color: "#f0fdf4",
    iconColor: "#15803d",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4.97 0 9-3.58 9-8s-4.03-8-9-8-9 3.58-9 8 4.03 8 9 8z"/>
        <path d="M15 9c0-1.66-1.34-3-3-3s-3 1.34-3 3"/>
        <path d="M9 14h6"/>
        <path d="M9 17h6"/>
        <path d="M5 9l-2-2"/>
        <path d="M19 9l2-2"/>
        <path d="M5 19l-2 2"/>
        <path d="M19 19l2 2"/>
      </svg>
    ),
  },
];

const trustItems = [
  {
    value: "500+",
    label: "Happy Customers",
    bg: "#eff6ff",
    iconColor: "#2563eb",
    hideMobile: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    value: "100+",
    label: "Verified Workers",
    bg: "#f0fdf4",
    iconColor: "#16a34a",
    hideMobile: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
  },
  {
    value: "4.8",
    label: "Average Rating",
    bg: "#fefce8",
    iconColor: "#ca8a04",
    hideMobile: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ),
  },
  {
    value: "Same Day",
    label: "Service Available",
    bg: "#fff7ed",
    iconColor: "#c2410c",
    hideMobile: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
      </svg>
    ),
  },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <style>{styles}</style>
      <section className="hero">
        <div className="hero-inner">

          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span>Now live in Bikaner, Rajasthan</span>
          </div>

          <h1 className="hero-headline">
            Every fix,{" "}
            <span className="hero-headline-gradient">right now.</span>
          </h1>

          <p className="hero-sub">
            Book trusted professionals for repairs, cleaning,
            electrical and more — fast and affordable.
          </p>

          <div className="hero-cta">
            <button className="hero-btn-primary" onClick={() => navigate("/login")}>
              Book a Service →
            </button>
            <button className="hero-btn-secondary" onClick={() => navigate("/join")}>
              Join as Worker
            </button>
          </div>

          <div className="hero-trust">
            {trustItems.map((item) => (
              <div
                key={item.value}
                className={`hero-trust-item${item.hideMobile ? " hidden-mobile" : ""}`}
              >
                <div className="hero-trust-icon-wrap" style={{ background: item.bg }}>
                  <svg viewBox="0 0 24 24" fill={item.iconColor} width="17" height="17">
                    {item.icon.props.children}
                  </svg>
                </div>
                <div className="hero-trust-text">
                  <div className="hero-trust-value">{item.value}</div>
                  <div className="hero-trust-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-services-wrap">
            <div className="hero-services-header">
              <span className="hero-services-title">Our Services</span>
              <button className="hero-services-link">View all →</button>
            </div>
            <div className="hero-services-grid">
              {services.map((svc) => (
                <div
                  key={svc.name}
                  className="hero-svc-card"
                  onClick={() => navigate(`/service/${svc.name.toLowerCase().replace(/ /g, "-")}`)}
                >
                  <div
                    className="hero-svc-icon-wrap"
                    style={{ background: svc.color, color: svc.iconColor }}
                  >
                    {svc.icon}
                  </div>
                  <span className="hero-svc-name">{svc.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}