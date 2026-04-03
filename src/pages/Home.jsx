import Navbar from '../components/layout/Navbar';
import Hero from '../sections/Hero';
import Services from "../sections/Services";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default Home;