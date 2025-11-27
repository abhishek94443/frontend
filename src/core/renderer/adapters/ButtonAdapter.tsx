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
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
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
