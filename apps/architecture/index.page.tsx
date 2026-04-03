import React, { useState } from 'react';
import styled from 'styled-components';

import { Image } from '@redocly/theme/markdoc/components/Image/Image';
import { breakpoints } from '@redocly/theme/core/utils';

export const frontmatter = {
  title: 'Architecture',
  description: 'System architecture overview',
};

const PageWrapper = styled.div`
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 70px 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TitileContent = styled.div`
  max-width: 728px;
  margin: 0 auto;

  text-align:center;

  h1{
  font-weight:700;
  font-size: 48px;
  line-height: 60px;
  margin:0px;
  
  @media screen and (max-width: ${breakpoints.small}) {
    font-size:36px;
    line-height:40px;
    }
  }

  p{
  color: #A1A1AA;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-bottom:15px;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size:16px;
    line-height:22px;
    }
  }
  }

`;

const Card = styled.div`
  display: flex;
  gap: 24px;
  border-radius: 16px;
  border: 1px solid rgba(0, 161, 255, 0.2);
  background: rgba(0, 161, 255, 0.05);
  padding: 30px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageCard = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  
  .img-responsive{
  width:100%;
  }
`;

const TwoColumnRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardContent = styled.div`
  width: 100%;
`;

const CardTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 20px;
  font-weight:600;
  display: flex;
  gap: 15px;
  align-items: center;

  span{
  display: flex;
  width: 44px;
  height: 44px;
  padding: 10px;
  // flex-direction: column;
  // align-items: flex-start;
  border-radius: 12px;
  background: #004770;
  }
`;

const BulletList = styled.ul`
  padding-left: 20px;
  margin: 0;

  li {
    font-size:14px;
    color:#D1D3D7;
    margin-bottom: 10px;
    line-height: 1.5;
  }
  li::marker {
  color: #00A1FF;
}
`;

const ColumnRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SubCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SubCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 16px;
`;

const SubCardTitle = styled.h5`
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 500;
  color: #A1A1AA;
  line-height: 18px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;

const SubCardValue = styled.span`
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
`;

