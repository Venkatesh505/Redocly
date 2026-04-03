import React from 'react';
import styled from 'styled-components';

export type CardImageProps = {
  src: string;
  alt: string;
  position?: 'start' | 'end';
};

export function CardImage({ src, alt, position }: CardImageProps) {
  return <Image src={src} alt={alt} $position={position} />;
}

const Image = styled.img<{ $position?: string }>`
  width: 100%;
  height: 100px;
  flex-shrink: 0;
  object-fit: cover;

  order: ${({ $position }) => ($position === 'end' ? 1 : 0)};
`;
