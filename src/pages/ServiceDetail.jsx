import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const styles = `
  .sd-page {
    min-height: 100vh;
    background: var(--bg-2);
    font-family: var(--font-body);
    padding-bottom: 60px;
  }

  /* Top Bar */
  .sd-topbar {
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 0 1.5rem;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .sd-back {
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-2);
    cursor: pointer;
    padding: 0;
    transition: color var(--transition);
  }

  .sd-back:hover { color: var(--primary); }

  .sd-back svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  .sd-topbar-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.01em;
    text-transform: capitalize;
  }

  .sd-topbar-right { width: 80px; }

  /* Steps indicator */
  .sd-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    padding: 20px 1.5rem 0;
    max-width: 600px;
    margin: 0 auto;
  }

  .sd-step {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
  }

  .sd-step-circle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    flex-shrink: 0;
    border: 2px solid var(--border-2);
    color: var(--muted);
    background: var(--bg);
    transition: all var(--transition);
  }

  .sd-step-circle.active {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
  }

  .sd-step-circle.done {
    background: var(--success);
    border-color: var(--success);
    color: white;
  }

  .sd-step-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--muted-2);
    transition: color var(--transition);
  }

  .sd-step-label.active { color: var(--primary); }
  .sd-step-label.done { color: var(--success); }

  .sd-step-line {
    flex: 1;
    height: 2px;
    background: var(--border-2);
    margin: 0 8px;
    transition: background var(--transition);
  }

  .sd-step-line.done { background: var(--success); }

  /* Inner wrap */
  .sd-inner {
    max-width: 600px;
    margin: 0 auto;
    padding: 24px 1.5rem 0;
  }

  /* Service header card */
  .sd-header-card {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    box-shadow: var(--shadow-sm);
  }

  .sd-header-icon {
    width: 54px;
    height: 54px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sd-header-icon svg {
    width: 26px;
    height: 26px;
  }

  .sd-header-info h2 {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
    margin-bottom: 3px;
    text-transform: capitalize;
  }

  .sd-header-info p {
    font-size: 0.78rem;
    color: var(--muted);
    line-height: 1.4;
  }

  /* Section title */
  .sd-section-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }

  /* Package cards */
  .sd-packages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
  }

  .sd-pkg-card {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px 18px;
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-sm);
  }

  .sd-pkg-card:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow-md);
  }

  .sd-pkg-card.selected {
    border-color: var(--primary);
    background: var(--primary-light);
    box-shadow: var(--shadow-md);
  }

  .sd-pkg-radio {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--border-2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all var(--transition);
  }

  .sd-pkg-card.selected .sd-pkg-radio {
    border-color: var(--primary);
    background: var(--primary);
  }

  .sd-pkg-radio-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    opacity: 0;
    transition: opacity var(--transition);
  }

  .sd-pkg-card.selected .sd-pkg-radio-dot { opacity: 1; }

  .sd-pkg-info { flex: 1; }

  .sd-pkg-name {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 3px;
    letter-spacing: -0.01em;
  }

  .sd-pkg-card.selected .sd-pkg-name { color: var(--primary); }

  .sd-pkg-desc {
    font-size: 0.75rem;
    color: var(--muted);
    line-height: 1.4;
  }

  .sd-pkg-right {
    text-align: right;
    flex-shrink: 0;
  }

  .sd-pkg-price {
    font-size: 1rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  .sd-pkg-card.selected .sd-pkg-price { color: var(--primary); }

  .sd-pkg-duration {
    font-size: 0.7rem;
    color: var(--muted-2);
    margin-top: 2px;
  }

  .sd-pkg-badge {
    display: inline-block;
    background: #fef9c3;
    color: #854d0e;
    font-size: 0.65rem;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 20px;
    margin-left: 6px;
    letter-spacing: 0.02em;
  }

  /* Step 1 CTA */
  .sd-cta {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--bg);
    border-top: 1px solid var(--border);
    padding: 14px 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.06);
    z-index: 40;
  }

  .sd-cta-info {
    display: flex;
    flex-direction: column;
  }

  .sd-cta-price {
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.03em;
  }

  .sd-cta-label {
    font-size: 0.72rem;
    color: var(--muted);
    font-weight: 500;
  }

  .sd-cta-btn {
    background: var(--primary);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    padding: 0.7rem 1.6rem;
    font-size: 0.875rem;
    font-weight: 600;
    font-family: var(--font-body);
    cursor: pointer;
    transition: background var(--transition), transform var(--transition);
    box-shadow: var(--shadow-primary);
    white-space: nowrap;
  }

  .sd-cta-btn:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
  }

  .sd-cta-btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none;
  }

  /* Step 2 - Image Upload */
  .sd-upload-area {
    background: var(--bg);
    border: 2px dashed var(--border-2);
    border-radius: var(--radius-lg);
    padding: 36px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all var(--transition);
    margin-bottom: 16px;
    text-align: center;
  }

  .sd-upload-area:hover {
    border-color: var(--primary);
    background: var(--primary-light);
  }

  .sd-upload-area.has-image {
    border-style: solid;
    border-color: var(--primary);
    padding: 12px;
  }

  .sd-upload-area svg {
    width: 32px;
    height: 32px;
    fill: var(--muted-2);
  }

  .sd-upload-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text-2);
  }

  .sd-upload-sub {
    font-size: 0.75rem;
    color: var(--muted-2);
    line-height: 1.5;
  }

  .sd-upload-preview {
    width: 100%;
    border-radius: var(--radius-md);
    max-height: 240px;
    object-fit: cover;
  }

  .sd-upload-change {
    font-size: 0.78rem;
    color: var(--primary);
    font-weight: 600;
    margin-top: 4px;
  }

  .sd-upload-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 20px;
  }

  .sd-upload-option {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-md);
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all var(--transition);
  }

  .sd-upload-option:hover {
    border-color: var(--primary);
    background: var(--primary-light);
  }

  .sd-upload-option svg {
    width: 22px;
    height: 22px;
    fill: var(--primary);
  }

  .sd-upload-option span {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-2);
  }

  .sd-skip-btn {
    width: 100%;
    background: none;
    border: none;
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--muted);
    cursor: pointer;
    padding: 8px;
    transition: color var(--transition);
    margin-bottom: 80px;
  }

  .sd-skip-btn:hover { color: var(--text); }

  /* Summary card */
  .sd-summary {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px 18px;
    margin-bottom: 16px;
    box-shadow: var(--shadow-sm);
  }

  .sd-summary-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.82rem;
    color: var(--muted);
    margin-bottom: 8px;
  }

  .sd-summary-row:last-child { margin-bottom: 0; }

  .sd-summary-row strong {
    color: var(--text);
    font-weight: 600;
  }

  .sd-summary-divider {
    height: 1px;
    background: var(--border);
    margin: 10px 0;
  }

  .sd-summary-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  @media (max-width: 480px) {
    .sd-inner { padding: 16px 1rem 0; }
  }
`;

