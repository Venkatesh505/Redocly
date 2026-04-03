import React from 'react';
import styled, { css } from 'styled-components';

import type { JSX } from 'react';
import type { ResolvedFilter } from '@redocly/theme/core/types';
import type { RedoclyConfig } from '@redocly/theme/config';

import { FilterInput } from '@redocly/theme/components/Filter/FilterInput';
import { useThemeHooks } from '@redocly/theme/core/hooks';
import { Button } from '@redocly/theme/components/Button/Button';
import { Filter } from '@redocly/theme/components/Filter/Filter';
import { isFromToSelectedOptions } from '@redocly/theme/core/utils';

export type FilterContentProps = {
  setFilterTerm: (value: string) => void;
  filters: ResolvedFilter[];
  filterTerm: string;
  filterValuesCasing?:
    | NonNullable<RedoclyConfig['catalog']>[string]['filterValuesCasing']
    | ((str: string) => string);
  hideSearch?: boolean;
  showCounter?: boolean;
};

export function FilterContent({
  setFilterTerm,
  filters,
  filterTerm,
  filterValuesCasing,
  hideSearch,
  showCounter = true,
}: FilterContentProps): JSX.Element | null {
  const { useTranslate } = useThemeHooks();
  const { translate } = useTranslate();

  const hasActiveFilters = filters.some((filter) => {
    if (filterTerm) return true;
    if (filter.selectedOptions && filter.selectedOptions instanceof Set) {
      return filter.selectedOptions.size;
    } else if (
      isFromToSelectedOptions(filter.selectedOptions) &&
      filter.selectedOptions.from &&
      filter.selectedOptions.to
    ) {
      return true;
    }
  });

  const handleClearAll = () => {
    filters.forEach((filter) => filter.selectOption(''));
    setFilterTerm('');
  };

  if (!filters.length) {
    return null;
  }

  return (
    <FilterContentWrapper data-component-name="Filter/FilterContent">
      <FiltersHeader>
        <FiltersTitle data-translation-key="catalog.filters.title">
          {translate('catalog.filters.title', 'Filters')}
        </FiltersTitle>
        {hasActiveFilters ? (
          <Button size="medium" tone="danger" variant="ghost" onClick={handleClearAll}>
            {translate('catalog.filters.clearAll', 'Clear filters')}
          </Button>
        ) : null}
      </FiltersHeader>
      {!hideSearch && (
        <FilterInput value={filterTerm} onChange={(updatedTerm) => setFilterTerm(updatedTerm)} />
      )}
      <FilterItems hideSearch={hideSearch}>
        {filters.map((filter, idx) => (
          <Filter
            filter={filter}
            key={filter.property + '-' + idx}
            filterValuesCasing={filterValuesCasing}
            showCounter={showCounter}
          />
        ))}
      </FilterItems>
    </FilterContentWrapper>
  );
}

const FilterContentWrapper = styled.div`
  padding: var(--filter-content-padding-vertical) var(--filter-content-padding-horizontal);
  display: flex;
  flex-direction: column;
  gap: var(--filter-content-gap);
`;

const FiltersHeader = styled.div`
  display: flex;
  padding: var(--filter-content-header-padding-vertical)
    var(--filter-content-header-padding-horizontal);
`;

const FiltersTitle = styled.div`
  color:#fff;
  margin-right: auto;
  font-size: var(--filter-content-title-font-size);
  font-weight: var(--filter-content-title-font-weight);
  line-height: var(--filter-content-title-line-height);
`;

const FilterItems = styled.div<{ hideSearch?: boolean }>`
  padding: var(--filter-content-items-padding);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-base);
  border-top: 1px solid var(--border-color-secondary);
  ${({ hideSearch }) =>
    hideSearch &&
    css`
      border-top: none;
    `}
`;
