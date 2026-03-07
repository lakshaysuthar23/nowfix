import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import JoinAsWorker from "./pages/JoinAsWorker";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<JoinAsWorker />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;