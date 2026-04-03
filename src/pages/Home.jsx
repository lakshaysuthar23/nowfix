import Navbar from '../components/layout/Navbar';
import Hero from '../sections/Hero';
import Services from "../sections/Services";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className="home-page" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default Home;