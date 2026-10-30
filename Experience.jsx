import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Lead MERN Stack Developer",
      company: "Tech Innovations Inc.",
      dates: "2024 - Present",
      bullets: [
        "Architect and lead development of highly interactive MERN stack web applications.",
        "Deploy modular state management configurations optimizing data caching and reducer structures."
      ],
      achievement: "Engineered high-throughput booking microservices reducing scheduling latency by 45%."
    },
    {
      role: "Full Stack Developer",
      company: "Creative Digital Agency",
      dates: "2022 - 2024",
      bullets: [
        "Translated Figma prototypes to pixel-perfect React systems with tailwind-styled fluid structures.",
        "Implemented RESTful API endpoints, mongoose schemas, and transaction controllers."
      ],
      achievement: "Reduced application initial bundle size by 30% through code splitting and asset lazy loading."
    },
    {
      role: "Junior Web Developer",
      company: "Solutions Corp",
      dates: "2021 - 2022",
      bullets: [
        "Integrated third-party APIs using modern asynchronous Fetch/Axios configurations.",
        "Supported styling frameworks migrations and optimized application SEO meta parameters."
      ],
      achievement: "Configured clean form validations that reduced checkout drop-offs by 18%."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="experience">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-semibold tracking-wider text-royal-light uppercase mb-2">Professional Journey</h2>
        <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          A corporate timeline of my work and key achievements.
        </p>
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role + exp.company}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
          >
            {/* Timeline node */}
            <div className="timeline-dot absolute -left-[38px] md:-left-[54px] w-4 h-4 bg-royal rounded-full border-4 border-navy-dark shadow-md shadow-royal/40" />

            <div className="glass-card p-6 md:p-8 rounded-2xl text-left border border-slate-800/80 hover:border-royal/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-royal-light shrink-0" />
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-slate-400 mt-1">{exp.company}</p>
                </div>
                
                <span className="flex items-center text-xs font-semibold text-royal-light bg-royal/10 border border-royal/20 px-3 py-1 rounded-full shrink-0 w-fit self-start md:self-center">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {exp.dates}
                </span>
              </div>

              <ul className="list-disc pl-5 text-slate-400 text-sm space-y-2 mb-4">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>

              {exp.achievement && (
                <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                  <Award className="w-5 h-5 text-royal-light shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm">
                    <strong className="text-white font-semibold">Key Achievement:</strong>{' '}
                    <span className="text-slate-300">{exp.achievement}</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
