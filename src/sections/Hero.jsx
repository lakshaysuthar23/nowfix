import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";
import heroBg from "../assets/hero-bg.webp";

const styles = `
  .hero {
    padding-top: var(--navbar-height);
    background: var(--bg);
    font-family: var(--font-body);
    overflow-x: hidden;
  }

  .hero-main {
  position: relative;
  padding: 56px 1.25rem 48px;
  text-align: center;
  overflow: hidden;
}
  .hero-bg {
  position: absolute;
  inset: 0;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
  180deg,
  rgba(0,0,0,0.1) 0%,
  rgba(0,0,0,0.4) 50%,
  rgba(0,0,0,0.1) 100%
);
}

  .hero-inner {
  position: relative;
  z-index: 2;

  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: white;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-full);
    padding: 5px 14px;
    margin-bottom: 20px;
    box-shadow: var(--shadow-sm);
  }

  .hero-badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--orange);
    animation: heroBlink 2s infinite;
    flex-shrink: 0;
  }

  @keyframes heroBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .hero-badge span {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--text-2);
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .hero-headline {
    font-family: var(--font-heading);
    font-size: clamp(1.75rem, 5vw, 3.4rem);
    font-weight: 800;
    color: white;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin-bottom: 14px;
    max-width: 700px;
    padding: 0 0.5rem;
  }

  .hero-headline-blue { color: var(--orange); }
  .hero-headline-orange { color: var(--orange); }

  .hero-sub {
    font-size: 0.92rem;
    color: rgba(255, 255, 255, 0.91);
    line-height: 1.7;
    max-width: 440px;
    margin-bottom: 28px;
    font-weight: 400;
    padding: 0 0.5rem;
  }

  .hero-cta {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 40px;
  }

  .hero-btn-primary {
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 600;
    color: white;
    background: var(--primary);
    padding: 0.75rem 2rem;
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    box-shadow: var(--shadow-primary);
    transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
    white-space: nowrap;
  }

  .hero-btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(31,91,181,0.35);
  }

  .hero-btn-primary:active { transform: translateY(0); }

  /* Stats row */
  .hero-stats {
    display: flex;
    align-items: center;
    background: white;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    width: 100%;
    max-width: 640px;
  }

  .hero-stat {
    flex: 1;
    padding: 14px 8px;
    text-align: center;
    position: relative;
    transition: background var(--transition);
    min-width: 0;
  }

  .hero-stat:hover { background: var(--bg-2); }

  .hero-stat:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: var(--border);
  }

  .hero-stat-value {
    font-family: var(--font-heading);
    font-size: clamp(0.85rem, 2.5vw, 1.1rem);
    font-weight: 800;
    color: var(--primary);
    letter-spacing: -0.02em;
    line-height: 1.2;
    white-space: nowrap;
  }

  .hero-stat-label {
    font-size: clamp(0.58rem, 1.5vw, 0.68rem);
    color: var(--text-3);
    font-weight: 500;
    margin-top: 2px;
    line-height: 1.3;
  }

  /* Services section */
  .hero-services {
    background: var(--bg);
    padding: 40px 1.25rem 56px;
    border-top: 1px solid var(--border);
  }

  .hero-services-inner {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .hero-services-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .hero-services-title {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  .hero-services-all {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--primary);
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-body);
    transition: opacity var(--transition);
  }

  .hero-services-all:hover { opacity: 0.7; }

  .hero-services-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
  }

  .hero-svc-card {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px 6px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-sm);
    min-width: 0;
  }

  .hero-svc-card:hover {
    border-color: var(--primary);
    background: var(--primary-light);
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
  }

  .hero-svc-icon {
    width: 48px;
    height: 48px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  .hero-svc-card:hover .hero-svc-icon { transform: scale(1.1); }

  .hero-svc-icon svg { width: 24px; height: 24px; }

  .hero-svc-name {
    font-size: clamp(0.58rem, 1.2vw, 0.7rem);
    font-weight: 600;
    color: var(--text-2);
    text-align: center;
    line-height: 1.3;
    transition: color 0.2s ease;
    word-break: break-word;
  }

  .hero-svc-card:hover .hero-svc-name { color: var(--primary); }

  @media (max-width: 900px) {
    .hero-services-grid { grid-template-columns: repeat(4, 1fr); gap: 10px; }
  }

  @media (max-width: 480px) {
    .hero-main { padding: 40px 1rem 36px; }
    .hero-services { padding: 32px 1rem 48px; }
    .hero-btn-primary { width: 100%; text-align: center; }
    .hero-cta { width: 100%; }
    .hero-services-grid { grid-template-columns: repeat(4, 1fr); gap: 8px; }
    .hero-svc-icon { width: 42px; height: 42px; }
  }
`;

