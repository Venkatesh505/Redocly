import styled from "styled-components";
import { breakpoints } from "@redocly/theme/core/utils";
import { Link, type To } from "react-router-dom";

/* ===== Layout wrappers ===== */
export const PageWrapper = styled.div`
  padding: 60px 0;
  background: linear-gradient(180deg, #050d1f 0%, #071d49 50%, #0a2540 100%);
  color: #fff;
  min-height: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 52px;
  font-weight: 700;
  margin: 0px 0px 10px;

  @media (max-width: ${breakpoints.small}) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Subtitle = styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.449px;
    margin: 10px 0px 40px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 35px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 14px 16px 14px 44px;
  border-radius: 12px;
  border: 1px solid rgba(71, 85, 105, 0.4);
  background: linear-gradient(180deg, #0b1a2b 0%, #0c1f3f 100%);
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: 0.3s ease;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    border-color: #2b7fff;
    box-shadow: 0 0 0 2px rgba(43, 127, 255, 0.2);
  }
`;

/* ===== Categories ===== */
export const CategoryWrapperTitle = styled.h5`
  color: #99a1af;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
`;

export const CategoryButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  border-radius: 12px;
  border: 1px solid ${(p) => (p.$active ? "#2B7FFF" : "rgba(54, 65, 83, 0.5)")};
  background: ${(p) =>
    p.$active ? "linear-gradient(90deg,#2B7FFF 0%,#00B8DB 100%)" : "rgba(30,41,57,0.5)"};
  box-shadow: ${(p) =>
    p.$active
      ? "0 10px 15px -3px rgba(43, 127, 255, 0.30), 0 4px 6px -4px rgba(43, 127, 255, 0.30)"
      : "none"};
  color: #d1d5dc;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.312px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    border-color: #2b7fff;
  }
`;

/* ===== Cards layout: FLEX ===== */
export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const GridItem = styled.div`
  flex: 0 1 calc((100% - 40px) / 3);

  @media (max-width: ${breakpoints.small}) {
    flex-basis: 100%;
  }
