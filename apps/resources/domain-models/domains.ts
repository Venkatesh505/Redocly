import React from 'react';
import { Icons } from './domainIcons';

export interface Category {
  id: string;
  label: string;
  shortDec: string;
  description: string;
  schema: string;
  icon?: React.ReactNode;
}

export interface Domain {
  id: string;
  label: string;
  description: string;
  terms: number;
  icon?: React.ReactNode;
  categories: Category[];
}

export const domains: Domain[] = [
  {
    id: 'customer',
    label: 'Customer',
    description: 'Unified customer data models encompassing both business entities and individual persons.',
    terms: 2,
    icon: Icons.customer,
    categories: [
      {
        id: 'business',
        label: 'Business',
        shortDec: 'Business entities',
        description: 'Enterprise data models for organizations, departments, and business operations.',
        icon: Icons.business,
        schema: `{
  "business": {
    "acid": "string",
    "acidHistory": [{ "acid": "string", "validFrom": "datetime", "validTo": "datetime" }],
    "legalBusinessName": "string",
    "accountName": "string",
    "displayName": "string",
    "departments": [
      { "name": "string", "code": "string", "isPrimary": "boolean", "validFrom": "datetime", "validTo": "datetime" }
    ],
    "npiNumber": "string",
    "npiEffectiveDate": "date",
    "npiEndDate": "date",
    "deaNumber": "string",
    "deaEffectiveDate": "date",
    "deaEndDate": "date",

    "additioinalIdentifiers": [
      { "type": "string", "value": "string" }
    ],

    "contactPreferences": { 
      "doNotCall": "boolean",
      "doNotEmail": "boolean",
      "preferredChannel": "string"
    },
    "contacts": [ 
      { "name": "string", 
	  "role": "string", 
	  "email": "string", 
	  "phone": "string", 
	  "isPrimary": "boolean",
	  "noContact": "boolean",
      "noContactReason": "string"
	  }
    ],
    
    "addresses": [
      {
        "addressType": "string",
        "addressLine1": "string",
        "addressLine2": "string",
        "addressLine3": "string",
        "city": "string",
        "county": "string",
        "state": "string",
        "zipCode": "string",
        "zipCodeExtension": "string",
        "country": "string",
        "latitude": "number",
        "longitude": "number",
        "addressCertificationStatusCode": "string",
        "addressCertificationStatus": "string",
        "isUndeliverable": "boolean",
        "isPrimary": "boolean",
        "lastUpdated": "datetime",
        "isActive": "boolean"
      }
    ],
    
    "affiliations": [
      { "relatedBusinessId": "string", "type": "string", "validFrom": "datetime", "validTo": "datetime" }
    ],
    
	"additionalAttributes":{
		"name" : "value"
	},
	
	"sourceSystem": "string",
    "sourceTimestamp": "datetime",
    "lastSync": "datetime",
    
    "audit": {
      "createdDate": "datetime",
      "createdBy": "string",
      "modifiedDate": "datetime",
      "modifiedBy": "string",
      "modifiedSource": "string"
    }
  }
}
`
      },
      {
        id: 'person',
        label: 'Person',
        shortDec: 'Individuals & Contacts',
        description: 'Enterprise data models for organizations,',
        icon: Icons.person,
        schema: `{
  "person": {
    "acid": "number",
    "acidHistory": [{ "acid": "number", "validFrom": "datetime", "validTo": "datetime" }],
    "npi": "string",
    "firstName": "string",
    "prefix": "string",
    "middleName": "string",
    "lastName": "string",
    "displayName": "string",
    "gender": "string", // enum: M|F|O|U
    "customerType": "string", // enum: Physician|Nurse|OfficeStaff|Other
    "roles": [ "Clinical", "Administrative", "Billing", "Other" ],
    "dateOfBirth": "date",
    "prescriberStatus": "string", // enum: PRESCRIBERS|NONPRESCRIBERS
    "professionalDesignation": "string",
    "isActive": "boolean",
    "speciality": [{ "code": "string", "name": "string", "isPrimary": "boolean" }],
    "department": "string",

    "additionalIdentifiers": [
      { "type": "string", "value": "string" }
    ],
    "education": [
      {
        "type": "string",
        "institution": "string",
        "graduationYear": "integer"
      }
    ],
    "licenses": [
      {
        "type": "string",
        "stateCode": "string",
        "licenseNumber": "string",
        "expirationDate": "date"
      }
    ],
    "certifications": [
      { "type": "string", "number": "string", "expirationDate": "date" }
    ],
    "regulatory": {
      "deaRegistration": {
        "number": "string",
        "isRevoked": "boolean",
        "effectiveDate": "date",
        "endDate": "date"
      },
      "isPDRP": "boolean"      
    },
    "businessAffiliations": [
      {
        "businessId": "string",
        "role": "string",
        "isPrimary": "boolean",
        "validFrom": "datetime",
        "validTo": "datetime"
      }
    ],
    "contactPreferences": {
      "preferredChannel": "string",
      "doNotCall": "boolean",
      "doNotMail": "boolean"
    },
	
    "contacts": [
      { "name": "string", 
	  "role": "string", 
	  "email": "string", 
	  "phone": "string", 
	  "isPrimary": "boolean",
	  "noContact": "boolean",
      "noContactReason": "string"
	  
	  }
    ],
    "addresses": [
      {
        "addressType": "string",
        "addressLine1": "string",
        "addressLine2": "string",
        "addressLine3": "string",
        "city": "string",
        "county": "string",
        "state": "string",
        "zipCode": "string",
        "zipCodeExtension": "string",
        "country": "string",
        "latitude": "number",
        "longitude": "number",
        "addressCertificationStatusCode": "string",
        "addressCertificationStatus": "string",
        "isUndeliverable": "boolean",
        "isPrimary": "boolean",
        "lastUpdated": "datetime",
        "isActive": "boolean"
      }
    ],
	
	"additionalAttributes":{
		"name" : "value"
	}
    
    "sourceSystem": "string",
    "sourceTimestamp": "datetime",
    "lastSync": "datetime",
   
    "audit": {
      "createdDate": "datetime",
      "createdBy": "string",
      "modifiedDate": "datetime",
      "modifiedBy": "string",
      "modifiedSource": "string"
    }
  }
}
`
      }
    ]
  },
 
];
