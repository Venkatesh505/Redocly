import styled from 'styled-components';
import React from 'react';

import type { JSX } from 'react';
import type { DrilldownMenuItemDetails, ItemState } from '@redocly/theme/core/types';

import { MenuItem } from '@redocly/theme/components/Menu/MenuItem';
import { MenuItemType } from '@redocly/theme/core/constants';
import { getMenuItemType } from '@redocly/theme/core/utils';

export type MenuListProps = {
  items: ItemState[];
  depth?: number;
  isMobile?: boolean;
  className?: string;
  onDrilldownOpen?: (drilldownDetails: DrilldownMenuItemDetails) => void;
};

export function Menu({
  depth = 0,
  items,
  className,
  isMobile,
  onDrilldownOpen,
}: MenuListProps): JSX.Element {
  const activeItem = items.find(({ active }) => active);

  return (
    <MenuWrapper className={className} data-component-name="Menu/Menu">
      {items.map((item, index) => {
        return (
          <MenuItem
            item={item}
            key={`${item.link || item.label}-${index}`}
            activeItem={activeItem}
            isMobile={isMobile}
            depth={depth}
            onClick={() => {
              if (getMenuItemType(item) === MenuItemType.DrillDown) {
                onDrilldownOpen?.({ previousLink: activeItem?.link, item });
              }
            }}
          >
            {item.items?.length ? (
              <Menu
                items={item.items}
                depth={depth + 1}
                isMobile={isMobile}
                onDrilldownOpen={onDrilldownOpen}
              />
            ) : null}
          </MenuItem>
        );
      })}
    </MenuWrapper>
  );
}

const MenuWrapper = styled.ul`
  padding: var(--menu-padding);
  margin: var(--menu-margin);
  list-style: var(--menu-list-style);
  color: var(--menu-content-color);
  position: relative;
`;
