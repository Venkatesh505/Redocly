import * as React from 'react';

import type { JSX } from 'react';
import type { ResolvedNavItemWithLink } from '@redocly/config';

import { NavigationButton } from '@redocly/theme/components/PageNavigation/NavigationButton';
import { useThemeConfig, useThemeHooks } from '@redocly/theme/core/hooks';
import { ArrowRightIcon } from '@redocly/theme/icons/ArrowRightIcon/ArrowRightIcon';

export type NextPageType = {
  nextPage?: ResolvedNavItemWithLink | null;
  className?: string;
};

export function NextButton({ nextPage, className }: NextPageType): JSX.Element {
  const { navigation } = useThemeConfig();
  const { useTranslate, usePageProps } = useThemeHooks();
  const { frontmatter } = usePageProps();
  const { translate } = useTranslate();

  const translationKey = 'page.nextButton';
  const label =
    frontmatter?.navigation?.nextButton?.label || nextPage?.label || nextPage?.routeSlug || '';
  const link = frontmatter?.navigation?.nextButton?.link || nextPage?.link;
  const text =
    navigation?.nextButton?.text || translate(translationKey, { defaultValue: 'Next page' });

  if (navigation?.nextButton?.hide || !link || !label) {
    return <div>&nbsp;</div>;
  }

  return (
    <NavigationButton
      label={label}
      link={link}
      text={text}
      translationKey={translationKey}
      position="right"
      className={className}
      icon={<ArrowRightIcon />}
    />
  );
}
