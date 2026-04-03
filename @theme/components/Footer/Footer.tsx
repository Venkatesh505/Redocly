import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';
import type { ResolvedNavItem } from '@redocly/config';

import { FooterItem } from '@redocly/theme/components/Footer/FooterItem';
import { breakpoints, isEmptyArray } from '@redocly/theme/core/utils';
import { useThemeConfig } from '@redocly/theme/core/hooks';
import { FooterCopyright } from '@redocly/theme/components/Footer/FooterCopyright';
import { FooterColumn } from '@redocly/theme/components/Footer/FooterColumn';

export type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps): JSX.Element | null {
  const { footer } = useThemeConfig() || {};
  const { items = [], copyrightText } = footer || {};

  if ((isEmptyArray(items) && !copyrightText) || footer?.hide) {
    return null;
  }

  const withColumns = items.some((item) => (item?.items?.length || 0) > 0);

  return (
    <FooterWrapper
      data-component-name="Footer/Footer"
      className={className}
      withColumns={withColumns}
    >
      {!!items.length && (
        <FooterColumnsSection>
          {withColumns
            ? (items as ResolvedNavItem[]).map((column, index) => (
                <FooterColumn key={`${column.label}_${index}`} column={column} />
              ))
            : (items as ResolvedNavItem[]).map((item, index) => (
                <FooterItem key={index} item={item} />
              ))}
        </FooterColumnsSection>
      )}
      <FooterCopyrightWrapper>
        {copyrightText && <FooterCopyright copyrightText={copyrightText} />}
      </FooterCopyrightWrapper>
    </FooterWrapper>
  );
}

const FooterCopyrightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  align-self: center;

  @media screen and (min-width: ${breakpoints.medium}) {
    margin-top: 0;
  }

  @media screen and (min-width: ${breakpoints.max}) {
    max-width: var(--container-max-width);
    margin-left: auto;
    margin-right: auto;
  }
`;

const FooterColumnsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: var(--footer-column-gap);

  @media screen and (min-width: ${breakpoints.small}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${breakpoints.max}) {
    max-width: var(--container-max-width);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FooterWrapper = styled.footer<{ withColumns?: boolean }>`
  padding: var(--mobile-footer-padding-vertical) var(--mobile-footer-padding-horizontal);
  border-top: 1px solid var(--footer-border-color);
  font-size: var(--footer-font-size);
  flex-shrink: 0;
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
  font-weight: var(--footer-font-weight);
  gap: var(--spacing-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: ${breakpoints.small}) {
    padding: var(--footer-padding-vertical) var(--footer-padding-horizontal);
    flex-direction: row;
    ${({ withColumns }) =>
      withColumns
        ? `
    flex-direction: column;
    align-items: stretch;
  `
        : `justify-content: space-between;`}
  }
`;
