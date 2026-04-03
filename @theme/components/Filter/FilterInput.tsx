import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';

import { useThemeHooks } from '@redocly/theme/core/hooks';
import { SearchIcon } from '@redocly/theme/icons/SearchIcon/SearchIcon';

export type FilterInputProps = {
  value: string;
  onChange: (newValue: string) => void;
  dataTestId?: string;
};

export function FilterInput(props: FilterInputProps): JSX.Element {
  const { value: initialValue, onChange, dataTestId } = props;

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  const { useTranslate } = useThemeHooks();
  const { translate } = useTranslate();

  return (
    <InputWrapper data-component-name="Filter/FilterInput" data-testid={dataTestId}>
      <InputIcon />
      <Input
        value={value}
        onChange={handleChange}
        placeholder={translate('catalog.filters.placeholder', 'Search')}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
    position: relative;
    margin-bottom: 15px;
`;

const InputIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: var(--spacing-sm);
  color: var(--input-content-placeholder-color);
`;

const Input = styled.input`
  border: var(--filter-input-border);
  min-width: var(--filter-input-min-width);
  width: 100%;
  outline: none;
  padding: var(--filter-input-padding);
  border-radius: var(--filter-input-border-radius);
  background-color: var(--filter-input-bg-color);
  color: var(--filter-input-color);
  font-family: var(--filter-input-font-family);
  font-size: var(--filter-input-font-size);
  line-height: var(--filter-input-line-height);

  &::placeholder {
    opacity: var(--filter-input-placeholder-opacity);
    color: var(--filter-input-placeholder-color);
  }

  &:hover {
    color: var(--filter-input-color-hover);
    border: var(--filter-input-border-hover);
  }

  &:focus {
    color: var(--filter-input-color-focus);
    border: var(--filter-input-border-focus);
  }

  &:-webkit-autofill {
    background-color: var(--filter-input-bg-color);
  }
`;