const serviceData = {
  plumbing: {
    color: "#eff6ff",
    iconColor: "#2563eb",
    desc: "Fast and reliable plumbing solutions",
    packages: [
      { id: 1, name: "Tap / Faucet Repair", desc: "Fix leaky taps, replace washers, tighten fittings", price: 199, duration: "30-45 mins", popular: true },
      { id: 2, name: "Pipe Leak Fix", desc: "Detect and seal pipe leaks, joint repairs", price: 349, duration: "45-60 mins", popular: false },
      { id: 3, name: "Drain Cleaning", desc: "Unclog blocked drains, kitchen and bathroom", price: 299, duration: "30-45 mins", popular: false },
      { id: 4, name: "Full Plumbing Check", desc: "Complete inspection of all plumbing points", price: 499, duration: "60-90 mins", popular: false },
    ],
  },
  electrician: {
    color: "#fefce8",
    iconColor: "#ca8a04",
    desc: "Certified electrical work at your home",
    packages: [
      { id: 1, name: "Switch / Socket Repair", desc: "Fix or replace faulty switches and sockets", price: 149, duration: "20-30 mins", popular: true },
      { id: 2, name: "Fan Installation", desc: "Install ceiling or wall fan with wiring", price: 249, duration: "30-45 mins", popular: false },
      { id: 3, name: "MCB / Fuse Repair", desc: "Fix tripping MCB, replace fuse box", price: 299, duration: "30-45 mins", popular: false },
      { id: 4, name: "Full Wiring Check", desc: "Safety inspection of all electrical wiring", price: 599, duration: "60-90 mins", popular: false },
    ],
  },
  "ac-repair": {
    color: "#f0fdf4",
    iconColor: "#16a34a",
    desc: "Expert AC service and maintenance",
    packages: [
      { id: 1, name: "AC Service & Clean", desc: "Deep clean filters, coils and full service", price: 499, duration: "60-90 mins", popular: true },
      { id: 2, name: "Gas Refilling", desc: "Recharge refrigerant gas to optimal level", price: 1299, duration: "45-60 mins", popular: false },
      { id: 3, name: "AC Installation", desc: "Install new split or window AC unit", price: 999, duration: "2-3 hours", popular: false },
      { id: 4, name: "AC Not Cooling Fix", desc: "Diagnose and fix cooling issues", price: 399, duration: "45-60 mins", popular: false },
    ],
  },
  cleaning: {
    color: "#fdf4ff",
    iconColor: "#a21caf",
    desc: "Professional home cleaning services",
    packages: [
      { id: 1, name: "Basic Home Clean", desc: "Sweep, mop, dust all rooms", price: 399, duration: "2-3 hours", popular: true },
      { id: 2, name: "Deep Home Clean", desc: "Full sanitization including kitchen and bathrooms", price: 799, duration: "4-5 hours", popular: false },
      { id: 3, name: "Kitchen Deep Clean", desc: "Degrease and clean entire kitchen", price: 599, duration: "2-3 hours", popular: false },
      { id: 4, name: "Bathroom Cleaning", desc: "Scrub, sanitize and clean all bathrooms", price: 299, duration: "1-2 hours", popular: false },
    ],
  },
  carpentry: {
    color: "#fff7ed",
    iconColor: "#c2410c",
    desc: "Skilled carpenters for all wood work",
    packages: [
      { id: 1, name: "Furniture Assembly", desc: "Assemble flat-pack or new furniture", price: 299, duration: "1-2 hours", popular: true },
      { id: 2, name: "Door Repair", desc: "Fix hinges, locks, alignment issues", price: 249, duration: "30-60 mins", popular: false },
      { id: 3, name: "Wood Polish", desc: "Sand and polish wooden furniture", price: 499, duration: "2-3 hours", popular: false },
      { id: 4, name: "Custom Fitting", desc: "Custom shelves, cabinets or woodwork", price: 799, duration: "3-4 hours", popular: false },
    ],
  },
  "appliance-repair": {
    color: "#eff6ff",
    iconColor: "#1d4ed8",
    desc: "All home appliance repairs",
    packages: [
      { id: 1, name: "Washing Machine Repair", desc: "Fix spin, drain or electrical issues", price: 449, duration: "45-60 mins", popular: true },
      { id: 2, name: "Refrigerator Repair", desc: "Fix cooling, compressor or door seal", price: 499, duration: "45-90 mins", popular: false },
      { id: 3, name: "Microwave Repair", desc: "Fix heating, door or electrical faults", price: 349, duration: "30-45 mins", popular: false },
      { id: 4, name: "TV / LED Repair", desc: "Fix display, sound or power issues", price: 399, duration: "45-60 mins", popular: false },
    ],
  },
  painting: {
    color: "#fff1f2",
    iconColor: "#e11d48",
    desc: "Professional home painting services",
    packages: [
      { id: 1, name: "Single Room Paint", desc: "Full painting of one room walls and ceiling", price: 1499, duration: "1 day", popular: true },
      { id: 2, name: "2-3 Room Paint", desc: "Full painting of 2-3 rooms", price: 3499, duration: "2-3 days", popular: false },
      { id: 3, name: "Exterior Paint", desc: "Outside wall painting and waterproofing", price: 4999, duration: "3-5 days", popular: false },
      { id: 4, name: "Texture / Design Work", desc: "Decorative texture or pattern wall finish", price: 2499, duration: "2-3 days", popular: false },
    ],
  },
  "pest-control": {
    color: "#f0fdf4",
    iconColor: "#15803d",
    desc: "Safe and effective pest removal",
    packages: [
      { id: 1, name: "Cockroach Control", desc: "Gel treatment for kitchen and bathrooms", price: 499, duration: "45-60 mins", popular: true },
      { id: 2, name: "Termite Treatment", desc: "Full home anti-termite spray treatment", price: 1499, duration: "2-3 hours", popular: false },
      { id: 3, name: "Rodent Control", desc: "Traps and repellent for rats and mice", price: 799, duration: "1-2 hours", popular: false },
      { id: 4, name: "Full Home Pest Control", desc: "Complete treatment for all common pests", price: 1999, duration: "3-4 hours", popular: false },
    ],
  },
};

