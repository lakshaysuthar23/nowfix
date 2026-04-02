import { useState } from "react";
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

  .address-badge {
    background: var(--primary-light, #e8f0fb);
    color: var(--primary, #1F5BB5);
    padding: 4px 10px;
    border-radius: var(--radius-sm, 4px);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  @media (max-width: 480px) {
    .profile-page {
      padding-top: calc(var(--navbar-height, 70px) + 20px);
    }
    .profile-card {
      padding: 24px 20px;
      border-radius: var(--radius-md, 8px);
    }
    .profile-big-avatar {
      width: 80px;
      height: 80px;
      font-size: 2rem;
    }
    .profile-name {
      font-size: 1.25rem;
    }
  }
`;

export default function Profile() {
  const { user, login } = useUser();
  const { show, hide } = useLoading();
  const navigate = useNavigate();

  // Route Guard: If a user types /#/profile but isn't logged in, send them to login.
  if (!user) {
    navigate("/login");
    return null;
  }

  // Local state for the form inputs
  const [formData, setFormData] = useState({
    name: user.name || "",
    phone: user.phone || "",
    email: user.email || "aditya.demo@example.com",
    address: "123, Gandhi Nagar, Bikaner, RJ"
  });

  const handleSave = () => {
    // 1. Show the Wrench/Hammer loader
    show(); 
    
    // 2. Simulate the network request Aditya will eventually build
    setTimeout(() => {
      // Update the global user context with the new name
      login({ ...user, name: formData.name, email: formData.email }); 
      
      // 3. Hide loader and show success
      hide();
      alert("Profile updated successfully!");
    }, 1500);
  };

  return (
    <>
      <style>{styles}</style>
      <Navbar />
      
      <div className="profile-page">
        <div className="profile-container">
          
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar-wrap">
                <div className="profile-big-avatar">
                  {formData.name ? formData.name.charAt(0) : "U"}
                </div>
                <div className="edit-avatar-btn">
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

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input 
                className="form-input" 
                type="text" 
                value={formData.phone} 
                disabled 
              />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-3, #6B7280)', marginTop: '4px', display: 'block' }}>
                Phone number cannot be changed
              </span>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                className="form-input" 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-section-title">
               Saved Addresses
               <span className="address-badge" style={{ marginLeft: 'auto' }}>Primary</span>
            </div>
            <div className="form-group">
              <textarea 
                className="form-input" 
                rows="3"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                style={{ resize: 'vertical' }}
              ></textarea>
            </div>
            <button className="save-btn" onClick={handleSave}>
              Save Profile Details
            </button>
          </div>

        </div>
      </div>
    </>
  );
}