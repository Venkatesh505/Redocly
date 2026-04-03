import React from 'react';
import styled from 'styled-components';

import type { JSX, PropsWithChildren } from 'react';

export type FilterOptionsProps = PropsWithChildren<{
  className?: string;
}>;

export function FilterOptions(props: FilterOptionsProps): JSX.Element {
  return <FilterOptionsComponent {...props} data-component-name="Filter/FilterOptions" />;
}

const FilterOptionsComponent = styled.div`
  color: #fff;
  padding: var(--filter-options-padding-vertical) var(--filter-options-padding-horizontal);
  display: flex;
  flex-direction: column;
  gap: var(--filter-options-gap);
  max-height: var(--filter-options-max-height);
  overflow-y: scroll;
`;
