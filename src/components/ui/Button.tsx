
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
      },
      size: {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-5 py-2',
        lg: 'text-lg px-6 py-3',
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
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
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
