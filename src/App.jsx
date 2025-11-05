import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';

function App() {
  // Ensure smooth scrolling for anchor links
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.documentElement.style.scrollBehavior = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-gray-900">Dev Portfolio</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
