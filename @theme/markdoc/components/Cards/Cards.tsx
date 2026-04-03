import * as React from 'react';
import styled from 'styled-components';

export type CardsProps = React.PropsWithChildren<{
  columns?: number;
  cardMinWidth?: number;
  className?: string;
  ariaLabel?: string;
}>;

export function Cards({ cardMinWidth = 240, columns, className, children, ariaLabel }: CardsProps) {
  return (
    <GridLayout
      $cardMinWidth={cardMinWidth}
      $columns={columns}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </GridLayout>
  );
}

const GridLayout = styled.div<{
  $cardMinWidth: number;
  $columns?: number;
}>`
  display: grid;
  grid-template-columns: ${({ $cardMinWidth, $columns }) =>
    `repeat(auto-fit, minmax(${getCardMinWidth($cardMinWidth, $columns)}, 1fr))`};
  gap: var(--cards-gap);
  width: 100%;
  margin-top: var(--spacing-base);
  margin-bottom: var(--spacing-base);
`;

function getColumnWidth(columns: number) {
  return `calc((100% - ${columns - 1} * var(--cards-gap)) / ${columns})`;
}

function getCardMinWidth(cardMinWidth: number, columns?: number) {
  return columns ? `max(${getColumnWidth(columns)}, ${cardMinWidth}px)` : `${cardMinWidth}px`;
}