`;

export const Card = styled.div<{ $expanded?: boolean }>`
  position: relative;
  height: 100%;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.08), 0 4px 5px -3px rgba(0, 0, 0, 0.10);
  
  transition:
    box-shadow 220ms ease,
    background 300ms ease,
    border-color 360ms ease,
    will-change: background, border-color;

    border: 2px solid rgba(71, 159, 248, 0.2);
    background: linear-gradient(180deg, #0a1929 0%, #071e4c 100%);
    overflow: hidden;

  &:hover {
  background: radial-gradient(179.53% 122.61% at 53.67% 0, #0d214a 4.51%, #11254f 51.27%, #192f5d 87.63%) padding-box, linear-gradient(90deg, #4d61e8 .44%, #3770ea 28.29%, #479ff8 64.93%, #59ace7 86.99%) border-box; 
        border: 2px solid #0000; 
  border: 2px solid rgba(71, 159, 248, 0.2);
  // box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10);
  }

  &::after {
    content: "";
    position: absolute;
    left: 10px;
    right: 8px;
    bottom: 0px;
    height: 1px;
    border-radius: 0 0 14px 14px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #479FF8 50%, rgba(0, 0, 0, 0) 100%);
    box-shadow: 0 0 12px rgba(43, 127, 255, 0.35), 0 1px 20px rgba(43, 127, 255, 0.25);
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 0;
  }

  &::before {
    content: "";
    width: 80%;
    position: absolute;
    left: 10%;
    right: 8px;
    top: 0px;
    height: 4px;
    border-radius: 0 0 14px 14px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #479FF8 50%, rgba(0, 0, 0, 0) 100%);
    box-shadow: 0 0 12px rgba(43, 127, 255, 0.35), 0 1px 20px rgba(43, 127, 255, 0.25);
    opacity:0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 0;
  }

  /**
   * Keyboard accessibility: show a clean focus ring
   */
  &:focus-visible {
    outline: 2px solid #68b6ff;
    outline-offset: 2px;
    box-shadow:
      0 24px 38px rgba(0, 0, 0, 0.30),
      0 12px 20px rgba(0, 0, 0, 0.18);
  }
`;

/* ——— CardTop highlight ——— */
export const CardTop = styled.div<{ $highlight?: boolean }>`
  position: relative;
  z-index: 1;
  isolation: isolate;

`;

export const BrandBlock = styled.div`
  margin-bottom: 15px;
  img,
  .rd-image {
    width: 200px;
    max-width: 100%;
    height: auto;
  }
`;

export const ServiceName = styled.h3`
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.439px;
  margin: 0 0 10px;
`;

export const ServiceDesc = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.15px;
  margin: 0 0 20px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;

  height: calc(22px * 3);
  
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  gap: 12px;
`;

export const LeftRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RightRow = styled.div`
  display: flex;
  align-items: center;
`;

export const ApiBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 12px;
  background: rgba(37, 99, 235, 0.15);
  border: 1px solid rgba(37, 99, 235, 0.4);
  color: #93c5fd;
  font-size: 12px;
  font-weight: 700;
`;

export const IconMono = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
`;

export const ActionPill = styled.button`
  padding: 6px 14px;
  border-radius: 10px;
  border: 1px solid #a6b5e0;
  background: rgba(15, 23, 42, 0.35);
  color: #99a1af;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  transition:
    background 200ms ease,
    border-color 200ms ease,
    color 200ms ease,
    transform 120ms ease;

  &:active {
    transform: translateY(1px) scale(0.995);
  }

  &:hover {
    color: #fff;
    border: 1px solid #155dfc;
    background: #155dfc;

    svg path {
      stroke: #fff;
    }
  }
`;

/** === Smooth expandable === */
export const CardBottomExpandContent = styled.div<{ $expanded?: boolean }>`
  /* Tunables */
  --expand-duration: 560ms;                  /* total expand time */
  --fade-duration: 360ms;                    /* fade/translate time */
  --delay-open: 60ms;                        /* tiny delay before expansion starts */
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);

  /* Collapsing container */
  max-height: ${(p) => (p.$expanded ? "640px" : "0px")};
  opacity: ${(p) => (p.$expanded ? 1 : 0)};
  transform: translateY(${(p) => (p.$expanded ? "0" : "-6px")});
  overflow: hidden;

  /* Margin only when open so it doesn't reserve space while closed */
  margin-top: ${(p) => (p.$expanded ? "50px" : "0")};

  transition:
    max-height var(--expand-duration) var(--ease-smooth) ${(p) => (p.$expanded ? "var(--delay-open)" : "0ms")},
    opacity var(--fade-duration) var(--ease-smooth),
    transform var(--fade-duration) var(--ease-smooth),
    margin-top 180ms ease;

  will-change: max-height, opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
  }

  /* Stagger inner children for a polished reveal */
  > * {
    opacity: ${(p) => (p.$expanded ? 1 : 0)};
    transform: translateY(${(p) => (p.$expanded ? "0" : "8px")});
    transition:
      opacity 320ms var(--ease-smooth),
      transform 320ms var(--ease-smooth);
    will-change: opacity, transform;
  }
  > *:nth-child(2) { transition-delay: ${(p) => (p.$expanded ? "70ms" : "0ms")}; }
  > *:nth-child(3) { transition-delay: ${(p) => (p.$expanded ? "110ms" : "0ms")}; }
  > *:nth-child(4) { transition-delay: ${(p) => (p.$expanded ? "140ms" : "0ms")}; }
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 16px 0;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  border-radius: 8px;
  border: 1px solid rgba(71, 159, 248, 0.3);
  background: rgba(71, 159, 248, 0.1);
  color: #99a1af;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  padding: 6px 20px;
`;

export const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 14px;
  margin-top: 18px;

  @media (max-width: ${breakpoints.small}) {
    grid-template-columns: 1fr;
  }
   
  }
`;

export const LearnMoreButton = styled.button`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.15px;
  padding: 10px 15px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  // background: #155dfc;
  // transition: 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-decoration:none;

  &:hover {
    gap: 10px;
  }
`;

export const ApiLinkButton  = styled(Link)`

  padding: 6px 14px;
  border-radius: 10px;
  border: 1px solid #a6b5e0;
  background: rgba(15, 23, 42, 0.35);
  color: #99a1af;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease;
  text-decoration: none;

  // display: inline-flex;
  // align-items: center;
  // gap: 8px;
  // padding: 8px 12px;
  // border-radius: 8px;
  // text-decoration: none;
  // color: #d1d5dc;
  // font-size: 14px;
  // font-weight: 600;
  // line-height: 20px;
  // letter-spacing: -0.15px;
  // padding: 10px 16px;
  // border-radius: 12px;
  // border: 1px solid rgba(148, 163, 184, 0.4);
  // background: transparent;
  // cursor: pointer;
  // transition: 0.3s ease;

  &:hover {
    background: #155dfc;
    border-color: #155dfc;
    color: #fff;

    svg path {
      stroke: #fff;
    }

  }
`;

/* ===== Pagination ===== */
export const Pagination = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.312px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(p) => (p.$active ? "#155DFC" : "#27272A")};
  background: ${(p) => (p.$active ? "#155DFC" : "#18181B")};
  color: ${(p) => (p.$active ? "#fff" : "#99A1AF")};
  box-shadow: ${(p) =>
    p.$active
      ? "0 10px 15px -3px rgba(21, 93, 252, 0.50), 0 4px 6px -4px rgba(21, 93, 252, 0.50)"
      : "none"};
  cursor: pointer;
  transition: 0.25s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #2b7fff;
    color: #fff;
  }

  ${(p) =>
    p.$active &&
    `
      box-shadow: 0 0 12px rgba(43, 127, 255, 0.6);
    `}
`;