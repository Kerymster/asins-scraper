/**
 * Extracts and normalizes ASINs from Amazon campaign data
 * @param campaignData - The raw campaign data from Amazon API
 * @returns Array of unique ASINs
 */
export const extractAsinsFromCampaignData = (campaignData: any): string[] => {
  if (
    !campaignData ||
    !Array.isArray(campaignData) ||
    campaignData.length === 0
  ) {
    console.warn("No campaign data available or invalid format");
    return [];
  }

  try {
    // Start with data[0]
    const firstDataItem = campaignData[0];

    if (!firstDataItem || !firstDataItem.campaignsByBrand) {
      console.warn("No campaignsByBrand found in data");
      return [];
    }

    // Get the ALL campaigns
    const allCampaigns = firstDataItem.campaignsByBrand.ALL;

    if (!Array.isArray(allCampaigns)) {
      console.warn("ALL campaigns is not an array");
      return [];
    }

    // Extract all ASINs from all campaigns
    const allAsins: string[] = [];

    allCampaigns.forEach((campaign: any, index: number) => {
      if (campaign && Array.isArray(campaign.campaignAsins)) {
        allAsins.push(...campaign.campaignAsins);
        console.log(
          `Campaign ${index}: Found ${campaign.campaignAsins.length} ASINs`
        );
      }
    });

    // Remove duplicates and filter out empty values
    const uniqueAsins = Array.from(
      new Set(allAsins.filter((asin) => asin && asin.trim()))
    );

    console.log(`Total unique ASINs extracted: ${uniqueAsins.length}`);
    console.log("Sample ASINs:", uniqueAsins.slice(0, 5));

    return uniqueAsins;
  } catch (error) {
    console.error("Error extracting ASINs from campaign data:", error);
    return [];
  }
};
