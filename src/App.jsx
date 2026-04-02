import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import JoinAsWorker from "./pages/JoinAsWorker";
import ServiceDetail from "./pages/ServiceDetail";
import Profile from "./pages/Profile"; // 1. Imported the new page

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<JoinAsWorker />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/profile" element={<Profile />} /> {/* 2. Added the route */}
      </Routes>
    </HashRouter>
  );
}

export default App;