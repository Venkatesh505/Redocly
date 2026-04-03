import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';
import type { ResolvedNavItem } from '@redocly/config';

import { useThemeHooks } from '@redocly/theme/core/hooks';
import { LaunchIcon } from '@redocly/theme/icons/LaunchIcon/LaunchIcon';
import { Link } from '@redocly/theme/components/Link/Link';
import { breakpoints } from '@redocly/theme/core/utils';
import { GenericIcon } from '@redocly/theme/icons/GenericIcon/GenericIcon';

export type FooterItemProps = {
  item: ResolvedNavItem;
  iconsOnly?: boolean;
  className?: string;
};

export function FooterItem({ item, iconsOnly, className }: FooterItemProps): JSX.Element | null {
  const { useTranslate, useTelemetry } = useThemeHooks();
  const telemetry = useTelemetry();
  const { translate } = useTranslate();

  if (item.type === 'error') {
    return null;
  }
  const hasIcon = Boolean(item.icon || item.srcSet);
  const iconWithoutLabel = Boolean(item.label === item.link && hasIcon);

  return (
    <FooterItemWrapper
      className={className}
      data-component-name="Footer/FooterItem"
      iconsOnly={iconsOnly}
      item={item}
    >
      {item.type === 'separator' ? (
        <FooterSeparator data-translation-key={item.labelTranslationKey}>
          {translate(item.labelTranslationKey, item.label)}
        </FooterSeparator>
      ) : (
        <FooterLink
          to={item.link}
          external={item.external}
          target={item.target}
          data-testid={item.label}
          onClick={() => telemetry.sendFooterItemClickedMessage()}
          data-translation-key={item.labelTranslationKey}
        >
          {hasIcon ? (
            <FooterLinkIcon iconsOnly={iconsOnly}>
              <GenericIcon icon={item.icon} srcSet={item.srcSet} />
            </FooterLinkIcon>
          ) : null}
          {!iconWithoutLabel ? translate(item.labelTranslationKey, item.label) : null}
          {item.external ? <LaunchIcon size="10px" /> : null}
        </FooterLink>
      )}
    </FooterItemWrapper>
  );
}

const FooterSeparator = styled.div`
  text-transform: uppercase;
  font-size: var(--footer-separator-item-font-size);
  margin: var(--footer-separator-item-margin);
  opacity: var(--footer-separator-item-opacity);
`;

const FooterLinkIcon = styled.div<{ iconsOnly?: boolean }>`
  --icon-width: var(--footer-item-icon-width);
  --icon-height: var(--footer-item-icon-height);
  display: inline-flex;
  margin-right: ${({ iconsOnly }) => (iconsOnly ? '0' : 'var(--footer-item-icon-margin-right)')};
  vertical-align: middle;
  border: 1px solid var(--footer-item-icon-border-color);
  border-radius: var(--footer-item-icon-border-radius);
  padding: var(--footer-item-icon-padding);
`;

const FooterLink = styled(Link)`
  color: var(--footer-link-text-color);
  text-decoration: none;
  text-align: center;
  &:hover {
    color: var(--footer-link-color-hover);
  }

  @media screen and (min-width: ${breakpoints.small}) {
    text-align: left;
  }
`;

const FooterItemWrapper = styled.div<{ iconsOnly?: boolean; item: ResolvedNavItem }>`
  margin: ${({ iconsOnly, item }) =>
    iconsOnly
      ? '0 var(--footer-item-icon-margin-right) 0 0;'
      : item.type === 'link'
        ? 'var(--footer-link-padding-vertical) var(--footer-link-padding-horizontal);'
        : '0'};
`;
