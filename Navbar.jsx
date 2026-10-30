import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Cpu, Layers, Briefcase, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-wider text-gradient font-sans">
          DHANEEN <span className="text-royal-light">K</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
            >
              <link.icon className="w-4 h-4 opacity-70" />
              <span>{link.name}</span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-xs font-semibold bg-royal hover:bg-royal-light text-white transition-all duration-300 shadow-md hover:shadow-royal/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drop down menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-4 px-6 flex flex-col space-y-4 shadow-xl border-t border-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-300 hover:text-white transition-colors py-2 flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <link.icon className="w-5 h-5 opacity-70" />
              <span>{link.name}</span>
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center w-full px-5 py-2.5 rounded-xl text-sm font-semibold bg-royal text-white transition-all"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
