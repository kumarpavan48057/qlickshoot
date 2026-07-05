import { Reveal } from '../ui/Reveal';

const stats = [
  { value: '1,000+', label: 'Early Signups' },
  { value: '500+', label: 'Verified Creators' },
  { value: '50+', label: 'Cities Planned' },
];

const logos = ['Northwind', 'Lumen', 'Vertex', 'Cobalt', 'Halcyon', 'Aperture'];

export function SocialProof() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60 py-14">
      <div className="container-px">
        <Reveal>
          <p className="text-center text-sm font-medium text-slate-500">
            Built for modern creators, event organizers and brands.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-70">
            {logos.map((l) => (
              <span
                key={l}
                className="font-display text-lg font-bold tracking-tight text-slate-400 grayscale transition-all hover:text-slate-600 hover:grayscale-0"
              >
                {l}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <p className="font-display text-4xl font-extrabold tracking-tight text-gradient">
                  {s.value}
                </p>
                <p className="mt-1.5 text-sm font-medium text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