export default function ArchitecturePage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <PageWrapper>
      <Section>

        <TitileContent>
            <h1> Architecture Overview</h1>
            <p>A comprehensive view of our data pipeline architecture, showing how data flows from<br /> producers through processing to consumers. </p>
        </TitileContent>
        <ImageCard>
          <Image srcSet={`${require('../images/final-architecture.png')}`}  alt="Architecture Overview" className='img-responsive' />
        </ImageCard>
      </Section>

      {/* New Business Benefits Section */}
      <BusinessBenefitsSection>
        <SectionTitle>Key Benefits</SectionTitle>
        <SectionSubtitle>Measurable impact on your business operations</SectionSubtitle>
        <BenefitsGrid>
          <ExpandableBenefit
            id="integration"
            activeId={activeId}
            setActiveId={setActiveId}
            title="Seamless Real-Time Integration"
            description="Effortlessly connect external systems and share data reliably with Square’s secure data architecture."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3.99999 14.0007C3.81076 14.0013 3.62522 13.9482 3.46495 13.8476C3.30467 13.747 3.17623 13.603 3.09454 13.4323C3.01286 13.2616 2.98129 13.0712 3.00349 12.8833C3.0257 12.6954 3.10077 12.5176 3.21999 12.3707L13.12 2.17065C13.1943 2.08493 13.2955 2.02701 13.407 2.00638C13.5185 1.98576 13.6337 2.00366 13.7337 2.05716C13.8337 2.11065 13.9126 2.19655 13.9573 2.30076C14.0021 2.40497 14.0101 2.5213 13.98 2.63065L12.06 8.65065C12.0034 8.80217 11.9844 8.96517 12.0046 9.12566C12.0248 9.28614 12.0837 9.43933 12.1761 9.57208C12.2685 9.70482 12.3918 9.81317 12.5353 9.88781C12.6788 9.96246 12.8382 10.0012 13 10.0007H20C20.1892 10 20.3748 10.0531 20.535 10.1537C20.6953 10.2543 20.8238 10.3983 20.9054 10.569C20.9871 10.7397 21.0187 10.9301 20.9965 11.118C20.9743 11.3059 20.8992 11.4837 20.78 11.6307L10.88 21.8307C10.8057 21.9164 10.7045 21.9743 10.593 21.9949C10.4815 22.0155 10.3663 21.9976 10.2663 21.9441C10.1663 21.8907 10.0874 21.8048 10.0427 21.7005C9.99791 21.5963 9.98991 21.48 10.02 21.3707L11.94 15.3507C11.9966 15.1991 12.0156 15.0361 11.9954 14.8756C11.9752 14.7152 11.9163 14.562 11.8239 14.4292C11.7315 14.2965 11.6082 14.1881 11.4647 14.1135C11.3212 14.0388 11.1617 14.0001 11 14.0007H3.99999Z" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            }
          />
          <ExpandableBenefit
            id="Security"
            activeId={activeId}
            setActiveId={setActiveId}
            title="Security by Design: DevSecOps Framework"
            description="Ensure robust security and compliance throughout your integration workflows by embedding DevSecOps principles from the start."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
        <path d="M23.3334 13.0004C23.3334 18.0004 19.2501 20.5005 14.3967 21.9505C14.1426 22.0243 13.8665 22.0207 13.6151 21.9405C8.75008 20.5005 4.66675 18.0004 4.66675 13.0004V6.00045C4.66675 5.73523 4.78966 5.48088 5.00846 5.29334C5.22725 5.10581 5.524 5.00045 5.83341 5.00045C8.16675 5.00045 11.0834 3.80045 13.1134 2.28045C13.3606 2.09945 13.675 2 14.0001 2C14.3252 2 14.6396 2.09945 14.8867 2.28045C16.9284 3.81045 19.8334 5.00045 22.1667 5.00045C22.4762 5.00045 22.7729 5.10581 22.9917 5.29334C23.2105 5.48088 23.3334 5.73523 23.3334 6.00045V13.0004Z" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
            }
          />
          <ExpandableBenefit
            id="apiled"
            activeId={activeId}
            setActiveId={setActiveId}
            title="API-Led Event-Driven Architecture"
            description="Take advantage of modern integration patterns to streamline, automate, and scale connections between services."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                <path d="M24.5001 16H19.8334C19.1891 16 18.6667 16.4477 18.6667 17V21C18.6667 21.5523 19.1891 22 19.8334 22H24.5001C25.1444 22 25.6667 21.5523 25.6667 21V17C25.6667 16.4477 25.1444 16 24.5001 16Z" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.16658 16H3.49992C2.85559 16 2.33325 16.4477 2.33325 17V21C2.33325 21.5523 2.85559 22 3.49992 22H8.16658C8.81092 22 9.33325 21.5523 9.33325 21V17C9.33325 16.4477 8.81092 16 8.16658 16Z" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.3333 2H11.6667C11.0223 2 10.5 2.44772 10.5 3V7C10.5 7.55228 11.0223 8 11.6667 8H16.3333C16.9777 8 17.5 7.55228 17.5 7V3C17.5 2.44772 16.9777 2 16.3333 2Z" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.83325 16V13C5.83325 12.7348 5.95617 12.4804 6.17496 12.2929C6.39375 12.1054 6.6905 12 6.99992 12H20.9999C21.3093 12 21.6061 12.1054 21.8249 12.2929C22.0437 12.4804 22.1666 12.7348 22.1666 13V16" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 12V8" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            }
          />
          <ExpandableBenefit
            id="Observability"
            activeId={activeId}
            setActiveId={setActiveId}
            title="Advanced Observability & Deep Insights"
            description="Gain actionable insights through comprehensive monitoring and analytics across all integrated systems."
            icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
        <path d="M2.40569 12.3474C2.30846 12.1229 2.30846 11.8759 2.40569 11.6514C3.35267 9.68324 4.96012 8.00042 7.02425 6.81628C9.08838 5.63214 11.5162 5 14 5C16.4838 5 18.9117 5.63214 20.9758 6.81628C23.0399 8.00042 24.6474 9.68324 25.5944 11.6514C25.6916 11.8759 25.6916 12.1229 25.5944 12.3474C24.6474 14.3155 23.0399 15.9983 20.9758 17.1825C18.9117 18.3666 16.4838 18.9988 14 18.9988C11.5162 18.9988 9.08838 18.3666 7.02425 17.1825C4.96012 15.9983 3.35267 14.3155 2.40569 12.3474Z" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 15C15.933 15 17.5 13.6569 17.5 12C17.5 10.3431 15.933 9 14 9C12.067 9 10.5 10.3431 10.5 12C10.5 13.6569 12.067 15 14 15Z" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
            }
          />
          <ExpandableBenefit
            id="accelerate"
            activeId={activeId}
            setActiveId={setActiveId}
            title="Accelerate Collaboration & Decision-Making"
            description="Empower teams to collaborate and make informed decisions faster with immediate access to real-time data."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
        <path d="M25.6666 7L15.7499 15.5L9.91659 10.5L2.33325 17" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6667 7H25.6667V13" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
            }
          />
          
          <ExpandableBenefit
            id="Empowering"
            activeId={activeId}
            setActiveId={setActiveId}
            title="Empowering Business & Technical Teams"
            description="Enable both business and technical stakeholders to leverage reliable data, collaborate effectively, and drive innovation."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
        <path d="M14 14L18.6667 10" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.89659 19.0004C2.87251 17.4803 2.33333 15.7558 2.33325 14.0004C2.33317 12.245 2.8722 10.5205 3.89614 9.00022C4.92008 7.47997 6.39287 6.21753 8.16646 5.33981C9.94005 4.46209 11.9519 4 13.9999 4C16.0479 4 18.0598 4.46209 19.8334 5.33981C21.607 6.21753 23.0798 7.47997 24.1037 9.00022C25.1276 10.5205 25.6667 12.245 25.6666 14.0004C25.6665 15.7558 25.1273 17.4803 24.1033 19.0004" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
            }
          />
          <ExpandableBenefit
            id="automation"
            activeId={activeId}
            setActiveId={setActiveId}
            title="Reduce Operational Costs with Automation"
            description="Automate repetitive processes to minimize manual effort and lower overall operational expenses."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
              <path d="M14 2V22" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.8333 5H11.0833C10.0004 5 8.96175 5.36875 8.19598 6.02513C7.43021 6.6815 7 7.57174 7 8.5C7 9.42826 7.43021 10.3185 8.19598 10.9749C8.96175 11.6313 10.0004 12 11.0833 12H16.9167C17.9996 12 19.0382 12.3687 19.804 13.0251C20.5698 13.6815 21 14.5717 21 15.5C21 16.4283 20.5698 17.3185 19.804 17.9749C19.0382 18.6313 17.9996 19 16.9167 19H7" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            }
          />    
          
          <ExpandableBenefit
            id="Optimize"
            activeId={activeId}
            setActiveId={setActiveId}
            title="Optimize Performance & Drive Innovation"
            description="Continuously improve processes and discover new opportunities with deep observability and efficient integrations."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
        <path d="M3.5 3V19C3.5 19.5304 3.74583 20.0391 4.18342 20.4142C4.621 20.7893 5.21449 21 5.83333 21H24.5" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 17V9" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.1667 17V5" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.33325 17V14" stroke="#479FF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
            }
          />
          
        </BenefitsGrid>
        
      </BusinessBenefitsSection>

      <Section>
        <ColumnRow>
          <Card>
            <CardContent>
              <CardTitle>
                <span>
                  <Image
                    srcSet={`${require('../images/arch3.svg')}`}
                    alt="Technical Specifications"
                  />
                </span>
                Technical Specifications
              </CardTitle>
              <SubCardGrid>
                <SubCard>
                  <SubCardTitle>Throughput</SubCardTitle>
                  <SubCardValue>500K+ events/sec</SubCardValue>
                </SubCard>

                <SubCard>
                  <SubCardTitle>Latency</SubCardTitle>
                  <SubCardValue><span>{'<100ms average'}</span></SubCardValue>
                </SubCard>

                <SubCard>
                  <SubCardTitle>Availability</SubCardTitle>
                  <SubCardValue><span>{'99.99% uptime'}</span></SubCardValue>
                </SubCard>

                <SubCard>
                  <SubCardTitle>Data Retention</SubCardTitle>
                  <SubCardValue>Configurable (2 weeks now)</SubCardValue>
                </SubCard>

                <SubCard>
                  <SubCardTitle>Scalability</SubCardTitle>
                  <SubCardValue>Horizontally scalable</SubCardValue>
                </SubCard>

                <SubCard>
                  <SubCardTitle>Durability</SubCardTitle>
                  <SubCardValue><span>{'Message Replication across brokers'}</span></SubCardValue>
                </SubCard>

              </SubCardGrid>
            </CardContent>
          </Card>
        </ColumnRow>
      </Section>



    </PageWrapper>
  );
}



