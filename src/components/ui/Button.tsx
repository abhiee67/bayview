import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300',
  {
    variants: {
      variant: {
        primary: 'bg-maroon text-cream hover:bg-maroon/90 shadow-md hover:shadow-lg',
        secondary: 'bg-gold text-maroon hover:bg-gold/90 shadow-md hover:shadow-lg',
        outline: 'border-2 border-maroon text-maroon hover:bg-maroon/5',
        ghost: 'text-maroon hover:bg-maroon/5',
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      size: {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-5 py-2',
        lg: 'text-lg px-6 py-3',
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'default' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'default' | 'icon';
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  asChild?: boolean;
  [key: string]: any; // Allow other props to be passed through
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  onClick,
  disabled = false,
  type = 'button',
  asChild = false,
  ...rest
}) => {
  const classes = cn(buttonVariants({ variant, size }), className);
  
  if (href) {
    return href.startsWith('http') ? (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    ) : (
      <Link to={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export { Button as default, buttonVariants as buttonVariantsDuplicate };
