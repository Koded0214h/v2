import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX, SiWhatsapp, SiWakatime, SiLeetcode, SiDevdotto, SiGmail } from 'react-icons/si';
import SectionWrapper, { SectionLabel } from '../ui/SectionWrapper';

const PLATFORMS = [
  {
    name: 'GitHub',
    handle: '@Koded0214h',
    stat: '30+ repos',
    stat2: 'Active contributor',
    icon: SiGithub,
    iconColor: '#e2e8f0',
    link: 'https://github.com/Koded0214h',
  },
  {
    name: 'LinkedIn',
    handle: 'Raufu Abdulrahman',
    stat: 'Open to Work',
    stat2: 'Backend / AI Systems',
    icon: SiLinkedin,
    iconColor: '#0a66c2',
    link: 'https://www.linkedin.com/in/koded0214h',
  },
  {
    name: 'X / Twitter',
    handle: '@coder0214h',
    stat: 'Building in public',
    stat2: 'Systems & AI',
    icon: SiX,
    iconColor: '#e2e8f0',
    link: 'https://x.com/coder0214h',
  },
  {
    name: 'WhatsApp',
    handle: '+234 703 005 7130',
    stat: 'Direct line',
    stat2: 'Quick response',
    icon: SiWhatsapp,
    iconColor: '#22c55e',
    link: 'https://wa.me/+2347030057130',
  },
  {
    name: 'WakaTime',
    handle: 'koded',
    stat: '6+ hrs/day avg',
    stat2: 'Python · Go · TypeScript',
    icon: SiWakatime,
    iconColor: '#00d9ff',
    link: 'https://wakatime.com/@Koded0214h',
  },
  {
    name: 'LeetCode',
    handle: 'koded',
    stat: '100+ solved',
    stat2: 'Algorithms & Systems',
    icon: SiLeetcode,
    iconColor: '#f59e0b',
    link: 'https://leetcode.com/u/Koded0214h/',
  },
  {
    name: 'Email',
    handle: 'coder0214h@gmail.com',
    stat: 'Preferred contact',
    stat2: 'Responds within 24h',
    icon: SiGmail,
    iconColor: '#ea4335',
    link: 'mailto:coder0214h@gmail.com',
  },
  {
    name: 'dev.to',
    handle: '@koded',
    stat: 'Technical writing',
    stat2: 'Backend & AI',
    icon: SiDevdotto,
    iconColor: '#e2e8f0',
    link: 'https://dev.to/coder0214h',
  },
];

function FootprintCard({ platform, index }) {
  const Icon = platform.icon;
  return (
    <motion.a
      href={platform.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="footprint-card block rounded-xl border p-5 group"
      style={{ borderColor: '#1e2d3d', backgroundColor: '#0f1623' }}
    >
      <div className="flex items-start justify-between mb-4">
        <Icon
          size={28}
          style={{ color: platform.iconColor, opacity: 0.85 }}
          className="transition-opacity group-hover:opacity-100"
        />
        <ExternalLink
          size={13}
          style={{ color: '#1e2d3d' }}
          className="transition-colors group-hover:text-v4-accent"
        />
      </div>

      <h3 className="font-semibold text-sm mb-0.5" style={{ color: '#e2e8f0' }}>
        {platform.name}
      </h3>
      <p className="font-mono text-xs mb-3" style={{ color: '#64748b' }}>
        {platform.handle}
      </p>

      <div className="space-y-1">
        <p className="text-xs font-medium" style={{ color: platform.iconColor }}>
          {platform.stat}
        </p>
        <p className="text-xs" style={{ color: '#64748b' }}>
          {platform.stat2}
        </p>
      </div>
    </motion.a>
  );
}

export default function DevFootprint() {
  return (
    <SectionWrapper id="footprint" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="public_activity.log" />
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#e2e8f0' }}>
          Dev Footprint
        </h2>
        <p className="text-sm mb-10" style={{ color: '#64748b' }}>
          Where I build, write, and exist in public.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {PLATFORMS.map((p, i) => (
            <FootprintCard key={p.name} platform={p} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
