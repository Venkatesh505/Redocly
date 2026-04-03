import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '@redocly/theme/core/utils';
import { JSX } from 'react/jsx-runtime';

export const frontmatter = {
  title: 'Tools & technologies',
  description: 'System architecture overview',
};

type CategoryKey = 'hosting' | 'devops' | 'streaming' | 'observability' | 'security' | 'api';

interface CategoryItem {
  name: string;
  type: string;
  description: string;
}

interface CategoryContent {
  title: string;
  description: string;
  items: CategoryItem[];
}

const categories: { id: CategoryKey; label: string; icon: JSX.Element }[] = [
  {
    id: 'hosting',
    label: 'Hosting Platform',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32" fill="none">
        <path d="M24.4997 25.3337H12.5997C10.7823 25.3332 9.00088 24.8515 7.45442 23.9423C5.90796 23.0331 4.65742 21.7323 3.84256 20.1851C3.02769 18.638 2.68059 16.9056 2.84005 15.1814C2.9995 13.4573 3.65924 11.8093 4.74552 10.4216C5.83181 9.034 7.30185 7.96138 8.99138 7.32364C10.6809 6.6859 12.5234 6.50816 14.3128 6.81028C16.1023 7.1124 17.7684 7.88248 19.1248 9.03447C20.4812 10.1865 21.4745 11.675 21.9937 13.3337H24.4997C26.1706 13.3337 27.773 13.9658 28.9545 15.091C30.136 16.2162 30.7997 17.7424 30.7997 19.3337C30.7997 20.925 30.136 22.4511 28.9545 23.5763C27.773 24.7015 26.1706 25.3337 24.4997 25.3337Z" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'devops',
    label: 'DevOps & CI/CD',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 4V20" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 28C10.2091 28 12 26.2091 12 24C12 21.7909 10.2091 20 8 20C5.79086 20 4 21.7909 4 24C4 26.2091 5.79086 28 8 28Z" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'streaming',
    label: 'Event Streaming',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6.5333 25.4665C1.3333 20.2665 1.3333 11.7332 6.5333 6.5332" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.4001 21.5999C7.33343 18.5333 7.33343 13.4666 10.4001 10.2666" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.0002 18.6663C17.4729 18.6663 18.6668 17.4724 18.6668 15.9997C18.6668 14.5269 17.4729 13.333 16.0002 13.333C14.5274 13.333 13.3335 14.5269 13.3335 15.9997C13.3335 17.4724 14.5274 18.6663 16.0002 18.6663Z" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.6001 10.4004C24.6668 13.4671 24.6668 18.5337 21.6001 21.7337" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25.4668 6.5332C30.6668 11.7332 30.6668 20.1332 25.4668 25.3332" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'observability',
    label: 'Observability',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M29.3332 16.0003H26.0265C25.4438 15.9991 24.8767 16.1887 24.412 16.5403C23.9473 16.8918 23.6105 17.3859 23.4532 17.947L20.3198 29.0937C20.2996 29.1629 20.2575 29.2237 20.1998 29.267C20.1421 29.3103 20.072 29.3337 19.9998 29.3337C19.9277 29.3337 19.8575 29.3103 19.7998 29.267C19.7421 29.2237 19.7 29.1629 19.6798 29.0937L12.3198 2.90699C12.2996 2.83775 12.2575 2.77693 12.1998 2.73366C12.1421 2.69038 12.072 2.66699 11.9998 2.66699C11.9277 2.66699 11.8575 2.69038 11.7998 2.73366C11.7421 2.77693 11.7 2.83775 11.6798 2.90699L8.5465 14.0537C8.38979 14.6125 8.05501 15.105 7.59299 15.4563C7.13097 15.8077 6.56693 15.9987 5.9865 16.0003H2.6665" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'security',
    label: 'Security & Auth',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M26.6668 17.3333C26.6668 23.9999 22.0002 27.3333 16.4535 29.2666C16.163 29.365 15.8475 29.3603 15.5602 29.2533C10.0002 27.3333 5.3335 23.9999 5.3335 17.3333V7.99995C5.3335 7.64633 5.47397 7.30719 5.72402 7.05714C5.97407 6.80709 6.31321 6.66662 6.66683 6.66662C9.3335 6.66662 12.6668 5.06662 14.9868 3.03995C15.2693 2.79861 15.6286 2.66602 16.0002 2.66602C16.3717 2.66602 16.731 2.79861 17.0135 3.03995C19.3468 5.07995 22.6668 6.66662 25.3335 6.66662C25.6871 6.66662 26.0263 6.80709 26.2763 7.05714C26.5264 7.30719 26.6668 7.64633 26.6668 7.99995V17.3333Z" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'api',
    label: 'API Management',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10.6668 29.3337C11.4032 29.3337 12.0002 28.7367 12.0002 28.0003C12.0002 27.2639 11.4032 26.667 10.6668 26.667C9.93045 26.667 9.3335 27.2639 9.3335 28.0003C9.3335 28.7367 9.93045 29.3337 10.6668 29.3337Z" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25.3333 29.3337C26.0697 29.3337 26.6667 28.7367 26.6667 28.0003C26.6667 27.2639 26.0697 26.667 25.3333 26.667C24.597 26.667 24 27.2639 24 28.0003C24 28.7367 24.597 29.3337 25.3333 29.3337Z" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.7334 2.7334H5.40007L8.94673 19.2934C9.07684 19.8999 9.41429 20.442 9.90101 20.8265C10.3877 21.2111 10.9933 21.4139 11.6134 21.4001H24.6534C25.2603 21.3991 25.8487 21.1911 26.3214 20.8105C26.7942 20.4299 27.1229 19.8994 27.2534 19.3067L29.4534 9.40006H6.82673" stroke="#479FF8" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
  },
];

