import { Camera, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Logo } from './Logo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
];

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              On-demand professional event reels, delivered in minutes. Book a creator,
              track them live, and get cinematic content before your event ends.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-600 hover:shadow-soft"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" links={quickLinks} />
          <FooterCol title="Legal" links={legalLinks} />

          <div>
            <h4 className="font-display text-sm font-bold text-slate-900">Get the app</h4>
            <p className="mt-3 text-sm text-slate-500">Launching soon on iOS & Android.</p>
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-500">
              <Camera className="h-4 w-4 text-brand-600" />
              Coming soon
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} QlickShoot, Inc. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Made with care for modern creators.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold text-slate-900">{title}</h4>
      <ul className="mt-3 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-slate-500 transition-colors hover:text-brand-600"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
