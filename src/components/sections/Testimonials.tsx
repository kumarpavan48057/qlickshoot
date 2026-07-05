import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Wedding Planner',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=160',
    quote:
      "We booked a creator two hours before a reception and had a cinematic reel before the last dance. Our clients were speechless — QlickShoot is genuinely magic.",
  },
  {
    name: 'Marcus Lee',
    role: 'Brand Marketing Lead',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=160',
    quote:
      "For product launches we used to wait a week for edits. Now the reel lands on our socials the same evening. It's completely changed our content velocity.",
  },
  {
    name: 'Aisha Khan',
    role: 'College Fest Organizer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=160',
    quote:
      "Tracking the photographer live was unreal. Students watched the crew arrive on the map and the highlight reel dropped before the crowd even left.",
  },
];

export function Testimonials() {
  return (
    <section className="section-py">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Testimonials</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Loved by early creators and organizers
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-slate-600">
              Real reactions from the first people to try QlickShoot.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition-shadow hover:shadow-card"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-slate-100" />
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="relative mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-soft"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
