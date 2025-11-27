import React from 'react';
import { FlexNode } from '@/core/nodes/definitions';
import { Renderer } from '@/core/renderer';
import { convertStyles } from '@/core/engine/styleConverter';
import { clsx } from 'clsx';

interface FlexAdapterProps {
  node: FlexNode;
}

const directionMap = {
  'row': 'flex-row',
  'column': 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'column-reverse': 'flex-col-reverse',
};

const alignMap = {
  'start': 'items-start',
  'center': 'items-center',
  'end': 'items-end',
  'stretch': 'items-stretch',
  'baseline': 'items-baseline',
};

const justifyMap = {
  'start': 'justify-start',
  'center': 'justify-center',
  'end': 'justify-end',
  'between': 'justify-between',
  'around': 'justify-around',
  'evenly': 'justify-evenly',
};

export const FlexAdapter: React.FC<FlexAdapterProps> = ({ node }) => {
  const { direction = 'row', align = 'start', justify = 'start', wrap = false } = node.props || {};
  
  const baseClasses = clsx(
    'flex',
    directionMap[direction],
    alignMap[align],
    justifyMap[justify],
    wrap && 'flex-wrap'
  );
  
  console.log('[FlexAdapter] Node styles:', JSON.stringify(node.styles));
  const styleClass = convertStyles(node.styles);
  console.log('[FlexAdapter] Generated classes:', styleClass);
  
  return (
    <div className={clsx(baseClasses, styleClass)}>
      {node.children && <Renderer nodeTree={node.children} />}
    </div>
  );
};
