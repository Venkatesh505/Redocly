import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';

import { ArrowRightIcon } from '@redocly/theme/icons/ArrowRightIcon/ArrowRightIcon';
import { Button } from '@redocly/theme/components/Button/Button';
import { ArrowLeftIcon } from '@redocly/theme/icons/ArrowLeftIcon/ArrowLeftIcon';

type NavigationButtonPosition = 'left' | 'right';

export type NavigationButtonProps = {
  label: string;
  link: string;
  text: string;
  translationKey: string;
  position: NavigationButtonPosition;
  icon?: JSX.Element;
  className?: string;
};

export function NavigationButton({
  label,
  link,
  text,
  translationKey,
  position,
  icon = position === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />,
  className,
}: NavigationButtonProps): JSX.Element {
  return (
    <NavigationButtonWrapper
      data-component-name="PageNavigation/NavigationButton"
      data-translation-key={translationKey}
      position={position}
    >
      <NavigationButtonLabel>{text}</NavigationButtonLabel>
      <StyledNavigationButton
        size="large"
        to={link}
        extraClass={className}
        variant="link"
        icon={icon}
        iconPosition={position}
      >
        {label}
      </StyledNavigationButton>
    </NavigationButtonWrapper>
  );
}

const NavigationButtonWrapper = styled.div<{ position: NavigationButtonPosition }>`
  display: flex;
  flex-direction: column;
  text-align: ${({ position }) => position};
`;

const StyledNavigationButton = styled(Button)`
  text-wrap: wrap;
  padding-left: 0;
  padding-right: 0;
`;

const NavigationButtonLabel = styled.span`
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  font-weight: var(--font-weight-regular);
`;
