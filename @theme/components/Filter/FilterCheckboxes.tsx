import React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';
import type { FilterProps } from '@redocly/theme/core/types';

import { FilterOptions } from '@redocly/theme/components/Filter/FilterOptions';
import { FilterOption } from '@redocly/theme/components/Filter/FilterOption';
import { FilterTitle } from '@redocly/theme/components/Filter/FilterTitle';
import { FilterOptionLabel } from '@redocly/theme/components/Filter/FilterOptionLabel';
import { useThemeHooks } from '@redocly/theme/core/hooks';
import { CheckboxIcon } from '@redocly/theme/icons/CheckboxIcon/CheckboxIcon';
import { CounterTag } from '@redocly/theme/components/Tags/CounterTag';
import { changeTextCasing } from '@redocly/theme/core/utils';

export function FilterCheckboxes({
  filter,
  filterValuesCasing,
  showCounter = true,
}: FilterProps): JSX.Element {
  const { useTranslate, useTelemetry } = useThemeHooks();
  const { translate } = useTranslate();
  const telemetry = useTelemetry();

  return (
    <FilterCheckboxesWrapper data-component-name="Filter/FilterCheckboxes">
      <FilterTitle data-translation-key={filter.titleTranslationKey}>
        {translate(filter.titleTranslationKey, filter.title)}
      </FilterTitle>
      <FilterOptions>
        {(filter.filteredOptions || filter.options).map(({ value, count }) => {
          const id = 'filter--' + filter.property + '--' + value;
          return (
            <FilterCheckboxOption
              key={id}
              role="link"
              onClick={() => {
                filter.toggleOption(value);
                telemetry.sendFilterCheckboxToggledMessage({ id });
              }}
            >
              <CheckboxIcon
                checked={
                  filter.selectedOptions instanceof Set
                    ? filter.selectedOptions.has(value) ||
                      filter.selectedOptions.has(value?.toLowerCase())
                    : false
                }
              />
              <FilterOptionLabel data-translation-key={value}>
                {changeTextCasing(translate(value), filterValuesCasing)}
              </FilterOptionLabel>
              {showCounter && <CounterTag borderless>{count}</CounterTag>}
            </FilterCheckboxOption>
          );
        })}
      </FilterOptions>
    </FilterCheckboxesWrapper>
  );
}

const FilterCheckboxOption = styled(FilterOption)`
  padding-left: var(--filter-option-checkbox-padding-left);
   /* ensure transparent background when active */
  svg {
    background: transparent;
  }
`;

const FilterCheckboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;