const contentMap: Record<CategoryKey, CategoryContent> = {
  hosting: {
    title: 'Hosting Platform',
    description: 'Enterprise-grade cloud infrastructure providing scalability, reliability, and global reach.',
    items: [
      {
        name: 'AWS',
        type: 'Cloud Infrastructure',
        description: 'Comprehensive cloud computing platform with EC2, S3, Lambda, and more for hosting and scaling.',
      },
    ],
  },
  devops: {
    title: 'DevOps & CI/CD',
    description: 'Complete pipeline ensuring code quality, security, and automated deployments.',
    items: [
      {
        name: 'Azure DevOps',
        type: 'CICD Platform',
        description: 'End-to-end toolchain for planning, developing, and delivering software.',
      },
      {
        name: 'Snyk',
        type: 'Security Scanning',
        description: 'Automated vulnerability detection in code and dependencies.',
      },
      {
        name: 'SonarQube',
        type: 'Code Quality',
        description: 'Continuous inspection for bugs, vulnerabilities, and code smells.',
      },
    ],
  },

  streaming: { 
    title: 'Event Streaming', 
    description: 'Real-time data pipelines and streaming platforms.', 
    "items": [ 
      { 
        "name": "Cloudera Kafka", "type": "Message Broker", 
        "description": "Distributed streaming platform handling trillions of events daily." 
      }
    ]  
  },
  observability: {
    title: "Observability",
    description: "Real-time monitoring and insights into system performance and health.",
    "items": [
      {
        "name": "Dynatrace",
        "type": "APM Platform",
        "description": "AI-powered full-stack monitoring with automatic discovery."
      },
      {
        "name": "Grafana",
        "type": "Visualization",
        "description": "Analytics platform for monitoring time-series data."
      },
      {
        "name": "Prometheus",
        "type": "Metrics & Alerting",
        "description": "Systems monitoring toolkit with flexible query language."
      }
    ]
  },
  security: {
    title: "Security & Auth",
    description: "Enterprise-grade security tools for protecting applications and enabling secure authentication.",
    "items": [
      {
        "name": "Cloudflare",
        "type": "DDoS Protection",
        "description": "Global network providing security and CDN services."
      },
      {
        "name": "PingFederate",
        "type": "SSO & Identity",
        "description": "Enterprise federation server for single sign-on."
      }
    ]
  },
  api: {
    title: "API Management",
    description: "Developer portal solutions for creating beautiful API documentation.",
    "items": [
      {
        "name": "Redocly",
        "type": "API Docs",
        "description": "Customizable developer portals from OpenAPI specifications."
      }
    ]
  },
};

