import React, { useState } from 'react';
import { domains } from './domains';
import {
  Wrapper, Header, DomainList, DomainBlock, DomainHeader, DomainTitle, IconWrapperLarge, TitleWithIcon, 
  TermCount, DomainDesc, TabRow, Tab, SectionHeader, CategoryCard, CategoryTitle, CategoryDesc,
  ButtonRow, ButtonIcon, DownloadButton, CopyButton,  IconWrapper, IconWrapperSmall, SchemaBlock, SchemaLabel,
   SchemaHeader, CodeWrapper

} from './DomainModelPage.styles';

export default function DomainModelPage() {
  const [expandedDomain, setExpandedDomain] = useState<string | null>('customer');
  const [selectedTab, setSelectedTab] = useState<string>(
    domains.find(d => d.id === 'customer')?.categories[0]?.id || ''
  );

  const ArrowDown = (
    <svg width="16" height="16" fill="none">
      <path d="M4 6l4 4 4-4" stroke="#B3D1FC" strokeWidth="2" />
    </svg>
  );

  const ArrowUp = (
    <svg width="16" height="16" fill="none">
      <path d="M4 10l4-4 4 4" stroke="#B3D1FC" strokeWidth="2" />
    </svg>
  );


  const QueryIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_674_1154)">
          <path d="M13.333 5.33301H6.66634C5.92996 5.33301 5.33301 5.92996 5.33301 6.66634V13.333C5.33301 14.0694 5.92996 14.6663 6.66634 14.6663H13.333C14.0694 14.6663 14.6663 14.0694 14.6663 13.333V6.66634C14.6663 5.92996 14.0694 5.33301 13.333 5.33301Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.66634 10.6663C1.93301 10.6663 1.33301 10.0663 1.33301 9.33301V2.66634C1.33301 1.93301 1.93301 1.33301 2.66634 1.33301H9.33301C10.0663 1.33301 10.6663 1.93301 10.6663 2.66634" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_674_1154">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    );

    const DownloadIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.66699 6.66699L8.00033 10.0003L11.3337 6.66699" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 10V2" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );


  const toggleDomain = (id: string) => {
    setExpandedDomain(prev => (prev === id ? null : id));
    setSelectedTab(domains.find(d => d.id === id)?.categories[0]?.id || '');
  };

  const activeDomain = domains.find((d) => d.id === expandedDomain);
  const activeCategory = activeDomain?.categories.find((c) => c.id === selectedTab);

  const handleCopy = () => {
    if (activeCategory?.schema) {
      navigator.clipboard.writeText(activeCategory.schema);
      alert('Schema copied to clipboard!');
    }
  };

  const handleDownload = () => {
    if (activeCategory?.schema) {
      const blob = new Blob([activeCategory.schema], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedTab}_schema.json`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <Wrapper>
      <Header>
        <h1>Domain Models</h1>
        <p>
          Explore our federated domain-driven data models
        </p>
      </Header>

      <DomainList>
        {domains.map((domain) => (
          <DomainBlock key={domain.id}>
            <DomainHeader onClick={() => toggleDomain(domain.id)}>
              <DomainTitle>
                {domain.icon && <IconWrapper>{domain.icon}</IconWrapper>}
                <div>
                  {domain.label}
                  <DomainDesc>{domain.description}</DomainDesc>
                </div>
              </DomainTitle>
              <TermCount>
                <div className='domainTypes'>                  
                  <span>{domain.terms}</span> Types  
                </div> 
                <span style={{ marginLeft: 8 }}>
                {expandedDomain === domain.id ? ArrowUp : ArrowDown}
                </span>             
              </TermCount>              
            </DomainHeader>



            {expandedDomain === domain.id && domain.categories.length > 0 && (
              <div className='DomainContentCard'>
                <div className="DomainContentCardTabRow">
                  <TabRow>
                    {domain.categories.map((cat) => (
                      <Tab
                        key={cat.id}
                        active={selectedTab === cat.id}
                        onClick={() => setSelectedTab(cat.id)}
                      >
                        {cat.icon && <IconWrapperSmall>{cat.icon}</IconWrapperSmall>}
                        
                          <p>{cat.label}
                          <span>{cat.shortDec}</span></p>                   
                      </Tab>
                    ))}
                  </TabRow>
                </div>
                <div className="CategoryCardContent">
                  <CategoryCard>
                    <SectionHeader>
                      <TitleWithIcon>
                        {activeCategory?.icon && <IconWrapperLarge>{activeCategory.icon}</IconWrapperLarge>}
                        <div>
                          <CategoryTitle>{activeCategory?.label} Data Model</CategoryTitle>
                          <CategoryDesc>
                            {activeCategory?.description}
                          </CategoryDesc>
                        </div>
                      </TitleWithIcon>

                      <ButtonRow>
                        <CopyButton onClick={handleCopy}>
                          <ButtonIcon>{QueryIcon}</ButtonIcon>
                          Copy
                        </CopyButton>
                        <DownloadButton onClick={handleDownload}>
                          <ButtonIcon>{DownloadIcon}</ButtonIcon>
                          Download
                        </DownloadButton>
                      </ButtonRow>
                    </SectionHeader>
                    <SchemaBlock>
                      <SchemaHeader>
                        <SchemaLabel>JSON</SchemaLabel>
                      </SchemaHeader>
                      <CodeWrapper>
                        <pre>{activeCategory?.schema}</pre>
                      </CodeWrapper>
                    </SchemaBlock>
                  </CategoryCard>
                </div>

              </div>
            )}
          </DomainBlock>
        ))}
      </DomainList>
    </Wrapper>
  );
}
