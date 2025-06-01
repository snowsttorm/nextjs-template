import React from 'react';
import { cn } from '@/utils/cn';

const Button = ({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'cursor-pointer rounded-md px-5 py-2 transition-colors duration-300',
        className,
        disabled && 'cursor-not-allowed'
      )}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

const Button1 = ({
  children,
  onClick,
  id,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={cn(
        'cursor-pointer rounded-md border-2 border-primary bg-primary px-5 py-2 transition-colors duration-300 hover:bg-transparent focus:outline-hidden',
        className,
        disabled && 'cursor-not-allowed border-secondary bg-secondary'
      )}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

const Button2 = ({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'cursor-pointer rounded-md border-2 border-primary bg-transparent px-5 py-2 transition-colors duration-300 hover:bg-primary',
        className,
        disabled && 'cursor-not-allowed border-secondary hover:bg-secondary'
      )}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

const Button3 = ({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'cursor-pointer rounded-md px-5 py-2 underline-offset-2 transition-colors duration-300 hover:text-accent hover:underline',
        className,
        disabled && 'cursor-not-allowed'
      )}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

const Button4 = ({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'cursor-pointer tracking-wide underline underline-offset-2 transition-colors duration-300 hover:text-accent hover:no-underline',
        className,
        disabled && 'cursor-not-allowed'
      )}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, Button1, Button2, Button3, Button4 };
