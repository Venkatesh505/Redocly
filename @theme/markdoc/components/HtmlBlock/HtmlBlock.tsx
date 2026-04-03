import * as React from 'react';

export function HtmlBlock({ rawHtml }: { rawHtml: string }) {
  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
