import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/ui/Logo"; // Your master logo!

const styles = `
  .join-page {
    min-height: 100vh;
    background: var(--bg-2, #F9FAFB);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 1.5rem;
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .join-card {
    width: 100%;
    max-width: 520px;
    background: var(--bg, #FFFFFF);
    border: 1px solid var(--border, #E5E7EB);
    border-radius: var(--radius-xl, 16px);
    padding: 40px 36px;
    box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
  }

  .join-header {
    margin-bottom: 28px;
    display: flex;
    justify-content: flex-start;
  }

  .join-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text, #111827);
    letter-spacing: -0.03em;
    margin-bottom: 8px;
  }

  .join-sub {
    font-size: 0.9rem;
    color: var(--text-3, #4B5563);
    margin-bottom: 28px;
    line-height: 1.5;
  }

  /* Photo upload */
  .join-photo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 28px;
  }

  .join-photo-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px dashed var(--border, #E5E7EB);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition, 0.2s);
    background: var(--bg-2, #F9FAFB);
    overflow: hidden;
    position: relative;
    margin-bottom: 12px;
  }

  .join-photo-circle:hover {
    border-color: var(--primary, #1F5BB5);
    background: var(--primary-light, #E0E7FF);
  }

  .join-photo-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
  }

  .join-photo-circle svg {
    width: 24px;
    height: 24px;
    color: #9CA3AF;
    margin-bottom: 4px;
  }

  .join-photo-circle span {
    font-size: 0.7rem;
    color: #6B7280;
    font-weight: 500;
  }

  .join-photo-label {
    font-size: 0.85rem;
    color: var(--primary, #1F5BB5);
    font-weight: 600;
    cursor: pointer;
  }

  /* Form grid */
  .join-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }

  .join-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
  }

  .join-field.no-margin { margin-bottom: 0; }

  .join-field label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-2, #374151);
  }

  .join-input {
    height: 48px;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    padding: 0 14px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text, #111827);
    font-family: var(--font-body, 'Inter', sans-serif);
    background: white;
    outline: none;
    transition: all 0.2s ease;
  }

  .join-input:focus {
    border-color: var(--primary, #1F5BB5);
    box-shadow: 0 0 0 3px rgba(31,91,181,0.1);
  }

  .join-input::placeholder { color: #9CA3AF; }

  /* Custom Phone Wrap matching Login */
  .join-phone-wrap {
    display: flex;
    align-items: center;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    overflow: hidden;
    transition: all 0.2s ease;
    background: white;
    height: 48px;
  }

  .join-phone-wrap:focus-within {
    border-color: var(--primary, #1F5BB5);
    box-shadow: 0 0 0 3px rgba(31,91,181,0.1);
  }

  .join-phone-prefix {
    padding: 0 14px;
    font-size: 1.1rem;
    background: var(--bg-2, #F9FAFB);
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1.5px solid var(--border, #E5E7EB);
    flex-shrink: 0;
    color: var(--text, #111827);
    font-weight: 500;
  }

  .join-phone-input {
    flex: 1;
    height: 100%;
    border: none;
    background: transparent;
    padding: 0 14px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text, #111827);
    font-family: var(--font-body, 'Inter', sans-serif);
    outline: none;
    letter-spacing: 0.05em;
  }

  .join-phone-input::placeholder { color: #9CA3AF; font-weight: 400; }

  .join-select {
    height: 48px;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    padding: 0 14px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text, #111827);
    font-family: var(--font-body, 'Inter', sans-serif);
    background: white;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
  }

  .join-select:focus {
    border-color: var(--primary, #1F5BB5);
    box-shadow: 0 0 0 3px rgba(31,91,181,0.1);
  }

  /* Aadhar upload */
  .join-upload-box {
    border: 1.5px dashed var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: white;
    margin-bottom: 24px;
  }

  .join-upload-box:hover {
    border-color: var(--primary, #1F5BB5);
    background: var(--primary-light, #E0E7FF);
  }

  .join-upload-box.uploaded {
    border-color: #10B981; /* Success Green */
    background: #ECFDF5;
  }

  .join-upload-box svg {
    width: 28px;
    height: 28px;
    color: #9CA3AF;
  }

  .join-upload-box.uploaded svg { color: #10B981; }

  .join-upload-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-2, #374151);
  }

  .join-upload-box.uploaded .join-upload-title { color: #10B981; }

  .join-upload-sub {
    font-size: 0.75rem;
    color: #6B7280;
  }

  /* Submit */
  .join-submit {
    width: 100%;
    height: 50px;
    background: var(--primary, #1F5BB5);
    color: white;
    border: none;
    border-radius: var(--radius-md, 8px);
    font-size: 0.95rem;
    font-weight: 600;
    font-family: var(--font-body, 'Inter', sans-serif);
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-primary, 0 4px 14px 0 rgba(31,91,181,0.39));
  }

  .join-submit:hover {
    background: var(--primary-dark, #1A4B96);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(31,91,181,0.35);
  }

  .join-submit:active { transform: translateY(0); }

  .join-section-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: #9CA3AF;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 8px;
  }

  .join-divider {
    height: 1px;
    background: var(--border, #E5E7EB);
    margin: 24px 0;
  }

  @media (max-width: 480px) {
    .join-card { padding: 32px 24px; border: none; box-shadow: none; border-radius: 0; background: transparent; }
    .join-page { background: white; padding-top: 20px; }
    .join-row { grid-template-columns: 1fr; gap: 16px; }
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
    if (file) {
      setPhoto(URL.createObjectURL(file));
      // TODO: Aditya - API Call to upload profile photo to cloud storage (AWS S3, Firebase, etc.)
      console.log("Photo selected for upload:", file.name);
    }
  }

  function handleAadharChange(e) {
    const file = e.target.files[0];
    if (file) {
      setAadharUploaded(true);
      // TODO: Aditya - API Call to upload Aadhar document to cloud storage
      console.log("Aadhar selected for upload:", file.name);
    }
  }

  function handleChange(key, value) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {
    // TODO: Aditya - API Call to submit the entire 'form' object to the backend database
    console.log("Submitting worker application data:", form);
    
    // Placeholder success alert before redirecting
    alert("Application submitted successfully! We will contact you soon.");
    navigate("/");
  }

  return (
    <>
      <style>{styles}</style>
      <div className="join-page">
        <div className="join-card">

          <div className="join-header">
            <Logo />
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
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
              <div className="join-phone-wrap">
                <div className="join-phone-prefix">🇮🇳 +91</div>
                <input
                  className="join-phone-input"
                  type="tel"
                  placeholder="98765 43210"
                  maxLength={10}
                  value={form.phone}
                  onChange={e => handleChange("phone", e.target.value.replace(/\D/g, ""))}
                />
              </div>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            )}
            <span className="join-upload-title">
              {aadharUploaded ? "Aadhar Card Uploaded ✓" : "Upload Aadhar Card"}
            </span>
            <span className="join-upload-sub">
              {aadharUploaded ? "Tap to change file" : "JPG, PNG or PDF — max 5MB"}
            </span>
            <input
              id="aadhar-input"
              type="file"
              accept="image/*,.pdf"
              style={{ display: "none" }}
              onChange={handleAadharChange}
            />
          </div>

          <button className="join-submit" onClick={handleSubmit}>
            Submit Application →
          </button>

        </div>
      </div>
    </>
  );
}