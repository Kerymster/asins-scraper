import React from "react";

interface CampaignDataProviderProps {
  children: (data: any) => React.ReactNode;
}

const CampaignDataProvider = async ({
  children,
}: CampaignDataProviderProps) => {
  try {
    // Make the API call on the server side
    const response = await fetch(
      "https://affiliate-program.amazon.com/connect/api/campaign/search",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
          Connection: "keep-alive",
          "Content-Type": "application/json",
          Cookie:
            'session-id=143-5427155-2462045; i18n-prefs=USD; ubid-main=132-0725503-2468763; ac-language-preference=en_US%2F%22%08%EF%BF%BD%DF%A5%EF%BF%BD%EF%BF%BD%2C%EF%BF%BD%EF%BF%BD%EF%BF%BDI%EF%BF%BDs%EF%BF%BDLch%EF%BF%BD%EF%BF%BD%EF%BF%BDA%EF%BF%BD%7C%EF%BF%BD%EF%BF%BD%EF%BF%BD%1A%25%EF%BF%BD%EF%BF%BD%18%CB%B1u%1A%EF%BF%BD32%60%EF%BF%BD%06%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BDZ%EF%BF%BD%13%EF%BF%BDZ%604%17%16%EF%BF%BD%EF%BF%BDwM%CD%98D%EF%BF%BD%24%22; cwr_u=5f80d9b0-8f0e-43a7-aa34-cc6c64c30989; lc-main=en_US; csm-sid=143-5725734-7356340; skin=noskin; at-main=Atza|IwEBIDiA7qLmcXu2_ihbEWeclZS8qiaQFFf2GaEWK9xECD9eUhHKAM1xRfodkKLfjxWcMcI5ddHleUr1S8aHjeEQH4ZtT13rwjTQ-towD6Fr9wJ4eswbYEi_ob2iFqVPJIcn6KQjj8rCUAILxm--_2DptcsH3Sc62HTXt9WmK6NU55tVJS3CEZSdxuvNelK6-7mB8lRGMzqa6NRHN109E-h-AswlgFhtST3OJJoe1USC_LupgcrTp80Izw3ZfJObD2j6jt-KyhaPYTJbu_JcmGKtC5yf5KxRnsW1EmxwH4nfKM8h4Q; sess-at-main="a8kxoyPvERArwee2rxzsFmy6rFGtkExqrHH5Ueo69JE="; sst-main=Sst1|PQHhI8ihteM5Xws4oFHiz23LCfm0puh93OPtn-iEmRrEtE8lsQQ9It6FIz45iCMxYdxr4G2hWOXu8rOk5Gktd-FLTd956_M4EyjTtqQ9gghkgFkwLreRPLXAYGwAKfK4KgV3zXl15A3fL7uEhkYS_r4RDWoCUGDgf71B5WJRhlCxW_EOEWfwDdWNpNew8CnTTqJ3-iLLaYed05TI9uFGeo5AHSAgXzAxGgRcSGPDylGieWcDxihYdrYbYVnzGX3XKPAsJ_o4PqXPzmDpJj7xWRXE5IEAzOf_oVAdbwrrWLNBfrQ; session-id-time=2082787201l; amzn_sso_rfp=3d06704052425e47; x-main=pyIILCMDeIGZUbn0kdawVq5L@MjaA9NE1aYtJaQa1TNgN2ALbEvHRRGJovgOGpKO; session-token=Quwk9W4ge39Kz9Tqo87XXvPKs/jPEF54oeY+dLlg0EKtD3TKCI0mCybM52aWn1a/oPN85Zve0+aoaD6ccm0c40vb8A16d25bRS0qznwZhGijdbqChMaLVuZqQiMnsKs7O8tS2fHuB5L4yXx1t5/bRZoSGZci+jheGi360FfQqo9jP8jXdlG+QtIMAEu9ZGcZ2eSBADyrCiaSihZBEHxq4bjkaHc9KnKgrPqB3AjOiyjNvU7ytsstQZLPI5cQIkT4EgmEzM73pQzibRK9P9OG7J2ffFlX2JZhSiFGrvoXE+eCFYC6mM9RSsPdjWuHR3En3F0ArP6oew9mobBmAUjDH5url8RpOYlTI8WxOfNNQ6yTtSF69M188H3rqkjlqImU; csm-hit=tb:6941B11CE9684DF8B60F+b-4C07A6E933B34A208735|1759309545228&t:1759309545228&adb:adblk_no; cwr_s=eyJzZXNzaW9uSWQiOiI4N2QwNDlmYi0yZmUzLTRhN2ItODkxNC00MDQxZTYyZGU4NmQiLCJyZWNvcmQiOnRydWUsImV2ZW50Q291bnQiOjEyMSwicGFnZSI6eyJwYWdlSWQiOiIvcC9jb25uZWN0L3JlcXVlc3RzIiwicGFyZW50UGFnZUlkIjoiL3AvY29ubmVjdC9yZXF1ZXN0IiwiaW50ZXJhY3Rpb24iOjgsInJlZmVycmVyIjoiaHR0cHM6Ly9hZmZpbGlhdGUtcHJvZ3JhbS5hbWF6b24uY29tL2hvbWUiLCJyZWZlcnJlckRvbWFpbiI6ImFmZmlsaWF0ZS1wcm9ncmFtLmFtYXpvbi5jb20iLCJzdGFydCI6MTc1OTMwODY0NjQ2MX19',
          Origin: "https://affiliate-program.amazon.com",
          Referer:
            "https://affiliate-program.amazon.com/p/connect/requests?creatorId=amzn1.creator.419e3fe3-f865-4762-bc4b-c376074bc2b2&status=opportunity&type=affiliate-plus&sortBy=recommended_for_you&keyword=&filterExpanderStatus=false&categories=&nonFullyClaimedOnly=false&campaignStatuses=active%2Cpending&earlyAccessOnly=false&topBrandsOnly=false&creatorFavoritesOnly=false&brands=&contentType=",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
          "device-memory": "8",
          downlink: "9.2",
          dpr: "2",
          ect: "4g",
          rtt: "200",
          "sec-ch-device-memory": "8",
          "sec-ch-dpr": "2",
          "sec-ch-ua":
            '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-ch-viewport-width": "712",
          storeId: "amzorder0a-20",
          "viewport-width": "712",
          "x-request-bamf": "T1",
        },
        body: JSON.stringify({
          filterOptions: {
            campaignType: "BOUNTY_BOARD",
            availableSlotsOnly: false,
            interestTags: [
              "tercero-accessories",
              "tercero-beauty",
              "tercero-books",
              "tercero-childrens-fashion",
              "tercero-designer-fashion",
              "tercero-electronics",
              "tercero-health-and-wellness",
              "tercero-home",
              "tercero-jewelry",
              "tercero-kitchen-and-dining",
              "tercero-luggage-and-travel",
              "tercero-mens-fashion",
              "tercero-music",
              "tercero-personal-care",
              "tercero-pets",
              "tercero-shoes",
              "tercero-sports-and-fitness",
              "tercero-tools-and-home-improvement",
              "tercero-toys-and-games",
              "tercero-womens-fashion",
            ],
            providingSamplesOnly: false,
            statuses: ["SCHEDULED", "DELIVERING", "PENDING_CREATOR_ACTION"],
            commissionPercentageFilters: [],
            dateRange: null,
            campaignBrowseNodes: [
              228013, 229534, 163856011, 283155, 2335752011, 16310101, 16310091,
              3760911, 3760901, 2625373011, 13727921011, 468642, 100235949011,
              3561432011, 599858, 2617941011, 5174, 172282, 4991425011, 1055398,
              1064954, 8098158011, 3375251, 2238192011, 11091801, 18145289011,
              16333372011, 18981045011, 10272111, 2350149011, 165793011,
              165796011, 2619525011, 2619533011, 7141123011, 11260432011,
              10677469011, 2972638011, 15684181, 133140011,
            ],
            earlyAccessOnly: false,
            gcorIdList: [],
            campaignQualifiers: [],
            contentTypes: null,
            adId: null,
            storeIds: null,
            creatorIds: null,
            flatFeeRanges: null,
            rangeFilters: null,
            socialChannels: null,
            premiumCreator: null,
            campaignId: null,
            contractStatus: null,
          },
          sortOptions: [
            {
              name: "RECOMMENDED_FOR_YOU",
              order: "DESCENDING",
            },
          ],
          pageNumber: 1,
          pageSize: 30,
          nextToken:
            "WyJmYWxzZSIsIjE3NTkyMjE4NTU3NjAiLCJhbXpuMS5jYW1wYWlnbi4yR0FHTVNHVDJCS1ZJIl0=",
          groupByBrand: false,
          searchOptions: [],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Server-side campaign data fetched:", data);

    return <>{children(data)}</>;
  } catch (error) {
    console.error("Error fetching campaign data:", error);
    return <>{children(null)}</>;
  }
};

export default CampaignDataProvider;