/* ---------------- Styled Components ---------------- */
const BusinessBenefitsSection = styled.section`
  background: linear-gradient(180deg, rgba(10, 25, 41, 0.30) 0%, rgba(10, 25, 41, 0.60) 100%);
  padding: 70px 20px;
  color: white;
`;

const SectionTitle = styled.h2`
  margin-bottom: 12px;
  text-align: center;
  margin-top: 0;
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 48px;
  color: #b0c4de;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 20px;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (max-width: ${breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div<{ expanded: boolean }>`
  position: relative;
  border-radius: 12px;
  background: ${({ expanded }) =>
    expanded
      ? 'linear-gradient(-135deg, rgba(71, 159, 248, 0.08) 0%, rgba(71, 159, 248, 0.03) 100%)'
      : 'rgba(7, 30, 76, 0.30)'};

  border: ${({ expanded }) =>
    expanded ? '1px solid rgba(71, 159, 248, 0.20)' : '1px solid rgba(71, 159, 248, 0.20)'};

  box-shadow: ${({ expanded }) =>
    expanded ? '0 2px 12px 0 rgba(71, 159, 248, 0.11)' : 'none'};

  padding: 20px;
  height: ${({ expanded }) => (expanded ? '160px' : '88px')};
  cursor: pointer;
  transition: background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;

  @media screen and (max-width: ${breakpoints.small}) {
  height: ${({ expanded }) => (expanded ? '200px' : '90px')};
  } 

