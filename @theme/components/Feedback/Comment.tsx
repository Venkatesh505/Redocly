import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

import type { JSX } from 'react';

import { useOutsideClick, useThemeHooks } from '@redocly/theme/core/hooks';
import { RadioCheckButtonIcon } from '@redocly/theme/icons/RadioCheckButtonIcon/RadioCheckButtonIcon';
import { Button } from '@redocly/theme/components/Button/Button';

export type CommentProps = {
  onSubmit: (value: { comment: string }) => void;
  onCancel?: () => unknown;
  settings?: {
    label?: string;
    submitText?: string;
  };
  standAlone?: boolean;
  isDialog?: boolean;
  className?: string;
};

export function Comment({
  settings,
  onSubmit,
  onCancel,
  className,
  standAlone = true,
  isDialog = false,
}: CommentProps): JSX.Element {
  const { useTranslate } = useThemeHooks();
  const { translate } = useTranslate();
  const { label, submitText } = settings || {};
  const [text, setText] = React.useState('');
  const [submitValue, setSubmitValue] = React.useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onCancel);

  const send = () => {
    if (!text) return;
    setSubmitValue(text);
    onSubmit({ comment: text });
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const commentValue = e.target.value;
    setText(commentValue);

    if (!standAlone) {
      onSubmit({ comment: commentValue });
    }
  };

  if (submitValue) {
    return (
      <StateWrapper data-component-name="Feedback/Comment" className={className}>
        <StyledFormMandatoryFields>
          <Label
            data-translation-key="feedback.settings.comment.submitText"
            standAlone={standAlone}
          >
            {submitText ||
              translate(
                'feedback.settings.comment.submitText',
                'Thank you for helping improve our documentation!',
              )}
          </Label>
          <RadioCheckButtonIcon />
        </StyledFormMandatoryFields>
      </StateWrapper>
    );
  }

  return (
    <CommentWrapper
      ref={modalRef}
      data-component-name="Feedback/Comment"
      className={className}
      style={standAlone ? { width: 'var(--feedback-report-dialog-width)' } : { width: 'auto' }}
    >
      <Label data-translation-key="feedback.settings.comment.label" standAlone={standAlone}>
        {label ||
          translate('feedback.settings.comment.label', 'Please share your feedback with us.')}
      </Label>
      <TextArea rows={3} onChange={handleTextAreaChange} />
      {standAlone && (
        <ButtonsContainer>
          {onCancel && (
            <Button
              data-translation-key="feedback.settings.comment.cancel"
              onClick={onCancel}
              variant="text"
              size="small"
            >
              {translate('feedback.settings.comment.cancel', 'Cancel')}
            </Button>
          )}
          <Button
            data-translation-key="feedback.settings.comment.send"
            onClick={send}
            variant={isDialog ? 'primary' : 'secondary'}
            size="small"
          >
            {translate('feedback.settings.comment.send', 'Send')}
          </Button>
        </ButtonsContainer>
      )}
    </CommentWrapper>
  );
}

const StyledFormMandatoryFields = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-xs);

  > svg {
    margin: var(--button-icon-padding) 0; /* prevent hight of the parent jumping */
  }
`;

const CommentWrapper = styled.div`
  font-family: var(--font-family-base);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--border-radius-lg);
  background: var(--feedback-bg-color);
  gap: var(--spacing-xxs);

  max-width: var(--feedback-report-dialog-max-width);
`;

const StateWrapper = styled(CommentWrapper)`
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-xxs);
`;

const Label = styled.h4<{ standAlone: boolean }>`
  font-weight: var(--font-weight-regular);
  font-size: var(--feedback-font-size);
  line-height: var(--feedback-line-height);

  ${({ standAlone }) =>
    standAlone &&
    css`
      font-size: var(--feedback-header-font-size);
      line-height: var(--feedback-header-line-height);
    `}

  margin: 0;
`;

const TextArea = styled.textarea`
  background-color: var(--bg-color);
  border-radius: var(--border-radius-lg);
  border: var(--input-border);
  outline: none;
  color: var(--feedback-text-color);
  font-family: var(--feedback-font-family);
  padding: 10px;

  /* min height of 3 rows + padding */
  min-height: calc(var(--line-height-base) * 3 + 20px);
  min-width: var(--feedback-comment-min-width);
  max-width: var(--feedback-comment-max-width);
  resize: vertical;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: var(--spacing-xxs);
  margin-top: var(--spacing-xs);
  gap: var(--spacing-xs);
`;
