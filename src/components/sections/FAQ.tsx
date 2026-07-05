import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const faqs = [
  {
    q: 'How fast are reels delivered?',
    a: "Most reels are delivered within minutes of your event ending — often before you even leave the venue. Editing starts the moment footage is uploaded, so you're not waiting days or weeks.",
  },
  {
    q: 'Can I choose my creator?',
    a: 'Absolutely. Browse nearby creators, view their portfolios, ratings, and pricing, then pick the one that fits your style. You can also let us auto-match you with the best available pro.',
  },
  {
    q: 'Which cities are supported?',
    a: "We're rolling out across 50+ cities in our early-access phase. Join the waitlist and we'll notify you the moment QlickShoot goes live in your area.",
  },
  {
    q: 'Will there be a mobile app?',
    a: 'Yes. QlickShoot is being built mobile-first for iOS and Android, with a companion web dashboard for organizers and brands. The app launches alongside our public release.',
  },
  {
    q: 'How do payments work?',
    a: 'Pay securely in-app with escrow-style protection. Your payment is held safely and only released to the creator once you receive your delivered reel — no risk, no surprises.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py bg-slate-50/60">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">FAQ</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Questions, answered
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know before joining the waitlist.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={0.04 * i}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-slate-900">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600"
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
