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

  @media (max-width: 480px) {
    .hero-main { padding: 40px 1rem 36px; }
    .hero-btn-primary { width: 100%; text-align: center; }
    .hero-cta { width: 100%; }
  }
`;

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
      navigate("/services"); 
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
      </section>
    </>
  );
}