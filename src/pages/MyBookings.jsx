import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { useUser } from "../contexts/UserProvider";
import { BRAND } from "../config/constants";

const styles = `
  .mb-page { padding-top: calc(var(--navbar-height, 70px) + 30px); background: var(--bg-2, #F9FAFB); min-height: 100vh; padding-bottom: 80px; font-family: var(--font-body); }
  .mb-container { max-width: 680px; margin: 0 auto; padding: 0 1.5rem; }
  
  .mb-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
  .mb-back-btn { background: none; border: none; padding: 0; cursor: pointer; color: var(--text-2); display: flex; align-items: center; transition: 0.2s; }
  .mb-back-btn:hover { color: var(--primary); }
  .mb-title { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: var(--text); letter-spacing: -0.02em; }

  /* Tabs */
  .mb-tabs { display: flex; gap: 12px; margin-bottom: 24px; border-bottom: 1px solid var(--border); padding-bottom: 16px; }
  .mb-tab { background: white; border: 1.5px solid var(--border); padding: 10px 24px; border-radius: 30px; font-size: 0.9rem; font-weight: 600; color: var(--text-2); cursor: pointer; transition: all 0.2s; }
  .mb-tab.active { background: var(--primary); color: white; border-color: var(--primary); box-shadow: var(--shadow-sm); }

  /* Booking Cards */
  .mb-card { background: white; border: 1.5px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s; }
  .mb-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: #D1D5DB; }
  
  .mb-card-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 16px; }
  .mb-id { font-size: 0.8rem; color: #6B7280; font-weight: 600; margin-bottom: 4px; }
  .mb-date { font-size: 1rem; font-weight: 800; color: var(--text); }
  
  .mb-status { font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.05em; }
  .status-assigned { background: #ECFDF5; color: #059669; border: 1px solid #A7F3D0; }
  .status-pending { background: #FFFBEB; color: #D97706; border: 1px solid #FDE68A; }
  .status-completed { background: #EFF6FF; color: var(--primary); border: 1px solid #BFDBFE; }
  .status-cancelled { background: #FEF2F2; color: #DC2626; border: 1px solid #FECACA; }

  /* Service Items with Images */
  .mb-services { margin-bottom: 16px; }
  .mb-service-item { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .mb-service-img { width: 44px; height: 44px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border); flex-shrink: 0; background: #F3F4F6; }
  .mb-service-info { flex: 1; }
  .mb-service-name { font-size: 0.95rem; font-weight: 600; color: var(--text); line-height: 1.2; }
  .mb-service-meta { font-size: 0.8rem; color: #6B7280; margin-top: 2px; }
  
  .mb-total { font-size: 1.05rem; font-weight: 800; color: var(--text); margin-top: 16px; padding-top: 16px; border-top: 1px dashed var(--border); display: flex; justify-content: space-between; }

  .mb-actions { display: flex; gap: 12px; margin-top: 16px; }
  .mb-btn { flex: 1; padding: 12px; text-align: center; border-radius: 8px; font-size: 0.9rem; font-weight: 700; cursor: pointer; transition: 0.2s; font-family: var(--font-body); }
  .mb-btn-outline { background: white; border: 1.5px solid var(--border); color: var(--text-2); }
  .mb-btn-outline:hover { border-color: var(--primary); color: var(--primary); }
  .mb-btn-primary { background: #EFF6FF; border: 1.5px solid var(--primary); color: var(--primary); }
  .mb-btn-primary:hover { background: var(--primary); color: white; }

  /* FULL SCREEN DETAILED VIEW MODAL */
  .detail-modal-overlay { position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6); backdrop-filter: blur(4px); z-index: 1000; display: flex; justify-content: flex-end; opacity: 0; pointer-events: none; transition: 0.3s ease; }
  .detail-modal-overlay.open { opacity: 1; pointer-events: all; }
  
  .detail-modal-content { background: var(--bg-2); width: 100%; max-width: 500px; height: 100%; transform: translateX(100%); transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: flex; flex-direction: column; box-shadow: -10px 0 25px rgba(0,0,0,0.1); }
  .detail-modal-overlay.open .detail-modal-content { transform: translateX(0); }
  
  .detail-header { background: white; padding: 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10; }
  .detail-header h2 { font-size: 1.2rem; font-weight: 800; color: var(--text); }
  .detail-close { background: #F3F4F6; border: none; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--text-2); transition: 0.2s; }
  .detail-close:hover { background: #E5E7EB; color: var(--error); }

  .detail-body { flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 16px; }
  
  /* Detail Sections */
  .detail-section { background: white; border: 1px solid var(--border); border-radius: 12px; padding: 16px; box-shadow: var(--shadow-sm); }
  .detail-section h3 { font-size: 0.9rem; font-weight: 800; color: var(--text); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--border); padding-bottom: 8px; }
  
  .detail-row { display: flex; justify-content: space-between; font-size: 0.9rem; color: #4B5563; margin-bottom: 8px; }
  .detail-row strong { color: var(--text); font-weight: 600; }
  .detail-row.grand-total { font-size: 1.1rem; font-weight: 800; color: var(--text); border-top: 1px dashed var(--border); margin-top: 8px; padding-top: 12px; }
  
  /* Legal & Warranty Box */
  .legal-box { background: #F3F4F6; border: 1px dashed #D1D5DB; border-radius: 8px; padding: 16px; font-size: 0.8rem; color: #6B7280; line-height: 1.6; }
  .legal-box p { margin-bottom: 8px; }
  .legal-box p:last-child { margin-bottom: 0; }
  .legal-box strong { color: var(--text-2); }

  /* Issue Photo Grid */
  .issue-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .issue-img-wrap { position: relative; border-radius: 8px; overflow: hidden; border: 1px solid var(--border); }
  .issue-img-wrap img { width: 100%; height: 100px; object-fit: cover; display: block; }
  .issue-img-label { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.6); color: white; font-size: 0.7rem; padding: 4px 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

    /* Empty state when there are no bookings */
    .empty-state {
        background: white;
        border: 1.5px dashed var(--border);
        border-radius: 12px;
        padding: 48px 24px;
        text-align: center;
        color: #6B7280;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        box-shadow: var(--shadow-sm);
    }
    .empty-state svg {
        width: 84px;
        height: 84px;
        color: var(--primary);
        flex-shrink: 0;
    }
    .empty-state h3 { font-size: 1.15rem; font-weight: 800; color: var(--text); margin: 0; }
    .empty-state p { margin: 0; color: #6B7280; max-width: 420px; }
    .empty-state .mb-btn { margin-top: 6px; }

    @media (max-width: 480px) {
    .detail-modal-content { transform: translateY(100%); border-radius: 20px 20px 0 0; height: 95vh; margin-top: auto; }
    .detail-modal-overlay.open .detail-modal-content { transform: translateY(0); }
  }
`;

