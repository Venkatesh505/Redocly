import * as React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import type { FeedbackProps } from '@redocly/theme/core/types';

import { useThemeHooks, useThemeConfig } from '@redocly/theme/core/hooks';
import { Rating } from '@redocly/theme/components/Feedback/Rating';
import { Sentiment } from '@redocly/theme/components/Feedback/Sentiment';
import { Comment } from '@redocly/theme/components/Feedback/Comment';
import { Mood } from '@redocly/theme/components/Feedback/Mood';
import { Scale } from '@redocly/theme/components/Feedback/Scale';
import { DEFAULT_FEEDBACK_TYPE } from '@redocly/theme/core/constants';

const feedbackComponents = {
  rating: Rating,
  sentiment: Sentiment,
  mood: Mood,
  scale: Scale,
  comment: Comment,
};

type FeedbackComponents = typeof feedbackComponents;
type FeedbackComponentsKeys = keyof FeedbackComponents;

export function Feedback(props: FeedbackProps & { path?: string }) {
  const { useSubmitFeedback, useTelemetry } = useThemeHooks();
  const { submitFeedback } = useSubmitFeedback();
  const telemetry = useTelemetry();
  const { pathname } = useLocation();
  const { feedback: themeFeedbackConf } = useThemeConfig();
  const feedbackConf = {
    ...themeFeedbackConf,
    path: props?.path,
    type: props?.type || themeFeedbackConf?.type || DEFAULT_FEEDBACK_TYPE,
    settings: props?.settings || themeFeedbackConf?.settings || {},
    hide: props.hide ?? themeFeedbackConf?.hide,
  };

  if (feedbackConf.hide) {
    return null;
  }

  const renderFeedbackComponent = () => {
    const { type, settings, path } = feedbackConf;

    const FeedbackComponent = feedbackComponents[
      type as FeedbackComponentsKeys
    ] as FeedbackComponents[FeedbackComponentsKeys];

    if (!FeedbackComponent) {
      return null;
    }

    return (
      <FeedbackWrapper data-component-name="Feedback/Feedback">
        <FeedbackComponent
          settings={settings}
          onSubmit={(values) => {
            submitFeedback({ type, values, path });
            telemetry.sendFeedbackMessage({ feedbackType: type });
          }}
        />
      </FeedbackWrapper>
    );
  };

  return <React.Fragment key={pathname}>{renderFeedbackComponent()}</React.Fragment>;
}

const FeedbackWrapper = styled.div`
  padding: var(--feedback-padding);
  background-color: var(--feedback-bg-color);
  color: var(--feedback-font-color);
  font-size: var(--feedback-font-size);
  width: var(--feedback-width);
  max-width: 100%;
  border-radius: var(--feedback-border-radius);

  @media print {
    display: none;
  }
`;
