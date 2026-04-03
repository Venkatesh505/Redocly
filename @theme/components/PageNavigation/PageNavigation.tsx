import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';
import type { ResolvedNavItemWithLink } from '@redocly/config';

import { useThemeConfig } from '@redocly/theme/core/hooks';
import { NextButton } from '@redocly/theme/components/PageNavigation/NextButton';
import { PreviousButton } from '@redocly/theme/components/PageNavigation/PreviousButton';

export type PageNavigationType = {
  nextPage?: ResolvedNavItemWithLink | null;
  prevPage?: ResolvedNavItemWithLink | null;
  className?: string;
};

export function PageNavigation({
  nextPage,
  prevPage,
  className,
}: PageNavigationType): JSX.Element | null {
  const { navigation } = useThemeConfig();

  if (navigation?.previousButton?.hide && navigation?.nextButton?.hide) {
    return null;
  }

  return (
    <PageNavigationWrapper
      data-component-name="PageNavigation/PageNavigation"
      className={className}
    >
      <PreviousButton prevPage={prevPage} />
      <NextButton nextPage={nextPage} />
    </PageNavigationWrapper>
  );
}

const PageNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  width: 100%;

  @media print {
    display: none;
  }
`;
