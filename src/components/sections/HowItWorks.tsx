import { motion } from 'framer-motion';
import {
  Search,
  UserCheck,
  Camera,
  Clapperboard,
  Film,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '../ui/Reveal';

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  { icon: Search, title: 'Book a creator', description: 'Browse nearby pros and confirm in seconds.' },
  { icon: UserCheck, title: 'Photographer arrives', description: 'Track their arrival live, in real time.' },
  { icon: Camera, title: 'Capture memories', description: 'Your creator shoots the moments that matter.' },
  { icon: Clapperboard, title: 'Editing starts instantly', description: 'Footage is uploaded and edited on the spot.' },
  { icon: Film, title: 'Receive cinematic reels', description: 'Get your polished reel before you leave.' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-py">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">How it works</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              From booking to reel in <span className="text-gradient">five steps</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-slate-600">
              A seamless flow designed to feel as effortless as booking a ride.
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-300 via-accent-300 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-0">
            {steps.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={step.title} delay={0.05 * i} className="relative sm:py-6">
                  <div
                    className={`flex flex-col gap-4 sm:flex-row sm:items-center ${
                      left ? '' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Card side */}
                    <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-8">
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
                      >
                        <h3 className="font-display text-lg font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Node */}
                    <div className="absolute left-5 top-1 sm:left-1/2 sm:top-6 sm:-translate-x-1/2">
                      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-glow ring-4 ring-white">
                        <step.icon className="h-5 w-5" />
                        <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] font-bold text-brand-600 shadow-soft">
                          {i + 1}
                        </span>
                      </span>
                    </div>

                    {/* Spacer side */}
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
