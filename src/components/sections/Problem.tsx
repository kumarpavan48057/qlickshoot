import { motion } from 'framer-motion';
import { X, Check, Clock, Calendar, MapPin, MessageSquare, Zap, Video, Navigation, BadgeCheck } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const traditional = [
  { icon: Calendar, text: 'Book weeks earlier' },
  { icon: Clock, text: 'Long delivery times' },
  { icon: MapPin, text: 'No live tracking' },
  { icon: MessageSquare, text: 'Communication issues' },
];

const qlickshoot = [
  { icon: Zap, text: 'Instant booking' },
  { icon: Video, text: 'Fast edited reels' },
  { icon: Navigation, text: 'Real-time tracking' },
  { icon: BadgeCheck, text: 'Verified creators' },
];

export function Problem() {
  return (
    <section className="section-py">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">The problem</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Traditional event photography is slow.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-slate-600">
              Weeks of waiting, no visibility, and endless back-and-forth. QlickShoot
              rewrites the entire experience.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Traditional */}
          <Reveal>
            <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-200 text-slate-500">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-slate-700">Traditional</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {traditional.map((item, i) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-rose-400 shadow-soft">
                      <X className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span className="flex items-center gap-2 text-slate-500">
                      <item.icon className="h-4 w-4 text-slate-400" />
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* QlickShoot */}
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-white to-brand-50 p-7 shadow-glow sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-200/40 blur-3xl" />
              <div className="relative flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-glow">
                  <Zap className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900">QlickShoot</h3>
              </div>
              <ul className="relative mt-6 space-y-4">
                {qlickshoot.map((item, i) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-white shadow-soft">
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span className="flex items-center gap-2 font-medium text-slate-800">
                      <item.icon className="h-4 w-4 text-brand-600" />
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
