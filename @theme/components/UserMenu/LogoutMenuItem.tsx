import React from 'react';

import type { JSX } from 'react';

import { useThemeHooks } from '@redocly/theme/core/hooks';
import { LogoutIcon } from '@redocly/theme/icons/LogoutIcon/LogoutIcon';
import { DropdownMenuItem } from '@redocly/theme/components/Dropdown/DropdownMenuItem';

export type LogoutMenuItemProps = {
  iconOnly?: boolean;
  className?: string;
};

export function LogoutMenuItem({ iconOnly, className }: LogoutMenuItemProps): JSX.Element {
  const { useTranslate, useTelemetry, useUserMenu } = useThemeHooks();
  const { handleLogout } = useUserMenu();
  const telemetry = useTelemetry();
  const { translate } = useTranslate();

  const handleClick = () => {
    telemetry.sendLogoutMenuItemClickedMessage();
    handleLogout();
  };

  return (
    <DropdownMenuItem
      className={className}
      dangerous
      data-component-name="UserMenu/LogoutMenuItem"
      onAction={handleClick}
      data-translation-key="userMenu.logout"
      prefix={<LogoutIcon />}
      style={{ width: iconOnly ? 'fit-content' : '100%' }}
    >
      {iconOnly ? null : translate('userMenu.logout', 'Log out')}
    </DropdownMenuItem>
  );
}
