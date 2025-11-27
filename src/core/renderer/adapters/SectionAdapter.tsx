import React from 'react';
import { SectionNode } from '@/core/nodes/definitions';
import { Renderer } from '@/core/renderer';
import { convertStyles } from '@/core/engine/styleConverter';

interface SectionAdapterProps {
  node: SectionNode;
}

export const SectionAdapter: React.FC<SectionAdapterProps> = ({ node }) => {
  const styleClass = convertStyles(node.styles);

  return (
    <section 
      id={node.props?.id} 
      className={styleClass}
      role={node.props?.role}
    >
      {node.children && <Renderer nodeTree={node.children} />}
    </section>
  );
};
