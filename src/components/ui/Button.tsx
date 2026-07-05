import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'white';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-glow hover:shadow-glow-accent hover:-translate-y-0.5',
  secondary:
    'text-slate-800 bg-white border border-slate-200 shadow-soft hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-card',
  ghost: 'text-slate-700 hover:text-brand-700 hover:bg-brand-50',
  white:
    'text-brand-700 bg-white shadow-soft hover:-translate-y-0.5 hover:shadow-card border border-white/60',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className = '', children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
