import React, { JSX } from "react";
import styled from "styled-components";
import { breakpoints } from "@redocly/theme/core/utils";
import { Button } from '@redocly/theme';
import { Link } from "react-router-dom";
import {
  PageWrapper,
  Container,
  Title,
  Subtitle,
} from "./apiCatalog.styles";

// import DashboardGraphs from "./DashboardGraphs";

const colors = {
  pageBg: "#0B1220",
  cardBg: "rgba(15, 23, 42, 0.7)", 
  cardBorder: "rgba(43, 127, 255, 0.35)",
  borderSubtle: "rgba(148, 163, 184, 0.15)",
  text: "#E2E8F0",
  textMuted: "#94A3B8",
  textMuted2: "#A6B3C4",
  heading: "#DCE7F8",
  accentBlue: "#60A5FA",
  accentPurple: "#A78BFA",
  accentGreen: "#34D399",
  accentCyan: "#06B6D4",
  // /* gradients for icon tiles */
  // gradientBlue: "linear-gradient(135deg,#3B82F6,#06B6D4)",
  // gradientPink: "linear-gradient(135deg,#EC4899,#8B5CF6)",
  // gradientGreen: "linear-gradient(135deg,#22C55E,#10B981)",
  gradientOrange: "linear-gradient(135deg,#F97316,#F59E0B)",

  gradientBlue: "linear-gradient(135deg,#3B82F6,#06B6D4)",
  gradientPink: "linear-gradient(135deg,#EC4899,#8B5CF6)",
  gradientGreen: "linear-gradient(135deg,#22C55E,#10B981)",
  gradientCardBlue: "linear-gradient(180deg, rgba(10, 25, 43, 0.80) 0%, rgba(8, 30, 72, 0.80) 100%)",
};


/* REUSABLE COMPONENTS */

const Grid4 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 48px;

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

// const Card = styled.div`
//   border-radius: 12px;
//   border: 1px solid rgba(43, 127, 255, 0.50);
//   background: linear-gradient(180deg, rgba(10, 25, 43, 0.80) 0%, rgba(8, 30, 72, 0.80) 100%);

//   padding: 28px;
//   // border: 1px solid ${colors.border};
//   transition: all 0.35s ease;
//   position: relative;
//   overflow: hidden;

//   &:hover {
//     transform: translateY(-1px);
//     box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
//   }
// `;

const IconWrapper = styled.div<{ gradient: string }>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ gradient }) => gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);

  svg {
    color: white;
    font-size: 22px;
  }
`;

const StatTitle = styled.div`
  color: #99A1AF;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const StatValue = styled.div`
  color: #FFF;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.396px;
`;

const StatLabel = styled.div`
  color: #05DF72;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const Section = styled.section`
  margin-top: 100px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  margin-top: 10px;
  color: ${colors.textMuted};
`;

/* FEATURE CARD */

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const FeatureList = styled.ul`
  margin-top: 16px;
  padding-left: 18px;
  color: ${colors.textMuted};

  li {
    margin-bottom: 8px;
  }
`;

/*  DASHBOARD SECTION */

const DashboardGrid = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 28px;

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

const ChartArea = styled.div`
  height: 260px;
  border-radius: 14px;
  border: 1px solid #27272A;
  background: rgba(24, 24, 27, 0.50);
  margin-top: 20px;
`;


const Card = styled.div`
  border-radius: 14px;
  border: 1px solid ${colors.cardBorder};
  background: ${colors.cardBg};
  backdrop-filter: blur(6px);
  padding: 26px;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(43, 127, 255, 0.55);
    box-shadow: 0 10px 30px rgba(3, 7, 18, 0.35);
  }
`;

const Grid1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  margin-top: 26px;
`;

