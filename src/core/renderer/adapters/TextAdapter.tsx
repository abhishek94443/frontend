import React from 'react';
import { TextNode } from '@/core/nodes/definitions';
import { convertStyles } from '@/core/engine/styleConverter';

interface TextAdapterProps {
  node: TextNode;
}

export const TextAdapter: React.FC<TextAdapterProps> = ({ node }) => {
  const Tag = node.props?.tag || 'div';
  const styleClass = convertStyles(node.styles);
  
  return (
    <Tag className={styleClass}>
      {node.props?.content}
    </Tag>
  );
};
