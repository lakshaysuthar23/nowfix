import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserProvider";
import { useLoading } from "../contexts/LoadingProvider";

// MOCK DATA (Aditya: Connect to DB)
const MOCK_SERVICES = [
  { id: "s1", category: "plumbing", name: "Tap Leakage Repair", price: 149, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400" },
  { id: "s2", category: "plumbing", name: "Bathroom Deep Check & Fix", price: 599, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
  { id: "s3", category: "electrical", name: "Fan Installation/Repair", price: 199, image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400" },
  { id: "s4", category: "electrical", name: "Main Board Repair", price: 299, image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80&w=400" },
  { id: "s5", category: "ac", name: "AC Master Servicing", price: 899, image: "https://placehold.co/400x300/1F5BB5/FFF?text=AC+Master+Service" }, // Fixed AC Image
  { id: "s6", category: "cleaning", name: "Sofa Deep Cleaning", price: 749, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400" },
];

const styles = `
  .sd-page { min-height: 100vh; background: var(--bg-2, #F9FAFB); font-family: var(--font-body); padding-bottom: 80px; }
  
  .sd-topbar { background: var(--bg); border-bottom: 1px solid var(--border); padding: 0 1.5rem; height: 60px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 50; }
  .sd-back { display: flex; align-items: center; gap: 6px; background: none; border: none; font-family: var(--font-body); font-size: 0.875rem; font-weight: 600; color: var(--text-2); cursor: pointer; padding: 0; transition: color 0.2s; }
  .sd-back:hover { color: var(--primary); }
  .sd-back svg { width: 18px; height: 18px; fill: currentColor; }
  .sd-topbar-title { font-size: 0.95rem; font-weight: 700; color: var(--text); letter-spacing: -0.01em; }
  .sd-topbar-right { width: 80px; }

  .sd-steps { display: flex; align-items: center; justify-content: center; gap: 0; padding: 20px 1.5rem 0; max-width: 600px; margin: 0 auto; }
  .sd-step { display: flex; align-items: center; gap: 8px; flex: 1; }
  .sd-step-circle { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; border: 2px solid var(--border); color: #9CA3AF; background: var(--bg); transition: all 0.2s; }
  .sd-step-circle.active { background: var(--primary); border-color: var(--primary); color: white; }
  .sd-step-circle.done { background: #10B981; border-color: #10B981; color: white; }
  .sd-step-label { font-size: 0.75rem; font-weight: 600; color: #9CA3AF; transition: color 0.2s; }
  .sd-step-label.active { color: var(--primary); }
  .sd-step-label.done { color: #10B981; }
  .sd-step-line { flex: 1; height: 2px; background: var(--border); margin: 0 8px; transition: background 0.2s; }
  .sd-step-line.done { background: #10B981; }

  .sd-inner { max-width: 600px; margin: 0 auto; padding: 24px 1.5rem 0; }
  .sd-section-title { font-size: 0.95rem; font-weight: 800; color: var(--text); margin-bottom: 16px; letter-spacing: -0.01em; }

  .sd-pkg-card { background: var(--bg); border: 1.5px solid var(--border); border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 14px; margin-bottom: 12px; box-shadow: var(--shadow-sm); }
  .sd-pkg-img { width: 60px; height: 60px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border); flex-shrink: 0; }
  .sd-pkg-info { flex: 1; }
  .sd-pkg-name { font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 4px; letter-spacing: -0.01em; line-height: 1.2; }
  .sd-pkg-price { font-size: 1.05rem; font-weight: 800; color: var(--primary); letter-spacing: -0.02em; }

  .sd-upload-card { background: var(--bg); border: 1.5px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); }
  .sd-upload-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 12px; }
  .sd-upload-header h3 { font-size: 0.9rem; font-weight: 700; color: var(--text); }
  
  .sd-upload-area { background: var(--bg); border: 2px dashed #D1D5DB; border-radius: 12px; padding: 24px 20px; display: flex; flex-direction: column; align-items: center; gap: 10px; cursor: pointer; transition: all 0.2s; text-align: center; }
  .sd-upload-area:hover { border-color: var(--primary); background: #EFF6FF; }
  .sd-upload-area.has-image { border-style: solid; border-color: var(--primary); padding: 8px; }
  .sd-upload-area svg { width: 28px; height: 28px; fill: #9CA3AF; }
  .sd-upload-title { font-size: 0.85rem; font-weight: 700; color: var(--text-2); }
  .sd-upload-sub { font-size: 0.75rem; color: #6B7280; line-height: 1.5; }
  .sd-upload-preview { width: 100%; border-radius: 8px; max-height: 200px; object-fit: cover; }
  .sd-upload-change { font-size: 0.78rem; color: var(--primary); font-weight: 600; margin-top: 4px; }

  .sd-time-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; }
  .sd-time-btn { padding: 12px; border: 1.5px solid var(--border); border-radius: 8px; background: white; font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: 0.2s; color: var(--text-2); }
  .sd-time-btn.selected { border-color: var(--primary); background: #EFF6FF; color: var(--primary); }

  .addr-card { background: white; border: 1.5px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 12px; display: flex; gap: 12px; cursor: pointer; transition: 0.2s; }
  .addr-card.selected { border-color: var(--primary); background: #EFF6FF; }
  .addr-radio { width: 20px; height: 20px; border-radius: 50%; border: 2px solid #D1D5DB; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
  .addr-card.selected .addr-radio { border-color: var(--primary); }
  .addr-radio-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--primary); opacity: 0; }
  .addr-card.selected .addr-radio-dot { opacity: 1; }
  .addr-info h4 { font-size: 0.9rem; font-weight: 700; color: var(--text); margin-bottom: 4px; }
  .addr-info p { font-size: 0.8rem; color: #6B7280; line-height: 1.4; }

  .addr-input { width: 100%; padding: 14px; border: 1.5px solid var(--border); border-radius: 8px; font-family: var(--font-body); font-size: 0.9rem; resize: vertical; outline: none; margin-bottom: 12px; }
  .addr-input:focus { border-color: var(--primary); }

  .btn-add-addr { width: 100%; padding: 14px; border: 1.5px dashed var(--primary); border-radius: 8px; background: transparent; color: var(--primary); font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: 0.2s; font-family: var(--font-body); margin-bottom: 24px; }
  .btn-add-addr:hover { background: #EFF6FF; }

  .sd-summary { background: var(--bg); border: 1.5px solid var(--border); border-radius: 12px; padding: 16px 18px; margin-bottom: 24px; box-shadow: var(--shadow-sm); }
  .sd-summary-row { display: flex; align-items: center; justify-content: space-between; font-size: 0.85rem; color: #4B5563; margin-bottom: 10px; }
  .sd-summary-divider { height: 1px; background: var(--border); margin: 12px 0; }
  .sd-summary-total { display: flex; align-items: center; justify-content: space-between; font-size: 1.1rem; font-weight: 800; color: var(--text); }

  .sd-cta { position: fixed; bottom: 0; left: 0; right: 0; background: var(--bg); border-top: 1px solid var(--border); padding: 14px 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 16px; box-shadow: 0 -4px 20px rgba(0,0,0,0.06); z-index: 40; }
  .sd-cta-info { display: flex; flex-direction: column; }
  .sd-cta-price { font-size: 1.15rem; font-weight: 800; color: var(--text); letter-spacing: -0.02em; }
  .sd-cta-label { font-size: 0.75rem; color: #6B7280; font-weight: 600; }
  .sd-cta-btn { background: var(--primary); color: white; border: none; border-radius: 8px; padding: 0.8rem 1.8rem; font-size: 0.9rem; font-weight: 700; font-family: var(--font-body); cursor: pointer; transition: background 0.2s, transform 0.2s; box-shadow: var(--shadow-primary); white-space: nowrap; }
  .sd-cta-btn:hover { background: var(--primary-dark); transform: translateY(-1px); }
  .sd-cta-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }

  .empty-cart { text-align: center; padding: 60px 20px; }
  .empty-cart svg { width: 64px; height: 64px; color: #D1D5DB; margin-bottom: 16px; }
  .empty-cart h2 { font-size: 1.2rem; font-weight: 800; color: var(--text); margin-bottom: 8px; }
  .empty-cart p { color: #6B7280; font-size: 0.9rem; margin-bottom: 24px; }
  .btn-outline { background: white; border: 2px solid var(--primary); color: var(--primary); padding: 10px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; }

  .success-screen { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 20px; text-align: center; animation: fadeIn 0.5s ease-out; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .success-icon-wrap { width: 80px; height: 80px; background: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4); animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  @keyframes popIn { 0% { transform: scale(0); } 100% { transform: scale(1); } }
  .success-icon-wrap svg { width: 40px; height: 40px; color: white; }
  .success-title { font-size: 1.5rem; font-weight: 800; color: var(--text); margin-bottom: 12px; letter-spacing: -0.02em; }
  .success-sub { font-size: 0.95rem; color: #6B7280; line-height: 1.5; max-width: 320px; margin-bottom: 32px; }
  
  .success-actions { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 300px; }
  .btn-full { width: 100%; padding: 14px; border-radius: 8px; font-weight: 700; font-size: 1rem; cursor: pointer; font-family: var(--font-body); transition: 0.2s; }
  .btn-primary-full { background: var(--primary); color: white; border: none; box-shadow: var(--shadow-primary); }
  .btn-primary-full:hover { background: var(--primary-dark); transform: translateY(-2px); }
  .btn-outline-full { background: white; border: 1.5px solid var(--border); color: var(--text-2); }
  .btn-outline-full:hover { border-color: var(--primary); color: var(--primary); }
  .btn-text-full { background: none; border: none; color: #6B7280; text-decoration: underline; font-size: 0.9rem; }
  .btn-text-full:hover { color: var(--text); }

  @media (max-width: 480px) { .sd-inner { padding: 20px 1rem 0; } }
`;

export default function Checkout() {
  const navigate = useNavigate();
  
  const { cart, toggleCartItem, updateItemImage, getCartCount, clearCart } = useCart();
  
  const { user, login } = useUser();
  const { show, hide } = useLoading();
  
  const [step, setStep] = useState(1);
  const [activeUploadId, setActiveUploadId] = useState(null);
  const fileInputRef = useRef(null);

  const userAddresses = user?.addresses || [];
  const [selectedAddrIndex, setSelectedAddrIndex] = useState(userAddresses.length > 0 ? 0 : null);
  const [isAddingNewAddr, setIsAddingNewAddr] = useState(userAddresses.length === 0);
  const [newAddressText, setNewAddressText] = useState("");
  const [time, setTime] = useState("today");

  const cartItems = Object.entries(cart).map(([id, data]) => {
    const serviceDetails = MOCK_SERVICES.find(s => s.id === id);
    return { ...serviceDetails, ...data };
  }).filter(item => item.name);

  const totalItems = getCartCount();
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const platformFee = 49;
  const grandTotal = subtotal + platformFee;

  useEffect(() => { window.scrollTo(0, 0); }, [step]);

  const handleTriggerUpload = (id) => {
    setActiveUploadId(id);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && activeUploadId) {
      updateItemImage(activeUploadId, URL.createObjectURL(file));
      setActiveUploadId(null);
    }
  };

  const handleNextStep = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      show(); 
      setTimeout(() => {
        hide(); 
        
        const dateOptions = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        const newBooking = {
          id: `BKN-${Math.floor(1000 + Math.random() * 9000)}`,
          status: "pending",
          date: new Date().toLocaleString('en-US', dateOptions),
          address: userAddresses[selectedAddrIndex] || newAddressText, 
          services: cartItems.map(item => ({ 
            name: item.name, 
            image: item.image, 
            price: item.price, 
            issuePhoto: item.issuePhoto 
          })),
          total: grandTotal
        };

        const existingBookings = user.bookings || [];
        login({ ...user, bookings: [newBooking, ...existingBookings] });

        setStep(4); 
        clearCart(); 
      }, 2000); 
    }
  };

  const isAddressValid = () => {
    if (isAddingNewAddr) return newAddressText.trim().length > 10;
    return selectedAddrIndex !== null;
  };

  if (totalItems === 0 && step !== 4) {
    return (
      <>
        <style>{styles}</style>
        <div className="sd-page">
          <div className="sd-topbar">
            <button className="sd-back" onClick={() => navigate("/services")}><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>Back</button>
            <span className="sd-topbar-title">Checkout</span>
            <div className="sd-topbar-right" />
          </div>
          <div className="empty-cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any services yet.</p>
            <button className="btn-outline" onClick={() => navigate("/services")}>Browse Services</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="sd-page">
        
        {step < 4 && (
          <div className="sd-topbar">
            <button className="sd-back" onClick={() => step === 1 ? navigate(-1) : setStep(step - 1)}>
              <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> Back
            </button>
            <span className="sd-topbar-title">Checkout</span>
            <div className="sd-topbar-right" />
          </div>
        )}

        {step < 4 && (
          <div className="sd-steps">
            <div className="sd-step">
              <div className={`sd-step-circle ${step === 1 ? "active" : "done"}`}>{step > 1 ? "✓" : "1"}</div>
              <span className={`sd-step-label ${step === 1 ? "active" : "done"}`}>Review</span>
            </div>
            <div className={`sd-step-line ${step > 1 ? "done" : ""}`} />
            <div className="sd-step">
              <div className={`sd-step-circle ${step === 2 ? "active" : step > 2 ? "done" : ""}`}>{step > 2 ? "✓" : "2"}</div>
              <span className={`sd-step-label ${step === 2 ? "active" : step > 2 ? "done" : ""}`}>Details</span>
            </div>
            <div className={`sd-step-line ${step > 2 ? "done" : ""}`} />
            <div className="sd-step">
              <div className={`sd-step-circle ${step === 3 ? "active" : ""}`}>3</div>
              <span className={`sd-step-label ${step === 3 ? "active" : ""}`}>Pay</span>
            </div>
          </div>
        )}

        <div className="sd-inner">
          
          {step === 1 && (
            <>
              <h2 className="sd-section-title">Review your services</h2>
              {cartItems.map(item => (
                <div key={item.id} className="sd-pkg-card">
                  <img src={item.image} alt={item.name} className="sd-pkg-img" />
                  <div className="sd-pkg-info">
                    <div className="sd-pkg-name">{item.name}</div>
                    <div className="sd-pkg-price">₹{item.price}</div>
                  </div>
                  <button 
                    style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center' }}
                    onClick={() => toggleCartItem(item.id)}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="sd-section-title">Help the Pro understand the issue</h2>
              <p style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '20px' }}>Upload photos of the problem area. This is optional but highly recommended.</p>
              
              {cartItems.map(item => (
                <div key={item.id} className="sd-upload-card">
                  <div className="sd-upload-header">
                    <h3>{item.name}</h3>
                  </div>
                  
                  {!item.issuePhoto ? (
                    <div className="sd-upload-area" onClick={() => handleTriggerUpload(item.id)}>
                      <svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
                      <span className="sd-upload-title">Add photo for {item.name}</span>
                      <span className="sd-upload-sub">Tap to browse files or use camera</span>
                    </div>
                  ) : (
                    <div className="sd-upload-area has-image" onClick={() => handleTriggerUpload(item.id)}>
                      <img src={item.issuePhoto} alt="Issue" className="sd-upload-preview" />
                      <span className="sd-upload-change">Tap to change photo</span>
                    </div>
                  )}
                </div>
              ))}
              
              <input type="file" ref={fileInputRef} accept="image/*" style={{ display: "none" }} onChange={handleFileChange} />
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="sd-section-title">When do you need the service?</h2>
              <div className="sd-time-grid">
                <button className={`sd-time-btn ${time === 'today' ? 'selected' : ''}`} onClick={() => setTime('today')}>
                  Today, in 60 mins
                </button>
                <button className={`sd-time-btn ${time === 'tomorrow' ? 'selected' : ''}`} onClick={() => setTime('tomorrow')}>
                  Tomorrow Morning
                </button>
              </div>

              <h2 className="sd-section-title">Service Address</h2>
              
              {userAddresses.length > 0 && !isAddingNewAddr && (
                <>
                  {userAddresses.map((addrStr, index) => (
                    <div 
                      key={index} 
                      className={`addr-card ${selectedAddrIndex === index ? 'selected' : ''}`}
                      onClick={() => setSelectedAddrIndex(index)}
                    >
                      <div className="addr-radio"><div className="addr-radio-dot"/></div>
                      <div className="addr-info">
                        <h4>{index === 0 ? "Primary Address" : `Saved Address ${index + 1}`}</h4>
                        <p>{addrStr}</p>
                      </div>
                    </div>
                  ))}
                  <button className="btn-add-addr" onClick={() => { setIsAddingNewAddr(true); setSelectedAddrIndex(null); }}>
                    + Use a different address
                  </button>
                </>
              )}

              {isAddingNewAddr && (
                <div style={{ marginBottom: '24px' }}>
                  <textarea 
                    className="addr-input" 
                    rows="3" 
                    placeholder="Enter House No, Building, Area/Locality in Bikaner..."
                    value={newAddressText}
                    onChange={(e) => setNewAddressText(e.target.value)}
                    autoFocus
                  />
                  {userAddresses.length > 0 && (
                    <button 
                      style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem' }}
                      onClick={() => { setIsAddingNewAddr(false); setSelectedAddrIndex(0); }}
                    >
                      Cancel & use saved address
                    </button>
                  )}
                </div>
              )}

              <h2 className="sd-section-title">Payment Summary</h2>
              <div className="sd-summary">
                <div className="sd-summary-row">
                  <span>Item Total ({totalItems} items)</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="sd-summary-row">
                  <span>Trust & Safety Fee</span>
                  <span>₹{platformFee}</span>
                </div>
                <div className="sd-summary-divider" />
                <div className="sd-summary-total">
                  <span>Grand Total</span>
                  <span style={{ color: "var(--primary)" }}>₹{grandTotal}</span>
                </div>
              </div>
            </>
          )}

          {step === 4 && (
            <div className="success-screen">
              <div className="success-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2 className="success-title">Booking Confirmed!</h2>
              <p className="success-sub">Your request has been placed. A verified professional will be assigned shortly.</p>
              
              <div className="success-actions">
                <button className="btn-full btn-primary-full" onClick={() => navigate("/bookings")}>
                  View My Bookings
                </button>
                <button className="btn-full btn-outline-full" onClick={() => navigate("/services")}>
                  Book More Services
                </button>
                <button className="btn-full btn-text-full" onClick={() => navigate("/")}>
                  Back to Home
                </button>
              </div>
            </div>
          )}

        </div>

        {step < 4 && (
          <div className="sd-cta">
            <div className="sd-cta-info">
              <span className="sd-cta-price">₹{grandTotal}</span>
              <span className="sd-cta-label">Grand Total</span>
            </div>
            <button 
              className="sd-cta-btn" 
              onClick={handleNextStep}
              disabled={step === 3 && !isAddressValid()}
            >
              {step === 1 ? "Next: Add Details →" : step === 2 ? "Next: Schedule →" : "Pay & Place Order"}
            </button>
          </div>
        )}

      </div>
    </>
  );
}