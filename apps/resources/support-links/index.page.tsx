import React from 'react';
import styled from 'styled-components';

import { Button } from '@redocly/theme';
import { breakpoints } from '@redocly/theme/core/utils';

export const frontmatter = {
  title: 'External links',
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
  // flex-direction: column;
  // align-items: flex-start;
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

const CardLinkBlue = styled.div`
  display: flex;
  gap: 8px;
  color: rgb(71, 159, 248);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.15px;
  cursor: pointer;
  align-items: flex-end;
  text-decoration: none; 
  transition: all 0.3s;

  &:hover {
    opacity: 0.9; 
  }
`;

const CardLink = styled.div`
  display: flex;
  gap: 8px;
  color: rgb(161, 161, 170);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.15px;
  cursor: pointer;
  align-items: flex-end;
  text-decoration: none; 
  transition: all 0.3s;

  svg path{
  stroke: rgb(161, 161, 170) !important;
  }
  &:hover {
    opacity: 0.9; 
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

export default function SupportLinksPage() {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <TitileContent>
            <h1> Support Links</h1>
            <p>Curated collection of documentation, tutorials, and tools to accelerate your <br />SyncX journey.</p>
          </TitileContent>
        </Container>
      </Section>

      <Section>
        <Container>
          <TitleHeading>
            <h2><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16 9.33301V27.9997" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.99984 24C3.64622 24 3.30708 23.8595 3.05703 23.6095C2.80698 23.3594 2.6665 23.0203 2.6665 22.6667V5.33333C2.6665 4.97971 2.80698 4.64057 3.05703 4.39052C3.30708 4.14048 3.64622 4 3.99984 4H10.6665C12.081 4 13.4375 4.5619 14.4377 5.5621C15.4379 6.56229 15.9998 7.91885 15.9998 9.33333C15.9998 7.91885 16.5617 6.56229 17.5619 5.5621C18.5621 4.5619 19.9187 4 21.3332 4H27.9998C28.3535 4 28.6926 4.14048 28.9426 4.39052C29.1927 4.64057 29.3332 4.97971 29.3332 5.33333V22.6667C29.3332 23.0203 29.1927 23.3594 28.9426 23.6095C28.6926 23.8595 28.3535 24 27.9998 24H19.9998C18.939 24 17.9216 24.4214 17.1714 25.1716C16.4213 25.9217 15.9998 26.9391 15.9998 28C15.9998 26.9391 15.5784 25.9217 14.8283 25.1716C14.0781 24.4214 13.0607 24 11.9998 24H3.99984Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
               Documentation
              </h2>     
          </TitleHeading>              
          <TwoColumnRow>
            <Card>              
              <CardContent>
                <CardTitle>DevOps</CardTitle>
                <CardDesc>Tools and practices that streamline collaboration between development and operations for faster delivery.</CardDesc>
                <CardLinkBlue
                  as="a"
                  href="https://btsconfluence.abbvie.com/spaces/HCPDS/pages/618175993/Application+DevOps+Architecture+and+Workflow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M0.666504 8.66699L4.6665 4.66699L0.666504 0.666992" stroke="#479FF8" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </CardLinkBlue>
              </CardContent>
            </Card>
            <Card>              
              <CardContent>
                <CardTitle>Marketplace</CardTitle>
                <CardDesc>A hub to discover, integrate, and manage third‑party solutions and extensions seamlessly.</CardDesc>
                <CardLink>Explore <span><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
  <path d="M0.666504 8.66699L4.6665 4.66699L0.666504 0.666992" stroke="#479FF8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></CardLink>
              </CardContent>
            </Card>
            <Card>              
              <CardContent>
                <CardTitle>Observability</CardTitle>
                <CardDesc>Comprehensive monitoring and insights to ensure system reliability, performance, and proactive issue detection.</CardDesc>
                <CardLink>Explore <span><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
  <path d="M0.666504 8.66699L4.6665 4.66699L0.666504 0.666992" stroke="#479FF8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></CardLink>
              </CardContent>
            </Card>
            <Card>              
              <CardContent>
                <CardTitle>Pub/Sub</CardTitle>
                <CardDesc>A messaging pattern enabling scalable, asynchronous communication between distributed services.</CardDesc>
                <CardLink>Explore <span><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
  <path d="M0.666504 8.66699L4.6665 4.66699L0.666504 0.666992" stroke="#479FF8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></CardLink>
              </CardContent>
            </Card>
                        
          </TwoColumnRow> 
        </Container>
      </Section>

      <Section>
        <Container>
          <TitleHeading>
            <h2><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M21.3335 17.333L28.2975 21.9757C28.3979 22.0425 28.5145 22.0808 28.635 22.0866C28.7554 22.0924 28.8752 22.0653 28.9815 22.0084C29.0878 21.9515 29.1767 21.8668 29.2387 21.7634C29.3007 21.6599 29.3334 21.5416 29.3335 21.421V10.493C29.3335 10.3757 29.3026 10.2605 29.2439 10.159C29.1851 10.0574 29.1006 9.9732 28.9989 9.91477C28.8972 9.85634 28.7819 9.82578 28.6646 9.82618C28.5473 9.82657 28.4321 9.85792 28.3308 9.91704L21.3335 13.9997" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.6665 8H5.33317C3.86041 8 2.6665 9.19391 2.6665 10.6667V21.3333C2.6665 22.8061 3.86041 24 5.33317 24H18.6665C20.1393 24 21.3332 22.8061 21.3332 21.3333V10.6667C21.3332 9.19391 20.1393 8 18.6665 8Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
               Video Tutorials
              </h2>     
          </TitleHeading>              
          <TwoColumnRow>
            <Card>              
              <CardContent>
                <CardTitle>API Documentation</CardTitle>
                <CardDesc>Complete reference guide for all SyncX APIs with examples and best practices.</CardDesc>
                <CardLink>Explore <span><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
  <path d="M0.666504 8.66699L4.6665 4.66699L0.666504 0.666992" stroke="#479FF8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></CardLink>
              </CardContent>
            </Card>
             <Card>              
              <CardContent>
                <CardTitle>API Documentation</CardTitle>
                <CardDesc>Complete reference guide for all SyncX APIs with examples and best practices.</CardDesc>
                <CardLink>Explore <span><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
  <path d="M0.666504 8.66699L4.6665 4.66699L0.666504 0.666992" stroke="#479FF8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></CardLink>
              </CardContent>
            </Card>
            
          </TwoColumnRow> 
        </Container>
      </Section>

      <Section>
        <Container>
          <TitleHeading>
            <h2><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M21.3335 24L29.3335 16L21.3335 8" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.6665 8L2.6665 16L10.6665 24" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
               Developer Resources
              </h2>     
          </TitleHeading>              
          <TwoColumnRow>
            <Card>              
              <CardContent>
                <CardTitle>API Documentation</CardTitle>
                <CardDesc>Complete reference guide for all SyncX APIs with examples and best practices.</CardDesc>
                <CardLink>Explore <span><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
  <path d="M0.666504 8.66699L4.6665 4.66699L0.666504 0.666992" stroke="#479FF8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></CardLink>
              </CardContent>
            </Card>            
          </TwoColumnRow> 
        </Container>
      </Section>

      <Section>
        <Container>
          <TitleHeading>
            <h2><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M15.9998 29.3337C23.3636 29.3337 29.3332 23.3641 29.3332 16.0003C29.3332 8.63653 23.3636 2.66699 15.9998 2.66699C8.63604 2.66699 2.6665 8.63653 2.6665 16.0003C2.6665 23.3641 8.63604 29.3337 15.9998 29.3337Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.9998 2.66699C12.5761 6.26186 10.6665 11.036 10.6665 16.0003C10.6665 20.9647 12.5761 25.7388 15.9998 29.3337C19.4235 25.7388 21.3332 20.9647 21.3332 16.0003C21.3332 11.036 19.4235 6.26186 15.9998 2.66699Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.6665 16H29.3332" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
               Partner Resources
              </h2>     
          </TitleHeading>              
          <TwoColumnRow>
            <Card>              
              <CardContent>
                <CardTitle>API Documentation</CardTitle>
                <CardDesc>Complete reference guide for all SyncX APIs with examples and best practices.</CardDesc>
                <CardLink>Explore <span><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
  <path d="M0.666504 8.66699L4.6665 4.66699L0.666504 0.666992" stroke="#479FF8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></CardLink>
              </CardContent>
            </Card>
             <Card>              
              <CardContent>
                <CardTitle>API Documentation</CardTitle>
                <CardDesc>Complete reference guide for all SyncX APIs with examples and best practices.</CardDesc>
                <CardLink>Explore <span><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
  <path d="M0.666504 8.66699L4.6665 4.66699L0.666504 0.666992" stroke="#479FF8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></CardLink>
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
