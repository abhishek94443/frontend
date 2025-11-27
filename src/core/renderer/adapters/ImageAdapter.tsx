import React from 'react';
import { ImageNode } from '@/core/nodes/definitions';
import { convertStyles } from '@/core/engine/styleConverter';

interface ImageAdapterProps {
  node: ImageNode;
}

export const ImageAdapter: React.FC<ImageAdapterProps> = ({ node }) => {
  const { src, alt, width, height, objectFit = 'cover' } = node.props || { src: '', alt: '' };
  const styleClass = convertStyles(node.styles);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={styleClass}
      style={{ objectFit }}
    />
  );
};
