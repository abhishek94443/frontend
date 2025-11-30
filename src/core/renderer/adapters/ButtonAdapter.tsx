"use client";

import React from 'react';
import { ButtonNode } from '@/core/nodes/definitions';
import { clsx } from 'clsx';
import { convertStyles } from '@/core/engine/styleConverter';

interface ButtonAdapterProps {
  node: ButtonNode;
}

export const ButtonAdapter: React.FC<ButtonAdapterProps> = ({ node }) => {
  const { label, href, variant = 'primary' } = node.props || { label: 'Button' };

  const baseStyles = "px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500",
    secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-500",
    outline: "border border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus:ring-brand-500",
    ghost: "text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500",
  };

  const styleClass = convertStyles(node.styles);
  const combinedClassName = clsx(baseStyles, variants[variant], styleClass);

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {label}
      </a>
    );
  }

  return (
    <button className={combinedClassName}>
      {label}
    </button>
  );
};
