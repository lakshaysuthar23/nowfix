import { useNavigate } from "react-router-dom";
import { services } from "../data/services"; // Importing the data file you already have

const styles = `
  .svc-section {
    padding: 20px 1.5rem 80px;
    background: var(--bg, #FFFFFF);
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .svc-container {
    max-width: var(--max-width, 1200px);
    margin: 0 auto;
  }

  .svc-header {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .svc-title-wrap h2 {
    font-family: var(--font-heading, 'Montserrat', sans-serif);
    font-size: 2rem;
    font-weight: 800;
    color: var(--text, #111827);
    margin-bottom: 8px;
    letter-spacing: -0.03em;
  }

  .svc-title-wrap p {
    color: var(--text-3, #6B7280);
    font-size: 1.05rem;
    font-weight: 500;
  }

  .svc-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 items per row on desktop */
    gap: 24px;
  }

  .svc-card {
    position: relative;
    height: 300px;
    border-radius: var(--radius-lg, 16px);
    overflow: hidden;
    cursor: pointer;
    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .svc-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1));
  }

  .svc-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .svc-card:hover .svc-image {
    transform: scale(1.08); /* Premium slow zoom on hover */
  }

  /* Dark gradient overlay so text is always readable */
  .svc-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top, 
      rgba(17, 24, 39, 0.95) 0%, 
      rgba(17, 24, 39, 0.4) 50%, 
      transparent 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 24px;
  }

  .svc-tagline {
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .svc-name {
    font-family: var(--font-heading, 'Montserrat', sans-serif);
    font-size: 1.35rem;
    font-weight: 800;
    color: white;
    margin-bottom: 16px;
    line-height: 1.2;
  }

  .svc-price-badge {
    display: inline-flex;
    align-items: center;
    background: white;
    color: var(--text, #111827);
    padding: 6px 12px;
    border-radius: var(--radius-sm, 6px);
    font-size: 0.85rem;
    font-weight: 700;
    width: fit-content;
  }

  .svc-price-badge span {
    color: var(--primary, #1F5BB5);
    margin-left: 4px;
  }

  /* Mobile & Tablet Responsiveness */
  @media (max-width: 1024px) {
    .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .svc-card { height: 260px; }
  }

  @media (max-width: 600px) {
    .svc-section { padding: 20px 1rem 60px; }
    .svc-header { flex-direction: column; align-items: flex-start; margin-bottom: 24px; }
    .svc-title-wrap h2 { font-size: 1.5rem; }
    .svc-title-wrap p { font-size: 0.9rem; }
    
    /* Perfect 2-column grid for mobile thumb-scrolling */
    .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .svc-card { height: 200px; border-radius: var(--radius-md, 12px); }
    .svc-overlay { padding: 16px 12px; }
    .svc-name { font-size: 1.1rem; margin-bottom: 12px; }
    .svc-tagline { font-size: 0.65rem; margin-bottom: 4px; }
    .svc-price-badge { padding: 4px 8px; font-size: 0.75rem; }
  }
`;

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <style>{styles}</style>
      <section className="svc-section" id="services">
        <div className="svc-container">
          
          <div className="svc-header">
            <div className="svc-title-wrap">
              <h2>Top Services</h2>
              <p>Expert local professionals in Bikaner, right at your doorstep.</p>
            </div>
          </div>

          <div className="svc-grid">
            {services.map((svc) => (
              <div 
                key={svc.id} 
                className="svc-card"
                onClick={() => navigate(`/service/${svc.id}`)}
              >
                {/* Background Image */}
                <img src={svc.image} alt={svc.name} className="svc-image" loading="lazy" />
                
                {/* Dark gradient overlay with text */}
                <div className="svc-overlay">
                  <span className="svc-tagline">{svc.tagline}</span>
                  <h3 className="svc-name">{svc.name}</h3>
                  <div className="svc-price-badge">
                    Starts at <span>₹{svc.startingPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}