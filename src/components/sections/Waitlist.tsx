import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { joinWaitlist } from '../../lib/waitlist';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Waitlist() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setMessage('');
    const result = await joinWaitlist({ name: name.trim(), email: email.trim() });
    if (result.ok) {
      setStatus('success');
      setName('');
      setEmail('');
    } else {
      setStatus('error');
      setMessage(result.message);
    }
  };

  return (
    <section id="waitlist" className="section-py">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-200 bg-gradient-to-br from-brand-600 via-brand-600 to-accent-600 px-6 py-16 text-center shadow-glow-accent sm:px-12 sm:py-20">
            {/* Decorative */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-accent-400/30 blur-3xl" />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.18) 0, transparent 35%)',
                }}
              />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Early access
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Be Among the First to Experience QlickShoot
              </h2>
              <p className="mt-4 text-lg text-white/85">
                Join our early-access waitlist and get notified before launch.
              </p>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="mx-auto mt-10 max-w-md rounded-3xl border border-white/30 bg-white/15 p-8 backdrop-blur-xl"
                  >
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-emerald-500 shadow-glow">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-white">
                      You're on the list!
                    </h3>
                    <p className="mt-2 text-sm text-white/85">
                      We'll email you the moment QlickShoot launches in your city. Watch your inbox.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-5 text-sm font-semibold text-white/90 underline-offset-4 hover:underline"
                    >
                      Add another email
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={onSubmit}
                    className="mx-auto mt-10 max-w-md space-y-3 text-left"
                  >
                    <div>
                      <label htmlFor="wl-name" className="mb-1.5 block text-sm font-medium text-white/90">
                        Name
                      </label>
                      <input
                        id="wl-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-soft outline-none transition focus:border-white focus:ring-2 focus:ring-white/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="wl-email" className="mb-1.5 block text-sm font-medium text-white/90">
                        Email
                      </label>
                      <input
                        id="wl-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-soft outline-none transition focus:border-white focus:ring-2 focus:ring-white/50"
                      />
                    </div>

                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2.5 text-sm text-white backdrop-blur"
                        >
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          {message}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <Button
                      type="submit"
                      variant="white"
                      size="lg"
                      className="w-full"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-white/70">
                      No spam. Unsubscribe anytime.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
