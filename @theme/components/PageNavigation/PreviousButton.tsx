import React from 'react';

import type { JSX } from 'react';
import type { ResolvedNavItemWithLink } from '@redocly/config';

import { NavigationButton } from '@redocly/theme/components/PageNavigation/NavigationButton';
import { useThemeConfig, useThemeHooks } from '@redocly/theme/core/hooks';
import { ArrowLeftIcon } from '@redocly/theme/icons/ArrowLeftIcon/ArrowLeftIcon';

export type PreviousPageType = {
  prevPage?: ResolvedNavItemWithLink | null;
  className?: string;
};

export function PreviousButton({ prevPage, className }: PreviousPageType): JSX.Element {
  const { navigation } = useThemeConfig();
  const { useTranslate, usePageProps } = useThemeHooks();
  const { frontmatter } = usePageProps();
  const { translate } = useTranslate();

  const translationKey = 'page.previousButton';
  const label =
    frontmatter?.navigation?.previousButton?.label || prevPage?.label || prevPage?.routeSlug || '';
  const link = frontmatter?.navigation?.previousButton?.link || prevPage?.link;
  const text =
    navigation?.previousButton?.text ||
    translate(translationKey, { defaultValue: 'Previous page' });

  if (navigation?.previousButton?.hide || !link || !label) {
    return <div>&nbsp;</div>;
  }

  return (
    <NavigationButton
      label={label}
      link={link}
      text={text}
      translationKey={translationKey}
      position="left"
      className={className}
      icon={<ArrowLeftIcon />}
    />
  );
}
