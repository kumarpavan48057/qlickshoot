import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/sections/Hero';
import { SocialProof } from './components/sections/SocialProof';
import { Problem } from './components/sections/Problem';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { WhoItsFor } from './components/sections/WhoItsFor';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Waitlist } from './components/sections/Waitlist';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Features />
        <HowItWorks />
        <WhoItsFor />
        <Testimonials />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
