import { motion } from 'framer-motion';
import { Award, Code2, Cpu } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Writing clean, semantic, and highly maintainable components following modern React standards."
    },
    {
      icon: Cpu,
      title: "API Integrations",
      desc: "Connecting state-driven frontend apps with powerful backend API systems and database layers."
    },
    {
      icon: Award,
      title: "Responsive Design",
      desc: "Crafting fluid responsive layouts that look exceptional across mobile, tablet, and widescreen systems."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="about">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-semibold tracking-wider text-royal-light uppercase mb-2">About Me</h2>
        <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Turning complex designs into clean, production-ready code.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Left column info */}
        <div className="md:col-span-6 text-left space-y-6">
          <h3 className="text-xl font-bold text-white">Who I Am</h3>
          <p className="text-slate-400 text-base leading-relaxed">
            I am a MERN Stack Developer dedicated to engineering polished, user-focused web applications. With expertise spanning React, Node, Express, MongoDB, and Tailwind CSS, I build modern web applications that provide responsive UI design and high performance.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            My primary goal is to turn visual design concepts into production-grade systems, with a strong focus on reusability, accessibility, clean architecture, and API integration.
          </p>
        </div>

        {/* Right column highlights */}
        <div className="md:col-span-6 grid gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              className="glass-card p-6 rounded-2xl flex items-start space-x-4 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="p-3 bg-royal/10 border border-royal/20 rounded-xl text-royal-light shrink-0">
                <card.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1">{card.title}</h4>
                <p className="text-slate-400 text-sm">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
