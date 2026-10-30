import { motion } from 'framer-motion';
import { Monitor, Layout, Terminal, Settings } from 'lucide-react';

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Redux Toolkit"]
    },
    {
      title: "UI & Responsive Design",
      icon: Layout,
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Layouts", "CSS Grid/Flexbox", "Figma Design Translation"]
    },
    {
      title: "Backend & Integration",
      icon: Terminal,
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "JSON", "Axios/Fetch"]
    },
    {
      title: "Developer Tools",
      icon: Settings,
      skills: ["Git", "GitHub", "VS Code", "npm/pnpm", "Vite Bundler"]
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="skills">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-semibold tracking-wider text-royal-light uppercase mb-2">Technical Stack</h2>
        <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Tools and technologies I use to build scalable web applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            className="glass-card p-6 rounded-2xl text-left flex flex-col h-full border border-slate-800/80 hover:border-royal/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-royal/10 border border-royal/20 rounded-lg text-royal-light">
                <group.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base md:text-lg">{group.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-xs bg-slate-900 border border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-700 transition duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
