import type { MarkdocSchemaWrapper } from '@redocly/theme/markdoc/tags/types';

// import { SvgContent } from '@redocly/theme/markdoc/attributes/svg-content';

export const card: MarkdocSchemaWrapper = {
  schema: {
    render: 'Card',
    attributes: {
      title: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        resolver: 'link',
      },
      icon: { type: String, resolver: 'relativeOrCdnIcon' },
      lineClamp: {
        type: Number,
      },
      iconRawContent: {
        // internal use only
        type: String,
        render: true,
      },
      imagePosition: {
        type: String,
        matches: ['start', 'end'],
        default: 'start',
      },
      iconPosition: {
        type: String,
        matches: ['auto', 'start', 'center', 'end'],
        default: 'auto',
      },
      layout: {
        type: String,
        matches: ['horizontal', 'combined', 'vertical'],
        default: 'vertical',
      },
      align: {
        type: String,
        matches: ['start', 'center', 'end'],
        default: 'start',
      },
      variant: {
        type: String,
        matches: ['filled', 'outlined', 'elevated', 'ghost'],
        default: 'filled',
      },
      iconVariant: {
        type: String,
        matches: ['filled', 'ghost'],
      },
      to: { type: String, resolver: 'link' },
    },
  },
  tagName: 'card',
};
