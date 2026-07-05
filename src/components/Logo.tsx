import { Camera } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#home" className={`group flex items-center gap-2.5 ${className}`} aria-label="QlickShoot home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
        <Camera className="h-5 w-5" strokeWidth={2.4} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent-400 ring-2 ring-white" />
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight text-slate-900">
        Qlick<span className="text-brand-600">Shoot</span>
      </span>
    </a>
  );
}
