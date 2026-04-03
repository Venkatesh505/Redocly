import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import type { JSX } from 'react';

import { breakpoints } from '@redocly/theme/core/utils';
import { useThemeHooks, useMobileMenuItems, useMobileMenuLevels } from '@redocly/theme/core/hooks';
import { MobileMenuType } from '@redocly/theme/core/constants';
import { ChevronRightIcon } from '@redocly/theme/icons/ChevronRightIcon/ChevronRightIcon';
import { ChevronLeftIcon } from '@redocly/theme/icons/ChevronLeftIcon/ChevronLeftIcon';
import { Menu } from '@redocly/theme/components/Menu/Menu';
import { Button } from '@redocly/theme/components/Button/Button';
import { ArrowLeftIcon } from '@redocly/theme/icons/ArrowLeftIcon/ArrowLeftIcon';
import { UserMenuMobile } from '@redocly/theme/components/UserMenu/UserMenuMobile';
import { Product } from '@redocly/theme/components/Product/Product';

export type MobileMenuProps = {
  className?: string;
  hideUserProfile?: boolean;
};

export function MenuMobile({ className, hideUserProfile }: MobileMenuProps): JSX.Element | null {
  const location = useLocation();
  const { useCurrentProduct } = useThemeHooks();
  const product = useCurrentProduct();

  const menuLevels = useMobileMenuLevels();

  const [menuLevel, setMenuLevel] = useState(menuLevels.length - 1);

  useEffect(() => {
    setMenuLevel(menuLevels.length - 1);
  }, [menuLevels, location]);

  const menuType = menuLevels[menuLevel]?.type || MobileMenuType.MAIN_MENU;

  const {
    items: menuItems,
    pushDrilldownState,
    popDrilldownState,
    backLink,
  } = useMobileMenuItems(menuType);

  const prevLevelName = menuLevels[menuLevel - 1]?.label;
  const nextLevelName = menuLevels[menuLevel + 1]?.label;
  const isButtonsSectionVisible = nextLevelName || prevLevelName;

  return (
    <MobileMenuWrapper data-component-name="Menu/MenuMobile" className={className}>
      <ScrollableArea isButtonsSectionVisible={!!isButtonsSectionVisible}>
        {isButtonsSectionVisible && (
          <ButtonsSection alignRight={!prevLevelName && !!nextLevelName}>
            {prevLevelName && (
              <ControlButton
                data-testid="control-button"
                onClick={() => {
                  setMenuLevel(menuLevel - 1);
                  popDrilldownState();
                }}
              >
                <ChevronLeftIcon size="12px" color="--tree-content-color-default" />
                <ControlButtonLabel paddingDirection="left">{prevLevelName}</ControlButtonLabel>
              </ControlButton>
            )}
            {nextLevelName && (
              <ControlButton
                data-testid="control-button"
                onClick={() => setMenuLevel(menuLevel + 1)}
              >
                <ControlButtonLabel paddingDirection="right">{nextLevelName}</ControlButtonLabel>
                <ChevronRightIcon size="12px" color="--tree-content-color-default" />
              </ControlButton>
            )}
          </ButtonsSection>
        )}
        {menuType === MobileMenuType.PRODUCT && product ? (
          <ProductNameWrapper>
            <Product product={product} />
          </ProductNameWrapper>
        ) : null}
        {backLink ? (
          <DrilldownBackButton
            icon={<ArrowLeftIcon />}
            iconPosition="left"
            variant="ghost"
            size="medium"
            to={backLink.slug}
            onClick={popDrilldownState}
          >
            {`Back ${backLink.label ? 'to ' + backLink.label : ''}`}
          </DrilldownBackButton>
        ) : null}
        <MenuWrapper>
          <Menu onDrilldownOpen={pushDrilldownState} items={menuItems} isMobile />
        </MenuWrapper>
      </ScrollableArea>
      {hideUserProfile ? null : <UserMenuMobile />}
    </MobileMenuWrapper>
  );
}
const MobileMenuWrapper = styled.div`
  height: var(--menu-mobile-height);
  width: var(--menu-mobile-width);
  position: fixed;
  z-index: var(--menu-mobile-z-index);
  left: var(--menu-mobile-left);
  top: var(--menu-mobile-top);
  overflow-x: hidden;
  transition: var(--menu-mobile-transition);
  display: flex;
  flex-direction: column;
  background: var(--menu-mobile-bg);

  @media screen and (min-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const ScrollableArea = styled.div<{ isButtonsSectionVisible: boolean }>`
  padding-top: ${({ isButtonsSectionVisible }) =>
    isButtonsSectionVisible ? '0px' : 'var(--menu-mobile-padding-top)'};
  overflow-y: scroll;
  flex-grow: 1;
`;

const ButtonsSection = styled.div<{ alignRight: boolean }>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-xs);
  margin: 0 0 var(--spacing-sm) 0;
  background: var(--layer-color);
  gap: var(--spacing-xs);
  ${({ alignRight }) => alignRight && 'justify-content: flex-end'};
`;

const MenuWrapper = styled.div`
  margin: var(--menu-mobile-margin);
  line-height: var(--menu-mobile-line-height);
  background: var(--menu-mobile-bg);
`;

const ControlButton = styled.li`
  display: inline-flex;
  align-items: center;
  padding: var(--menu-mobile-control-button-padding);
  margin: var(--menu-mobile-control-button-margin);
  text-align: var(--menu-mobile-control-button-text-align);
  font-size: var(--menu-mobile-control-button-font-size);
  line-height: var(--menu-mobile-control-button-line-height);
  font-weight: var(--menu-mobile-control-button-weight);
  color: var(--menu-mobile-control-button-color);
  cursor: pointer;

  svg {
    fill: var(--menu-mobile-control-button-color);
  }

  &:hover {
    color: var(--menu-mobile-control-button-color-hover);

    svg {
      fill: var(--menu-mobile-control-button-color-hover);
    }
  }
`;

const ControlButtonLabel = styled.span<{ paddingDirection: 'right' | 'left' }>`
  vertical-align: middle;
  ${({ paddingDirection }) => paddingDirection === 'left' && 'padding-left: 8px'};
  ${({ paddingDirection }) => paddingDirection === 'right' && 'padding-right: 8px'};
`;

const ProductNameWrapper = styled.div`
  font-size: var(--menu-mobile-product-name-font-size);
  font-weight: var(--menu-mobile-product-name-font-weight);
  line-height: var(--menu-mobile-product-name-line-height);
  color: var(--menu-mobile-product-name-text-color);
  border-radius: var(--menu-mobile-product-name-border-radius);
  border: var(--menu-mobile-product-name-border);
  padding: var(--menu-mobile-product-name-padding);
  margin: var(--menu-mobile-product-name-margin);
`;

const DrilldownBackButton = styled(Button)`
  margin: var(--menu-item-label-margin);
`;
