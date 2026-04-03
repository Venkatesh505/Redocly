import React from 'react';
import styled from 'styled-components';

import type { JSX, PropsWithChildren } from 'react';

export type FilterTitleProps = PropsWithChildren<{
  className?: string;
}>;

export function FilterTitle(props: FilterTitleProps): JSX.Element {
  return <FilterTitleComponent {...props} data-component-name="Filter/FilterTitle" />;
}

const FilterTitleComponent = styled.div`
  color:#fff;
  font-weight: var(--filter-title-font-weight);
  font-size: var(--filter-title-font-size);
  line-height: var(--filter-title-line-height);
  margin: 5px 0px 15px;
`;
