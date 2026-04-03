import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';
import type { FilterProps, FilterTypes } from '@redocly/theme/core/types';

import { FilterSelect } from '@redocly/theme/components/Filter/FilterSelect';
import { FilterCheckboxes } from '@redocly/theme/components/Filter/FilterCheckboxes';
import { FilterDateRange } from '@redocly/theme/components/Filter/FilterDateRange';

const filterComponents = {
  select: FilterSelect,
  'date-range': FilterDateRange,
  checkboxes: FilterCheckboxes,
} as const;

export function Filter({
  filter,
  filterValuesCasing,
  showCounter = true,
}: FilterProps): JSX.Element | null {
  if (!filter.parentUsed) return null;

  const FilterComponent = filterComponents[(filter.type || 'checkboxes') as FilterTypes];

  return (
    <FilterGroup data-component-name="Filter/Filter" key={filter.property + filter.title}>
      <FilterComponent
        filter={filter}
        filterValuesCasing={filterValuesCasing}
        showCounter={showCounter}
      />
    </FilterGroup>
  );
}

const FilterGroup = styled.div`
  padding: var(--filter-group-padding);
  display: flex;
  flex-direction: column;
  gap: var(--filter-group-gap);
`;
