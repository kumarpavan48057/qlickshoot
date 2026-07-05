import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Star,
  MapPin,
  CheckCircle2,
  Video,
  Navigation,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Button } from '../ui/Button';

const float = (delay: number) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const, delay },
});

export function Hero() {
  const reduce = useReducedMotion();
  const motionProps = reduce ? {} : float(0.4);

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/50 via-accent-200/40 to-transparent blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl" />
      </div>

      <div className="container-px grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: copy */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-500" />
            Now in early access
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Professional Event Reels{' '}
            <span className="text-gradient">Delivered in Minutes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Book trusted photographers and videographers on demand and receive
            professionally edited reels before your event is over.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#waitlist">
              <Button size="lg">
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button size="lg" variant="secondary">
                <Play className="h-4 w-4 fill-current" />
                Watch Demo
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="flex -space-x-2.5">
              {[
                'from-brand-500 to-brand-700',
                'from-accent-500 to-accent-700',
                'from-sky-500 to-blue-700',
                'from-rose-500 to-pink-700',
              ].map((g, i) => (
                <span
                  key={i}
                  className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${g} ring-2 ring-white`}
                >
                  <Video className="h-4 w-4 text-white" />
                </span>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-0.5 text-slate-500">
                Loved by <span className="font-semibold text-slate-700">1,000+</span> early signups
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: phone mockup */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <PhoneMockup motionProps={motionProps} />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ motionProps }: { motionProps: Record<string, unknown> }) {
  return (
    <div className="relative flex justify-center">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 mx-auto h-[460px] w-[300px] rounded-[3rem] bg-gradient-to-br from-brand-300/40 to-accent-300/40 blur-3xl" />

      {/* Floating cards */}
      <motion.div
        {...motionProps}
        className="absolute -left-2 top-24 z-20 hidden sm:block"
      >
        <FloatingBooking />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute -right-2 top-56 z-20 hidden sm:block"
      >
        <FloatingReel />
      </motion.div>

      {/* Phone frame */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 h-[560px] w-[280px] rounded-[2.75rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl"
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-30 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-slate-50 to-white">
          {/* App header */}
          <div className="px-5 pt-8 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400">Good evening</p>
                <p className="font-display text-base font-bold text-slate-900">Alex</p>
              </div>
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-600 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Nearby creators */}
          <div className="px-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Nearby creators
            </p>
            <div className="space-y-2.5">
              <CreatorRow name="Maya R." role="Cinematographer" dist="0.4 mi" rating="4.9" />
              <CreatorRow name="Devon K." role="Event Editor" dist="0.8 mi" rating="4.8" />
            </div>
          </div>

          {/* Booking status */}
          <div className="mt-4 px-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Booking status</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Confirmed
                </span>
              </div>
              <p className="mt-1.5 text-sm font-bold text-slate-900">Maya is on the way</p>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '72%' }}
                  transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                />
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
                <Clock className="h-3 w-3" /> Arriving in 6 min
              </div>
            </div>
          </div>

          {/* Live tracking */}
          <div className="mt-3 px-5">
            <div className="relative h-24 overflow-hidden rounded-2xl bg-slate-100">
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-brand-500" />
              <motion.div
                animate={{ x: [0, 60, 120], y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-4 top-12"
              >
                <span className="relative grid h-7 w-7 place-items-center rounded-full bg-accent-600 text-white shadow-lg">
                  <Navigation className="h-3.5 w-3.5" />
                  <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-accent-500/40" />
                </span>
              </motion.div>
              <div className="absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full bg-slate-900 text-white">
                <MapPin className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {/* Delivered reel */}
          <div className="mt-3 px-5">
            <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-600 p-3 text-white shadow-glow">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/20">
                <Video className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold">Reel delivered</p>
                <p className="text-[10px] text-white/80">Tap to watch · 0:42</p>
              </div>
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CreatorRow({ name, role, dist, rating }: { name: string; role: string; dist: string; rating: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-soft">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 text-slate-600">
        <Video className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <p className="text-xs font-bold text-slate-900">{name}</p>
        <p className="text-[10px] text-slate-500">{role}</p>
      </div>
      <div className="text-right">
        <p className="flex items-center gap-0.5 text-[10px] font-semibold text-amber-500">
          <Star className="h-2.5 w-2.5 fill-current" />
          {rating}
        </p>
        <p className="text-[10px] text-slate-400">{dist}</p>
      </div>
    </div>
  );
}

function FloatingBooking() {
  return (
    <div className="w-44 rounded-2xl border border-white/60 bg-white/80 p-3 shadow-card backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-bold text-slate-900">Booking confirmed</p>
          <p className="text-[10px] text-slate-500">Maya R. · Today 6:00 PM</p>
        </div>
      </div>
    </div>
  );
}

function FloatingReel() {
  return (
    <div className="w-48 rounded-2xl border border-white/60 bg-white/80 p-3 shadow-card backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-600">
          <Video className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-bold text-slate-900">Reel ready in 8 min</p>
          <p className="text-[10px] text-slate-500">Edited & delivered</p>
        </div>
      </div>
    </div>
  );
}