export default function ToolsTechnologiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('hosting');
  const selectedContent = contentMap[selectedCategory];

  return (
    <PageWrapper>
      <Section>
        <Container>
          <TitileContent>
            <h1>Tools & Technologies</h1>
            <p>
              Built on industry-leading technologies to deliver unmatched performance, security,
              <br />
              and scalability.
            </p>
          </TitileContent>
        </Container>
      </Section>

      <Section>
        <Container>
          <Layout>
            <Sidebar>
              {categories.map((cat) => (
                <MenuItem
                  key={cat.id}
                  active={selectedCategory === cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <IconWrapper active={selectedCategory === cat.id}>{cat.icon}</IconWrapper>
                  <Label>{cat.label}</Label>
                  <ArrowWrapper>
                    {selectedCategory === cat.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M7.5 15L12.5 10L7.5 5"
                          stroke="#fff"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M7.5 15L12.5 10L7.5 5"
                          stroke="#479FF8"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </ArrowWrapper>

                </MenuItem>
              ))}
            </Sidebar>

            <ContentArea>
              <Card>
                <CardTitleWrapperActive>
                  <CardContentActive>
                    <CardIconWrapper>
                      {
                        categories.find(cat => cat.id === selectedCategory)?.icon
                      }
                    </CardIconWrapper>
                    <CardTitleTextActive>{selectedContent.title}</CardTitleTextActive>
                  </CardContentActive> 
                  <CardDescActive>{selectedContent.description}</CardDescActive>
                </CardTitleWrapperActive>

                {/* Items Section */}
                {selectedContent.items.map((item, index) => (
                <ItemBlock key={index}>  
                      <CardTitleWrapper>
                        <CardItemId>
                          <span>{String(index + 1).padStart(2, '0')}</span>
                        </CardItemId>
                        <CardContent>
                          <CardTitleText>
                           {item.name} <span>({item.type})</span>
                          </CardTitleText>
                          <CardDesc>{item.description}</CardDesc>
                        </CardContent>                        
                      </CardTitleWrapper>
                </ItemBlock>
                
                  ))}
              </Card>
            </ContentArea>

          </Layout>
        </Container>
      </Section>
    </PageWrapper>
  );
}

// Styled Components

const PageWrapper = styled.div`
  padding: 50px 40px;
  max-width: 100%;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const Container = styled.div`
  padding: 0px 80px;
  max-width: 1170px;
  margin: 0 auto;
  @media screen and (max-width: ${breakpoints.small}) {
    padding: 0px 10px;
    width: 100%;
  }
`;

const TitileContent = styled.div`
  margin: 0 auto;
  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    margin: 0px;
    @media screen and (max-width: ${breakpoints.small}) {
      font-size: 36px;
      line-height: 40px;
    }
  }
  p {
    padding: 20px 0px;
    margin: 0px;
    color: rgb(179, 209, 252);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.449px;
  }
`;

const Layout = styled.div`
  display: flex;
  gap: 40px;
  @media screen and (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (max-width: ${breakpoints.small}) {
    width: 100%;
    min-width: 100%;
  }      
`;

const MenuItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ active }) => (active ? '#479FF8' : 'rgba(57, 153, 255, 0.30)')};
  background: ${({ active }) => (active ? 'linear-gradient(180deg, #479FF8 0%, #357ABD 100%)' : '#0D2137')};
  color: ${({ active }) => (active ? '#fff' : '#B3D1FC')};
  box-shadow: ${({ active }) => (active ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none')};
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.439px;
  cursor: pointer;
  &:hover {
    background: #357abd;
    color: #fff;
  }
`;

const IconWrapper = styled.span<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: 12px;
  background: ${({ active }) => (active ? '#fff' : '#004770')};
`;

const Label = styled.span`
  flex: 1;
  padding-left: 4px;
`;

const ArrowWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentArea = styled.div`
  flex: 1;
`;

const Card = styled.div`
  border-radius: 16px;
  padding: 30px;
  border: 2px solid rgba(57, 153, 255, 0.40);
  background: linear-gradient(180deg, #0D2137 0%, #071E4C 100%);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const CardTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 0px;
`;

const CardTitleWrapperActive = styled.div`
  border-bottom: 1px solid rgba(57, 153, 255, 0.30);
  display: block;
  padding-bottom: 24px;
  margin-bottom: 24px;
`;

const CardIconWrapper = styled.span`
  display: flex;
  width: 60px;
  height: 60px;
  padding:10px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(71, 159, 248, 0.13);
`;

const CardContent = styled.div`
  margin-bottom: 0px;
`;

const CardContentActive = styled.div`
  display: flex;
  gap: 15px;
  align-content: center;
  align-items: center;
`;


const CardDescActive = styled.p`
  color: #b3d1fc;
  font-size: 18px;
  line-height: 28px;
  margin:0px;
  padding-left:75px;
  letter-spacing: -0.439px;

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 16px;
    line-height: 24px;
    padding-left: 70px;
  }    
`;

const CardItemId = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  color: #479FF8;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.07px;
`;

const CardTitleTextActive = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 44px;
`;

const CardTitleText = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 32px;
  display:flex;
  align-items: flex-end;

  @media screen and (max-width: ${breakpoints.small}) {
    display: block;
  } 

  span {
    margin-left: 10px;
    color: rgb(71, 159, 248);
    display: flex;
    font-size: 12px;
    line-height: 14px;
    height: 24px;
    padding: 4px 12px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    background: rgba(71, 159, 248, 0.13);
  }
`;

const CardDesc = styled.p`
  color: #b3d1fc;
  font-size: 16px;
  line-height: 26px;
  margin:0px;

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 14px;
    line-height: 20px;
  }       
`;

const ItemBlock = styled.div`
  margin-top: 16px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  border-radius: 12px;
  border: 1px solid rgba(57, 153, 255, 0.30);
  background: linear-gradient(180deg, #1A356B 0%, #0D2137 100%);
`;


