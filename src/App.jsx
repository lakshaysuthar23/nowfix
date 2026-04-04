import { HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import JoinAsWorker from "./pages/JoinAsWorker";
import ServiceDetail from "./pages/ServiceDetail";
import Profile from "./pages/Profile"; 
import AllServices from "./pages/AllServices";
import Checkout from "./pages/Checkout"; 
import MyBookings from "./pages/MyBookings"; // 1. Imported MyBookings

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/bookings" element={<MyBookings />} /> {/* 2. Added Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<JoinAsWorker />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;