import Navbar from '../components/layout/Navbar';
import Hero from '../sections/Hero';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default Home;