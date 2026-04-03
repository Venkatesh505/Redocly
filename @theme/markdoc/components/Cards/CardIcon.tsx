import React from 'react';
import styled from 'styled-components';

import { GenericIcon } from '@redocly/theme/icons/GenericIcon/GenericIcon';

export type CardIconProps = {
  variant?: string;
  src: string;
  rawContent?: string;
  position?: 'auto' | 'start' | 'center' | 'end';
};

export function CardIcon({ variant, src, rawContent, position }: CardIconProps) {
  return (
    <CardIconWrapper $variant={variant} $position={position}>
      <GenericIcon icon={src} rawContent={rawContent} />
    </CardIconWrapper>
  );
}

const CardIconWrapper = styled.div<{ $variant?: string; $position?: string }>`
  --icon-width: var(--card-icon-width);
  --icon-height: var(--card-icon-height);
  --icon-color: var(--card-icon-color);

  display: flex;
  align-self: ${({ $position }) => ($position ? $position : 'auto')};
  justify-content: center;
  min-width: var(--card-icon-width);
  min-height: var(--card-icon-height);
  flex-shrink: 0;

  padding: ${({ $variant }) => ($variant === 'ghost' ? '0' : `var(--card-icon-padding);`)};
  border-radius: var(--card-icon-border-radius);
  overflow: hidden;

  background-color: ${({ $variant }) =>
    $variant === 'ghost' ? 'transparent' : 'var(--card-icon-bg-color)'};
  border: ${({ $variant }) =>
    $variant === 'ghost' ? 'none' : `1px solid var(--card-icon-border-color)`};
`;