const fallbackService = {
  color: "#eff6ff",
  iconColor: "#2563eb",
  desc: "Professional home service",
  packages: [
    { id: 1, name: "Basic Service", desc: "Standard service package", price: 299, duration: "1-2 hours", popular: true },
    { id: 2, name: "Standard Service", desc: "Complete service package", price: 499, duration: "2-3 hours", popular: false },
  ],
};

export default function ServiceDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [step, setStep] = useState(1);
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [image, setImage] = useState(null);

  const service = serviceData[id] || fallbackService;
  const selectedPackage = service.packages.find(p => p.id === selectedPkg);

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  }

  const serviceName = id ? id.replace(/-/g, " ") : "Service";

  return (
    <>
      <style>{styles}</style>
      <div className="sd-page">

        {/* Top Bar */}
        <div className="sd-topbar">
          <button className="sd-back" onClick={() => step === 1 ? navigate("/") : setStep(1)}>
            <svg viewBox="0 0 24 24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back
          </button>
          <span className="sd-topbar-title">{serviceName}</span>
          <div className="sd-topbar-right" />
        </div>

        {/* Steps */}
        <div className="sd-steps">
          <div className="sd-step">
            <div className={`sd-step-circle ${step === 1 ? "active" : "done"}`}>
              {step > 1 ? "✓" : "1"}
            </div>
            <span className={`sd-step-label ${step === 1 ? "active" : "done"}`}>
              Choose Package
            </span>
          </div>
          <div className={`sd-step-line ${step > 1 ? "done" : ""}`} />
          <div className="sd-step">
            <div className={`sd-step-circle ${step === 2 ? "active" : ""}`}>2</div>
            <span className={`sd-step-label ${step === 2 ? "active" : ""}`}>
              Add Photo
            </span>
          </div>
        </div>

        <div className="sd-inner">

          {/* Service Header */}
          <div className="sd-header-card">
            <div
              className="sd-header-icon"
              style={{ background: service.color, color: service.iconColor }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <div className="sd-header-info">
              <h2>{serviceName}</h2>
              <p>{service.desc}</p>
            </div>
          </div>

          {/* Step 1 — Packages */}
          {step === 1 && (
            <>
              <p className="sd-section-title">Choose a Package</p>
              <div className="sd-packages">
                {service.packages.map(pkg => (
                  <div
                    key={pkg.id}
                    className={`sd-pkg-card ${selectedPkg === pkg.id ? "selected" : ""}`}
                    onClick={() => setSelectedPkg(pkg.id)}
                  >
                    <div className="sd-pkg-radio">
                      <div className="sd-pkg-radio-dot" />
                    </div>
                    <div className="sd-pkg-info">
                      <div className="sd-pkg-name">
                        {pkg.name}
                        {pkg.popular && (
                          <span className="sd-pkg-badge">Popular</span>
                        )}
                      </div>
                      <div className="sd-pkg-desc">{pkg.desc}</div>
                    </div>
                    <div className="sd-pkg-right">
                      <div className="sd-pkg-price">₹{pkg.price}</div>
                      <div className="sd-pkg-duration">{pkg.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 2 — Image Upload */}
          {step === 2 && (
            <>
              <div className="sd-summary">
                <div className="sd-summary-row">
                  <span>Selected Package</span>
                  <strong>{selectedPackage?.name}</strong>
                </div>
                <div className="sd-summary-divider" />
                <div className="sd-summary-total">
                  <span>Total</span>
                  <span>₹{selectedPackage?.price}</span>
                </div>
              </div>

              <p className="sd-section-title">Upload a Photo (Optional)</p>

              {!image ? (
                <>
                  <div className="sd-upload-options">
                    <div
                      className="sd-upload-option"
                      onClick={() => document.getElementById("camera-input").click()}
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"/>
                        <path d="M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
                      </svg>
                      <span>Take Photo</span>
                    </div>
                    <div
                      className="sd-upload-option"
                      onClick={() => document.getElementById("gallery-input").click()}
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                      <span>From Gallery</span>
                    </div>
                  </div>

                  <div
                    className="sd-upload-area"
                    onClick={() => document.getElementById("gallery-input").click()}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
                    </svg>
                    <span className="sd-upload-title">Upload issue photo</span>
                    <span className="sd-upload-sub">
                      Help the worker understand your issue better.{"\n"}
                      Tap to upload from your device.
                    </span>
                  </div>
                </>
              ) : (
                <div
                  className="sd-upload-area has-image"
                  onClick={() => document.getElementById("gallery-input").click()}
                >
                  <img src={image} alt="Issue" className="sd-upload-preview" />
                  <span className="sd-upload-change">Tap to change photo</span>
                </div>
              )}

              <input
                id="camera-input"
                type="file"
                accept="image/*"
                capture="environment"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              <input
                id="gallery-input"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />

              <button className="sd-skip-btn" onClick={() => navigate("/login")}>
                Skip & Continue without photo →
              </button>
            </>
          )}

        </div>

        {/* Bottom CTA */}
        <div className="sd-cta">
          <div className="sd-cta-info">
            {selectedPackage ? (
              <>
                <span className="sd-cta-price">₹{selectedPackage.price}</span>
                <span className="sd-cta-label">{selectedPackage.name}</span>
              </>
            ) : (
              <span className="sd-cta-label">Select a package to continue</span>
            )}
          </div>
          <button
            className="sd-cta-btn"
            disabled={!selectedPkg}
            onClick={() => step === 1 ? setStep(2) : navigate("/login")}
          >
            {step === 1 ? "Continue →" : "Confirm Booking →"}
          </button>
        </div>

      </div>
    </>
  );
}