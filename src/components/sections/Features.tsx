import { motion } from 'framer-motion';
import {
  Zap,
  MapPin,
  Scissors,
  Navigation,
  ShieldCheck,
  BadgeCheck,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '../ui/Reveal';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
};

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Reserve a creator in seconds. No back-and-forth, no waiting weeks for a quote.',
    gradient: 'from-brand-500 to-brand-700',
  },
  {
    icon: MapPin,
    title: 'Nearby Creators',
    description: 'Discover vetted photographers and videographers available right around you.',
    gradient: 'from-accent-500 to-accent-700',
  },
  {
    icon: Scissors,
    title: 'Professional Editing',
    description: 'Cinematic reels edited by pros and delivered before your event wraps up.',
    gradient: 'from-sky-500 to-blue-700',
  },
  {
    icon: Navigation,
    title: 'Real-Time Order Tracking',
    description: 'Watch your creator arrive and your reel get edited — live, on a map.',
    gradient: 'from-emerald-500 to-teal-700',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    description: 'Pay safely in-app with escrow-style protection on every single booking.',
    gradient: 'from-amber-500 to-orange-700',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Professionals',
    description: 'Every creator is background-checked and portfolio-reviewed before joining.',
    gradient: 'from-rose-500 to-pink-700',
  },
];

export function Features() {
  return (
    <section id="features" className="section-py bg-slate-50/60">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Features</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need for{' '}
              <span className="text-gradient">flawless event coverage</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-slate-600">
              From booking to delivery, QlickShoot handles the entire workflow so you
              can focus on the moment.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.05 * (i % 3)}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition-shadow hover:shadow-card"
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${f.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                />
                <div
                  className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.gradient} text-white shadow-glow transition-transform duration-300 group-hover:scale-110`}
                >
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-bold text-slate-900">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                  {f.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
