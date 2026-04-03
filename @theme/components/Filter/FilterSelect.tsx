import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';
import type { FilterProps, SelectProps, SelectOption } from '@redocly/theme/core/types';

import { FilterOption } from '@redocly/theme/components/Filter/FilterOption';
import { FilterOptionLabel } from '@redocly/theme/components/Filter/FilterOptionLabel';
import { FilterTitle } from '@redocly/theme/components/Filter/FilterTitle';
import { Select } from '@redocly/theme/components/Select/Select';
import { CounterTag } from '@redocly/theme/components/Tags/CounterTag';
import { changeTextCasing } from '@redocly/theme/core/utils';
import { useThemeHooks } from '@redocly/theme/core/hooks';

export function FilterSelect({
  filter,
  filterValuesCasing,
  showCounter = true,
}: FilterProps): JSX.Element {
  const { useTranslate } = useThemeHooks();
  const { translate } = useTranslate();

  let selectOptions: SelectOption<string>[] = [];

  const defaultOptionCount = filter.options.reduce((acc, option) => acc + option.count, 0);

  selectOptions = [
    {
      value: '',
      element: (
        <FilterOption key="all" onClick={() => filter.selectOption('')}>
          <FilterOptionLabel data-translation-key="catalog.filters.select.all">
            {translate('catalog.filters.select.all', 'All')}
          </FilterOptionLabel>
          <CounterTag borderless>{defaultOptionCount}</CounterTag>
        </FilterOption>
      ),
    },
    ...filter.options.map((option) => ({
      value: option.value,
      element: (
        <FilterOption key={option.value}>
          <FilterOptionLabel data-translation-key={option.value}>
            {changeTextCasing(translate(option.value), filterValuesCasing)}
          </FilterOptionLabel>
          {showCounter && <CounterTag borderless>{option.count}</CounterTag>}
        </FilterOption>
      ),
    })),
  ];

  return (
    <FilterSelectWrapper data-component-name="Filter/FilterSelect">
      <FilterTitle data-translation-key={filter.titleTranslationKey}>
        {translate(filter.titleTranslationKey, filter.title)}
      </FilterTitle>
      <StyledSelect
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        value={(filter.selectedOptions as Set<any>).values().next()?.value || ''}
        onChange={(value) => filter.selectOption(value)}
        options={selectOptions}
      />
    </FilterSelectWrapper>
  );
}

const FilterSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--filter-select-wrapper-gap);
`;

const StyledSelect = styled(Select)<SelectProps>`
  --select-list-max-width: var(--filter-select-max-width);

  min-height: var(--filter-select-min-height);
  --select-text-color: var(--filter-select-color);
  border: 1px solid var(--filter-select-border-color);
  --select-border-radius: var(--filter-select-border-radius);
  padding: var(--filter-select-padding);

  :hover {
    border-color: var(--filter-select-border-color-hover);
  }
  --filter-option-margin: var(--filter-select-option-margin);
`;
