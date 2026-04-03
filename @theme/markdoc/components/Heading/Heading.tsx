import React, { createElement } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import type { JSX, PropsWithChildren } from 'react';

import { concatClassNames } from '@redocly/theme/core/utils';
import { LinkIcon } from '@redocly/theme/icons/LinkIcon/LinkIcon';
import { PageActions } from '@redocly/theme/components/PageActions/PageActions';
import { useThemeHooks } from '@redocly/theme/core/hooks';

/**
 * Class name for all MD tags
 */
const mdClassName = 'md';

export function Heading({
  level,
  id,
  children,
  'data-source': dataSource,
  'data-hash': dataHash,
  className,
  __idx,
}: PropsWithChildren<{
  level: number;
  id: string;
  'data-source'?: string;
  'data-hash'?: string;
  className?: string;
  __idx?: number;
}>): JSX.Element {
  const { pathname } = useLocation();
  const { usePageProps } = useThemeHooks();
  const pageProps = usePageProps();

  const isMarkdownPage = pageProps?.metadata?.type === 'markdown';

  const linkEl = (
    <a
      aria-label={`link  to ${id}`}
      href={`#${id}`}
      className={concatClassNames('anchor', 'before')}
    >
      <LinkIcon size="14px" color="--heading-anchor-color" />
    </a>
  );

  return createElement(
    `h${level}`,
    {
      id,
      className: concatClassNames('heading-anchor', mdClassName, className),
      'data-component-name': 'Markdoc/Heading/Heading',
      'data-source': dataSource,
      'data-hash': dataHash,
    },
    <HeadingContentWrapper>
      {linkEl}
      <span>{children}</span>
      {isMarkdownPage && __idx === 0 ? <PageActions pageSlug={pathname} /> : null}
    </HeadingContentWrapper>,
  );
}

const HeadingContentWrapper = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  align-items: center;
`;
