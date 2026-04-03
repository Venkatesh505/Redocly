import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Markdown } from '@redocly/theme/components/Markdown/Markdown';

interface StepByStepLayoutProps {
  pageProps?: Record<string, unknown>; // or a more specific type
  children: ReactNode;
}

export default function StepByStepLayout({ pageProps, children }: StepByStepLayoutProps) {
  return (
    <Wrapper>
      <Markdown>{children}</Markdown>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--spacing-xl);
`;
