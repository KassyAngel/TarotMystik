import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface MysticalSelectProps {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  className?: string;
  'data-testid'?: string;
}

export default function MysticalSelect({ 
  placeholder, 
  value, 
  onChange, 
  options,
  className,
  'data-testid': testId,
  ...props 
}: MysticalSelectProps) {
  return (
    <Select value={value} onValueChange={onChange} {...props}>
      <SelectTrigger 
        className={cn(
          'mystical-input',
          'rounded-xl sm:rounded-2xl py-2.5 px-3 sm:py-3 sm:px-4 text-sm sm:text-base text-center font-serif min-w-[70px] sm:min-w-[90px]',
          // Thème bleu/cyan au lieu de violet/doré
          'bg-slate-900/80 border-2 border-cyan-500/30 text-cyan-100',
          'focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20',
          'data-[placeholder]:text-cyan-300/60',
          'transition-all duration-300',
          'hover:bg-slate-800/80 hover:border-cyan-400/50',
          'backdrop-blur-xl',
          'shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]',
          className
        )}
        data-testid={testId}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      {/* Dropdown avec fond bleu nuit et options cyan */}
      <SelectContent className="bg-slate-900 border-2 border-cyan-500/40 text-cyan-100 max-h-[240px] backdrop-blur-xl">
        {options.map((option) => (
          <SelectItem 
            key={option.value} 
            value={option.value}
            className="focus:bg-cyan-600 focus:text-white hover:bg-cyan-700 hover:text-white cursor-pointer text-sm sm:text-base transition-colors duration-200 data-[state=checked]:bg-cyan-600 data-[state=checked]:text-white"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}