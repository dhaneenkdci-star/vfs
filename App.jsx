import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import WhyWork from './components/WhyWork.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-navy-dark text-slate-100 selection:bg-royal/30 selection:text-white">
      <Navbar />
      <main className="w-full">
        <div id="home"><Hero /></div>
        <div id="about" className="border-t border-slate-900"><About /></div>
        <div id="skills" className="border-t border-slate-900 bg-navy/20"><Skills /></div>
        <div id="projects" className="border-t border-slate-900"><Projects /></div>
        <div id="experience" className="border-t border-slate-900 bg-navy/20"><Experience /></div>
        <div id="whywork" className="border-t border-slate-900"><WhyWork /></div>
        <div id="contact" className="border-t border-slate-900 bg-navy/20"><Contact /></div>
      </main>
      
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} DHANEEN K. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-slate-300">Home</a>
            <a href="#about" className="hover:text-slate-300">About</a>
            <a href="#projects" className="hover:text-slate-300">Projects</a>
            <a href="#contact" className="hover:text-slate-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
