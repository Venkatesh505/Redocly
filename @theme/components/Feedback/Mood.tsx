import * as React from 'react';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';

import type { JSX } from 'react';
import type { OptionalEmailSettings, ReasonsSettingsSchema } from '@redocly/config';
import type { ReasonsProps } from '@redocly/theme/components/Feedback/Reasons';

import { Reasons } from '@redocly/theme/components/Feedback/Reasons';
import { useThemeHooks } from '@redocly/theme/core/hooks';
import { RadioCheckButtonIcon } from '@redocly/theme/icons/RadioCheckButtonIcon/RadioCheckButtonIcon';
import { Comment } from '@redocly/theme/components/Feedback/Comment';
import { Button } from '@redocly/theme/components/Button/Button';
import { FaceDissatisfiedIcon } from '@redocly/theme/icons/FaceDissatisfiedIcon/FaceDissatisfiedIcon';
import { FaceSatisfiedIcon } from '@redocly/theme/icons/FaceSatisfiedIcon/FaceSatisfiedIcon';
import { FaceNeutralIcon } from '@redocly/theme/icons/FaceNeutralIcon/FaceNeutralIcon';

export enum MOOD_STATES {
  SATISFIED = 'satisfied',
  NEUTRAL = 'neutral',
  DISSATISFIED = 'dissatisfied',
}

export type MoodProps = {
  onSubmit: (value: {
    score: number;
    comment?: string;
    reasons?: string[];
    email?: string;
  }) => void;
  settings?: {
    label?: string;
    submitText?: string;
    comment?: {
      hide?: boolean;
      satisfiedLabel?: string;
      neutralLabel?: string;
      dissatisfiedLabel?: string;
    };
    reasons?: ReasonsSettingsSchema & {
      satisfied?: ReasonsSettingsSchema;
      neutral?: ReasonsSettingsSchema;
      dissatisfied?: ReasonsSettingsSchema;
    };
    optionalEmail?: OptionalEmailSettings;
  };
  className?: string;
};

