import { Link } from "react-router-dom";
import Logo from "../ui/Logo"; 

const styles = `
  .footer { 
    background: #0A192F; 
    color: white; 
    padding: 60px 1.5rem 20px; 
    font-family: var(--font-body); 
    margin-top: auto; 
    border-top: 4px solid var(--orange, #FF9F1C); 
  }
  .ftr-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; }
  
  .ftr-brand-logo-wrap { margin-bottom: 16px; }
  
  .ftr-brand p { color: #9CA3AF; font-size: 0.9rem; line-height: 1.6; }
  .ftr-links h4 { font-size: 1.1rem; margin-bottom: 16px; font-weight: 600; color: #F3F4F6; }
  .ftr-links ul { list-style: none; padding: 0; margin: 0; }
  .ftr-links li { margin-bottom: 12px; }
  .ftr-links a { color: #D1D5DB; text-decoration: none; font-size: 0.9rem; transition: color 0.2s; cursor: pointer; }
  .ftr-links a:hover { color: var(--orange, #FF9F1C); }
  .ftr-partner { background: rgba(255, 255, 255, 0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); }
  .ftr-partner-btn { display: inline-block; background: var(--orange, #FF9F1C); color: #0A192F; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 700; margin-top: 12px; font-size: 0.9rem; transition: transform 0.2s; }
  .ftr-partner-btn:hover { transform: translateY(-2px); }
  .ftr-bottom { max-width: 1200px; margin: 40px auto 0; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center; color: #6B7280; font-size: 0.8rem; }
  
  @media (max-width: 768px) { 
    .ftr-grid { grid-template-columns: 1fr; gap: 32px; } 
    .ftr-brand, .ftr-partner { text-align: center; }
    .ftr-brand-logo-wrap { display: flex; justify-content: center; } 
  }
`;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{styles}</style>
      <footer className="footer">
        <div className="ftr-grid">
          
          <div className="ftr-brand">
            <div className="ftr-brand-logo-wrap" onClick={scrollToTop} style={{cursor: "pointer"}}>
              <Logo />
            </div>
            <p>Expert local professionals in Bikaner, Rajasthan.<br/>Fix any problem instantly.</p>
          </div>

          <div className="ftr-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/#services">All Services</Link></li>
              <li><Link to="/login">Customer Login</Link></li>
            </ul>
          </div>

          <div className="ftr-partner">
            <h4>Are you a Pro?</h4>
            <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginTop: '8px' }}>
              Earn money offering your skills in Bikaner.
            </p>
            <Link to="/join" onClick={scrollToTop} className="ftr-partner-btn">
              Join as Partner
            </Link>
          </div>

        </div>
        
        <div className="ftr-bottom">
          © {new Date().getFullYear()} NowFix Bikaner. All rights reserved.
        </div>
      </footer>
    </>
  );
}