import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';

import { useThemeHooks } from '@redocly/theme/core/hooks';
import { Button } from '@redocly/theme/components/Button/Button';
import { ArrowLeftIcon } from '@redocly/theme/icons/ArrowLeftIcon/ArrowLeftIcon';

export function NotFound(): JSX.Element {
  const { useTranslate } = useThemeHooks();
  const { translate } = useTranslate();

  return (
    <NotFoundWrapper data-component-name="layouts/NotFound">
      <StatusText>404</StatusText>
      <Title data-translation-key="page.notFound.title">
        {translate('page.notFound.title', 'Something went missing...')}
      </Title>
      <Description data-translation-key="page.notFound.description">
        {translate(
          'page.notFound.description',
          "The page you were trying to reach doesn't exist or may have been moved. You can go back to the previous page, return to the homepage, or use the search bar to find what you're looking for.",
        )}
      </Description>
      <Button
        variant="primary"
        size="large"
        to="/"
        data-translation-key="page.homeButton"
        icon={<ArrowLeftIcon />}
      >
        {translate('page.homeButton', 'Go home')}
      </Button>
    </NotFoundWrapper>
  );
}

const NotFoundWrapper = styled.div`
  height: 100%;
  max-width: var(--page-404-max-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: var(--page-404-margin-vertical) var(--page-404-margin-horizontal);
  font-family: var(--page-404-font-family);
  gap: var(--page-404-gap);
`;

const StatusText = styled.div`
  color: var(--page-404-status-text-color);
  font-size: var(--page-404-status-font-size);
  line-height: var(--page-404-status-line-height);
  font-weight: var(--page-404-status-font-weight);
`;

const Title = styled.div`
  color: var(--page-404-title-text-color);
  font-size: var(--page-404-title-font-size);
  line-height: var(--page-404-title-line-height);
  font-weight: var(--page-404-title-font-weight);
`;

const Description = styled.div`
  color: var(--page-404-description-text-color);
  font-size: var(--page-404-description-font-size);
  line-height: var(--page-404-description-line-height);
  font-weight: var(--page-404-description-font-weight);
`;