export function Mood({ settings, onSubmit, className }: MoodProps): JSX.Element {
  const {
    label,
    submitText,
    comment: commentSettings,
    reasons: reasonsSettings,
    optionalEmail: optionalEmailSettings,
  } = settings || {};
  const [score, setScore] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const [reasons, setReasons] = React.useState([] as ReasonsProps['settings']['items']);
  const [email, setEmail] = React.useState<string>();
  const { useTranslate, useUserMenu } = useThemeHooks();
  const { userData } = useUserMenu();
  const { translate } = useTranslate();

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value || undefined);
  };

  const checkIfShouldDisplayReasons = (score: string) => {
    if (!score || !reasonsSettings) {
      return false;
    }

    const scoreSpecificReasonsSettings = reasonsSettings[score as MOOD_STATES];

    if (typeof scoreSpecificReasonsSettings?.hide === 'undefined') {
      return !reasonsSettings.hide;
    }

    return !scoreSpecificReasonsSettings?.hide;
  };

  const renderCommentLabel = (score: string) => {
    if (!commentSettings || commentSettings?.hide === true) return '';

    switch (score) {
      case MOOD_STATES.SATISFIED:
        return (
          commentSettings.satisfiedLabel ||
          translate('feedback.settings.comment.satisfiedLabel', 'What was most helpful?')
        );
      case MOOD_STATES.NEUTRAL:
        return (
          commentSettings.neutralLabel ||
          translate('feedback.settings.comment.neutralLabel', 'What can we improve?')
        );
      case MOOD_STATES.DISSATISFIED:
        return (
          commentSettings.dissatisfiedLabel ||
          translate('feedback.settings.comment.dissatisfiedLabel', 'What can we improve?')
        );
      default:
        return translate('feedback.settings.comment.satisfiedLabel', 'What can we improve?');
    }
  };

  const renderReasonsLabel = (score: string) => {
    if (!reasonsSettings || reasonsSettings?.hide === true) return '';

    return reasonsSettings[score as MOOD_STATES]?.label;
  };

  const resolveReasonsItems = (score: string) => {
    if (!reasonsSettings) {
      return [];
    }

    const defaultReasonsItems = reasonsSettings?.items || [];

    return defaultReasonsItems.concat(reasonsSettings[score as MOOD_STATES]?.items ?? []);
  };

  const resolveReasonsComponent = (score: string) => {
    if (!reasonsSettings || reasonsSettings?.hide === true) return 'checkbox';

    return reasonsSettings[score as MOOD_STATES]?.component;
  };

  const displayReasons = checkIfShouldDisplayReasons(score);
  const displayComment = !!(score && !commentSettings?.hide);
  const displaySubmitBnt = !!(score && (displayReasons || displayComment));
  const displayFeedbackEmail = !!score && !optionalEmailSettings?.hide && !userData.isAuthenticated;

  const onSubmitMoodForm = () => {
    onSubmit({
      score: remapScore(score),
      comment,
      reasons,
      email,
    });
    setIsSubmitted(true);
  };

  const onCancelMoodForm = () => {
    setScore('');
    setComment('');
    setReasons([]);
    setEmail(undefined);
  };

  useEffect(() => {
    if (score && !displayComment && !displayReasons && !displayFeedbackEmail) {
      onSubmitMoodForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score, displayComment, displayReasons, displayFeedbackEmail]);

  if (isSubmitted) {
    return (
      <MoodWrapper data-component-name="Feedback/Mood">
        <StyledFormMandatoryFields>
          <Label standAlone={true} data-translation-key="feedback.settings.submitText">
            {submitText ||
              translate(
                'feedback.settings.submitText',
                'Thank you for helping improve our documentation!',
              )}
          </Label>
          <RadioCheckButtonIcon />
        </StyledFormMandatoryFields>
      </MoodWrapper>
    );
  }

  return (
    <MoodWrapper data-component-name="Feedback/Mood" className={className}>
      <StyledForm onSubmit={onSubmitMoodForm}>
        <StyledFormMandatoryFields>
          <Label standAlone={true} data-translation-key="feedback.settings.label">
            {label || translate('feedback.settings.label', 'Was this helpful?')}
          </Label>
          <StyledMandatoryFieldContainer>
            <Button
              aria-label={MOOD_STATES.DISSATISFIED}
              type="button"
              size="medium"
              variant={score === MOOD_STATES.DISSATISFIED ? 'primary' : 'secondary'}
              tone={score === MOOD_STATES.DISSATISFIED ? 'danger' : 'default'}
              onClick={() => {
                setScore(MOOD_STATES.DISSATISFIED);
              }}
              icon={<FaceDissatisfiedIcon />}
            />
            <Button
              aria-label={MOOD_STATES.NEUTRAL}
              type="button"
              variant={score === MOOD_STATES.NEUTRAL ? 'primary' : 'secondary'}
              size="medium"
              onClick={() => {
                setScore(MOOD_STATES.NEUTRAL);
              }}
              icon={<FaceNeutralIcon />}
            />
            <Button
              aria-label={MOOD_STATES.SATISFIED}
              type="button"
              variant={score === MOOD_STATES.SATISFIED ? 'primary' : 'secondary'}
              size="medium"
              onClick={() => {
                setScore(MOOD_STATES.SATISFIED);
              }}
              icon={<FaceSatisfiedIcon />}
            />
          </StyledMandatoryFieldContainer>
        </StyledFormMandatoryFields>
        {(displayReasons || displayComment) && (
          <StyledFormOptionalFields>
            {displayReasons && (
              <Reasons
                settings={{
                  label: renderReasonsLabel(score),
                  items: resolveReasonsItems(score),
                  component: resolveReasonsComponent(score),
                }}
                onChange={setReasons}
              />
            )}

            {displayComment && (
              <Comment
                standAlone={false}
                onSubmit={({ comment }) => setComment(comment)}
                settings={{ label: renderCommentLabel(score) }}
              />
            )}
          </StyledFormOptionalFields>
        )}

        {displayFeedbackEmail && (
          <StyledFormOptionalFields>
            <InputLabel data-translation-key="feedback.settings.optionalEmail.label">
              {optionalEmailSettings?.label ||
                translate(
                  'feedback.settings.optionalEmail.label',
                  'Your email (optional, for follow-up)',
                )}
            </InputLabel>
            <EmailInput
              onChange={onEmailChange}
              placeholder={
                optionalEmailSettings?.placeholder ||
                translate('feedback.settings.optionalEmail.placeholder', 'yourname@example.com')
              }
              type="email"
              required={!!email}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  onSubmitMoodForm();
                }
              }}
            />
          </StyledFormOptionalFields>
        )}

        {displaySubmitBnt && (
          <ButtonsContainer>
            <Button onClick={onCancelMoodForm} variant="text" size="small">
              Cancel
            </Button>
            <Button type="submit" variant="secondary" size="small">
              Submit
            </Button>
          </ButtonsContainer>
        )}
      </StyledForm>
    </MoodWrapper>
  );
}

const remapScore = (score: string): number => {
  switch (score) {
    case MOOD_STATES.SATISFIED:
      return 1;
    case MOOD_STATES.NEUTRAL:
      return 0;
    case MOOD_STATES.DISSATISFIED:
      return -1;
    default:
      return 0;
  }
};

const MoodWrapper = styled.div`
  font-family: var(--feedback-font-family);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.h4<{ standAlone?: boolean }>`
  font-family: var(--feedback-font-family);
  font-weight: var(--font-weight-regular);
  font-size: var(--feedback-font-size);
  line-height: var(--feedback-line-height);
  color: var(--feedback-text-color);

  ${({ standAlone = false }) =>
    standAlone &&
    css`
      font-size: var(--feedback-header-font-size);
      line-height: var(--feedback-header-line-height);
      color: var(--feedback-header-text-color);
    `}

  margin: 0;
`;

const InputLabel = styled.h4`
  font-weight: var(--font-weight-regular);
  font-size: var(--feedback-font-size);
  line-height: var(--feedback-line-height);
  margin: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: var(--spacing-xxs);
`;

const StyledForm = styled.form`
  width: 100%;
  gap: var(--spacing-sm);
  display: flex;
  flex-direction: column;
`;

const StyledFormOptionalFields = styled.div`
  display: flex;
  flex-flow: column;
`;

const StyledFormMandatoryFields = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-xs);

  > svg {
    margin: var(--button-icon-padding) 0; /* prevent hight of the parent jumping */
  }
`;

const StyledMandatoryFieldContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xxs);
`;

const EmailInput = styled.input`
  background-color: var(--bg-color);
  border-radius: var(--border-radius-lg);
  border: var(--input-border);
  outline: none;
  color: var(--feedback-text-color);
  font-family: var(--feedback-font-family);
  padding: 10px;
`;
