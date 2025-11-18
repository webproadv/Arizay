import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { Gallery } from './components/Gallery';
import { CallToAction } from './components/CallToAction';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <img src="/logo.png" alt="Arizay Guerra" className="h-16 sm:h-20 w-auto object-contain mix-blend-multiply" />
        </div>
      </header>
      <Hero />
      <Statistics />
      <Gallery />
      <CallToAction />
      <ContactForm />
    </div>
  );
}

export default App;
