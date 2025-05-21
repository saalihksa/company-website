"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/providers/ThemeProvider';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  fullWidth = false,
  disabled = false,
  type = 'button',
  icon,
}: ButtonProps) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm',
    secondary: isDarkMode 
      ? 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500 shadow-sm'
      : 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-sm',
    outline: isDarkMode
      ? 'border border-gray-600 bg-transparent hover:bg-gray-800 text-gray-300 focus:ring-blue-500'
      : 'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-blue-500',
    text: isDarkMode
      ? 'bg-transparent hover:bg-gray-800 text-gray-300 focus:ring-blue-500'
      : 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-blue-500',
    gradient: 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white focus:ring-blue-500 shadow-sm'
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5 rounded-md',
    md: 'text-base px-4 py-2 rounded-md',
    lg: 'text-lg px-5 py-2.5 rounded-lg',
    xl: 'text-xl px-6 py-3 rounded-lg',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
    ${className}
  `;

  const buttonContent = (
    <>
      {icon && <span className="mr-2.5">{icon}</span>}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button; 