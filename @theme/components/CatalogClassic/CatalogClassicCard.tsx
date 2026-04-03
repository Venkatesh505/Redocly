import * as React from 'react';
import styled from 'styled-components';

import type { JSX } from 'react';
import type { CatalogItem } from '@redocly/theme/core/types';

import { slug, capitalize, getScorecardColorVariable } from '@redocly/theme/core/utils';
import { useThemeHooks } from '@redocly/theme/core/hooks';
import { ArrowRightIcon } from '@redocly/theme/icons/ArrowRightIcon/ArrowRightIcon';
import { Link } from '@redocly/theme/components/Link/Link';
import { Tag } from '@redocly/theme/components/Tag/Tag';
// import { CatalogClassicHighlight } from '@redocly/theme/components/CatalogClassic/CatalogClassicHighlight';
import { Button } from '@redocly/theme/components/Button/Button';

export type CatalogClassicCardProps = {
  item: CatalogItem;
};

// CatalogClassicHighlight
const CatalogClassicHighlight: React.FC<
  React.HTMLAttributes<HTMLSpanElement>
> = ({ className, children }) => (
  <span data-component-name="CatalogClassic/CatalogClassicHighlight" className={className}>
    {children}
  </span>
);



/**
 * Strips HTML tags from a plain string.
 */
function stripHtmlTags(text: string): string {
  if (!text) return '';

  // This regex matches:
  // - Opening tags: <tagname> or <tagname attributes>
  // - Closing tags: </tagname>
  // - Self-closing tags: <tagname/> or <tagname attributes/>
  const htmlTagRegex = /<\/?[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?\/?>|<[a-zA-Z][a-zA-Z0-9]*\/>/g;

  return text.replace(htmlTagRegex, '').trim();
}

export function CatalogClassicCard({ item }: CatalogClassicCardProps): JSX.Element {
  const { useTelemetry } = useThemeHooks();
  const telemetry = useTelemetry();
  return (
    <Link key={item.docsLink || item.link} to={item.docsLink || item.link}>
      <StyledCard
        data-component-name="CatalogClassic/CatalogClassicCard"
        onClick={() => telemetry.sendCatalogItemClickedMessage()}
      >
        <CardContent>
          <CardTitleWrapper>
            <CardTitle>
              <CatalogClassicHighlight>{item.title}</CatalogClassicHighlight>
            </CardTitle>
          </CardTitleWrapper>
          <CardDescription>
            <CatalogClassicHighlight>
              {stripHtmlTags(item.summary ?? item.description ?? '')}
            </CatalogClassicHighlight>
          </CardDescription>
        </CardContent>
        <CardFooter>
          <CardTags>
            {((item.tags as string[]) || []).map((tag, index) => (
              <CardTag key={tag + index} color={slug(tag)}>
                <CatalogClassicHighlight className={`CatalogClassicHighlight ${slug(tag)}`}>
                  {capitalize(tag)}
                </CatalogClassicHighlight>
              </CardTag>
            ))}
            {(item.scorecardLevel && (
              <Tag
                borderless
                withStatusDot
                statusDotColor={`var(${getScorecardColorVariable(
                  item.scorecardLevelIdx || 0,
                  Object.keys(item.scorecardLevels || {}).length,
                )})`}
              >
                <CatalogClassicHighlight className="CatalogClassicHighlight">
                  {item.scorecardLevel}
                </CatalogClassicHighlight>
              </Tag>
            )) ||
              null}
          </CardTags>

          <SelectButton size="medium" variant="secondary" icon={<ArrowRightIcon />} />
        </CardFooter>
      </StyledCard>
    </Link>
  );
}

const SelectButton = styled(Button)`
  border-radius: 100%;
  transition: all 0.2s ease-in-out;
`;

const StyledCard = styled.div`
  min-height: var(--catalog-classic-card-min-height);
  height: 100%;
  color: var(--catalog-classic-card-text-color);
  font-size: var(--catalog-classic-card-font-size);
  font-weight: var(--catalog-classic-card-font-weight);
  background-color: var(--catalog-classic-card-bg-color);
  border: var(--catalog-classic-card-border-width) var(--catalog-classic-card-border-style)
    var(--catalog-classic-card-border-color);
  transition: all 0.2s ease-in-out;
  border-radius: var(--catalog-classic-card-border-radius);
  cursor: pointer;
  display: flex;
  gap: var(--catalog-classic-card-gap);
  padding: var(--catalog-classic-card-padding-vertical)
    var(--catalog-classic-card-padding-horizontal);
  flex-direction: column;

  &:hover ${SelectButton} {
    transform: rotate(-45deg);
  }
`;

const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: var(--catalog-classic-card-title-min-height);
`;

const CardTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: var(--catalog-classic-card-title-line-clamp);
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  color: var(--catalog-classic-card-title-color);
  font-size: var(--catalog-classic-card-title-font-size);
  font-weight: var(--catalog-classic-card-title-font-weight);
  line-height: var(--catalog-classic-card-title-line-height);
  margin: 0;
`;

const CardDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: var(--catalog-classic-card-description-line-clamp);
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--catalog-classic-card-description-color);
  font-size: var(--catalog-classic-card-description-font-size);
  font-weight: var(--catalog-classic-card-description-font-weight);
  line-height: var(--catalog-classic-card-description-line-height);
  height: var(--catalog-classic-card-description-height);
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  gap: var(--catalog-classic-card-content-gap);
  flex-direction: column;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-xs);
  min-height: var(--spacing-xl);
`;

const CardTag = styled(Tag)`
  text-transform: inherit;
  padding:0px;
  margin: 0;
  background-color: var(--catalog-classic-card-tag-bg);

  .active {
    border-radius:4px;
    color: rgb(0, 102, 245);
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.15px;
    padding: 0px 10px;
    border: 1px solid rgb(0, 102, 245);
    background: transparent;
    transition: all 0.3s ease;   /* smooth transition */
    :hover {
      background: rgb(0, 102, 245);
      border: 1px solid rgb(0, 102, 245);
      color: #fff;
    }
  }

  .core {
    border-radius:4px;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.15px;
    padding: 0px 10px;
    color: rgb(23, 41, 79);
    border: 1px solid rgb(23, 41, 79);
    background: transparent;
    transition: all 0.3s ease;   /* smooth transition */
    :hover {
      background: rgb(23, 41, 79);
      border: 1px solid rgb(23, 41, 79);
      color: #fff;
    }
  }
  .experience {
    border-radius:4px;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.15px;
    padding: 0px 10px;
    color: rgb(23, 41, 79);
    border: 1px solid rgb(23, 41, 79);
    background: transparent;
    transition: all 0.3s ease;   /* smooth transition */
    :hover {
      background: rgb(23, 41, 79);
      border: 1px solid rgb(23, 41, 79);
      color: #fff;
    }
  }
`;