export default function MyBookings() {
    const navigate = useNavigate();
    const { user } = useUser();
    const [activeTab, setActiveTab] = useState("upcoming");
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!user) navigate("/login");
    }, [user, navigate]);

    if (!user) return null;

    const userBookings = user?.bookings || [];

    const filteredBookings = userBookings.filter(b => {
        if (activeTab === "upcoming") return b.status === "assigned" || b.status === "pending";
        return b.status === "completed" || b.status === "cancelled";
    });

    // Helper to render service lists handling both old data (strings) and new data (objects)
    const renderServiceList = (services) => {
        return services.map((svc, i) => {
            // Backwards compatibility for old test data
            if (typeof svc === 'string') {
                return (
                    <div key={i} className="mb-service-item">
                        <div className="mb-service-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔧</div>
                        <div className="mb-service-info"><div className="mb-service-name">{svc}</div></div>
                    </div>
                );
            }

            // New rich data
            return (
                <div key={i} className="mb-service-item">
                    <img src={svc.image} alt={svc.name} className="mb-service-img" />
                    <div className="mb-service-info">
                        <div className="mb-service-name">{svc.name}</div>
                        <div className="mb-service-meta">Qty: {svc.qty} • ₹{svc.price}</div>
                    </div>
                </div>
            );
        });
    };

    return (
        <>
            <style>{styles}</style>
            <Navbar />
            <div className="mb-page">
                <div className="mb-container">

                    <div className="mb-header">
                        <button className="mb-back-btn" onClick={() => navigate(-1)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </button>
                        <h1 className="mb-title">My Bookings</h1>
                    </div>

                    <div className="mb-tabs">
                        <button className={`mb-tab ${activeTab === "upcoming" ? "active" : ""}`} onClick={() => setActiveTab("upcoming")}>
                            Upcoming
                        </button>
                        <button className={`mb-tab ${activeTab === "past" ? "active" : ""}`} onClick={() => setActiveTab("past")}>
                            Past Bookings
                        </button>
                    </div>

                    <div className="mb-list">
                        {filteredBookings.length === 0 ? (
                            <div className="empty-state">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                <h3>No {activeTab} bookings</h3>
                                <p>You don't have any {activeTab} service requests right now.</p>
                                <button className="mb-btn mb-btn-primary" style={{ width: 'auto', padding: '10px 24px' }} onClick={() => navigate("/services")}>
                                    Book a Service
                                </button>
                            </div>
                        ) : (
                            filteredBookings.map(booking => (
                                <div key={booking.id} className="mb-card">

                                    <div className="mb-card-head">
                                        <div>
                                            <div className="mb-id">ID: {booking.id}</div>
                                            <div className="mb-date">{booking.date}</div>
                                        </div>
                                        <div className={`mb-status status-${booking.status}`}>
                                            {booking.status}
                                        </div>
                                    </div>

                                    <div className="mb-services">
                                        {renderServiceList(booking.services)}
                                        <div className="mb-total">
                                            <span>Total Amount</span>
                                            <span>₹{booking.total}</span>
                                        </div>
                                    </div>

                                    {booking.status === "pending" && (
                                        <div style={{ background: '#FFFBEB', color: '#D97706', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textAlign: 'center', border: '1px solid #FDE68A' }}>
                                            ⏳ Finding the best {BRAND.WORKER_TERM} near you...
                                        </div>
                                    )}

                                    <div className="mb-actions">
                                        <button className="mb-btn mb-btn-outline" onClick={() => alert("Redirecting to WhatsApp support...")}>Support</button>
                                        <button className="mb-btn mb-btn-primary" onClick={() => setSelectedBooking(booking)}>View Details</button>
                                    </div>

                                </div>
                            ))
                        )}
                    </div>

                </div>
            </div>

            {/* DETAILED VIEW MODAL */}
            <div className={`detail-modal-overlay ${selectedBooking ? "open" : ""}`} onClick={() => setSelectedBooking(null)}>
                <div className="detail-modal-content" onClick={e => e.stopPropagation()}>

                    <div className="detail-header">
                        <h2>Booking Summary</h2>
                        <button className="detail-close" onClick={() => setSelectedBooking(null)}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>

                    {selectedBooking && (
                        <div className="detail-body">

                            <div className="detail-section">
                                <h3>Order Status</h3>
                                <div className="detail-row"><strong>Booking ID:</strong> <span>{selectedBooking.id}</span></div>
                                <div className="detail-row"><strong>Date & Time:</strong> <span>{selectedBooking.date}</span></div>
                                <div className="detail-row">
                                    <strong>Service Address:</strong>
                                    <span style={{ textAlign: "right", maxWidth: "60%" }}>{selectedBooking.address}</span>
                                </div>
                                <div className="detail-row">
                                    <strong>Current Status:</strong>
                                    <span className={`mb-status status-${selectedBooking.status}`} style={{ fontSize: '0.65rem' }}>{selectedBooking.status}</span>
                                </div>
                            </div>

                            <div className="detail-section">
                                <h3>Services Booked</h3>
                                <div className="mb-services" style={{ marginBottom: 0 }}>
                                    {renderServiceList(selectedBooking.services)}
                                </div>
                            </div>

                            {/* Only show if the user actually uploaded photos for this specific order */}
                            {selectedBooking.services.some(s => s.issuePhoto) && (
                                <div className="detail-section">
                                    <h3>Issue Photos Provided</h3>
                                    <div className="issue-grid">
                                        {selectedBooking.services.filter(s => s.issuePhoto).map((svc, i) => (
                                            <div key={i} className="issue-img-wrap">
                                                <img src={svc.issuePhoto} alt="Issue" />
                                                <div className="issue-img-label">{svc.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="detail-section">
                                <h3>Payment Details</h3>
                                <div className="detail-row"><span>Item Total</span> <span>₹{selectedBooking.total - 49}</span></div>
                                <div className="detail-row"><span>Trust & Safety Fee</span> <span>₹49</span></div>
                                <div className="detail-row grand-total"><span>Amount Paid</span> <span style={{ color: "var(--primary)" }}>₹{selectedBooking.total}</span></div>
                                <div className="detail-row" style={{ marginTop: '8px', fontSize: '0.8rem' }}><span>Payment Mode</span> <strong>Pay after service</strong></div>
                            </div>

                            <div className="detail-section">
                                <h3>Safety, Terms & Warranty</h3>
                                <div className="legal-box">
                                    <p><strong>30-Day Warranty:</strong> Covers rework for the same issue. Does not cover new parts or physical damage post-service.</p>
                                    <p><strong>Cancellation:</strong> Free cancellation up to 2 hours before the scheduled time. A fee of ₹99 applies thereafter.</p>
                                    <p><strong>Safety Promise:</strong> All our {BRAND.WORKER_TERM}s undergo background checks. Please ask for their NowFix ID upon arrival.</p>
                                    <p style={{ marginTop: '12px', borderTop: '1px solid #D1D5DB', paddingTop: '12px' }}>
                                        Need help? Email us at <strong style={{ color: "var(--primary)" }}>{BRAND.SUPPORT_EMAIL}</strong>
                                    </p>
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </>
    );
}