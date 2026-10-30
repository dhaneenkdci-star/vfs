import { motion } from 'framer-motion';
import heroImg from '../assets/hero me.png';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 md:pt-32 relative overflow-hidden px-6">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-royal/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-royal-light/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Left column info */}
        <motion.div
          className="md:col-span-7 flex flex-col space-y-6 text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-royal-light font-semibold tracking-wider uppercase text-xs">MERN Stack Developer</span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Building modern web <span className="text-gradient-royal block">experiences</span> that look great and work better.
          </h1>
          
          <p className="text-slate-400 text-base md:text-lg max-w-lg">
            Hi, I'm Dhaneen K. I design and build highly performant, responsive, and beautiful user interfaces with the React, Node, and Tailwind ecosystem.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-royal hover:bg-royal-light text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-royal/20"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center space-x-2 px-6 py-3 rounded-full border border-slate-700 hover:border-slate-500 bg-navy-light/40 hover:bg-navy-light/70 text-slate-200 font-semibold text-sm transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Stats sub-hero */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-800/85">
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">7+</p>
              <p className="text-xs md:text-sm text-slate-400 font-medium">Projects Built</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">97.8%</p>
              <p className="text-xs md:text-sm text-slate-400 font-medium">Responsive UI</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">Fast</p>
              <p className="text-xs md:text-sm text-slate-400 font-medium">Modern Load Time</p>
            </div>
          </div>
        </motion.div>

        {/* Right column photo / illustration */}
        <motion.div
          className="md:col-span-5 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group max-w-sm md:max-w-none">
            {/* Ambient background glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-royal to-royal-light rounded-2xl opacity-40 blur-xl group-hover:opacity-75 transition duration-1000" />
            
            {/* Image frame */}
            <div className="relative bg-navy-dark border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl p-2 glow-blue">
              <img
                src={heroImg}
                alt="Dhaneen K"
                className="w-full h-auto max-w-[320px] md:max-w-[380px] object-cover rounded-xl transition duration-500 scale-100 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
