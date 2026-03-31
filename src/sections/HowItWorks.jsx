const styles = `
  .how-section {
    padding: 5rem 2rem;
    background: var(--bg-2, #F9FAFB);
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .how-container {
    max-width: var(--max-width, 1200px);
    margin: 0 auto;
    text-align: center;
  }

  .how-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 2.5rem;
    color: var(--text, #111827);
    margin-bottom: 3.5rem;
    letter-spacing: -0.02em;
  }

  .how-title span {
    color: var(--primary, #1F5BB5);
  }

  .how-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
    position: relative;
  }

  @media (min-width: 900px) {
    .how-grid::before {
      content: '';
      position: absolute;
      top: 45px; 
      left: 15%;
      right: 15%;
      height: 2px;
      background-image: linear-gradient(to right, var(--border, #E5E7EB) 50%, transparent 50%);
      background-size: 15px 100%;
      z-index: 1;
    }
  }

  .how-step {
    position: relative;
    z-index: 2;
    background: transparent;
    padding: 1rem;
  }

  .how-icon-wrapper {
    position: relative;
    width: 90px;
    height: 90px;
    margin: 0 auto 1.5rem;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
    border: 2px solid var(--primary-light, #E0E7FF);
    color: var(--primary, #1F5BB5);
    transition: transform 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }

  .how-step:hover .how-icon-wrapper {
    transform: translateY(-8px);
    border-color: var(--orange, #FF9F1C);
    color: var(--orange, #FF9F1C);
  }

  .how-step-num {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 32px;
    height: 32px;
    background: var(--orange, #FF9F1C);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1rem;
    border: 3px solid white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .how-step-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.35rem;
    color: var(--text, #111827);
    margin-bottom: 0.75rem;
  }

  .how-step-desc {
    font-size: 0.95rem;
    color: var(--text-2, #4B5563);
    line-height: 1.6;
    max-width: 280px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .how-title {
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }
    .how-section {
      padding: 4rem 1.5rem;
    }
  }
`;

const steps = [
  {
    id: 1,
    title: "Choose Service",
    desc: "Browse our wide range of home services and select what you need help with.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"></rect>
        <rect x="14" y="3" width="7" height="7" rx="1"></rect>
        <rect x="14" y="14" width="7" height="7" rx="1"></rect>
        <rect x="3" y="14" width="7" height="7" rx="1"></rect>
      </svg>
    )
  },
  {
    id: 2,
    title: "Book Time",
    desc: "Pick a convenient date and time slot for our professional to visit your home.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <circle cx="12" cy="15" r="2"></circle>
      </svg>
    )
  },
  {
    id: 3,
    title: "Expert Arrives",
    desc: "A verified professional arrives at your doorstep to get the job done right.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  }
];

export default function HowItWorks() {
  return (
    <>
      <style>{styles}</style>
      <section className="how-section" id="how-it-works">
        <div className="how-container">
          <h2 className="how-title">How <span>NowFix</span> Works</h2>
          
          <div className="how-grid">
            {steps.map((step) => (
              <div key={step.id} className="how-step">
                <div className="how-icon-wrapper">
                  {step.icon}
                  <div className="how-step-num">{step.id}</div>
                </div>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}