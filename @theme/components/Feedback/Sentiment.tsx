import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';
import type { OptionalEmailSettings, ReasonsSettingsSchema } from '@redocly/config';
import type { ReasonsProps } from '@redocly/theme/components/Feedback/Reasons';

import { Reasons } from '@redocly/theme/components/Feedback/Reasons';
import { useThemeHooks } from '@redocly/theme/core/hooks';
import { RadioCheckButtonIcon } from '@redocly/theme/icons/RadioCheckButtonIcon/RadioCheckButtonIcon';
import { Comment } from '@redocly/theme/components/Feedback/Comment';
import { Button } from '@redocly/theme/components/Button/Button';
import { ThumbDownIcon } from '@redocly/theme/icons/ThumbDownIcon/ThumbDownIcon';
import { ThumbUpIcon } from '@redocly/theme/icons/ThumbUpIcon/ThumbUpIcon';

export type SentimentProps = {
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
      likeLabel?: string;
      dislikeLabel?: string;
    };
    reasons?: ReasonsSettingsSchema & {
      like?: ReasonsSettingsSchema;
      dislike?: ReasonsSettingsSchema;
    };
    optionalEmail?: OptionalEmailSettings;
  };
  className?: string;
};

export function Sentiment({ settings, onSubmit, className }: SentimentProps): JSX.Element {
  const {
    label,
    submitText,
    comment: commentSettings,
    reasons: reasonsSettings,
    optionalEmail: optionalEmailSettings,
  } = settings || {};
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [score, setScore] = React.useState(0);
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

  const getScoreSpecificReasonSettings = (score: number) => {
    switch (score) {
      case 1:
        return reasonsSettings?.like;
      case -1:
        return reasonsSettings?.dislike;
      default:
        return reasonsSettings;
    }
  };

  const checkIfShouldDisplayReasons = (score: number) => {
    if (!score || !reasonsSettings) {
      return false;
    }

    const scoreSpecificReasonsSettings = getScoreSpecificReasonSettings(score);

    if (typeof scoreSpecificReasonsSettings?.hide === 'undefined') {
      return !reasonsSettings.hide;
    }

    return !scoreSpecificReasonsSettings?.hide;
  };

  const displayReasons = checkIfShouldDisplayReasons(score);
  const displayComment = !!(score && !commentSettings?.hide);
  const displaySubmitBnt = !!(score && (displayReasons || displayComment));
  const displayFeedbackEmail = !!score && !optionalEmailSettings?.hide && !userData.isAuthenticated;

  const commentLabel =
    score === 1
      ? (commentSettings && commentSettings.likeLabel) ||
        translate('feedback.settings.comment.likeLabel', 'What was most helpful?')
      : (commentSettings && commentSettings.dislikeLabel) ||
        translate('feedback.settings.comment.dislikeLabel', 'What can we improve?');

  const renderReasonsLabel = (score: number) => {
    const scoreSpecificReasonSettings = getScoreSpecificReasonSettings(score);

    return scoreSpecificReasonSettings?.label;
  };

  const resolveReasonsItems = (score: number) => {
    const defaultReasonsItems = reasonsSettings?.items || [];
    const scoreSpecificReasonSettings = getScoreSpecificReasonSettings(score);

    return defaultReasonsItems.concat(scoreSpecificReasonSettings?.items ?? []);
  };

  const resolveReasonsComponent = (score: number) => {
    const scoreSpecificReasonSettings = getScoreSpecificReasonSettings(score);

    return scoreSpecificReasonSettings?.component;
  };

  const onSubmitSentimentForm = () => {
    onSubmit({
      score,
      comment,
      reasons,
      email,
    });
    setIsSubmitted(true);
  };

  const onCancelSentimentForm = () => {
    setScore(0);
    setComment('');
    setReasons([]);
    setEmail(undefined);
  };

  useEffect(() => {
    if (score && !displayComment && !displayReasons && !displayFeedbackEmail) {
      onSubmitSentimentForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score, displayComment, displayReasons, displayFeedbackEmail]);

  if (isSubmitted) {
    return (
      <SentimentWrapper data-component-name="Feedback/Sentiment">
        <StyledFormMandatoryFields>
          <Label data-translation-key="feedback.settings.submitText">
            {submitText ||
              translate(
                'feedback.settings.submitText',
                'Thank you for helping improve our documentation!',
              )}
          </Label>
          <RadioCheckButtonIcon />
        </StyledFormMandatoryFields>
      </SentimentWrapper>
    );
  }

  return (
    <SentimentWrapper data-component-name="Feedback/Sentiment" className={className}>
      <StyledForm>
        <StyledFormMandatoryFields>
          <Label data-translation-key="feedback.settings.label">
            {label || translate('feedback.settings.label', 'Was this helpful?')}
          </Label>

          <StyledMandatoryFieldContainer>
            <Button
              type="button"
              size="medium"
              variant={score === 1 ? 'primary' : 'secondary'}
              onClick={() => {
                setScore(1);
              }}
              aria-label={translate('feedback.sentiment.thumbUp', 'Like')}
              icon={<ThumbUpIcon />}
            />
            <Button
              size="medium"
              type="button"
              variant={score === -1 ? 'primary' : 'secondary'}
              tone={score === -1 ? 'danger' : 'default'}
              onClick={() => {
                setScore(-1);
              }}
              aria-label={translate('feedback.sentiment.thumbDown', 'Dislike')}
              icon={<ThumbDownIcon />}
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
                settings={{ label: commentLabel }}
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
                  onSubmitSentimentForm();
                }
              }}
            />
          </StyledFormOptionalFields>
        )}
        {displaySubmitBnt && (
          <ButtonsContainer>
            <Button onClick={onCancelSentimentForm} variant="text" size="small">
              {translate('feedback.cancel', 'Cancel')}
            </Button>
            <Button onClick={onSubmitSentimentForm} variant="secondary" size="small">
              {translate('feedback.submit', 'Submit')}
            </Button>
          </ButtonsContainer>
        )}
      </StyledForm>
    </SentimentWrapper>
  );
}

const SentimentWrapper = styled.div`
  font-family: var(--font-family-base);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.h4`
  font-family: var(--feedback-font-family);
  font-weight: var(--font-weight-regular);
  font-size: var(--feedback-header-font-size);
  line-height: var(--feedback-header-line-height);
  color: var(--feedback-header-text-color);
  margin: 0;
`;

const InputLabel = styled.h4`
  font-weight: var(--font-weight-regular);
  font-size: var(--feedback-font-size);
  line-height: var(--feedback-line-height);
  margin: 0;
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

  ${Button} {
    margin: 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: var(--spacing-xxs);
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
