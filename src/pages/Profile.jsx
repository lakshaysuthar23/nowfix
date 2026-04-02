import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { useUser } from "../contexts/UserProvider";
import { useLoading } from "../contexts/LoadingProvider";

const styles = `
  .profile-page {
    padding-top: calc(var(--navbar-height, 70px) + 40px);
    background: var(--bg-2, #F9FAFB);
    min-height: 100vh;
    padding-bottom: 80px;
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .profile-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .profile-topbar {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  .profile-back-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    font-family: var(--font-body, 'Inter', sans-serif);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-2, #374151);
    cursor: pointer;
    padding: 0;
    transition: color 0.2s ease;
  }

  .profile-back-btn:hover {
    color: var(--primary, #1F5BB5);
  }

  .profile-card {
    background: white;
    border: 1px solid var(--border, #E5E7EB);
    border-radius: var(--radius-lg, 12px);
    padding: 32px;
    box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.06));
    margin-bottom: 24px;
  }

  .profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
    text-align: center;
  }

  .profile-avatar-wrap {
    position: relative;
    margin-bottom: 16px;
  }

  .profile-big-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--primary, #1F5BB5);
    color: white;
    font-size: 2.5rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid white;
    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
    overflow: hidden;
  }
  
  .profile-big-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .edit-avatar-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background: var(--orange, #FF9F1C);
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    cursor: pointer;
    box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.06));
    transition: transform 0.2s ease;
  }

  .edit-avatar-btn:hover {
    transform: scale(1.1);
  }

  .profile-name {
    font-family: var(--font-heading, 'Montserrat', sans-serif);
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text, #111827);
    margin-bottom: 4px;
  }

  .profile-member-since {
    color: var(--text-3, #6B7280);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .profile-section-title {
    font-family: var(--font-heading, 'Montserrat', sans-serif);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text, #111827);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-2, #374151);
    margin-bottom: 8px;
  }

  .form-input {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    font-family: var(--font-body, 'Inter', sans-serif);
    font-size: 0.95rem;
    color: var(--text, #111827);
    transition: border-color 0.2s, box-shadow 0.2s;
    background: white;
    outline: none;
  }

  .form-input:focus {
    border-color: var(--primary, #1F5BB5);
    box-shadow: 0 0 0 3px rgba(31,91,181,0.1);
  }

  .form-input:disabled {
    background: var(--bg-2, #F9FAFB);
    cursor: not-allowed;
    color: var(--text-3, #6B7280);
    border-color: var(--border, #E5E7EB);
  }

  select.form-input {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
  }

  .address-box {
    position: relative;
    margin-bottom: 16px;
  }

  .address-badge {
    position: absolute;
    top: -10px;
    right: 12px;
    background: var(--primary-light, #e8f0fb);
    color: var(--primary, #1F5BB5);
    padding: 4px 10px;
    border-radius: var(--radius-sm, 4px);
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 1px solid var(--primary);
  }

  .remove-address-btn {
    position: absolute;
    bottom: -8px;
    right: 12px;
    background: white;
    color: var(--error, #dc2626);
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid var(--border);
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    cursor: pointer;
  }

  .add-address-btn {
    width: 100%;
    background: transparent;
    border: 1.5px dashed var(--primary, #1F5BB5);
    color: var(--primary, #1F5BB5);
    padding: 12px;
    border-radius: var(--radius-md, 8px);
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 16px;
    transition: all 0.2s;
  }

  .add-address-btn:hover {
    background: var(--primary-light, #e8f0fb);
  }

  .save-btn {
    width: 100%;
    background: var(--primary, #1F5BB5);
    color: white;
    border: none;
    padding: 14px;
    border-radius: var(--radius-md, 8px);
    font-family: var(--font-body, 'Inter', sans-serif);
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: var(--shadow-primary, 0 4px 14px 0 rgba(31,91,181,0.39));
    transition: all 0.2s ease;
    margin-top: 10px;
  }

  .save-btn:hover {
    background: var(--primary-dark, #174a96);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(31,91,181,0.35);
  }

  .save-btn:active {
    transform: translateY(0);
  }

  /* Modern Toast Notification */
  .toast-notification {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: #111827;
    color: white;
    padding: 14px 24px;
    border-radius: 50px;
    font-family: var(--font-body, 'Inter', sans-serif);
    font-size: 0.95rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 1000;
  }

  .toast-notification.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 480px) {
    .profile-page { padding-top: calc(var(--navbar-height, 70px) + 20px); }
    .profile-card { padding: 24px 20px; border-radius: var(--radius-md, 8px); }
    .profile-big-avatar { width: 80px; height: 80px; font-size: 2rem; }
    .profile-name { font-size: 1.25rem; }
    .form-grid { grid-template-columns: 1fr; gap: 0; }
  }
`;

