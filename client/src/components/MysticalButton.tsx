// components/MysticalButton.tsx
// ✅ Fix : taille fixe, pas de min-h/min-w responsive qui changent après chargement

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MysticalButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'gold' | 'danger';
}

export default function MysticalButton({
  children,
  className,
  variant = 'primary',
  disabled,
  ...props
}: MysticalButtonProps) {
  const hasCustomStyles =
    className?.includes('bg-gradient') ||
    className?.includes('from-') ||
    className?.includes('bg-[');

  return (
    <Button
      className={cn(
        // ✅ Base : taille FIXE, pas de responsive qui change après chargement AdMob
        'rounded-2xl px-7 py-3 text-sm font-semibold',
        'transition-all duration-300 backdrop-blur-md relative overflow-hidden group',
        // Pas de min-w/min-h responsive ici — on laisse le contenu définir la taille
        'active:scale-95',

        // PRIMARY — violet/améthyste
        !hasCustomStyles && variant === 'primary' && [
          'bg-gradient-to-r from-violet-700 via-purple-600 to-violet-700',
          'hover:from-violet-600 hover:via-purple-500 hover:to-violet-600',
          'border border-violet-400/40 hover:border-violet-300/60',
          'text-white',
          'shadow-[0_4px_20px_rgba(124,58,237,0.35)]',
          'hover:shadow-[0_6px_28px_rgba(124,58,237,0.55)]',
          'hover:scale-[1.03]',
          // Shimmer
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent',
          'before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full',
        ],

        // SECONDARY — ardoise sombre avec accent cyan subtil
        !hasCustomStyles && variant === 'secondary' && [
          'bg-gradient-to-r from-slate-800/85 via-slate-700/85 to-slate-800/85',
          'hover:from-slate-700/95 hover:via-slate-600/95 hover:to-slate-700/95',
          'border border-slate-500/30 hover:border-violet-400/40',
          'text-slate-200 hover:text-white',
          'shadow-[0_4px_16px_rgba(0,0,0,0.3)]',
          'hover:shadow-[0_6px_24px_rgba(124,58,237,0.2)]',
          'hover:scale-[1.03]',
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-violet-300/8 before:to-transparent',
          'before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full',
        ],

        // GOLD — pour la Roue du Destin
        !hasCustomStyles && variant === 'gold' && [
          'bg-gradient-to-r from-amber-900/70 via-amber-800/70 to-amber-900/70',
          'hover:from-amber-800/85 hover:via-amber-700/85 hover:to-amber-800/85',
          'border border-amber-400/40 hover:border-amber-300/60',
          'text-amber-100',
          'shadow-[0_4px_20px_rgba(245,158,11,0.25)]',
          'hover:shadow-[0_6px_28px_rgba(245,158,11,0.45)]',
          'hover:scale-[1.03]',
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-amber-200/15 before:to-transparent',
          'before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full',
        ],

        // DANGER — pour actions destructives (reset, etc.)
        !hasCustomStyles && variant === 'danger' && [
          'bg-gradient-to-r from-red-800/80 via-red-700/80 to-red-800/80',
          'hover:from-red-700/90 hover:via-red-600/90 hover:to-red-700/90',
          'border border-red-400/35 hover:border-red-300/55',
          'text-red-100',
          'shadow-[0_4px_20px_rgba(220,38,38,0.25)]',
          'hover:shadow-[0_6px_28px_rgba(220,38,38,0.45)]',
          'hover:scale-[1.03]',
        ],

        // Désactivé
        disabled && 'opacity-45 cursor-not-allowed hover:scale-100 before:hidden pointer-events-none',

        className,
      )}
      disabled={disabled}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Button>
  );
}