const Grid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 26px;

  .rowBoxButton {
    text-align: center;
    padding:0pxpx;
    margin-top: 20px;
    .button-custom {
      width: 150px;
      padding:10px 32px;
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  margin-top: 26px;

  @media (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
`;

const IconTile = styled.div<{ gradient?: string }>`
  width: 64px;
  height: 64px;
  min-width: 64px;
  border-radius: 10px;
  background: ${({ gradient }) => gradient || colors.gradientBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.35);

  svg {
    color: white;
  }
`;

const IconTileMulti = styled(IconTile)`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border: 1px solid rgba(43, 127, 255, 0.30);
  background: rgba(43, 127, 255, 0.10);
`;
const IconTileEnterprise = styled(IconTile)`
width: 48px;
height: 48px;
min-width: 48px;
border: 1px solid rgba(173, 70, 255, 0.30);
background: rgba(173, 70, 255, 0.10);
`;

const IconTilePerformance = styled(IconTile)`
width: 48px;
height: 48px;
min-width: 48px;
border: 1px solid rgba(0, 201, 80, 0.30);
background: rgba(0, 201, 80, 0.10);
`;


/* WHAT IS OUR API?” CARD */
const InfoCard = styled(Card)`
  padding: 28px;
  border-radius: 18px;
  background:
    linear-gradient(0deg, rgba(2, 6, 23, 0.35), rgba(2, 6, 23, 0.35)),
    ${colors.gradientCardBlue};
`;

const InfoHeader = styled(FlexRow)`
  gap: 18px;
  flex-direction: row;
`;

const FlexRowAPI = styled(FlexRow)`
  gap: 18px;
  flex-direction: row;
`;

const InfoTitle = styled.h2`
  font-size: 28px;
  font-weight: 800;
  margin: 0 0 6px;
  color: ${colors.heading};

  @media (max-width: ${breakpoints.small}) {
    font-size: 22px;
  }
`;

const InfoText = styled.p`
  color: #99A1AF;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.439px;
`;

const FeaturesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 10px;

  @media (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(2, 6, 23, 0.25);
  border: 1px solid ${colors.borderSubtle};
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: ${colors.heading};
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 4px;
  }

  span {
    color: ${colors.textMuted};
    font-size: 13px;
  }
`;

/*    API TYPES CARDS */
const TypeCard = styled(Card)`
  padding: 24px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(10, 25, 43, 0.8) 0%, rgba(8, 30, 72, 0.8) 100%);
      display: flex;
    flex-direction: column;
    -webkit-box-flex: 1;
    flex-grow: 1;

  &:hover {
    border-color: rgba(43, 127, 255, 0.6);
  }
`;

const TypeTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  margin: 12px 0 6px;
  color: ${colors.heading};
`;

const TypeTitle1 = styled.h3`
  font-size: 20px;
  font-weight: 800;
  margin: 0px 0 6px;
  color: ${colors.heading};
`;

const TypeDesc = styled.p`
  font-size: 14px;
  color: ${colors.textMuted2};
  line-height: 1.8;
  margin: 0 0 10px;
`;

const BulletList = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  list-style: none;
  margin: 10px 0 0;
  padding: 0;

  li {
    display: grid;
    grid-template-columns: 18px 1fr;
    align-items: start;
    gap: 10px;
    color: ${colors.textMuted};
    font-size: 14px;
    padding: 8px 0;

    &:first-child {
      border-top: none;
      padding-top: 2px;
    }
  }
`;

const Dot = styled.span<{ color?: string }>`
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ color }) => color || colors.accentBlue};
  }
`;

// Explore Our APIs
const ExploreButton = styled.div`
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
/* CardContactType */
const CardContactType = styled(Card)`
  text-align:center;
  padding: 24px;
  border-radius: 16px;
  background: linear-gradient(90deg, #155DFC 0%, #9810FA 100%);;
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;

  h2{
  margin: 0px 0px 10px;
  }

  &:hover {
    border-color: rgba(43, 127, 255, 0.6);
  }
  .button-custom{
  display: flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  color: #155DFC;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  background: #FFF;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);  
  }
  .button-custom1{
  display: flex;
  width: 230px;
  padding: 20px 40px;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 12px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color:#fff;
  border: 1px solid rgba(255, 255, 255, 0.30);
  background: rgba(255, 255, 255, 0.10);
  }
`;
const SvgVideo = styled.div`
  width: 96px;
  height: 96px;
  margin: 0 auto 16px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.10);
  svg {
    display: block;
  }
`;

const ContactContent = styled.div`
  text-align: center;
  color: #eaf2ff;

  h3 {
    font-size: clamp(22px, 2.4vw, 28px);
    line-height: 1.25;
    margin: 8px 0 10px;
    font-weight: 700;
    color: #e9f1ff;
  }

  p {
    margin: 0 auto 20px;
    max-width: 680px;
    color: rgba(233, 241, 255, 0.9);
    font-size: 16px;
    line-height: 1.5;

    br {
      display: none;
    }

    @media (min-width: 640px) {
      br {
        display: inline;
      }
    }
  }
`;
const Divider = styled.hr`
  width: 100%;
  max-width: 720px;
  margin: 8px auto 18px;
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.35) 15%,
    rgba(255,255,255,0.35) 85%,
    rgba(255,255,255,0) 100%
  );
  opacity: 0.6;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  max-width: 720px;
  margin: 0 auto;
  color: #f5f8ff;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px 20px;
  }
`;

const Stat = styled.div`
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.20);
  .value {
    font-weight: 800;
    font-size: 20px;
    letter-spacing: 0.2px;
  }

  .label {
    margin-top: 6px;
    font-size: 12px;
    color: rgba(233, 241, 255, 0.8);
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }
`;

const RowBoxButton = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 16px 0 26px;
`;


/* =SVG ICONS== */
const CodeIcon: any = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M9 18L3 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 6L21 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon: any = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SpeedIcon: any = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M21 12a9 9 0 1 1-18 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 10l-2 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CubeIcon: any = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="white" strokeWidth="2" />
    <path d="M12 12l8-4.5" stroke="white" strokeWidth="2" />
    <path d="M12 12v9" stroke="white" strokeWidth="2" />
    <path d="M12 12L4 7.5" stroke="white" strokeWidth="2" />
  </svg>
);

const PlugIcon: any = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M9 7v4m6-4v4M5 14h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 14v2a5 5 0 1 0 10 0v-2" stroke="white" strokeWidth="2" />
  </svg>
);

const BridgeIcon: any = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 12v6m12-6v6" stroke="white" strokeWidth="2" />
    <path d="M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 12c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="2" />
  </svg>
);

