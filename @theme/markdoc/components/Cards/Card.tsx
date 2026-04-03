import React from 'react';
import styled from 'styled-components';

import { ChevronRightIcon } from '@redocly/theme/icons/ChevronRightIcon/ChevronRightIcon';
import { CardImage } from '@redocly/theme/markdoc/components/Cards/CardImage';
import { CardIcon } from '@redocly/theme/markdoc/components/Cards/CardIcon';
import { Link } from '@redocly/theme/components/Link/Link';

export type CardProps = React.PropsWithChildren<{
  title?: string;
  image?: string;
  icon?: string;
  iconRawContent?: string;
  imagePosition?: 'start' | 'end';
  iconPosition?: 'auto' | 'start' | 'center' | 'end';
  lineClamp?: number;
  layout?: 'horizontal' | 'vertical' | 'combined';
  variant?: 'filled' | 'outlined' | 'elevated' | 'ghost';
  iconVariant?: 'filled' | 'ghost';
  align?: 'start' | 'center' | 'end';
  to?: string;
}>;

export function Card({
  title = '',
  image,
  icon,
  iconRawContent,
  imagePosition = 'start',
  iconPosition = 'auto',
  layout = 'vertical',
  variant = 'filled',
  lineClamp,
  iconVariant,
  align = 'start',
  to,
  children,
}: CardProps) {
  const titleNoSpaces = title?.replace(/\s+/g, '-').toLowerCase();
  const cardTitleId = `card-title-${titleNoSpaces}`;
  const justifyContent =
    align === 'center' ? 'center' : align === 'end' ? 'flex-end' : 'flex-start';
  const alignItems = align === 'center' ? 'center' : align === 'end' ? 'flex-end' : 'flex-start';
  const textAlign = align === 'center' ? 'center' : align === 'end' ? 'right' : 'left';
  iconVariant = iconVariant ?? (variant === 'ghost' ? 'filled' : 'ghost');

  return (
    <CardWrapper
      as={to ? Link : 'div'}
      to={to}
      aria-labelledby={cardTitleId}
      $variant={variant}
      $layout={layout}
      $isCardLink={!!to}
    >
      <>
        {image ? <CardImage src={image} alt={title} position={imagePosition} /> : null}
        <CardContentWrapper
          $layout={layout}
          $alignItems={alignItems}
          $textAlign={textAlign}
          $hasImage={image !== undefined}
        >
          {icon && (
            <CardIcon
              variant={iconVariant}
              src={icon}
              rawContent={iconRawContent}
              position={iconPosition}
            />
          )}
          <ContentWrapper>
            <Title id={cardTitleId} $isCardLink={!!to} $justifyContent={justifyContent}>
              {title}
              {!!to && <CardLinkIcon />}
            </Title>
            <Body $lineClamp={lineClamp}>{children}</Body>
          </ContentWrapper>
        </CardContentWrapper>
      </>
    </CardWrapper>
  );
}

const CardContentWrapper = styled.div<{
  $layout?: string;
  $alignItems: string;
  $textAlign: string;
  $hasImage: boolean;
}>`
  display: flex;
  flex-direction: ${({ $layout }) => ($layout === 'horizontal' ? 'row' : 'column')};
  gap: var(--card-icon-gap);
  align-items: ${({ $alignItems }) => $alignItems};
  text-align: ${({ $textAlign }) => $textAlign};
  flex-grow: 1;
  padding: var(--card-padding);
  height: ${({ $hasImage }) => ($hasImage ? 'auto' : '100%')};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  gap: var(--card-content-gap);
  width: 100%;
`;

const Title = styled.h3<{ $isCardLink: boolean; $justifyContent: string }>`
  margin: var(--card-title-margin);
  font-weight: var(--card-title-font-weight);
  color: var(--card-title-text-color);
  display: flex;
  align-items: center;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  width: 100%;
`;

const CardLinkIcon = styled(ChevronRightIcon)`
  width: var(--card-link-icon-width);
  height: var(--card-link-icon-height);
  margin-left: var(--spacing-xxs);
  opacity: 0;
  transition:
    opacity 0.3s,
    transform 0.3s;
`;

const Body = styled.div<{ $lineClamp?: number }>`
  color: var(--card-text-color);
  font-size: var(--card-body-font-size);
  line-height: var(--card-body-line-height);

  ${({ $lineClamp }) =>
    $lineClamp &&
    `
  display: -webkit-box;
  -webkit-line-clamp: ${$lineClamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;`}

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;

const CardWrapper = styled.div.attrs<{
  $variant: string;
  $isCardLink: boolean;
}>(({ $isCardLink, $variant }) => ({
  className: getCardWrapperClass($isCardLink, $variant),
}))<{
  $variant: string;
  $isCardLink: boolean;
  $layout: string;
}>`
  display: flex;
  flex-direction: ${({ $layout }) => ($layout === 'horizontal' ? 'row' : 'column')};
  width: 100%;
  height: 100%;
  border-radius: var(--card-border-radius);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  position: relative;
  --md-paragraph-margin: 0;
  --link-decoration-hover: none;

  background-color: var(--card-bg-color);
  border-width: var(--card-border-width);
  border-style: var(--card-border-style);
  border-color: var(--card-border-color);
  box-shadow: var(--card-box-shadow);

  && > img {
    ${({ $layout }) =>
      $layout === 'horizontal' &&
      `
      max-width: 33%;
      width: auto;
      height: 100%;
      object-fit: cover;
    `}
  }

  &.card-link {
    cursor: var(--card-link-cursor);

    &:hover,
    &:focus-within {
      background-color: var(--card-bg-color-hover);
      border-color: var(--card-border-color-hover);
      box-shadow: var(--card-box-shadow-hover);

      svg {
        opacity: 1;
      }
    }
  }
`;

const getCardWrapperClass = ($isCardLink: boolean, $variant?: string) => {
  let classes = [];

  classes.push(`card-variant-${$variant}`);

  if ($isCardLink) {
    classes.push('card-link');
  }

  return classes.join(' ');
};
