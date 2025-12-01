import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg tracking-wider text-black"
          >
            EMILY DICESARO
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('milestones')}
              className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors"
            >
              Milestones
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors text-left"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('milestones')}
              className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors text-left"
            >
              Milestones
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors text-left"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors text-left"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
