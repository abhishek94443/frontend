"use client";

import React from 'react';
import { ThemeConfig, FontConfig } from '@/types/site';

interface ThemeInjectorProps {
  theme?: ThemeConfig;
  fonts?: FontConfig;
}

export const ThemeInjector: React.FC<ThemeInjectorProps> = ({ theme, fonts }) => {
  if (!theme && !fonts) return null;

  const cssVariables: string[] = [];

  // Inject Theme Colors
  if (theme?.tokens) {
    const { tokens } = theme;
    // Map JSON tokens to CSS variables
    if (tokens.primary) cssVariables.push(`--color-brand-600: ${tokens.primary};`);
    if (tokens.primary) cssVariables.push(`--color-brand-500: ${tokens.primary};`); // Fallback/Alias
    if (tokens.primaryText) cssVariables.push(`--color-brand-50: ${tokens.primaryText};`); // Assuming primaryText is light
    
    // We can map more specific tokens if the JSON provides them
    // For now, let's map the core ones requested
    if (tokens.background) cssVariables.push(`--background: ${tokens.background};`);
    if (tokens.text) cssVariables.push(`--foreground: ${tokens.text};`);
    
    // Map specific palette if provided, otherwise we might need to generate shades
    // For this implementation, we'll trust the provided tokens or fallback to defaults
  }

  // Inject Fonts
  if (fonts) {
    if (fonts.sans) cssVariables.push(`--font-sans: var(--font-${fonts.sans});`);
    if (fonts.serif) cssVariables.push(`--font-serif: var(--font-${fonts.serif});`);
    if (fonts.mono) cssVariables.push(`--font-mono: var(--font-${fonts.mono});`);
  }

  if (cssVariables.length === 0) return null;

  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        :root {
          ${cssVariables.join('\n')}
        }
      `
    }} />
  );
};
