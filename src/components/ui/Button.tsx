import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false 
}: ButtonProps) => {
  const baseStyles = 'font-medium rounded-md transition-all duration-200 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2',
    secondary: 'bg-gold-500 text-white hover:bg-gold-600 focus:ring-2 focus:ring-gold-400 focus:ring-offset-2',
    outline: 'border border-teal-500 text-teal-600 hover:bg-teal-50 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2'
  };
  
  const sizes = {
    sm: 'text-xs px-3 py-2',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3'
  };
  
  const disabledStyles = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;