import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';

import { useThemeHooks } from '@redocly/theme/core/hooks';
import { LanguagePicker } from '@redocly/theme/components/LanguagePicker/LanguagePicker';

export type FooterCopyrightProps = {
  copyrightText: string;
  className?: string;
};

export function FooterCopyright({
  copyrightText = '',
  className,
}: FooterCopyrightProps): JSX.Element | null {
  const { useTranslate, useL10n } = useThemeHooks();
  const { translate } = useTranslate();
  const { changeLanguage } = useL10n();

  return copyrightText ? (
    <FooterCopyrightWrapper
      className={className}
      data-component-name="Footer/FooterCopyright"
      data-translation-key="footer.copyrightText"
    >
      <FooterCopyrightLabel data-translation-key="footer.copyrightText">
        {translate('footer.copyrightText', copyrightText)}
      </FooterCopyrightLabel>
      <LanguagePicker onChangeLanguage={changeLanguage} placement="top" alignment="end" />
    </FooterCopyrightWrapper>
  ) : null;
}

const FooterCopyrightWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--footer-copyright-font-size);
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
  text-align: var(--footer-copyright-text-align);
  gap: var(--spacing-xs);

  span {
    max-width: var(--footer-container-max-width);
  }
`;

const FooterCopyrightLabel = styled.div`
  padding: var(--footer-link-padding-vertical) var(--footer-link-padding-horizontal);
`;
