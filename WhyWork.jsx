import { motion } from 'framer-motion';
import { Smartphone, LayoutTemplate, Cpu, Sparkles } from 'lucide-react';

export default function WhyWork() {
  const cards = [
    {
      title: "Responsive Development",
      desc: "Websites that fit perfectly across phones, tablets, and widescreen systems.",
      icon: Smartphone
    },
    {
      title: "Clean UI Design",
      desc: "Sleek, minimalist designs with clear user flow hierarchy and premium colors.",
      icon: LayoutTemplate
    },
    {
      title: "Reusable Components",
      desc: "Building modular, atomic elements designed to speed up project scaling.",
      icon: Cpu
    },
    {
      title: "Performance Focused",
      desc: "Optimizing media resources, bundle caching, and loading state trees.",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="whywork">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-semibold tracking-wider text-royal-light uppercase mb-2">Why Work With Me</h2>
        <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Reliable developer workflows tailored to user needs.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            className="glass-card p-6 rounded-2xl text-left border border-slate-800/80 hover:border-royal/20"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="p-3 bg-royal/10 border border-royal/20 rounded-xl text-royal-light w-fit mb-4">
              <card.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base md:text-lg mb-2">{card.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
