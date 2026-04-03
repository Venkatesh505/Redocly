import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';

import { ContrastIcon } from '@redocly/theme/icons/ContrastIcon/ContrastIcon';
import { MoonIcon } from '@redocly/theme/icons/MoonIcon/MoonIcon';
import { SunIcon } from '@redocly/theme/icons/SunIcon/SunIcon';

export type ColorModeIconProps = {
  mode?: 'dark' | 'light' | string;
  className?: string;
};

export function ColorModeIcon(props: ColorModeIconProps): JSX.Element {
  return (
    <ColorModeIconComponent {...props} data-component-name="ColorModeSwitcher/ColorModeIcon" />
  );
}

function Icon({ mode, className }: ColorModeIconProps) {
  switch (mode) {
    case 'dark':
      return <SunIcon data-testid="dark" />;
    case 'light':
      return <MoonIcon data-testid="light" />;
    default:
      return <ContrastIcon data-testid="custom" className={className + (mode ? ' ' + mode : '')} />;
  }
}

const ColorModeIconComponent = styled(Icon)`
  box-sizing: border-box;
`;
