import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MysticalButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary';
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
        // Styles de base
        'rounded-xl px-6 sm:px-8 lg:px-10 py-3 text-base sm:text-lg font-semibold min-w-[120px] sm:min-w-[150px] min-h-12 transition-all duration-300',

        // Si pas de styles custom, on met les styles par défaut VIOLET UNI
        !hasCustomStyles && variant === 'primary' && 'bg-[#8b5cf6] hover:bg-[#7c3aed] shadow-[0_4px_25px_rgba(139,92,246,0.6)] border-2 border-purple-400/40 text-white backdrop-blur-sm hover:scale-105',

        !hasCustomStyles && variant === 'secondary' && 'bg-gradient-to-r from-purple-900/60 via-purple-800/60 to-purple-900/60 hover:from-purple-800/70 hover:via-purple-700/70 hover:to-purple-800/70 border-2 border-purple-400/50 text-purple-100 backdrop-blur-sm shadow-[0_4px_20px_rgba(168,85,247,0.3)]',

        disabled && 'opacity-50 cursor-not-allowed hover:scale-100',

        // Les classes custom écrasent les styles par défaut
        className
      )}
      disabled={disabled}
      data-testid={`button-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`}
      {...props}
    >
      {children}
    </Button>
  );
}