export default function Profile() {
  const { user, login } = useUser();
  const { show, hide } = useLoading();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  if (!user) {
    navigate("/login");
    return null;
  }

  // Load ALL existing data from context
  const [formData, setFormData] = useState({
    name: user.name || "",
    phone: user.phone || "",
    email: user.email || "aditya.demo@example.com",
    gender: user.gender || "",
    dob: user.dob || "",
    addresses: user.addresses && user.addresses.length > 0 ? user.addresses : ["123, Gandhi Nagar, Bikaner, RJ"]
  });
  
  const [photoPreview, setPhotoPreview] = useState(user.photo || null);
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    show(); 
    setTimeout(() => {
      // Pass ALL fields to the global context
      login({ 
        ...user, 
        name: formData.name, 
        email: formData.email,
        gender: formData.gender,
        dob: formData.dob,
        addresses: formData.addresses,
        photo: photoPreview
      }); 
      
      hide();
      
      // Trigger modern toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  // Convert image to Base64 so it can be saved to LocalStorage permanently
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result); // This creates a Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleAddressChange = (index, value) => {
    const newAddresses = [...formData.addresses];
    newAddresses[index] = value;
    setFormData({ ...formData, addresses: newAddresses });
  };

  const addAddress = () => {
    setFormData({ ...formData, addresses: [...formData.addresses, ""] });
  };

  const removeAddress = (indexToRemove) => {
    const newAddresses = formData.addresses.filter((_, index) => index !== indexToRemove);
    setFormData({ ...formData, addresses: newAddresses });
  };

  return (
    <>
      <style>{styles}</style>
      <Navbar />
      
      {/* Modern Toast Component */}
      <div className={`toast-notification ${showToast ? 'show' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Profile details saved successfully
      </div>

      <div className="profile-page">
        <div className="profile-container">
          
          <div className="profile-topbar">
            <button className="profile-back-btn" onClick={() => navigate(-1)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back
            </button>
          </div>

          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar-wrap">
                <div className="profile-big-avatar">
                  {photoPreview ? (
                    <img src={photoPreview} alt="Profile" />
                  ) : (
                    formData.name ? formData.name.charAt(0) : "U"
                  )}
                </div>
                
                <input 
                  type="file" 
                  accept="image/*" 
                  ref={fileInputRef} 
                  style={{ display: 'none' }} 
                  onChange={handleImageChange}
                />
                
                <div className="edit-avatar-btn" onClick={triggerImageUpload}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                </div>
              </div>
              <h2 className="profile-name">{formData.name}</h2>
              <p className="profile-member-since">Member since March 2026</p>
            </div>

            <div className="profile-section-title">
               Personal Information
            </div>

            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input 
                className="form-input" 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input className="form-input" type="text" value={formData.phone} disabled />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  className="form-input" type="email" value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select 
                  className="form-input"
                  value={formData.gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input 
                  className="form-input" 
                  type="date" 
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-section-title">
               Saved Addresses
            </div>
            
            {formData.addresses.map((address, index) => (
              <div className="address-box" key={index}>
                {index === 0 && <span className="address-badge">Primary</span>}
                <textarea 
                  className="form-input" 
                  rows="3"
                  placeholder="Enter complete address..."
                  value={address}
                  onChange={(e) => handleAddressChange(index, e.target.value)}
                  style={{ resize: 'vertical' }}
                ></textarea>
                {index !== 0 && (
                  <button className="remove-address-btn" onClick={() => removeAddress(index)}>
                    Remove
                  </button>
                )}
              </div>
            ))}

            <button className="add-address-btn" onClick={addAddress}>
              + Add Another Address
            </button>

            <button className="save-btn" onClick={handleSave}>
              Save All Details
            </button>
          </div>

        </div>
      </div>
    </>
  );
}