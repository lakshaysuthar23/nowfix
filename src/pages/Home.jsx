import Navbar from '../components/layout/Navbar';
import Hero from '../sections/Hero';
import HowItWorks from '../sections/HowItWorks';
import WhyNowFix from '../sections/WhyNowFix';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      
      {/* Removed the inline padding! Hero handles its own spacing. */}
      <main>
        <Hero />
        <HowItWorks />
        <WhyNowFix />
      </main>
    </div>
  );
}

export default Home;