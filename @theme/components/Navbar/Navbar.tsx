import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';
import type { ResolvedConfigLinks } from '@redocly/config';

import { breakpoints } from '@redocly/theme/core/utils';
import { useThemeHooks, useThemeConfig, useMobileMenu } from '@redocly/theme/core/hooks';
import { NavbarLogo } from '@redocly/theme/components/Navbar/NavbarLogo';
import { NavbarMenu } from '@redocly/theme/components/Navbar/NavbarMenu';
import { MenuMobile } from '@redocly/theme/components/Menu/MenuMobile';

import { UserMenu } from '@redocly/theme/components/UserMenu/UserMenu';

import { ProductPicker } from '@redocly/theme/components/Product/ProductPicker';
import { Button } from '@redocly/theme/components/Button/Button';
import { MenuIcon } from '@redocly/theme/icons/MenuIcon/MenuIcon';
import { CloseIcon } from '@redocly/theme/icons/CloseIcon/CloseIcon';

export type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps): JSX.Element | null {
  const { isOpen, closeMobileMenu, openMobileMenu } = useMobileMenu(false);
  const themeConfig = useThemeConfig();
  const { useTelemetry } = useThemeHooks();
  const telemetry = useTelemetry();

  const menu = themeConfig.navbar?.items;

  const { search: searchSettings, navbar, userMenu: userMenuSettings, logo } = themeConfig;

  if (navbar?.hide) {
    return null;
  }

  const hideSearch =
    searchSettings?.hide || (searchSettings?.placement && searchSettings?.placement !== 'navbar');
  const hideUserMenu = userMenuSettings?.hide;

  return (
    <NavbarWrapper data-component-name="Navbar/Navbar" className={className}>
      {isOpen && <MenuMobile hideUserProfile={!!hideUserMenu} />}
      <NavbarRow>
        {/* {logo && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavbarLogo config={logo} />
            <a 
              href="/" 
              style={{ 
                marginLeft: "8px", 
                color: "#fff", 
                textDecoration: "none", 
                fontWeight: "400" 
              }}
            >
              SyncX
            </a>
          </div>
        )} */}

        {logo && 
        ( <div style={{ display: "flex", alignItems: "center" }}> 
          <NavbarLogo config={logo} /> 
          </div> 
        )}

        <ProductPicker />
        {menu && <NavbarMenu menuItems={menu as ResolvedConfigLinks} />}
                
        <MobileMenuButton
          variant="text"
          data-testid="mobile-menu-button"
          onClick={
            isOpen
              ? () => {
                  closeMobileMenu();
                  telemetry.sendMobileMenuButtonCloseClickedMessage();
                }
              : () => {
                  openMobileMenu();
                  telemetry.sendMobileMenuButtonOpenClickedMessage();
                }
          }
          icon={isOpen ? <CloseIcon /> : <MenuIcon />}
          aria-label={isOpen ? 'Close menu button' : 'Open menu button'}
        />
        {hideUserMenu ? null : <UserMenu />}
      </NavbarRow>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.nav`
  --text-color: #fff;

  position: sticky;
  display: flex;
  top: 0;
  height: var(--navbar-height);
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
  padding: var(--navbar-padding);
  border: var(--navbar-border);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1)
  font-size: var(--navbar-font-size);
  font-family: var(--navbar-font-family);
  z-index: var(--z-index-raised);
  background: #17294F;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10);

  @media screen and (max-width: ${breakpoints.small}) {
    padding: 20px;
  }

  @media print {
    background: transparent;
    display: none;
    > :not(a, img) {
      display: none !important;
    }
    img {
      padding: 0;
      margin: 0;
    }
  }
`;

const NavbarRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0px;
  max-width: var(--navbar-container-max-width);

  @media screen and (min-width: ${breakpoints.max}) {
    max-width: var(--container-max-width);
    margin-left: auto;
    margin-right: auto;
  }
`;

const MobileMenuButton = styled(Button)`
  
  color: #fff;

  @media screen and (min-width: ${breakpoints.medium}) {
    display: none;
  }
`;
