import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCart } from "../contexts/CartContext";

// ==========================================
// MOCK DATA (Aditya: Connect this to DB later)
// ==========================================
const MOCK_CATEGORIES = [
  { id: "plumbing", name: "Plumbing" },
  { id: "electrical", name: "Electrical" },
  { id: "ac", name: "AC & Appliances" },
  { id: "cleaning", name: "Cleaning & Pest" },
];

const MOCK_SERVICES = [
  { 
    id: "s1", category: "plumbing", name: "Tap Leakage Repair", 
    desc: "Fix dripping taps, pipes, and minor leaks. Spare parts extra.", 
    price: 149, isPackage: false, time: "45 mins",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: "s2", category: "plumbing", name: "Bathroom Deep Check & Fix", 
    desc: "Complete plumbing inspection, blockages removed, and pressure testing.", 
    price: 599, isPackage: true, time: "2 hrs",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: "s3", category: "electrical", name: "Fan Installation/Repair", 
    desc: "Ceiling or exhaust fan setup, wiring check, and speed fixing.", 
    price: 199, isPackage: false, time: "30 mins",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: "s4", category: "electrical", name: "Main Board Repair", 
    desc: "MCB replacement, fuse fixing, or complex wiring issues.", 
    price: 299, isPackage: false, time: "1 hr",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: "s5", category: "ac", name: "AC Master Servicing", 
    desc: "Deep jet clean of indoor/outdoor units + gas pressure check.", 
    price: 899, isPackage: true, time: "1.5 hrs",
    image: "https://images.unsplash.com/photo-1574360773950-652f205c0663?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: "s6", category: "cleaning", name: "Sofa Deep Cleaning", 
    desc: "Foam wash, stain removal, and dry vacuuming for 5-seater.", 
    price: 749, isPackage: false, time: "2 hrs",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400"
  },
];

