import React from 'react';
import { GridNode } from '@/core/nodes/definitions';
import { Renderer } from '@/core/renderer';
import { convertStyles } from '@/core/engine/styleConverter';

interface GridAdapterProps {
  node: GridNode;
}

export const GridAdapter: React.FC<GridAdapterProps> = ({ node }) => {
  const { columns = 1 } = node.props || {};

  const style: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, minmax(0, 1fr))` : columns,
  };

  const styleClass = convertStyles(node.styles);

  return (
    <div style={style} className={styleClass}>
      {node.children && <Renderer nodeTree={node.children} />}
    </div>
  );
};
