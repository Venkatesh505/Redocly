import React from 'react';
import styled from 'styled-components';

import type { LogoProps } from '@redocly/theme/components/Logo/Logo';

import { Logo } from '@redocly/theme/components/Logo/Logo';

export function NavbarLogo(props: LogoProps) {
  return <NavbarLogoComponent {...props} data-component-name="Navbar/NavbarLogo" />;
}

const NavbarLogoComponent = styled(Logo)<LogoProps>`
  --logo-height: 48px;
  --logo-width: 48px;
  --logo-margin: 0px;
  --logo-max-width: var(--navbar-logo-max-width);
  --logo-max-height: var(--navbar-logo-max-height);
`;
