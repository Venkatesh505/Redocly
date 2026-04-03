import React from 'react';

import type { JSX } from 'react';

import { useThemeHooks } from '@redocly/theme/core/hooks';
import { Button } from '@redocly/theme/components/Button/Button';

export type LoginButtonProps = {
  href: string;
  className?: string;
};

export function LoginButton({ href, className }: LoginButtonProps): JSX.Element {
  const { useTranslate, useTelemetry } = useThemeHooks();
  const { translate } = useTranslate();
  const telemetry = useTelemetry();

  return (
    <div data-component-name="UserMenu/LoginButton" className={className}>
      <Button
        data-translation-key="userMenu.login"
        to={href}
        onClick={() => telemetry.sendLoginButtonClickedMessage()}
        data-testid="login-btn"
        extraClass={className}
        variant="primary"
        size="medium"
      >
        {translate('userMenu.login', 'Login')}
      </Button>
    </div>
  );
}
