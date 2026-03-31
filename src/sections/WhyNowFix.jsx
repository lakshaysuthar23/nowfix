const styles = `
  .why-section {
    padding: 5rem 2rem;
    background: var(--bg, #FFFFFF);
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .why-container {
    max-width: var(--max-width, 1200px);
    margin: 0 auto;
  }

  .why-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .why-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 2.5rem;
    color: var(--text, #111827);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .why-title span {
    color: var(--primary, #1F5BB5);
  }

  .why-sub {
    color: var(--text-3, #4B5563);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .why-card {
    padding: 2.5rem 2rem;
    background: #FFFFFF;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-xl, 16px);
    transition: all 0.3s ease;
    text-align: left;
  }

  .why-card:hover {
    border-color: var(--primary, #1F5BB5);
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
  }

  .why-icon {
    width: 56px;
    height: 56px;
    background: var(--primary-light, #E0E7FF);
    color: var(--primary, #1F5BB5);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }

  .why-card:hover .why-icon {
    background: var(--primary, #1F5BB5);
    color: white;
  }

  .why-card-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--text, #111827);
    margin-bottom: 0.75rem;
  }

  .why-card-desc {
    font-size: 0.95rem;
    color: var(--text-2, #374151);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .why-title { font-size: 2rem; }
    .why-section { padding: 4rem 1.5rem; }
    .why-card { text-align: center; }
    .why-icon { margin: 0 auto 1.5rem; }
  }
`;

const features = [
  {
    title: "Verified Professionals",
    desc: "Every expert on our platform undergoes a strict background check and skill verification.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    )
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs. Get fixed, upfront pricing before you book any service.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: "Fast Service",
    desc: "In a hurry? We provide same-day service within 60 minutes in Bikaner.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    )
  },
  {
    title: "Service Warranty",
    desc: "Not satisfied? We provide a 30-day revisit warranty on all our services.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    )
  }
];

export default function WhyNowFix() {
  return (
    <>
      <style>{styles}</style>
      <section className="why-section" id="why-nowfix">
        <div className="why-container">
          <div className="why-header">
            <h2 className="why-title">Why choose <span>NowFix</span>?</h2>
            <p className="why-sub">Safe, reliable, and affordable home services at your fingertips.</p>
          </div>
          
          <div className="why-grid">
            {features.map((f, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{f.icon}</div>
                <h3 className="why-card-title">{f.title}</h3>
                <p className="why-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}