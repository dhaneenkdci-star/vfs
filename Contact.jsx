import { motion } from 'framer-motion';
import { Mail, Phone, Globe, GitBranch, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Send email using Formspree
      const response = await fetch('https://formspree.io/f/xyzdefgh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Hide success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      console.error('Email send error:', err);
      setError('Failed to send message. Please try again.');
      setTimeout(() => setError(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhaneen62@gmail.com",
      href: "mailto:dhaneen62@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 9360441944",
      href: "https://wa.me/919360441944"
    },
    {
      icon: Globe,
      label: "LinkedIn",
      value: "linkedin.com/in/dhaneen-k-b42437292",
      href: "https://www.linkedin.com/in/dhaneen-k-b42437292/"
    },
    {
      icon: GitBranch,
      label: "GitHub",
      value: "github.com/dhaneen62-hub",
      href: "https://github.com/dhaneen62-hub"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="contact">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-semibold tracking-wider text-royal-light uppercase mb-2">Get In Touch</h2>
        <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Have a project in mind? Let's build something useful together.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Left side details */}
        <div className="md:col-span-5 text-left space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Contact Details</h3>
            <p className="text-slate-400 text-sm">
              Feel free to reach out via email, WhatsApp, or connect on social platforms. I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-royal/30 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="p-3 bg-royal/10 border border-royal/20 rounded-xl text-royal-light group-hover:bg-royal group-hover:text-white transition-all duration-300">
                  <info.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">{info.label}</p>
                  <p className="text-sm font-medium text-slate-200 mt-0.5">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right side form */}
        <motion.div
          className="md:col-span-7 glass-card p-8 rounded-2xl border border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form className="space-y-6 text-left" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-slate-950 border border-slate-800 focus:border-royal-light rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  required
                  className="w-full bg-slate-950 border border-slate-800 focus:border-royal-light rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project details discussion"
                required
                className="w-full bg-slate-950 border border-slate-800 focus:border-royal-light rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition duration-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase">Message</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Let's build something great..."
                required
                className="w-full bg-slate-950 border border-slate-800 focus:border-royal-light rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition duration-200 resize-none"
              />
            </div>

            {/* Success Message */}
            {isSuccess && (
              <motion.div
                className="flex items-center space-x-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                className="flex items-center space-x-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-sm text-red-400 font-medium">{error}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-royal hover:bg-royal-light text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-royal/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
