// src/app/page.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Experts from './components/Experts';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <HowItWorks />
        <Experts />
      </main>
      <Footer />
    </>
  );
}