import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import type { JSX } from 'react';
import type { ResolvedNavItem, ResolvedNavLinkItem, ResolvedNavGroupItem } from '@redocly/config';
import type { LinkProps } from '@redocly/theme/components/Link/Link';

import { DropdownMenu } from '@redocly/theme/components/Dropdown/DropdownMenu';
import { DropdownMenuItem } from '@redocly/theme/components/Dropdown/DropdownMenuItem';
import {
  getPathnameForLocale,
  withPathPrefix,
  removeTrailingSlash,
} from '@redocly/theme/core/utils';
import { useThemeHooks } from '@redocly/theme/core/hooks';
import { LaunchIcon } from '@redocly/theme/icons/LaunchIcon/LaunchIcon';
import { Link } from '@redocly/theme/components/Link/Link';
import { Dropdown } from '@redocly/theme/components/Dropdown/Dropdown';
import { GenericIcon } from '@redocly/theme/icons/GenericIcon/GenericIcon';

export type NavbarItemProps = {
  navItem: ResolvedNavItem;
  className?: string;
};

export function NavbarItem({ navItem, className }: NavbarItemProps): JSX.Element | null {
  const { pathname } = useLocation();
  const { useTranslate, useL10nConfig, useTelemetry } = useThemeHooks();
  const { translate } = useTranslate();
  const { defaultLocale, currentLocale, locales } = useL10nConfig();
  const telemetry = useTelemetry();

  if (navItem.type !== 'link' && !navItem.items) return null;

  const item = navItem as ResolvedNavLinkItem;
  const normalizedPath = (item.link ? removeTrailingSlash(item.link) : item.link) || '';

  const pathWithPathPrefix = withPathPrefix(
    getPathnameForLocale(normalizedPath, defaultLocale, currentLocale, locales),
  );

  const isActive = removeTrailingSlash(pathname) === removeTrailingSlash(pathWithPathPrefix);

  const itemContent = (
    <NavbarMenuItem
      as={item.link ? Link : undefined}
      active={isActive}
      className={className}
      onClick={() => telemetry.sendNavbarMenuItemClickedMessage({ type: item.type })}
      external={item.external}
      target={item.target}
      to={item.link}
    >
      <NavbarIcon icon={item.icon} srcSet={item.srcSet} />
      <NavbarLabel data-translation-key={item.labelTranslationKey}>
        {translate(item.labelTranslationKey, item.label)}
      </NavbarLabel>
      {item.external ? <ExternalLinkIcon size="10px" /> : null}
    </NavbarMenuItem>
  );

  if ((navItem as ResolvedNavGroupItem).items) {
    const item = navItem as ResolvedNavGroupItem;
    const groupItems = item.items as ResolvedNavItem[];
    const groupItemsComponents = groupItems.map((item, index) => {
      if (item.type !== 'link' && item.type !== 'separator') return null;
      return (
        <DropdownMenuItem
          key={`${item.label}_${index}`}
          to={item.link}
          separator={item.type === 'separator'}
          separatorLine={item.separatorLine}
          data-translation-key={item.labelTranslationKey}
          external={item.external}
        >
          <NavbarIcon icon={item.icon} srcSet={item.srcSet} />
          <NavbarLabel data-translation-key={item.labelTranslationKey}>
            {translate(item.labelTranslationKey, item.label)}
          </NavbarLabel>
          {item.external ? <ExternalLinkIcon size="10px" /> : null}
        </DropdownMenuItem>
      );
    });

    return (
      <div data-component-name="Navbar/NavbarItem">
        <NavbarMenuItemDropdown trigger={itemContent} triggerEvent="hover">
          <DropdownMenu>{groupItemsComponents}</DropdownMenu>
        </NavbarMenuItemDropdown>
      </div>
    );
  }

  return <div data-component-name="Navbar/NavbarItem">{itemContent}</div>;
}

const NavbarMenuItemDropdown = styled(Dropdown)`
  --dropdown-menu-item-separator-font-size: var(--navbar-separator-font-size);
  --dropdown-menu-item-separator-text-color: var(--navbar-separator-text-color);
  --dropdown-menu-item-separator-line-height: var(--navbar-separator-line-height);
`;

const NavbarMenuItem = styled.li<LinkProps & { active?: boolean }>`
  display: inline-block;
  margin: var(--navbar-item-padding);
  text-align: center;
  line-height: var(--navbar-item-line-height);
  font-weight: var(--navbar-item-font-weight);

  border-radius: none;
  border-bottom: ${({ active }) =>
    active ? '2px solid transparent' : '2px solid transparent'};
  background: ${({ active }) => active && 'transparent'};
  color: ${({ active }) =>
    active ? '#fff' : '#fff'};
  text-decoration: ${({ active }) =>
    active ? 'var(--navbar-item-text-decoration-active)' : 'none'};

  &:hover {
    color: #fff;
    text-decoration: var(--navbar-item-text-decoration-hover);
    border-bottom: ${({ active }) =>
    active ? '2px solid rgba(0, 211, 243, 1)' : '2px solid rgba(0, 211, 243, 1)'};
    background: ${({ active }) =>
      active ? 'transparent' : 'transparent'};
  }
`;

const NavbarLabel = styled.span`
  cursor: pointer;
  vertical-align: middle;
`;

const NavbarIcon = styled(GenericIcon)`
  --icon-width: var(--navbar-item-icon-width);
  --icon-height: var(--navbar-item-icon-height);
  margin-right: var(--navbar-item-icon-margin-right);
`;

const ExternalLinkIcon = styled(LaunchIcon)`
  margin-left: 5px;
`;
