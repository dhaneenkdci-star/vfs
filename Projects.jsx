import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import proj1 from '../assets/project1.png';
import proj2 from '../assets/project2.png';
import proj3 from '../assets/project3.png';
import proj4 from '../assets/project4.png';

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A responsive portfolio experience built to present work clearly, highlight strengths, and create a polished first impression.",
      tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
      image: proj1,
      demo: "#",
      github: "#"
    },
    {
      title: "Business Landing Page",
      desc: "A marketing-focused landing page designed with strong hierarchy, clean messaging, and conversion-friendly call-to-action sections.",
      tech: ["React.js", "CSS", "Responsive Design", "UI System"],
      image: proj2,
      demo: "#",
      github: "#"
    },
    {
      title: "Admin Dashboard",
      desc: "A data-rich dashboard concept for tracking metrics, user activity, and operational status in a clear and actionable layout.",
      tech: ["React.js", "Charts", "Tailwind CSS", "Dashboard UI"],
      image: proj3,
      demo: "#",
      github: "#"
    },
    {
      title: "Booking System UI",
      desc: "A clean scheduling interface designed to simplify appointment planning, user flows, and service booking experiences.",
      tech: ["React.js", "Forms", "UX Design", "Tailwind CSS"],
      image: proj4,
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="projects">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-semibold tracking-wider text-royal-light uppercase mb-2">Featured Projects</h2>
        <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Work that blends clean design with practical frontend execution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-slate-800/80 hover:border-royal/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            {/* Project screenshot container */}
            <div className="relative aspect-video overflow-hidden border-b border-slate-800/80 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <a
                  href={project.demo}
                  className="p-3 bg-white text-navy-dark rounded-full hover:bg-slate-200 transition-colors shadow-lg"
                  title="Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={project.github}
                  className="p-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors border border-slate-700/50 shadow-lg"
                  title="Source Code"
                >
                  <GitBranch className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Content info */}
            <div className="p-6 flex flex-col flex-grow text-left">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900 border border-slate-800 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