const styles = `
  .catalog-page { background: var(--bg-2, #F9FAFB); min-height: 100vh; display: flex; flex-direction: column; font-family: var(--font-body); padding-top: var(--navbar-height); }
  
  .marquee-wrap { background: #0A192F; color: white; padding: 12px 0; overflow: hidden; border-bottom: 3px solid var(--orange, #FF9F1C); display: flex; white-space: nowrap; }
  .marquee-content { display: flex; animation: scrollMarquee 25s linear infinite; gap: 40px; padding-left: 40px; }
  @keyframes scrollMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  .marquee-item { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #E5E7EB; }
  .marquee-item svg { width: 18px; height: 18px; color: var(--orange, #FF9F1C); }
  
  .catalog-container { max-width: 1200px; margin: 0 auto; width: 100%; display: flex; flex: 1; padding: 32px 1.5rem 100px; gap: 40px; align-items: flex-start; }
  
  .sidebar-cats { width: 260px; background: white; border: 1px solid var(--border); border-radius: 12px; padding: 24px; position: sticky; top: calc(var(--navbar-height) + 32px); flex-shrink: 0; box-shadow: var(--shadow-sm); }
  .sidebar-title { font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: var(--text); margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }
  
  .cat-label { display: flex; align-items: center; gap: 12px; cursor: pointer; font-size: 0.95rem; font-weight: 500; color: var(--text-2); margin-bottom: 16px; transition: color 0.2s; user-select: none; }
  .cat-label:hover { color: var(--primary); }
  .cat-checkbox { width: 18px; height: 18px; cursor: pointer; accent-color: var(--primary); border: 1.5px solid var(--border); border-radius: 4px; flex-shrink: 0; }
  
  .catalog-main { flex: 1; min-width: 0; }
  
  .search-wrap { margin-bottom: 24px; position: relative; }
  .search-input { width: 100%; padding: 16px 20px 16px 52px; border: 1px solid var(--border); border-radius: 12px; font-size: 1rem; box-shadow: var(--shadow-sm); outline: none; transition: border 0.2s, box-shadow 0.2s; font-family: var(--font-body); }
  .search-input:focus { border-color: var(--primary); box-shadow: 0 0 0 4px rgba(31,91,181,0.1); }
  .search-icon { position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: #9CA3AF; display: flex; align-items: center; }
  
  .svc-list { display: flex; flex-direction: column; gap: 20px; }
  .svc-row { background: white; border: 1px solid var(--border); border-radius: 12px; padding: 20px; display: flex; gap: 24px; box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s; }
  .svc-row:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); border-color: #D1D5DB; }
  
  .svc-img-wrap { width: 160px; height: 130px; border-radius: 8px; overflow: hidden; flex-shrink: 0; border: 1px solid var(--border); }
  .svc-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
  .svc-row:hover .svc-img { transform: scale(1.05); }

  .svc-content { flex: 1; display: flex; flex-direction: column; justify-content: space-between; min-width: 0; }
  
  .svc-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 8px; }
  .svc-name { font-size: 1.15rem; font-weight: 700; color: var(--text); line-height: 1.3; }
  .svc-price { font-size: 1.25rem; font-weight: 800; color: var(--primary); white-space: nowrap; }
  
  .svc-desc { font-size: 0.85rem; color: #6B7280; line-height: 1.5; margin-bottom: 12px; max-width: 90%; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  
  .svc-bottom { display: flex; justify-content: space-between; align-items: flex-end; }
  .svc-badges { display: flex; gap: 8px; flex-wrap: wrap; }
  .badge-pkg { background: #FFF7ED; font-size: 0.65rem; font-weight: 700; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; border: 1px solid #FFEDD5; }
  .badge-time { background: #F3F4F6; color: #4B5563; font-size: 0.7rem; font-weight: 600; padding: 4px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px; }
  
  .btn-add { background: white; border: 2px solid var(--primary); color: var(--primary); font-weight: 700; padding: 8px 28px; border-radius: 8px; cursor: pointer; transition: 0.2s; font-size: 0.95rem; font-family: var(--font-body); }
  .btn-add:hover { background: #EFF6FF; }

  .floating-cart { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); width: calc(100% - 32px); max-width: 600px; background: #0A192F; color: white; padding: 16px 24px; border-radius: 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3); z-index: 100; animation: slideUp 0.3s ease-out; border-top: 3px solid var(--orange); }
  @keyframes slideUp { from { bottom: -100px; opacity: 0; } to { bottom: 20px; opacity: 1; } }
  
  .cart-info h4 { font-size: 0.9rem; color: #9CA3AF; font-weight: 500; margin-bottom: 2px; }
  .cart-info p { font-size: 1.2rem; font-weight: 800; color: white; }
  .cart-btn { background: var(--orange, #FF9F1C); color: #0A192F; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 800; font-size: 1rem; cursor: pointer; transition: transform 0.2s; font-family: var(--font-body); }
  .cart-btn:hover { transform: translateY(-2px); }

  @media (max-width: 768px) {
    .catalog-container { flex-direction: column; padding: 24px 1rem 120px; gap: 24px; }
    .sidebar-cats { position: static; width: 100%; display: flex; flex-direction: column; padding: 16px; gap: 4px; }
    .sidebar-title { margin-bottom: 12px; padding-bottom: 8px; }
    .cat-label { margin-bottom: 10px; }
    .svc-row { padding: 16px; gap: 16px; flex-direction: column; }
    .svc-img-wrap { width: 100%; height: 160px; }
    .svc-header { flex-direction: column; gap: 8px; }
    .svc-desc { max-width: 100%; }
    .svc-bottom { margin-top: 12px; border-top: 1px solid var(--border); padding-top: 16px; flex-direction: row; align-items: center; }
  }
`;

