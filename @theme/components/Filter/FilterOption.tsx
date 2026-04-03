import React from 'react';
import styled from 'styled-components';

import type { JSX, PropsWithChildren } from 'react';

export type FilterOptionProps = PropsWithChildren<{
  role?: string;
  key?: string;
  onClick?: () => void;
  className?: string;
}>;

export function FilterOption(props: FilterOptionProps): JSX.Element {
  return (
    <FilterOptionComponent
      {...props}
      data-component-name="Filter/FilterOption"
      data-testid="Filter/FilterOption"
    />
  );
}

const FilterOptionComponent = styled.label`
  display: flex;
  gap: var(--filter-option-gap);
  align-items: center;
  cursor: pointer;
  font-size: var(--filter-option-font-size);

  input {
    cursor: pointer;
  }
  margin: var(--filter-option-margin);
`;
