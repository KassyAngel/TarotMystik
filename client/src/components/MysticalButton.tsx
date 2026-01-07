import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MysticalButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'gold';
}

export default function MysticalButton({ 
  children, 
  className, 
  variant = 'primary',
  disabled,
  ...props 
}: MysticalButtonProps) {
  // Si className contient déjà des styles custom (bg-gradient, bg-[, etc), on ne met pas les styles par défaut
  const hasCustomStyles = className?.includes('bg-gradient') || className?.includes('from-') || className?.includes('bg-[');

  return (
    <Button
      className={cn(
        // Styles de base communs
        'rounded-2xl px-6 sm:px-8 lg:px-10 py-3 text-base sm:text-lg font-semibold min-w-[120px] sm:min-w-[150px] min-h-12 transition-all duration-300 backdrop-blur-md relative overflow-hidden group',

        // PRIMARY: Dégradé cyan-bleu élégant
        !hasCustomStyles && variant === 'primary' && [
          'bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600',
          'hover:from-cyan-500 hover:via-blue-500 hover:to-cyan-500',
          'shadow-[0_4px_24px_rgba(6,182,212,0.4)]',
          'hover:shadow-[0_6px_32px_rgba(6,182,212,0.6)]',
          'border-2 border-cyan-400/50 hover:border-cyan-300/70',
          'text-white',
          'hover:scale-105',
          // Effet de brillance au survol
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full'
        ],

        // SECONDARY: Style plus subtil cyan/slate
        !hasCustomStyles && variant === 'secondary' && [
          'bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80',
          'hover:from-slate-700/90 hover:via-slate-600/90 hover:to-slate-700/90',
          'border-2 border-cyan-500/30 hover:border-cyan-400/50',
          'text-cyan-200',
          'shadow-[0_4px_20px_rgba(34,211,238,0.2)]',
          'hover:shadow-[0_6px_28px_rgba(34,211,238,0.3)]',
          'hover:scale-105',
          // Effet de brillance cyan au survol
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-cyan-300/10 before:to-transparent before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full'
        ],

        // GOLD: Style doré élégant pour la roue (conservé tel quel)
        !hasCustomStyles && variant === 'gold' && [
          'bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80',
          'hover:from-slate-800/90 hover:via-slate-700/90 hover:to-slate-800/90',
          'border-2 border-amber-300/40 hover:border-amber-200/60',
          'text-amber-100',
          'shadow-[0_4px_24px_rgba(251,191,36,0.3)]',
          'hover:shadow-[0_6px_32px_rgba(251,191,36,0.5)]',
          'hover:scale-105',
          // Effet de brillance dorée au survol
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-amber-200/20 before:to-transparent before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full'
        ],

        // État désactivé
        disabled && 'opacity-50 cursor-not-allowed hover:scale-100 before:hidden',

        // Les classes custom écrasent les styles par défaut
        className
      )}
      disabled={disabled}
      data-testid={`button-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`}
      {...props}
    >
      <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{children}</span>
    </Button>
  );
}