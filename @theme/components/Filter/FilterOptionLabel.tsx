import React, { type PropsWithChildren, JSX } from 'react';
import styled from 'styled-components';

export type FilterOptionLabelProps = PropsWithChildren<{
  className?: string;
}>;

export function FilterOptionLabel(props: FilterOptionLabelProps): JSX.Element {
  return <FilterOptionLabelComponent {...props} data-component-name="Filter/FilterOptionLabel" />;
}

const FilterOptionLabelComponent = styled.label`
  color: #D1D3D7;
  cursor: pointer;
  font-size: var(--filter-option-label-font-size);
  // color: var(--filter-option-label-color);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;  
`;