export default function AllServices() {
  const navigate = useNavigate();
  const [selectedCats, setSelectedCats] = useState([]);
  const [search, setSearch] = useState("");
  
  const { cart, toggleCartItem, isCartConfirmed, setIsCartConfirmed } = useCart(); 

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleCategoryToggle = (catId) => {
    setSelectedCats(prev => {
      if (prev.includes(catId)) return prev.filter(id => id !== catId); 
      return [...prev, catId]; 
    });
  };

  const filteredServices = useMemo(() => {
    return MOCK_SERVICES.filter(svc => {
      const matchesSearch = svc.name.toLowerCase().includes(search.toLowerCase()) || svc.desc.toLowerCase().includes(search.toLowerCase());
      const matchesCat = selectedCats.length === 0 || selectedCats.includes(svc.category);
      return matchesSearch && matchesCat;
    });
  }, [search, selectedCats]);

  // Fixed Math: No quantity, just count unique items in the cart
  const getCartTotals = () => {
    let totalItems = 0;
    let totalPrice = 0;
    Object.keys(cart).forEach((id) => {
      const svc = MOCK_SERVICES.find(s => s.id === id);
      if (svc) {
        totalItems += 1;
        totalPrice += svc.price;
      }
    });
    return { totalItems, totalPrice };
  };

  const { totalItems, totalPrice } = getCartTotals();

  const marqueeItems = [
    { text: "Verified Quality Professionals", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
    { text: "Same Day Service Guaranteed", icon: (<g><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></g>) },
    { text: "Fixed Transparent Pricing", icon: (<g><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></g>) },
    { text: "30-Day Service Warranty", icon: <polyline points="20 6 9 17 4 12" /> },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="catalog-page">
        <Navbar />
        
        <div className="marquee-wrap">
          <div className="marquee-content">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div key={index} className="marquee-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div className="catalog-container">
          <aside className="sidebar-cats">
            <h3 className="sidebar-title">Categories</h3>
            {MOCK_CATEGORIES.map(cat => (
              <label key={cat.id} className="cat-label">
                <input 
                  type="checkbox" 
                  className="cat-checkbox"
                  checked={selectedCats.includes(cat.id)}
                  onChange={() => handleCategoryToggle(cat.id)}
                />
                {cat.name}
              </label>
            ))}
          </aside>

          <main className="catalog-main">
            <div className="search-wrap">
              <div className="search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search for AC repair, plumbing..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="svc-list">
              {filteredServices.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 20px", color: "#6B7280", background: "white", borderRadius: "12px", border: "1px dashed #D1D5DB" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: "16px"}}>
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <p>No services match your filters. Try clearing the search or categories.</p>
                </div>
              ) : (
                filteredServices.map(svc => {
                  const isInCart = !!cart[svc.id];
                  
                  return (
                    <div key={svc.id} className="svc-row">
                      <div className="svc-img-wrap">
                        <img src={svc.image} alt={svc.name} className="svc-img" loading="lazy" />
                      </div>
                      
                      <div className="svc-content">
                        <div>
                          <div className="svc-header">
                            <h3 className="svc-name">{svc.name}</h3>
                            <div className="svc-price">₹{svc.price}</div>
                          </div>
                          <p className="svc-desc">{svc.desc}</p>
                        </div>
                        
                        <div className="svc-bottom">
                          <div className="svc-badges">
                            {svc.isPackage && (
                              <span className="badge-pkg">
                                <span style={{ color: "var(--primary)" }}>BEST</span>{" "}
                                <span style={{ color: "var(--orange)" }}>VALUE</span>
                              </span>
                            )}
                            <span className="badge-time">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                              {svc.time}
                            </span>
                          </div>
                          
                          <div className="svc-action">
                            {!isInCart ? (
                              <button 
                                className="btn-add" 
                                onClick={() => { toggleCartItem(svc.id); setIsCartConfirmed(false); }}
                              >
                                Add
                              </button>
                            ) : (
                              <button 
                                className="btn-add" 
                                style={{ background: '#FEE2E2', color: '#DC2626', borderColor: '#FECACA' }}
                                onClick={() => { toggleCartItem(svc.id); setIsCartConfirmed(false); }}
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </main>
        </div>
        
        {totalItems > 0 && (
          <div className="floating-cart">
            <div className="cart-info">
              <h4>{totalItems} item{totalItems > 1 ? 's' : ''} added</h4>
              <p>₹{totalPrice}</p>
            </div>
            <button 
              className="cart-btn" 
              onClick={() => navigate("/checkout")}
            >
              View Cart →
            </button>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}