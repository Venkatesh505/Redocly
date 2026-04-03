import React from 'react';
import styled from 'styled-components';

import { breakpoints } from '@redocly/theme/core/utils';


const PageWrapper = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const TitileContent = styled.div`
  max-width: 728px;
  margin: 0 auto;

  text-align:center;

  h1{
  font-weight:700;
  font-size: 48px;
  line-height: 60px;
    @media screen and (max-width: ${breakpoints.small}) {
    font-size:36px;
    line-height:40px;
    }
  }

  p{
  color: #A1A1AA;
  margin-bottom:40px;
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
  max-width: 970px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  
  .img-responsive{
  width:100%;
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
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

export default function ComingSoonPage() {
  return (
    <PageWrapper>
      <Section>

        <TitileContent>
            <h1> COMING SOON</h1>
         </TitileContent>
      </Section>

      



    </PageWrapper>
  );
}
