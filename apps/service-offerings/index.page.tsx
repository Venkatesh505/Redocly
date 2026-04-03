import React, { JSX, useMemo, useState } from "react";
import { Button } from '@redocly/theme';
import { Image } from "@redocly/theme/markdoc/components/Image/Image";
import { Link, type To } from "react-router-dom";

import CategoryIcon from "./CategoryIcon";
import {
  BrainIcon,
  ShieldIcon,
  DatabaseIcon,
  CloudIcon,
  IconProps,
} from "./serviceIcons";

import {  PageWrapper,  Container,  Title,  Subtitle,  SearchWrapper,  SearchIcon,  SearchInput,  CategoryWrapperTitle, 
   CategoryWrapper,  CategoryButton,  Grid,  GridItem,  Card,  CardTop,  BrandBlock,  ServiceName,  ServiceDesc,  HeaderRow,
   LeftRow,  RightRow,  ApiBadge,  IconMono,  ActionPill, CardBottomExpandContent,  TagWrapper,  Tag,  ButtonRow,  LearnMoreButton, 
    ApiLinkButton ,  Pagination,  PageButton,} from "./services.styles";

/* Frontmatter (Redocly) */
export const frontmatter = {
  title: "Service Offerings",
  description: "Service Offerings",
};

/* Types */
type Category =
  | "All"
  | "Experience API"
  | "Core API";

interface Service {
  id: number;
  name: string;
  description: string;
  category: Exclude<Category, "All">;
  icon: React.FC<IconProps>;
  apiCount: number;
  logoSrc?: string;
  apiLink: To;
}

interface ButtonProps {
  $active?: boolean;
}

/* Data */
const CATEGORIES: Category[] = [
  "All",
  "Core API",
  "Experience API",
];

const OdyssLogo = require("../images/OdyssAILogo.png");


const SERVICES: Service[] = [
    {
        id: 1,
        name: "HCP Capture",
        description: "The Hcp Capture service provides functionality for saving survey details for HCPs while handling multiple OptIns.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=hcp capture",
    },
    {
        id: 2,
        name: "HCP Lookup",
        description: "The Hcp Lookup service provides functionality for getting the HCP data using various multiple possible parameters.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=hcp lookup",
    },
    {
        id: 3,
        name: "HCP Registration",
        description: "The Hcp Registration Service provides functionality for registering HCPs, checking if a profile already exists and update their profile details.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=hcp registration",
    },    
    {
        id: 4,
        name: "Jumpstart Registration",
        description: "This service provides functionality to help in registering the students with Abbvie.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=jumpstart registration",
    },
    {
        id: 5,
        name: "MDM Party Search",
        description: "The MDMPartySearch web service provides capability to the Requesting system to search the entire DAL database that holds HCP/HCO Master Data to get the HCP and HCO/HCI Party And Party Attributes data.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=mdm party search",
    },
    {
        id: 6,
        name: "Request A Rep",
        description: "This service provides the functionality to an HCP for requesting a representative.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=rar",
    },
    {
        id: 7,
        name: "Consent Capture Service",
        description: "This service provides the functionality to subscribe the brand and it sub-brands from OneTrust and  subscribe them to Marketo.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=consent",
    },
    {
        id: 8,
        name: "Contact Executive Service",
        description: "The contact executive service provides functionality to contact an Account Executive.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=contact",
    },
    {
        id: 9,
        name: "Follow Up Request",
        description: "The service provides functionality for follow up based on incoming validated request.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=fas",
    },
    {
        id: 10,
        name: "Formulary Service",
        description: "This service provides the functionality to get the formulary data based on the various geo codes.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=formulary service",
    },
    {
        id: 11,
        name: "Formulary ISA Data Service",
        description: "This service provides the functionality to get the formulary ISA and Botox iPlan data.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=formulary isa",
    },
    {
        id: 12,
        name: "Staff Registration",
        description: "The Staff Registration service provides functionality for registering HCP Staff individuals",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=staff registation",
    },
    {
        id: 13,
        name: "Dalvance Site Locator",
        description: "This service provides the feature to get the list of Dalvance Infusion Centers and Sites.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=dalvance site locator",
    },
    {
        id: 14,
        name: "ESB API",
        description: "The service provides functionality for capturing esb details based on incoming validated request.",
        category: "Experience API",
        icon: ShieldIcon,
        apiCount: 1,
        apiLink: "/catalog?filter=esb",
    }
  ];

/* Component */
export default function ServiceOfferingPage(): JSX.Element {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const ITEMS_PER_PAGE = 9;

  // Only one card can expand at a time
  const toggleExpand = (id: number) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchCategory =
        activeCategory === "All" || service.category === activeCategory;
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        service.name.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <PageWrapper>
      <Container>
        <Title>Service Offerings</Title>
        <Subtitle>
          Production-ready APIs and microservices to accelerate your <br /> development workflow.
        </Subtitle>

        {/* Search */}
        <SearchWrapper>
          <SearchIcon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </SearchIcon>
          <SearchInput
            placeholder="Search services..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
              setExpandedId(null); // collapse on search change
            }}
          />
        </SearchWrapper>

        {/* Cards */}
        <Grid>
          {paginatedServices.map((service) => {
            const isExpanded = expandedId === service.id;
            const detailsId = `service-details-${service.id}`;

            return (
              <GridItem key={service.id}>
                <Card $expanded={isExpanded}>
                  {/* Top */}
                  <CardTop>
                    <ServiceName>{service.name}</ServiceName>
                    <ServiceDesc style={{ color: "#CBD3E1" }}>
                      {service.description}
                    </ServiceDesc>                    
                    <ButtonRow>
                      {/* React Router version */}   
                      <LearnMoreButton></LearnMoreButton>                   
                      <ApiLinkButton
                          to={service.apiLink}
                          className="apiButton"
                          aria-disabled={service.apiCount === 0}
                          onClick={(e: React.MouseEvent) => {
                            if (service.apiCount === 0) e.preventDefault();
                          }}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <path d="M10.88 12.2401L14.96 8.16007L10.88 4.08008" stroke="#D1D5DC" strokeWidth="1.36" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5.43998 4.08008L1.35999 8.16007L5.43998 12.2401" stroke="#D1D5DC" strokeWidth="1.36" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        API
                      </ApiLinkButton >
                    </ButtonRow>                    
                  </CardTop>
                </Card>
              </GridItem>
            );
          })}
        </Grid>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PageButton
              onClick={() =>
                setCurrentPage((prev) => {
                  const next = Math.max(prev - 1, 1);
                  if (next !== prev) setExpandedId(null); // collapse on page change
                  return next;
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </PageButton>

            {Array.from({ length: totalPages }, (_, index) => (
              <PageButton
                key={index}
                $active={currentPage === index + 1}
                onClick={() => {
                  if (currentPage !== index + 1) {
                    setCurrentPage(index + 1);
                    setExpandedId(null); // collapse on page jump
                  }
                }}
              >
                {index + 1}
              </PageButton>
            ))}

            <PageButton
              onClick={() =>
                setCurrentPage((prev) => {
                  const next = Math.min(prev + 1, totalPages);
                  if (next !== prev) setExpandedId(null); // collapse on page change
                  return next;
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </PageButton>
          </Pagination>
        )}
      </Container>
    </PageWrapper>
  );
}