const CheckIcon: any = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.99984 18.3327C14.6022 18.3327 18.3332 14.6017 18.3332 9.99935C18.3332 5.39698 14.6022 1.66602 9.99984 1.66602C5.39746 1.66602 1.6665 5.39698 1.6665 9.99935C1.6665 14.6017 5.39746 18.3327 9.99984 18.3327Z" stroke="#05DF72" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.5 10.0007L9.16667 11.6673L12.5 8.33398" stroke="#05DF72" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);


export default function APICatalogPage(): JSX.Element {
  return (
    <PageWrapper>
      <Container>
        <Title>API Catalog</Title>
        <Subtitle>
          Enterprise-grade APIs built for scale, reliability, and developer
          experience.
          <br />
          Access powerful microservices through our unified API gateway.
        </Subtitle>

        {/* STATS */}
        <Grid4>
          <Card>
            <IconWrapper gradient={colors.gradientBlue}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_1061_3204)">
                  <path d="M18.3332 9.99935H16.2665C15.9023 9.99857 15.5479 10.1171 15.2574 10.3368C14.967 10.5565 14.7565 10.8653 14.6582 11.216L12.6998 18.1827C12.6872 18.226 12.6609 18.264 12.6248 18.291C12.5888 18.3181 12.5449 18.3327 12.4998 18.3327C12.4548 18.3327 12.4109 18.3181 12.3748 18.291C12.3388 18.264 12.3125 18.226 12.2998 18.1827L7.69984 1.81602C7.68722 1.77274 7.6609 1.73473 7.62484 1.70768C7.58878 1.68064 7.54491 1.66602 7.49984 1.66602C7.45476 1.66602 7.4109 1.68064 7.37484 1.70768C7.33878 1.73473 7.31246 1.77274 7.29984 1.81602L5.3415 8.78268C5.24356 9.13198 5.03432 9.43978 4.74556 9.65936C4.45679 9.87894 4.10427 9.99831 3.7415 9.99935H1.6665" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_1061_3204">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </IconWrapper>
            <StatTitle>API Requests</StatTitle>
            <StatValue>2.4M</StatValue>
            <StatLabel>+12.5% from last week</StatLabel>
          </Card>

          <Card>
            <IconWrapper gradient={colors.gradientPink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 11.6673L13.3333 8.33398" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.78317 15.8324C2.05169 14.5656 1.66656 13.1285 1.6665 11.6657C1.66645 10.2028 2.05146 8.76576 2.78285 7.49888C3.51424 6.232 4.56623 5.17998 5.83308 4.44854C7.09993 3.7171 8.537 3.33203 9.99984 3.33203C11.4627 3.33203 12.8997 3.7171 14.1666 4.44854C15.4334 5.17998 16.4854 6.232 17.2168 7.49888C17.9482 8.76576 18.3332 10.2028 18.3332 11.6657C18.3331 13.1285 17.948 14.5656 17.2165 15.8324" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </IconWrapper>
            <StatTitle>Avg Latency</StatTitle>
            <StatValue>45ms</StatValue>
            <StatLabel style={{color: "#FF6467"}}>-8.3% from last week</StatLabel>
          </Card>

          <Card>
            <IconWrapper gradient={colors.gradientGreen}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18.3332 5.83398L11.2498 12.9173L7.08317 8.75065L1.6665 14.1673" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.3335 5.83398H18.3335V10.834" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </IconWrapper>
            <StatTitle>Uptime</StatTitle>
            <StatValue>99.8%</StatValue>
            <StatLabel>+0.2% from last week</StatLabel>
          </Card>

          <Card>
            <IconWrapper gradient={colors.gradientOrange}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 2.5V12.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 17.5C6.38071 17.5 7.5 16.3807 7.5 15C7.5 13.6193 6.38071 12.5 5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </IconWrapper>
            <StatTitle>Active Endpoints</StatTitle>
            <StatValue>142</StatValue>
            <StatLabel>+18 from last week</StatLabel>
          </Card>
        </Grid4>


        <Section>
          <InfoCard>
            <InfoHeader>
              <IconTile gradient={colors.gradientBlue}>
                <CodeIcon />
              </IconTile>
              <div>
                <InfoTitle>What is our API?</InfoTitle>
                <InfoText>
                  Our API platform provides a unified gateway to access enterprise microservices across data integration,
                  authentication, observability,<br /> and infrastructure management. Built on industry standards with
                  comprehensive documentation, SDK support, and real-time<br /> monitoring.
                </InfoText>
                <FeaturesRow>
              <FeatureItem>
                <IconTileMulti>
                  {/* small code icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_1061_3380)">
                      <path d="M10.6916 1.81631C10.4744 1.71727 10.2385 1.66602 9.99989 1.66602C9.76123 1.66602 9.52536 1.71727 9.30822 1.81631L2.16656 5.06631C2.01868 5.13152 1.89295 5.23831 1.80469 5.37369C1.71643 5.50907 1.66943 5.6672 1.66943 5.82881C1.66943 5.99043 1.71643 6.14855 1.80469 6.28393C1.89295 6.41931 2.01868 6.52611 2.16656 6.59131L9.31656 9.84965C9.53369 9.94869 9.76956 9.99994 10.0082 9.99994C10.2469 9.99994 10.4828 9.94869 10.6999 9.84965L17.8499 6.59965C17.9978 6.53444 18.1235 6.42765 18.2118 6.29227C18.3 6.15688 18.347 5.99876 18.347 5.83715C18.347 5.67553 18.3 5.51741 18.2118 5.38203C18.1235 5.24665 17.9978 5.13985 17.8499 5.07465L10.6916 1.81631Z" stroke="#51A2FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M1.66651 10C1.66611 10.1594 1.71144 10.3155 1.7971 10.45C1.88277 10.5844 2.00519 10.6914 2.14984 10.7583L9.31651 14.0167C9.53251 14.1145 9.76689 14.1651 10.004 14.1651C10.2411 14.1651 10.4755 14.1145 10.6915 14.0167L17.8415 10.7667C17.989 10.7004 18.114 10.5926 18.2013 10.4564C18.2886 10.3203 18.3345 10.1617 18.3332 10" stroke="#51A2FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M1.66651 14.166C1.66611 14.3254 1.71144 14.4816 1.7971 14.616C1.88277 14.7504 2.00519 14.8574 2.14984 14.9243L9.31651 18.1827C9.53251 18.2805 9.76689 18.3311 10.004 18.3311C10.2411 18.3311 10.4755 18.2805 10.6915 18.1827L17.8415 14.9327C17.989 14.8664 18.114 14.7586 18.2013 14.6225C18.2886 14.4863 18.3345 14.3277 18.3332 14.166" stroke="#51A2FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1061_3380">
                        <rect width="20" height="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </IconTileMulti>
                <FeatureText>
                  <strong>Multi‑Protocol</strong>
                  <span>REST, GraphQL, gRPC, WebSocket support</span>
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <IconTileEnterprise>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.6668 10.8331C16.6668 14.9997 13.7502 17.0831 10.2835 18.2914C10.102 18.3529 9.90478 18.35 9.72516 18.2831C6.25016 17.0831 3.3335 14.9997 3.3335 10.8331V4.99972C3.3335 4.77871 3.42129 4.56675 3.57757 4.41047C3.73385 4.25419 3.94582 4.16639 4.16683 4.16639C5.8335 4.16639 7.91683 3.16639 9.36683 1.89972C9.54337 1.74889 9.76796 1.66602 10.0002 1.66602C10.2324 1.66602 10.457 1.74889 10.6335 1.89972C12.0918 3.17472 14.1668 4.16639 15.8335 4.16639C16.0545 4.16639 16.2665 4.25419 16.4228 4.41047C16.579 4.56675 16.6668 4.77871 16.6668 4.99972V10.8331Z" stroke="#C27AFF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </IconTileEnterprise>
                <FeatureText>
                  <strong>Enterprise Security</strong>
                  <span>OAuth 2.0, SAML, mTLS encryption</span>
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <IconTilePerformance>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 11.6673L13.3333 8.33398" stroke="#05DF72" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.78317 15.8324C2.05169 14.5656 1.66656 13.1285 1.6665 11.6657C1.66645 10.2028 2.05146 8.76576 2.78285 7.49888C3.51424 6.232 4.56623 5.17998 5.83308 4.44854C7.09993 3.7171 8.537 3.33203 9.99984 3.33203C11.4627 3.33203 12.8997 3.7171 14.1666 4.44854C15.4334 5.17998 16.4854 6.232 17.2168 7.49888C17.9482 8.76576 18.3332 10.2028 18.3332 11.6657C18.3331 13.1285 17.948 14.5656 17.2165 15.8324" stroke="#05DF72" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </IconTilePerformance>
                <FeatureText>
                  <strong>High Performance</strong>
                  <span>Sub‑50ms latency, auto‑scaling</span>
                </FeatureText>
              </FeatureItem>
            </FeaturesRow>
            </div>
            </InfoHeader>
          </InfoCard>
        </Section>
        
        <Section style={{ marginTop: 46 }}>
          <Title center>API Types</Title>
          <Subtitle center>Choose the right API category for your business needs</Subtitle>

          <Grid3>
            {/* Business APIs */}
            <TypeCard>
              <FlexRow>
                <IconTile gradient={colors.gradientBlue}>
                  <CubeIcon />
                </IconTile>
                <div>
                  <TypeTitle>Business APIs</TypeTitle>
                  <TypeDesc>
                    These APIs are directly related to business use cases and functionalities. They enable you to
                    perform core business processes, such as managing customer data, handling transactions, or
                    operations—work essential for business outcomes.
                  </TypeDesc>
                </div>
              </FlexRow>

              <BulletList>
                <li>
                  <Dot color={colors.accentBlue}>
                    <CheckIcon />
                  </Dot>
                  <span>Customer Management</span>
                </li>
                <li>
                  <Dot color={colors.accentBlue}>
                    <CheckIcon />
                  </Dot>
                  <span>Transaction Processing</span>
                </li>
                <li>
                  <Dot color={colors.accentBlue}>
                    <CheckIcon />
                  </Dot>
                  <span>Business Workflows</span>
                </li>
                <li>
                  <Dot color={colors.accentBlue}>
                    <CheckIcon />
                  </Dot>
                  <span>Data Operations</span>
                </li>
              </BulletList>
            </TypeCard>

            {/* Integration APIs */}
            <TypeCard>
              <FlexRow>
                <IconTile gradient={colors.gradientPink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M28.0002 21.334H22.6668C21.9304 21.334 21.3335 21.9309 21.3335 22.6673V28.0007C21.3335 28.737 21.9304 29.334 22.6668 29.334H28.0002C28.7365 29.334 29.3335 28.737 29.3335 28.0007V22.6673C29.3335 21.9309 28.7365 21.334 28.0002 21.334Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.33317 21.334H3.99984C3.26346 21.334 2.6665 21.9309 2.6665 22.6673V28.0007C2.6665 28.737 3.26346 29.334 3.99984 29.334H9.33317C10.0696 29.334 10.6665 28.737 10.6665 28.0007V22.6673C10.6665 21.9309 10.0696 21.334 9.33317 21.334Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.6667 2.66602H13.3333C12.597 2.66602 12 3.26297 12 3.99935V9.33268C12 10.0691 12.597 10.666 13.3333 10.666H18.6667C19.403 10.666 20 10.0691 20 9.33268V3.99935C20 3.26297 19.403 2.66602 18.6667 2.66602Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.6665 21.3333V17.3333C6.6665 16.9797 6.80698 16.6406 7.05703 16.3905C7.30708 16.1405 7.64622 16 7.99984 16H23.9998C24.3535 16 24.6926 16.1405 24.9426 16.3905C25.1927 16.6406 25.3332 16.9797 25.3332 17.3333V21.3333" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 15.9993V10.666" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </IconTile>
                <div>
                  <TypeTitle>Integration APIs</TypeTitle>
                  <TypeDesc>
                    These APIs handle system integrations. They are designed to connect your services with external
                    platforms (internal or third‑party), vendor systems, and partner ecosystems. Typical tasks include
                    data synchronization, orchestration between apps, and facilitating interoperability between
                    different technologies.
                  </TypeDesc>
                </div>
              </FlexRow>

              <BulletList>
                <li>
                  <Dot color={colors.accentPurple}>
                    <CheckIcon />
                  </Dot>
                  <span>External Platform Connectivity</span>
                </li>
                <li>
                  <Dot color={colors.accentPurple}>
                    <CheckIcon />
                  </Dot>
                  <span>Third‑Party Services</span>
                </li>
                <li>
                  <Dot color={colors.accentPurple}>
                    <CheckIcon />
                  </Dot>
                  <span>Data Synchronization</span>
                </li>
                <li>
                  <Dot color={colors.accentPurple}>
                    <CheckIcon />
                  </Dot>
                  <span>Cross‑System Authentication</span>
                </li>
              </BulletList>
            </TypeCard>

            {/* Bridge APIs */}
            <TypeCard>
              <FlexRow>
                <IconTile gradient={colors.gradientGreen}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 2.5V12.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 17.5C6.38071 17.5 7.5 16.3807 7.5 15C7.5 13.6193 6.38071 12.5 5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </IconTile>
                <div>
                  <TypeTitle>Bridge APIs</TypeTitle>
                  <TypeDesc>
                    These serve as foundational or middleware components. Bridge APIs are responsible for connecting,
                    orchestrating, or routing requests between other APIs or services in your ecosystem. They often
                    handle transformation or aggregation of data between systems.
                  </TypeDesc>
                </div>
              </FlexRow>

              <BulletList>
                <li>
                  <Dot color={colors.accentGreen}>
                    <CheckIcon />
                  </Dot>
                  <span>Request Orchestration</span>
                </li>
                <li>
                  <Dot color={colors.accentGreen}>
                    <CheckIcon />
                  </Dot>
                  <span>Service Communication</span>
                </li>
                <li>
                  <Dot color={colors.accentGreen}>
                    <CheckIcon />
                  </Dot>
                  <span>Security Intermediation</span>
                </li>
                <li>
                  <Dot color={colors.accentGreen}>
                    <CheckIcon />
                  </Dot>
                  <span>Data Transformation</span>
                </li>
              </BulletList>
            </TypeCard>
          </Grid3>
        </Section>


        {/* HOW APIs HELP */}
        <Section>
          <SectionTitle>How Our APIs Can Help</SectionTitle>
          <SectionSubtitle>
            Accelerate development, reduce complexity,
             and scale effortlessly with <br />our enterprise-grade API platform
          </SectionSubtitle>

          <Grid3>
            {/* Accelerate Development */}
            <TypeCard>
              <FlexRow>
                <IconTile gradient={colors.gradientBlue}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M5.33349 18.6675C5.08117 18.6684 4.83379 18.5976 4.62009 18.4635C4.40639 18.3294 4.23513 18.1373 4.12622 17.9097C4.01731 17.6821 3.97521 17.4283 4.00482 17.1777C4.03443 16.9272 4.13453 16.6901 4.29349 16.4942L17.4935 2.8942C17.5925 2.77991 17.7274 2.70268 17.8761 2.67518C18.0248 2.64768 18.1785 2.67155 18.3118 2.74287C18.4451 2.8142 18.5503 2.92873 18.6099 3.06768C18.6696 3.20663 18.6803 3.36173 18.6402 3.50754L16.0802 11.5342C16.0047 11.7362 15.9793 11.9536 16.0063 12.1675C16.0332 12.3815 16.1117 12.5858 16.2349 12.7628C16.3582 12.9398 16.5225 13.0842 16.7139 13.1837C16.9052 13.2833 17.1178 13.3349 17.3335 13.3342H26.6668C26.9191 13.3333 27.1665 13.4041 27.3802 13.5382C27.5939 13.6724 27.7652 13.8644 27.8741 14.092C27.983 14.3196 28.0251 14.5734 27.9955 14.824C27.9659 15.0746 27.8658 15.3116 27.7068 15.5075L14.5068 29.1075C14.4078 29.2218 14.2729 29.2991 14.1242 29.3266C13.9755 29.3541 13.8219 29.3302 13.6885 29.2589C13.5552 29.1875 13.45 29.073 13.3904 28.9341C13.3307 28.7951 13.32 28.64 13.3602 28.4942L15.9202 20.4675C15.9956 20.2655 16.021 20.0482 15.994 19.8342C15.9671 19.6202 15.8886 19.416 15.7654 19.239C15.6421 19.062 15.4778 18.9175 15.2865 18.818C15.0951 18.7185 14.8825 18.6668 14.6668 18.6675H5.33349Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </IconTile>
                <div>
                  <TypeTitle>Accelerate Development</TypeTitle>
                  <TypeDesc>
                    These APIs are directly related to business use cases and functionalities. They enable you to
                    perform core business processes, such as managing customer data, handling transactions, or
                    operations—work essential for business outcomes.
                  </TypeDesc>
                </div>
              </FlexRow>

              <BulletList>
                <li>
                  <Dot>
                    <CheckIcon />
                  </Dot>
                  <span>Ready-to-use endpoints with comprehensive docs</span>
                </li>
                <li>
                  <Dot>
                    <CheckIcon />
                  </Dot>
                  <span>SDKs in popular languages (Python, JS, Java, Go)</span>
                </li>
                <li>
                  <Dot>
                    <CheckIcon />
                  </Dot>
                  <span>Code samples and interactive playground</span>
                </li>
              </BulletList>
            </TypeCard>

            {/* Reduce Complexity */}
            <TypeCard>
              <FlexRow>
                <IconTile gradient={colors.gradientPink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M17.1068 2.90649C16.7594 2.74802 16.382 2.66602 16.0001 2.66602C15.6183 2.66602 15.2409 2.74802 14.8934 2.90649L3.46678 8.10649C3.23018 8.21082 3.02902 8.38169 2.8878 8.5983C2.74658 8.81491 2.67139 9.06791 2.67139 9.32649C2.67139 9.58507 2.74658 9.83807 2.8878 10.0547C3.02902 10.2713 3.23018 10.4422 3.46678 10.5465L14.9068 15.7598C15.2542 15.9183 15.6316 16.0003 16.0134 16.0003C16.3953 16.0003 16.7727 15.9183 17.1201 15.7598L28.5601 10.5598C28.7967 10.4555 28.9979 10.2846 29.1391 10.068C29.2803 9.85141 29.3555 9.59841 29.3555 9.33983C29.3555 9.08125 29.2803 8.82824 29.1391 8.61163C28.9979 8.39502 28.7967 8.22415 28.5601 8.11983L17.1068 2.90649Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.66651 16C2.66588 16.255 2.7384 16.5049 2.87546 16.7199C3.01253 16.935 3.2084 17.1062 3.43984 17.2133L14.9065 22.4267C15.2521 22.5832 15.6271 22.6641 16.0065 22.6641C16.3859 22.6641 16.7609 22.5832 17.1065 22.4267L28.5465 17.2267C28.7825 17.1206 28.9826 16.9481 29.1222 16.7303C29.2619 16.5125 29.3352 16.2587 29.3332 16" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.66651 22.666C2.66588 22.921 2.7384 23.1709 2.87546 23.3859C3.01253 23.601 3.2084 23.7722 3.43984 23.8793L14.9065 29.0927C15.2521 29.2492 15.6271 29.3301 16.0065 29.3301C16.3859 29.3301 16.7609 29.2492 17.1065 29.0927L28.5465 23.8927C28.7825 23.7866 28.9826 23.6141 29.1222 23.3963C29.2619 23.1785 29.3352 22.9248 29.3332 22.666" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </IconTile>
                <div>
                  <TypeTitle>Reduce Complexity</TypeTitle>
                  <TypeDesc>
                    Focus on your core product. We handle authentication, rate limiting, monitoring, and scaling so you don't have to.
                  </TypeDesc>
                </div>
              </FlexRow>

              <BulletList>
                <li>
                  <Dot color={colors.accentPurple}>
                    <CheckIcon />
                  </Dot>
                  <span>Unified API gateway for all microservices</span>
                </li>
                <li>
                  <Dot color={colors.accentPurple}>
                    <CheckIcon />
                  </Dot>
                  <span>Built-in security and compliance features</span>
                </li>
                <li>
                  <Dot color={colors.accentPurple}>
                    <CheckIcon />
                  </Dot>
                  <span>Automatic error handling and retry logic</span>
                </li>
              </BulletList>
            </TypeCard>

            {/* Bridge APIs */}
            <TypeCard>
              <FlexRow>
                <IconTile gradient={colors.gradientGreen}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M29.3332 9.33398L17.9998 20.6673L11.3332 14.0007L2.6665 22.6673" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.3335 9.33398H29.3335V17.334" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </IconTile>
                <div>
                  <TypeTitle>Scale Effortlessly</TypeTitle>
                  <TypeDesc>
                    These serve as foundational or middleware components. Bridge APIs are responsible for connecting,
                    orchestrating, or routing requests between other APIs or services in your ecosystem. They often
                    handle transformation or aggregation of data between systems.
                  </TypeDesc>
                </div>
              </FlexRow>

              <BulletList>
                <li>
                  <Dot color={colors.accentGreen}>
                    <CheckIcon />
                  </Dot>
                  <span>Auto-scaling infrastructure with 99.9% uptime</span>
                </li>
                <li>
                  <Dot color={colors.accentGreen}>
                    <CheckIcon />
                  </Dot>
                  <span>Global CDN for low-latency worldwide</span>
                </li>
                <li>
                  <Dot color={colors.accentGreen}>
                    <CheckIcon />
                  </Dot>
                  <span>Real-time monitoring and alerting</span>
                </li>
              </BulletList>
            </TypeCard>
          </Grid3>
        </Section>
        <Section>
          <Grid2>
            {/* For Product Teams */}
            <TypeCard>
              <FlexRowAPI>
                <IconTileMulti>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999V7.9999Z" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.2998 7L11.9998 12L20.6998 7" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 22V12" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </IconTileMulti>
                <div>
                  <TypeTitle1>For Product Teams</TypeTitle1>
                  <TypeDesc>
                    Ship features faster with pre-built integrations for payments, auth, messaging, and data processing. Focus on user experience, not infrastructure.
                  </TypeDesc>
                </div>
              </FlexRowAPI>
            </TypeCard>

            {/* For Engineering Teams */}
            <TypeCard>
              <FlexRowAPI>
                <IconTileEnterprise>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 16L22 12L18 8" stroke="#C27AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 8L2 12L6 16" stroke="#C27AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.5 4L9.5 20" stroke="#C27AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </IconTileEnterprise>
                <div>
                  <TypeTitle1>For Engineering Teams</TypeTitle1>
                  <TypeDesc>
                    Build robust systems with battle-tested APIs. Get observability, fault tolerance, and performance optimization out of the box.
                  </TypeDesc>
                </div>
              </FlexRowAPI>
            </TypeCard>

            {/* Bridge APIs */}
            <TypeCard>
              <FlexRowAPI>
                <IconTilePerformance>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </IconTilePerformance>
                <div>
                  <TypeTitle1>For Enterprise</TypeTitle1>
                  <TypeDesc>
                    Meet compliance requirements with SOC 2, HIPAA, and GDPR-ready APIs. Enterprise SLAs, dedicated support, and custom integrations available.
                  </TypeDesc>
                </div>
              </FlexRowAPI>
            </TypeCard>
          </Grid2>
        </Section>

        {/* Explore Our APIs */}
        <Section>
          <SectionTitle>Explore Our APIs</SectionTitle>
          <SectionSubtitle>
            Dive into comprehensive documentation, test endpoints interactively, and <br/> 
            start integrating in minutes
          </SectionSubtitle>

          <Grid3>
            {/* HCP Data Services */}
            <TypeCard>
              <FlexRow>
                <IconTile gradient={colors.gradientBlue}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M20.0002 2.66602H8.00016C7.29292 2.66602 6.61464 2.94697 6.11454 3.44706C5.61445 3.94716 5.3335 4.62544 5.3335 5.33268V26.666C5.3335 27.3733 5.61445 28.0515 6.11454 28.5516C6.61464 29.0517 7.29292 29.3327 8.00016 29.3327H24.0002C24.7074 29.3327 25.3857 29.0517 25.8858 28.5516C26.3859 28.0515 26.6668 27.3733 26.6668 26.666V9.33268L20.0002 2.66602Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.6665 2.66602V7.99935C18.6665 8.70659 18.9475 9.38487 19.4476 9.88497C19.9477 10.3851 20.6259 10.666 21.3332 10.666H26.6665" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.3332 16C12.9795 16 12.6404 16.1405 12.3904 16.3905C12.1403 16.6406 11.9998 16.9797 11.9998 17.3333V18.6667C11.9998 19.0203 11.8594 19.3594 11.6093 19.6095C11.3593 19.8595 11.0201 20 10.6665 20C11.0201 20 11.3593 20.1405 11.6093 20.3905C11.8594 20.6406 11.9998 20.9797 11.9998 21.3333V22.6667C11.9998 23.0203 12.1403 23.3594 12.3904 23.6095C12.6404 23.8595 12.9795 24 13.3332 24" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.6665 24C19.0201 24 19.3593 23.8595 19.6093 23.6095C19.8594 23.3594 19.9998 23.0203 19.9998 22.6667V21.3333C19.9998 20.9797 20.1403 20.6406 20.3904 20.3905C20.6404 20.1405 20.9795 20 21.3332 20C20.9795 20 20.6404 19.8595 20.3904 19.6095C20.1403 19.3594 19.9998 19.0203 19.9998 18.6667V17.3333C19.9998 16.9797 19.8594 16.6406 19.6093 16.3905C19.3593 16.1405 19.0201 16 18.6665 16" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </IconTile>
                <div>
                  <TypeTitle>HCP Data Services</TypeTitle>
                  <TypeDesc>
                    Browse OpenAPI/Swagger docs with live examples. Test every endpoint directly in your browser with our interactive API explorer. No setup required.
                  </TypeDesc>
                </div>
              </FlexRow>

              <BulletList>
                <li>
                  <Dot>
                    <CheckIcon />
                  </Dot>
                  <span>Complete endpoint reference with request/response examples</span>
                </li>
                <li>
                  <Dot>
                    <CheckIcon />
                  </Dot>
                  <span>Try it now feature to test APIs without writing code</span>
                </li>
                <li>
                  <Dot>
                    <CheckIcon />
                  </Dot>
                  <span>Schema validation and type definitions for every endpoint</span>
                </li>
              </BulletList>
              <div className='rowBoxButton'>
                <Button size="large" className='button-custom' variant="primary"  to="/">
                  Explore API
                </Button>
              </div>
            </TypeCard>

            {/* OdyssAI */}
            <TypeCard>
              <FlexRow>
                <IconTile gradient={colors.gradientPink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M24 21.3327L29.3333 15.9993L24 10.666" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.99984 10.666L2.6665 15.9993L7.99984 21.3327" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.3332 5.33398L12.6665 26.6673" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </IconTile>
                <div>
                  <TypeTitle>OdyssAI</TypeTitle>
                  <TypeDesc>
                    Copy-paste ready code snippets in your language of choice. Official SDKs with full TypeScript support and comprehensive error handling.
                  </TypeDesc>
                </div>
              </FlexRow>

              <BulletList>
                <li>
                  <Dot color={colors.accentPurple}>
                    <CheckIcon />
                  </Dot>
                  <span>Unified API gateway for all microservices</span>
                </li>
                <li>
                  <Dot color={colors.accentPurple}>
                    <CheckIcon />
                  </Dot>
                  <span>Built-in security and compliance features</span>
                </li>
                <li>
                  <Dot color={colors.accentPurple}>
                    <CheckIcon />
                  </Dot>
                  <span>Automatic error handling and retry logic</span>
                </li>
              </BulletList>
              <div className='rowBoxButton'>
                <Button size="large" className='button-custom' variant="primary"  to="/">
                  Explore API
                </Button>
              </div>
            </TypeCard>

            {/* Sypher */}
            <TypeCard>
              <FlexRow>
                <IconTile gradient={colors.gradientGreen}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M29.3332 9.33398L17.9998 20.6673L11.3332 14.0007L2.6665 22.6673" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.3335 9.33398H29.3335V17.334" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </IconTile>
                <div>
                  <TypeTitle>Sypher</TypeTitle>
                  <TypeDesc>
                    These serve as foundational or middleware components. Bridge APIs are responsible for connecting,
                    orchestrating, or routing requests between other APIs or services in your ecosystem. They often
                    handle transformation or aggregation of data between systems.
                  </TypeDesc>
                </div>
              </FlexRow>

              <BulletList>
                <li>
                  <Dot color={colors.accentGreen}>
                    <CheckIcon />
                  </Dot>
                  <span>Auto-scaling infrastructure with 99.9% uptime</span>
                </li>
                <li>
                  <Dot color={colors.accentGreen}>
                    <CheckIcon />
                  </Dot>
                  <span>Global CDN for low-latency worldwide</span>
                </li>
                <li>
                  <Dot color={colors.accentGreen}>
                    <CheckIcon />
                  </Dot>
                  <span>Real-time monitoring and alerting</span>
                </li>
              </BulletList>
              <div className='rowBoxButton'>
                <Button size="large" className='button-custom' variant="primary"  to="/">
                  Explore API
                </Button>
              </div>
            </TypeCard>
          </Grid3>
        </Section>

        <Section>
          <Grid1>
            <CardContactType>
              <SvgVideo className="svgVideo">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20 16L32 24L20 32V16Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </SvgVideo>

              <div className="contactContent">
                <h2>Start Building Today</h2>
                <p>Access full API documentation, get your API keys, and start making<br /> requests in under 5 minutes</p>

                <RowBoxButton className="rowBoxButton">
                  <Button to="/" className="button-custom">View Full Documentation  
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                  
                  </Button>
                  <Button to="/" className="button-custom1">Quick Start Guide</Button>
                </RowBoxButton>

                <Divider />

                <StatsRow>
                  <Stat>
                    <div className="value">142</div>
                    <div className="label">API Endpoints</div>
                  </Stat>
                  <Stat>
                    <div className="value">6</div>
                    <div className="label">Language SDKs</div>
                  </Stat>
                  <Stat>
                    <div className="value">99.8%</div>
                    <div className="label">Uptime SLA</div>
                  </Stat>
                  <Stat style={{ borderRight: "0px solid transparent" }}>
                    <div className="value">&lt;50ms</div>
                    <div className="label">Avg Latency</div>
                  </Stat>
                </StatsRow>
              </div>

            </CardContactType>            
          </Grid1>
        </Section>
      </Container>
    </PageWrapper>
  );
}