`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BenefitContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconCircle = styled.div`
  border-radius: 12px;
  background: rgba(71, 159, 248, 0.08);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BenefitText = styled.div`
  color: #8ab4f8;
  font-size: 16px;
  font-weight: 600;
`;

const ExpandIcon = styled.div`
  font-size: 24px;
  color: #8ab4f8;
`;

const CardBody = styled.div`
  font-size: 15px;
  line-height: 24px;
  margin-top: 16px;
  color: #B3D1FC;
`;

const CardBodyActive = styled.div`
  left: 5%;
  bottom: 0px;
  width: 88%;
  position: absolute;
  margin-top: 12px;
  height: 2px;
  border-radius: 0px 0px 14px 14px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(71, 159, 248) 50%, rgba(0, 0, 0, 0) 100%);
`;


/* ---------------- Expandable Card Component ---------------- */
function ExpandableBenefit({
  id,
  activeId,
  setActiveId,
  title,
  description,
  icon,
}: {
  id: string;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  const expanded = activeId === id;

  return (
    <BenefitCard className={expanded ? 'active-card' : 'collapsed-card'} expanded={expanded}>
      <CardHeader onClick={() => setActiveId(expanded ? null : id)}>
        <BenefitContent>
          <IconCircle>{icon}</IconCircle>
          <BenefitText>{title}</BenefitText>
        </BenefitContent>
        <ExpandIcon>
          {expanded ? (
            <svg width="20" height="20" fill="#479FF8" viewBox="0 0 24 24">
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 4V12M4 8H12" stroke="#8AB4F8" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </ExpandIcon>
      </CardHeader>
      {expanded && (
        <CardBody>
          {description}
          <CardBodyActive />
        </CardBody>
      )}
    </BenefitCard>
  );
}