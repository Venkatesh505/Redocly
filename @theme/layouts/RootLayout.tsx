import React from 'react';
import { useLocation } from 'react-router-dom';

import type { JSX } from 'react';

import { Navbar } from '@redocly/theme/components/Navbar/Navbar';
import { Footer } from '@redocly/theme/components/Footer/Footer';
import { SkipContent } from '@redocly/theme/components/SkipContent/SkipContent';
import { AIAssistantButton } from '@redocly/theme/components/Buttons/AIAssistantButton';
import { useThemeHooks } from '@redocly/theme/core/hooks';

export type LayoutConfig = {
  children: React.ReactNode;
};

export function RootLayout({ children }: LayoutConfig): JSX.Element {

  const { useSearch } = useThemeHooks(); 
  const { askAi } = useSearch(); 
  const location = useLocation(); 
  const isHomePage = location.pathname === "/";

  const isArchitecturePage = location.pathname.startsWith("/apps/architecture");
  const isContactusPage = location.pathname.startsWith("/apps/support/contact-us");
  const isExternalLinksPage = location.pathname.startsWith("/apps/resources/support-links");
  
  const isToolsTechnoPage = location.pathname.startsWith("/apps/resources/tools-technologies");
const isUseCasesPage = location.pathname.startsWith("/apps/resources/use-cases");

  const isDomainModelsPage = location.pathname.startsWith("/apps/resources/domain-models");

const isChangeLogPage = location.pathname.startsWith("/apps/support/change-log");

const isServicesPage = location.pathname.startsWith("/apps/service-catalog");

const isServiceOfferPage = location.pathname.startsWith("/apps/service-offerings");

const isAPICatalogPage = location.pathname.startsWith("/apps/api-catalog");

  const isComingSoonPage = location.pathname.startsWith("/apps/coming-soon-page");

  const isSpecialPage = isHomePage || isArchitecturePage || isContactusPage || isChangeLogPage || 
  isDomainModelsPage || isUseCasesPage || isExternalLinksPage || isToolsTechnoPage || 
  isComingSoonPage || isServiceOfferPage || isAPICatalogPage || isServicesPage;

  return (
    <div
      data-component-name="layouts/RootLayout"
      className={isSpecialPage  ? "bodybgblue" : "internalpage"}
    >
      <SkipContent />
      <Navbar />
      {children}
      {/* <Footer />
      {askAi && <AIAssistantButton />} */}
    </div>
  );
}
