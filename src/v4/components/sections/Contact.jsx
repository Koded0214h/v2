import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import SectionWrapper, { SectionLabel } from '../ui/SectionWrapper';

const DIRECT_LINKS = [
  {
    icon: Mail,
    label: 'coder0214h@gmail.com',
    href: 'mailto:coder0214h@gmail.com',
    isReactIcon: false,
  },
  {
    icon: SiLinkedin,
    label: 'linkedin.com/in/koded0214h',
    href: 'https://www.linkedin.com/in/koded0214h',
    isReactIcon: true,
  },
  {
    icon: SiGithub,
    label: 'github.com/Koded0214h',
    href: 'https://github.com/Koded0214h',
    isReactIcon: true,
  },
  {
    icon: MapPin,
    label: 'Lagos, Nigeria — Open to remote',
    href: null,
    isReactIcon: false,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // TODO: Replace with Resend server action or EmailJS
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 900)); // simulate send delay
    setSending(false);
    setSubmitted(true);
  };

  const inputStyle = {
    backgroundColor: '#0f1623',
    borderColor: '#1e2d3d',
    color: '#e2e8f0',
    outline: 'none',
  };

  const focusStyle = (e) => (e.target.style.borderColor = '#00d9ff44');
  const blurStyle = (e) => (e.target.style.borderColor = '#1e2d3d');

  return (
    <SectionWrapper id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="send_signal.sh" />
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#e2e8f0' }}>
          Get in Touch
        </h2>
        <p className="text-sm mb-12" style={{ color: '#64748b' }}>
          Available for full-time remote or contract backend / AI systems work.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center gap-4 rounded-xl border p-10 text-center"
                  style={{ borderColor: '#22c55e33', backgroundColor: '#0a1e160a' }}
                >
                  <CheckCircle size={36} style={{ color: '#22c55e' }} />
                  <h3 className="font-semibold text-lg" style={{ color: '#e2e8f0' }}>
                    Signal received.
                  </h3>
                  <p className="text-sm" style={{ color: '#64748b' }}>
                    I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                    className="font-mono text-xs mt-2 transition-colors hover:text-v4-accent"
                    style={{ color: '#64748b' }}
                  >
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  {[
                    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                    { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  ].map((f) => (
                    <div key={f.name}>
                      <label
                        className="font-mono text-xs block mb-1.5"
                        style={{ color: '#64748b' }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name]}
                        onChange={handleChange}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                        placeholder={f.placeholder}
                        required
                        className="w-full px-4 py-3 rounded-lg border text-sm transition-colors duration-150"
                        style={inputStyle}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="font-mono text-xs block mb-1.5" style={{ color: '#64748b' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                      placeholder="What are you building?"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border text-sm resize-none transition-colors duration-150"
                      style={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-opacity disabled:opacity-60"
                    style={{ backgroundColor: '#00d9ff', color: '#000000' }}
                  >
                    {sending ? (
                      <>
                        <span className="font-mono text-xs">Sending</span>
                        <span className="cursor-blink">█</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Signal
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Direct links */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-xl border p-5"
              style={{ borderColor: '#1e2d3d', backgroundColor: '#0f1623' }}
            >
              <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: '#64748b' }}>
                Direct channels
              </p>
              <div className="flex flex-col gap-3">
                {DIRECT_LINKS.map((link, i) => {
                  const Icon = link.icon;
                  const inner = (
                    <div className="flex items-center gap-3">
                      <Icon
                        size={16}
                        style={{ color: '#00d9ff', flexShrink: 0 }}
                      />
                      <span className="text-sm" style={{ color: '#94a3b8' }}>
                        {link.label}
                      </span>
                    </div>
                  );
                  return link.href ? (
                    <a
                      key={i}
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-v4-accent"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={i}>{inner}</div>
                  );
                })}
              </div>
            </div>

            <div
              className="rounded-xl border p-5"
              style={{ borderColor: '#00d9ff22', backgroundColor: '#0a1e2e0a' }}
            >
              <p className="font-mono text-xs" style={{ color: '#00d9ff' }}>
                &gt; status
              </p>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: '#94a3b8' }}>
                Available for{' '}
                <span style={{ color: '#e2e8f0' }}>full-time remote</span> or{' '}
                <span style={{ color: '#e2e8f0' }}>contract</span> backend / AI systems work.
                Based in Lagos, Nigeria.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-v4-success animate-pulse" />
                <span className="font-mono text-xs" style={{ color: '#22c55e' }}>
                  Actively looking — fast response
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
