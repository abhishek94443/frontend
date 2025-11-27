import React from 'react';
import { FlexNode } from '@/core/nodes/definitions';
import { Renderer } from '@/core/renderer';
import { convertStyles } from '@/core/engine/styleConverter';
import { logToFile } from '@/lib/logger';

interface FlexAdapterProps {
  node: FlexNode;
}

export const FlexAdapter: React.FC<FlexAdapterProps> = ({ node }) => {
  const { direction = 'row', align = 'start', justify = 'start', wrap = false } = node.props || {};
  const styleClass = convertStyles(node.styles);
  
  logToFile(`[FlexAdapter] Node: ${node.id}`, {
    props: { direction, wrap },
    generatedClass: styleClass
  });

  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? 'wrap' : 'nowrap',
  };

  return (
    <div style={style} className={styleClass}>
      {node.children && <Renderer nodeTree={node.children} />}
    </div>
  );
};
