import { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = `
  .login-page {
    min-height: 100vh;
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    font-family: var(--font-body);
  }

  .login-card {
    width: 100%;
    max-width: 400px;
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-xl);
    padding: 40px 36px;
    box-shadow: var(--shadow-lg);
  }

  .login-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 32px;
    cursor: pointer;
  }

  .login-logo-mark {
    width: 30px;
    height: 30px;
    background: var(--primary);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-logo-mark svg {
    width: 15px;
    height: 15px;
    fill: white;
  }

  .login-logo-text {
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--text);
  }

  .login-logo-text span { color: var(--primary); }

  .login-title {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.03em;
    margin-bottom: 6px;
    line-height: 1.2;
  }

  .login-sub {
    font-size: 0.85rem;
    color: var(--muted);
    margin-bottom: 28px;
    line-height: 1.5;
  }

  .login-label {
    display: block;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-2);
    margin-bottom: 7px;
    letter-spacing: 0.01em;
  }

  .login-phone-wrap {
    display: flex;
    align-items: center;
    border: 1.5px solid var(--border-2);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: border-color var(--transition);
    margin-bottom: 16px;
  }

  .login-phone-wrap:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-glow);
  }

  .login-phone-prefix {
    padding: 0 14px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-2);
    background: var(--bg-2);
    height: 46px;
    display: flex;
    align-items: center;
    border-right: 1.5px solid var(--border-2);
    flex-shrink: 0;
  }

  .login-phone-input {
    flex: 1;
    height: 46px;
    border: none;
    background: transparent;
    padding: 0 14px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text);
    font-family: var(--font-body);
    outline: none;
    letter-spacing: 0.03em;
  }

  .login-phone-input::placeholder { color: var(--muted-2); }

  .login-btn {
    width: 100%;
    height: 46px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    font-size: 0.9rem;
    font-weight: 600;
    font-family: var(--font-body);
    cursor: pointer;
    transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
    box-shadow: var(--shadow-primary);
    letter-spacing: 0.01em;
    margin-bottom: 20px;
  }

  .login-btn:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(37,99,235,0.35);
  }

  .login-btn:active { transform: translateY(0); }

  .login-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  .login-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }

  .login-divider-line {
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .login-divider span {
    font-size: 0.75rem;
    color: var(--muted-2);
    font-weight: 500;
  }

  .login-worker-link {
    width: 100%;
    height: 44px;
    background: transparent;
    color: var(--text-2);
    border: 1.5px solid var(--border-2);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 600;
    font-family: var(--font-body);
    cursor: pointer;
    transition: all var(--transition);
    letter-spacing: 0.01em;
  }

  .login-worker-link:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--primary-light);
  }

  .login-terms {
    font-size: 0.72rem;
    color: var(--muted-2);
    text-align: center;
    line-height: 1.6;
    margin-top: 20px;
  }

  .login-terms span {
    color: var(--primary);
    cursor: pointer;
    font-weight: 500;
  }

  .login-back {
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--muted);
    cursor: pointer;
    margin-bottom: 24px;
    padding: 0;
    transition: color var(--transition);
  }

  .login-back:hover { color: var(--text); }

  /* OTP inputs */
  .otp-wrap {
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
    justify-content: center;
  }

  .otp-input {
    width: 52px;
    height: 56px;
    border: 1.5px solid var(--border-2);
    border-radius: var(--radius-md);
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text);
    font-family: var(--font-body);
    background: var(--bg);
    outline: none;
    transition: border-color var(--transition), box-shadow var(--transition);
    caret-color: var(--primary);
  }

  .otp-input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-glow);
  }

  .otp-input.filled {
    border-color: var(--primary);
    background: var(--primary-light);
    color: var(--primary);
  }

  .otp-resend {
    text-align: center;
    font-size: 0.8rem;
    color: var(--muted);
    margin-bottom: 20px;
  }

  .otp-resend span {
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
  }

  .otp-phone-display {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: 10px 16px;
    margin-bottom: 24px;
  }

  .otp-phone-display svg {
    width: 15px;
    height: 15px;
    fill: var(--primary);
    flex-shrink: 0;
  }

  .otp-phone-display span {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-2);
  }

  @media (max-width: 480px) {
    .login-card { padding: 32px 24px; }
    .otp-input { width: 44px; height: 50px; font-size: 1.1rem; }
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  function handlePhoneSubmit() {
    if (phone.length === 10) setStep(2);
  }

  function handleOtpChange(value, index) {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  }

  function handleOtpKeyDown(e, index) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  }

  return (
    <>
      <style>{styles}</style>
      <div className="login-page">
        <div className="login-card">

          <div className="login-logo" onClick={() => navigate("/")}>
            <div className="login-logo-mark">
              <svg viewBox="0 0 24 24">
                <path d="M13 2L4.5 13.5H11L10 22L20 10.5H13.5L13 2Z" />
              </svg>
            </div>
            <span className="login-logo-text">Now<span>Fix</span></span>
          </div>

          {step === 1 && (
            <>
              <h1 className="login-title">Login or Sign up</h1>
              <p className="login-sub">Enter your mobile number to continue</p>

              <label className="login-label">Mobile Number</label>
              <div className="login-phone-wrap">
                <div className="login-phone-prefix">🇮🇳 +91</div>
                <input
                  className="login-phone-input"
                  type="tel"
                  maxLength={10}
                  placeholder="98765 43210"
                  value={phone}
                  onChange={e => setPhone(e.target.value.replace(/\D/g, ""))}
                  onKeyDown={e => e.key === "Enter" && handlePhoneSubmit()}
                />
              </div>

              <button
                className="login-btn"
                onClick={handlePhoneSubmit}
                disabled={phone.length !== 10}
              >
                Send OTP →
              </button>

              <div className="login-divider">
                <div className="login-divider-line" />
                <span>are you a worker?</span>
                <div className="login-divider-line" />
              </div>

              <button
                className="login-worker-link"
                onClick={() => navigate("/join")}
              >
                Join as a Service Worker
              </button>

              <p className="login-terms">
                By continuing, you agree to our{" "}
                <span>Terms of Service</span> and{" "}
                <span>Privacy Policy</span>
              </p>
            </>
          )}

          {step === 2 && (
            <>
              <button className="login-back" onClick={() => setStep(1)}>
                ← Back
              </button>

              <h1 className="login-title">Enter OTP</h1>
              <p className="login-sub">We sent a 4-digit code to</p>

              <div className="otp-phone-display">
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91 {phone}</span>
              </div>

              <div className="otp-wrap">
                {otp.map((val, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    className={`otp-input${val ? " filled" : ""}`}
                    type="tel"
                    maxLength={1}
                    value={val}
                    onChange={e => handleOtpChange(e.target.value, i)}
                    onKeyDown={e => handleOtpKeyDown(e, i)}
                  />
                ))}
              </div>

              <p className="otp-resend">
                Didn't receive the code?{" "}
                <span onClick={() => setOtp(["", "", "", ""])}>Resend OTP</span>
              </p>

              <button
                className="login-btn"
                onClick={() => navigate("/")}
                disabled={otp.some(v => v === "")}
              >
                Verify & Continue →
              </button>

              <p className="login-terms">
                OTP valid for 10 minutes only
              </p>
            </>
          )}

        </div>
      </div>
    </>
  );
}