import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/nowfix-logo1.png";

const styles = `
  .brand-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    user-select: none;
    flex-shrink: 0;
    text-decoration: none;
  }

  .brand-logo-img {
    height: 36px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  .brand-logo-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    line-height: 1;
    white-space: nowrap;
  }

  .brand-logo-now { color: var(--primary, #1F5BB5); }
  .brand-logo-fix { color: var(--orange, #FF9F1C); }
`;

export default function Logo() {
  const navigate = useNavigate();

  return (
    <>
      <style>{styles}</style>
      <div className="brand-logo" onClick={() => navigate("/")}>
        <img src={logoImg} alt="NowFix" className="brand-logo-img" />
        <span className="brand-logo-text">
          <span className="brand-logo-now">NOW</span><span className="brand-logo-fix">FIX</span>
        </span>
      </div>
    </>
  );
}