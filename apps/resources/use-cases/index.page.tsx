import React from 'react';
import styled from 'styled-components';

import { Button } from '@redocly/theme';
import { breakpoints } from '@redocly/theme/core/utils';
import { Link } from 'react-router-dom';


export const frontmatter = {
  title: 'Use Cases',
  description: 'System architecture overview',
};

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
    width:100%;
  }
`;

const TitileContent = styled.div`
  margin: 0 auto;

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

const TitleHeading = styled.div`
display:flex;
align-items: center;

h2{
margin: 0px 0px 25px;
gap: 15px;
display: flex;
font-style: normal;
font-weight: 500;
line-height: 42px;
letter-spacing: 0.406px;
-webkit-box-align: center;
align-items: center;
}
h2 span{
display: flex;
width: 64px;
height: 64px;
padding: 16px;
flex-direction: column;
align-items: flex-start;
border-radius: 16px;
background: linear-gradient(180deg, #479FF8 0%, #357ABD 100%);
}

`;

const Card = styled.div`
  display: flex;
  gap: 24px;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  
  border: 2px solid rgba(57, 153, 255, 0.30);
  background: linear-gradient(180deg, #0D2137 0%, #071E4C 100%);

  @media (max-width: 768px) {
    flex-direction: column;
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
  font-size: 22px;
  line-height:32px;
  letter-spacing: 0.07px;
  font-weight:600;
  display: flex;
  gap: 15px;
  align-items: center;

  span{
  display: flex;
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: 12px;
  background: #004770;
  }
`;

const CardDesc = styled.p`
  color: #B3D1FC;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px; 
letter-spacing: -0.312px;
`;


const CardLink = styled(Link)`
  display: flex;
  gap: 8px;
  color: rgb(71, 159, 248);
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.15px;
  cursor: pointer;
  align-items: flex-end;
  text-decoration: none; /* remove underline */
`;


const ColumnRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .contactButton{
  width:100%;
  text-align:center;
  border-radius: 24px;
  background: linear-gradient(180deg, #479FF8 0%, #357ABD 100%);
  margin: 20px auto 0px;

    h2{
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 42px;
      letter-spacing: 0.406px;
      margin:0px 0px;
    }
    p{
      color: #FFF;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: -0.439px;
    }

    button{
      color: #479FF8;
      font-weight: 700;
      display: inline-flex;
      padding: 15px 35px;
      justify-content: center;
      align-items: center;
      border-radius: 14px;
      background: #FFF;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10);
    }
  }
`;

export default function UseCasesPage() {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <TitileContent>
            <h1> Use Cases</h1>
            <p>Curated collection of documentation, tutorials, and tools to accelerate your <br />SyncX journey.</p>
          </TitileContent>
        </Container>
      </Section>

      <Section>
        <Container>
          <TitleHeading>
            <h2><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M20.0002 2.66699H8.00016C7.29292 2.66699 6.61464 2.94794 6.11454 3.44804C5.61445 3.94814 5.3335 4.62641 5.3335 5.33366V26.667C5.3335 27.3742 5.61445 28.0525 6.11454 28.5526C6.61464 29.0527 7.29292 29.3337 8.00016 29.3337H24.0002C24.7074 29.3337 25.3857 29.0527 25.8858 28.5526C26.3859 28.0525 26.6668 27.3742 26.6668 26.667V9.33366L20.0002 2.66699Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.6665 2.66699V8.00033C18.6665 8.70757 18.9475 9.38585 19.4476 9.88594C19.9477 10.386 20.6259 10.667 21.3332 10.667H26.6665" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.3332 12H10.6665" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.3332 17.333H10.6665" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.3332 22.667H10.6665" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
               Use Cases
              </h2>     
          </TitleHeading>              
          <TwoColumnRow>
            <Card>              
              <CardContent>
                <CardTitle>Customer Data</CardTitle>
                <CardDesc>A process has been established to facilitate the consumption and exposure of MDM change data to all consumers.</CardDesc>
                
                <CardLink to="/apps/resources/domain-models">
                  Explore 
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M0.666504 8.66699L4.6665 4.66699L0.666504 0.666992" stroke="#479FF8" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </CardLink>

              </CardContent>
            </Card>
          </TwoColumnRow> 
        </Container>
      </Section>      

      <Section>
        <Container> 
          <ColumnRow>
            <Card className='contactButton'>
              <CardContent>
                <h2>
                  Need More Help?
                </h2>
                <p>Our support team is ready to assist you with any questions or technical challenges.</p>

                <Button size="large" className='button-custom-transparent' to="/apps/support/contact-us">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </ColumnRow>
        </Container>
      </Section>
    </PageWrapper>
  );
}
