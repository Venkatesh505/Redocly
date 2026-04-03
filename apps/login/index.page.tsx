
import React from 'react';
import { Button } from '@redocly/theme';
import { breakpoints } from "@redocly/theme/core/utils";
import styled from 'styled-components';
// const PF_BASE = 'https://federation.abbvie.com/idp/startSSO.ping';
// const PARTNER_SP_ID = '<YOUR_PF_SP_CONNECTION_ID>'; // value from your PF SP Connection
// const TARGET = encodeURIComponent('https://<your-portal-hostname>/'); // post-SSO

export default function LoginPage() {
  const handleSSO = () => {
    // window.location.href = `${PF_BASE}?PartnerSpId=${encodeURIComponent(PARTNER_SP_ID)}&TargetResource=${TARGET}`;
    window.location.href = "https://federation.abbvie.com/idp/startSSO.ping";
  };

  const handleSSOGuest = () => {
    // window.location.href = `${PF_BASE}?PartnerSpId=${encodeURIComponent(PARTNER_SP_ID)}&TargetResource=${TARGET}`;
    window.location.href = "https://federation.abbvie.com/idp/startSSO.ping";
  };
  return (
    <PageWrapper>
      <Container>
        <Title>Welcome to SyncX</Title>
        <Subtitle>
          Sign in with SSO to continue.
        </Subtitle>
        <LoginWrapper>
          <Button onClick={handleSSO} className='loginButtonSSOCorp'>Corporate SSO</Button>
          <Button onClick={handleSSOGuest} className='loginButtonSSOGuest'>Guest SSO</Button>
        </LoginWrapper>
      </Container>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding: 60px 0;
  background: linear-gradient(180deg, #050d1f 0%, #071d49 50%, #0a2540 100%);
  color: #fff;
  min-height: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  text-align:center;
  font-size: 48px;
  line-height: 52px;
  font-weight: 700;
  margin: 0px 0px 10px;

  @media (max-width: ${breakpoints.small}) {
    font-size: 36px;
    line-height: 42px;
  }
`;

const Subtitle = styled.p`
  text-align:center;
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.449px;
  margin: 10px 0px 40px;
`;

const LoginWrapper = styled.div`
  gap: 10px;
  display: flex;
  width: 800px;
  margin: 30px auto;
  text-align: center;
  justify-content: center;

  .loginButtonSSOCorp{
  padding: 10px 25px;
  border-radius: 10px;
  background: #0066F5;
  border: 2px solid #0066F5;
  color: #fff;
  font-weight: 600;
  }

  .loginButtonSSOGuest{
  padding: 10px 25px;
  border-radius: 10px;
  background: #fff;
  border: 2px solid #fff;
  color: rgb(7, 29, 73);
  font-weight: 600;
  }
`;