const services = [
  {
    name: "Plumbing",
    color: "#eff6ff",
    iconColor: "#2563eb",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v4h4V6h4v2h4V4a2 2 0 0 0-2-2z" />
        <path d="M4 8v10a2 2 0 0 0 2 2h3" />
        <path d="M18 12h-8" />
        <path d="M18 12a4 4 0 0 1 0 8h-5" />
        <path d="M9 20v-4" />
      </svg>
    ),
  },
  {
    name: "Electrician",
    color: "#fefce8",
    iconColor: "#ca8a04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: "AC Repair",
    color: "#f0fdf4",
    iconColor: "#16a34a",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="8" rx="2" />
        <path d="M7 14v4" />
        <path d="M12 14v4" />
        <path d="M17 14v4" />
        <path d="M6 10h.01" />
        <path d="M10 10h4" />
      </svg>
    ),
  },
  {
    name: "Cleaning",
    color: "#fdf4ff",
    iconColor: "#a21caf",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22l4-1 12.5-12.5a2.12 2.12 0 0 0-3-3L4 18l-1 4z" />
        <path d="M14.5 5.5l3 3" />
        <line x1="8" y1="22" x2="8" y2="18" />
        <line x1="4" y1="19" x2="8" y2="19" />
      </svg>
    ),
  },
  {
    name: "Carpentry",
    color: "#fff7ed",
    iconColor: "#c2410c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0a2.12 2.12 0 0 1 0-3L12 9" />
        <path d="M17.64 15L22 10.64" />
        <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
      </svg>
    ),
  },
  {
    name: "Appliance Repair",
    color: "#eff6ff",
    iconColor: "#1d4ed8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8h.01" />
        <path d="M11 8h.01" />
      </svg>
    ),
  },
  {
    name: "Painting",
    color: "#fff1f2",
    iconColor: "#e11d48",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3z" />
        <path d="M9 8c-2 3-4 3.5-7 4l8 8c1-.5 3.5-2 4-7" />
      </svg>
    ),
  },
  {
    name: "Pest Control",
    color: "#f0fdf4",
    iconColor: "#15803d",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4.97 0 9-3.58 9-8s-4.03-8-9-8-9 3.58-9 8 4.03 8 9 8z" />
        <path d="M15 9c0-1.66-1.34-3-3-3s-3 1.34-3 3" />
        <path d="M9 14h6" />
        <path d="M9 17h6" />
        <path d="M5 9l-2-2" />
        <path d="M19 9l2-2" />
        <path d="M5 19l-2 2" />
        <path d="M19 19l2 2" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "100+", label: "Verified Workers" },
  { value: "4.8★", label: "Average Rating" },
  { value: "Same Day", label: "Service Available" },
];

export default function Hero() {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleBookClick = () => {
    if (user) {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <style>{styles}</style>
      <section className="hero">

        <div className="hero-main">

          <div className="hero-bg"></div>

          <div className="hero-inner">

            <div className="hero-badge">
              <div className="hero-badge-dot" />
              <span>Now live in Bikaner, Rajasthan</span>
            </div>

            <h1 className="hero-headline">
              Fix Any Problem{" "}
              <span className="hero-headline-orange">Instantly</span>
              {" "}with{" "}
              <span className="hero-headline-blue">NowFix</span>
            </h1>

            <p className="hero-sub">
              Book trusted professionals for repairs, cleaning, electrical
              and more — fast, affordable, right at your doorstep.
            </p>

            <div className="hero-cta">
              <button
                className="hero-btn-primary"
                onClick={handleBookClick}
              >
                Book a Service →
              </button>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.value} className="hero-stat">
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

        <div className="hero-services" id="services">
          <div className="hero-services-inner">
            <div className="hero-services-header">
              <span className="hero-services-title">Our Services</span>
              <button className="hero-services-all">View all →</button>
            </div>
            <div className="hero-services-grid">
              {services.map((svc) => (
                <div
                  key={svc.name}
                  className="hero-svc-card"
                  onClick={() => navigate(`/service/${svc.name.toLowerCase().replace(/ /g, "-")}`)}
                >
                  <div
                    className="hero-svc-icon"
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