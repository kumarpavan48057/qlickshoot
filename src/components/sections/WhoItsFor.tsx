import { motion } from 'framer-motion';
import {
  Heart,
  Gift,
  Briefcase,
  GraduationCap,
  Building2,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '../ui/Reveal';

type Audience = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
};

const audiences: Audience[] = [
  { icon: Heart, title: 'Weddings', description: 'Cinematic reels of your big day, ready before the reception ends.', gradient: 'from-rose-500 to-pink-600' },
  { icon: Gift, title: 'Birthdays', description: 'Capture every smile and surprise without lifting your phone.', gradient: 'from-amber-500 to-orange-600' },
  { icon: Briefcase, title: 'Corporate Events', description: 'Polished coverage for launches, offsites, and conferences.', gradient: 'from-brand-500 to-brand-700' },
  { icon: GraduationCap, title: 'College Events', description: 'Fests, farewells, and milestones documented in style.', gradient: 'from-accent-500 to-accent-700' },
  { icon: Building2, title: 'Brands', description: 'On-demand content crews for activations and product drops.', gradient: 'from-sky-500 to-blue-700' },
  { icon: Sparkles, title: 'Influencers', description: 'Scroll-stopping reels shot and edited while you create.', gradient: 'from-emerald-500 to-teal-700' },
];

export function WhoItsFor() {
  return (
    <section className="section-py bg-slate-50/60">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Who it's for</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Made for every kind of <span className="text-gradient">moment</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-slate-600">
              Whether it's once-in-a-lifetime or part of the weekly grind, QlickShoot has a creator for it.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={0.05 * (i % 3)}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition-shadow hover:shadow-card"
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${a.gradient} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-25`}
                />
                <div
                  className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${a.gradient} text-white shadow-soft transition-transform duration-300 group-hover:scale-110`}
                >
                  <a.icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-bold text-slate-900">
                  {a.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                  {a.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
