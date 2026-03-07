import { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = `
  .join-page {
    min-height: 100vh;
    background: var(--bg-2);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 1.5rem;
    font-family: var(--font-body);
  }

  .join-card {
    width: 100%;
    max-width: 520px;
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-xl);
    padding: 40px 36px;
    box-shadow: var(--shadow-lg);
  }

  .join-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 28px;
    cursor: pointer;
  }

  .join-logo-mark {
    width: 30px;
    height: 30px;
    background: var(--primary);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .join-logo-mark svg {
    width: 15px;
    height: 15px;
    fill: white;
  }

  .join-logo-text {
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--text);
  }

  .join-logo-text span { color: var(--primary); }

  .join-title {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.03em;
    margin-bottom: 6px;
  }

  .join-sub {
    font-size: 0.85rem;
    color: var(--muted);
    margin-bottom: 28px;
    line-height: 1.5;
  }

  /* Photo upload */
  .join-photo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }

  .join-photo-circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px dashed var(--border-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition);
    background: var(--bg-2);
    overflow: hidden;
    position: relative;
    margin-bottom: 8px;
  }

  .join-photo-circle:hover {
    border-color: var(--primary);
    background: var(--primary-light);
  }

  .join-photo-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
  }

  .join-photo-circle svg {
    width: 22px;
    height: 22px;
    fill: var(--muted-2);
    margin-bottom: 4px;
  }

  .join-photo-circle span {
    font-size: 0.65rem;
    color: var(--muted-2);
    font-weight: 500;
  }

  .join-photo-label {
    font-size: 0.75rem;
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
  }

  /* Form grid */
  .join-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 14px;
  }

  .join-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 14px;
  }

  .join-field.no-margin { margin-bottom: 0; }

  .join-field label {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-2);
    letter-spacing: 0.01em;
  }

  .join-input {
    height: 44px;
    border: 1.5px solid var(--border-2);
    border-radius: var(--radius-md);
    padding: 0 14px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text);
    font-family: var(--font-body);
    background: var(--bg);
    outline: none;
    transition: border-color var(--transition), box-shadow var(--transition);
  }

  .join-input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-glow);
  }

  .join-input::placeholder { color: var(--muted-2); }

  .join-select {
    height: 44px;
    border: 1.5px solid var(--border-2);
    border-radius: var(--radius-md);
    padding: 0 14px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text);
    font-family: var(--font-body);
    background: var(--bg);
    outline: none;
    cursor: pointer;
    transition: border-color var(--transition), box-shadow var(--transition);
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
  }

  .join-select:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-glow);
  }

  /* Aadhar upload */
  .join-upload-box {
    border: 1.5px dashed var(--border-2);
    border-radius: var(--radius-md);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all var(--transition);
    background: var(--bg);
    margin-bottom: 14px;
  }

  .join-upload-box:hover {
    border-color: var(--primary);
    background: var(--primary-light);
  }

  .join-upload-box.uploaded {
    border-color: var(--success);
    background: #f0fdf4;
  }

  .join-upload-box svg {
    width: 24px;
    height: 24px;
    fill: var(--muted-2);
  }

  .join-upload-box.uploaded svg { fill: var(--success); }

  .join-upload-title {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-2);
  }

  .join-upload-box.uploaded .join-upload-title { color: var(--success); }

  .join-upload-sub {
    font-size: 0.72rem;
    color: var(--muted-2);
  }

  /* Submit */
  .join-submit {
    width: 100%;
    height: 48px;
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
    margin-top: 8px;
  }

  .join-submit:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(37,99,235,0.35);
  }

  .join-submit:active { transform: translateY(0); }

  .join-login-link {
    text-align: center;
    font-size: 0.8rem;
    color: var(--muted);
    margin-top: 16px;
  }

  .join-login-link span {
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
  }

  .join-section-label {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--muted-2);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 4px;
  }

  .join-divider {
    height: 1px;
    background: var(--border);
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    .join-card { padding: 28px 20px; }
    .join-row { grid-template-columns: 1fr; }
  }
`;

const categories = [
  "Plumbing",
  "Electrician",
  "AC Repair",
  "Home Cleaning",
  "Carpentry",
  "Appliance Repair",
  "Painting",
  "Pest Control",
];

export default function JoinAsWorker() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [aadharUploaded, setAadharUploaded] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "",
    experience: "",
    city: "Bikaner",
    aadhar: "",
  });

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  }

  function handleAadharChange(e) {
    if (e.target.files[0]) setAadharUploaded(true);
  }

  function handleChange(key, value) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  return (
    <>
      <style>{styles}</style>
      <div className="join-page">
        <div className="join-card">

          {/* Logo */}
          <div className="join-logo" onClick={() => navigate("/")}>
            <div className="join-logo-mark">
              <svg viewBox="0 0 24 24">
                <path d="M13 2L4.5 13.5H11L10 22L20 10.5H13.5L13 2Z" />
              </svg>
            </div>
            <span className="join-logo-text">Now<span>Fix</span></span>
          </div>

          <h1 className="join-title">Join as a Worker</h1>
          <p className="join-sub">Fill in your details to start receiving jobs in Bikaner</p>

          {/* Profile Photo */}
          <div className="join-photo-wrap">
            <div className="join-photo-circle" onClick={() => document.getElementById("photo-input").click()}>
              {photo ? (
                <img src={photo} alt="Profile" />
              ) : (
                <>
                  <svg viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                  <span>Add Photo</span>
                </>
              )}
            </div>
            <span className="join-photo-label" onClick={() => document.getElementById("photo-input").click()}>
              {photo ? "Change Photo" : "Upload Profile Photo"}
            </span>
            <input
              id="photo-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handlePhotoChange}
            />
          </div>

          {/* Personal Info */}
          <p className="join-section-label">Personal Information</p>

          <div className="join-row">
            <div className="join-field no-margin">
              <label>Full Name</label>
              <input
                className="join-input"
                type="text"
                placeholder="Ramesh Kumar"
                value={form.name}
                onChange={e => handleChange("name", e.target.value)}
              />
            </div>
            <div className="join-field no-margin">
              <label>Phone Number</label>
              <input
                className="join-input"
                type="tel"
                placeholder="98765 43210"
                maxLength={10}
                value={form.phone}
                onChange={e => handleChange("phone", e.target.value.replace(/\D/g, ""))}
              />
            </div>
          </div>

          <div className="join-divider" />

          {/* Work Info */}
          <p className="join-section-label">Work Information</p>

          <div className="join-row">
            <div className="join-field no-margin">
              <label>Service Category</label>
              <select
                className="join-select"
                value={form.category}
                onChange={e => handleChange("category", e.target.value)}
              >
                <option value="">Select category</option>
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="join-field no-margin">
              <label>Experience</label>
              <select
                className="join-select"
                value={form.experience}
                onChange={e => handleChange("experience", e.target.value)}
              >
                <option value="">Select years</option>
                <option value="0-1">Less than 1 year</option>
                <option value="1-3">1 - 3 years</option>
                <option value="3-5">3 - 5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>
          </div>

          <div className="join-divider" />

          {/* Documents */}
          <p className="join-section-label">Identity Verification</p>

          <div className="join-field">
            <label>Aadhar Card Number</label>
            <input
              className="join-input"
              type="tel"
              placeholder="1234 5678 9012"
              maxLength={14}
              value={form.aadhar}
              onChange={e => handleChange("aadhar", e.target.value)}
            />
          </div>

          <div
            className={`join-upload-box${aadharUploaded ? " uploaded" : ""}`}
            onClick={() => document.getElementById("aadhar-input").click()}
          >
            {aadharUploaded ? (
              <svg viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM12 18l-4-4h2.5v-4h3v4H16l-4 4z"/>
              </svg>
            )}
            <span className="join-upload-title">
              {aadharUploaded ? "Aadhar Card Uploaded ✓" : "Upload Aadhar Card"}
            </span>
            <span className="join-upload-sub">
              {aadharUploaded ? "Tap to change" : "JPG, PNG or PDF — max 5MB"}
            </span>
            <input
              id="aadhar-input"
              type="file"
              accept="image/*,.pdf"
              style={{ display: "none" }}
              onChange={handleAadharChange}
            />
          </div>

          <button className="join-submit" onClick={() => navigate("/")}>
            Submit Application →
          </button>

          <p className="join-login-link">
            Already registered?{" "}
            <span onClick={() => navigate("/login")}>Login here</span>
          </p>

        </div>
      </div>
    </>
  );
}