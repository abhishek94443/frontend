 import React from 'react';
import Image from 'next/image';
import { ImageNode } from '@/core/nodes/definitions';
import { convertStyles } from '@/core/engine/styleConverter';
import { clsx } from 'clsx';

interface ImageAdapterProps {
  node: ImageNode;
}

export const ImageAdapter: React.FC<ImageAdapterProps> = ({ node }) => {
  const { src, alt, width, height, objectFit = 'cover' } = node.props || { src: '', alt: '' };
  const styleClass = convertStyles(node.styles);
  
  // If width/height provided, use fixed size
  if (width && height) {
    return (
      <div className={clsx('relative', styleClass)}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`object-${objectFit}`}
          quality={85}
        />
      </div>
    );
  }
  
  // Otherwise use fill (requires parent with position: relative)
  return (
    <div className={clsx('relative', styleClass)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-${objectFit}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={85}
      />
    </div>
  );
};
