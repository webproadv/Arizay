import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { Gallery } from './components/Gallery';
import { Extensions } from './components/Extensions';
import { CallToAction } from './components/CallToAction';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <img src="/logo.png" alt="Arizay Guerra" onError={(e) => { e.currentTarget.src = '/vite.svg'; e.currentTarget.classList.remove('mix-blend-multiply'); }} className="h-24 sm:h-32 w-auto object-contain mix-blend-multiply" />
        </div>
      </header>
      <Hero />
      <Statistics />
      <Gallery />
      <Extensions />
      <CallToAction />
      <ContactForm />
    </div>
  );
}

export default App;
