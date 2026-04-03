import React from 'react';

import type { JSX } from 'react';

import { useMount, useColorSwitcher } from '@redocly/theme/core/hooks';
import { ColorModeIcon } from '@redocly/theme/components/ColorModeSwitcher/ColorModeIcon';
import { Button } from '@redocly/theme/components/Button/Button';

export type ColorModeSwitcherProps = {
  className?: string;
};

export function ColorModeSwitcher({ className }: ColorModeSwitcherProps): JSX.Element | null {
  const { isSwitcherHidden, initActiveColorMode, switchColorMode, activeColorMode } =
    useColorSwitcher();

  useMount(() => {
    initActiveColorMode();
  });

  if (isSwitcherHidden) {
    return null;
  }

  return (
    <Button
      data-component-name="ColorModeSwitcher/ColorModeSwitcher"
      data-testid="color-mode-switcher"
      onClick={() => switchColorMode()}
      aria-label={activeColorMode}
      extraClass={className}
      variant="secondary"
      size="medium"
      icon={<ColorModeIcon mode={activeColorMode} />}
    />
  );
}
