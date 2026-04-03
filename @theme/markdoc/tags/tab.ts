import type { MarkdocSchemaWrapper } from '@redocly/theme/markdoc/tags/types';

export const tab: MarkdocSchemaWrapper = {
  schema: {
    attributes: {
      label: { type: String, required: true },
      disable: { type: Boolean, default: false },
      icon: { type: String, resolver: 'relativeOrCdnIcon' },
    },
    render: 'div',
  },
  tagName: 'tab',
};
