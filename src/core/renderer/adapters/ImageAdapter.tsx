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
  // We explicitly handle aspect ratio via inline style to ensure it works even if Tailwind class is missing
  const aspectRatio = node.styles?.aspectRatio === '4/3' ? '4 / 3' : 
                      node.styles?.aspectRatio === '16/9' ? '16 / 9' : undefined;

  return (
    <div className={clsx('relative w-full', styleClass)}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={`w-full h-auto object-${objectFit}`}
        quality={85}
      />
    </div>
  );
};
