// Amazon Affiliate Program API Types

export interface Campaign {
  advertiserId: string;
  advertiserType: "SELLER" | "VENDOR";
  brandId: string;
  gcorId: string;
  brandName: string;
  brandRegistryName: string;
  campaignId: string;
  campaignName: string;
  campaignInstruction: string;
  marketplaceId: string;
  campaignAsins: string[];
  campaignType: "BOUNTY_BOARD";
  totalBudget: number;
  currencyCode: string;
  startDateTimeInEpochMills: number;
  scheduledEndDateTimeInEpochMills: number;
  actualEndDateTimeInEpochMills: number;
  createDateTimeInEpochMills: number;
  lastUpdatedDateTimeInEpochMills: number;
  entityAggregateState: unknown;
  rank: number;
  campaignQualifier: string;
  campaignQualifiers: string[];
  campaignStatus: "SCHEDULED" | "DELIVERING" | "PENDING_CREATOR_ACTION";
  interestTags: string[];
  campaignBrowseNodes: number[];
  providingSample: boolean;
  fullyClaimed: boolean;
  campaignEdited: boolean;
  contentSubmissionRequired: boolean;
  campaignUnlockTimeInEpochMills: number;
  numberOfCreatorsRequired: number;
  numberOfCreatorsAccepted: number;
  numberOfCreatorsWithContentSubmitted: number;
  commissionPercentage: number;
  promotionalPaymentPercentage: number;
  remainingBudget: number;
  clicks: number;
  orders: number;
  sales: number;
  spend: number;
  numberOfContentSubmissionsRequired: number;
  socialMediaPlatforms: unknown;
  campaignStepStatus: unknown;
}

export interface CampaignsByBrand {
  ALL: Campaign[];
}

export interface CampaignDataItem {
  campaignsByBrand: CampaignsByBrand;
}

export type AmazonCampaignData = CampaignDataItem[];

export interface AmazonApiError {
  message: string;
  status?: number;
  code?: string;
}

export interface AmazonApiResponse {
  responses: AmazonCampaignData;
}
