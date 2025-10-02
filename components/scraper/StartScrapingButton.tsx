"use client";

import LightningIcon from "@/icons/LightningIcon";
import React from "react";
import { useAmazonApi } from "@/hooks/useAmazonApi";

const StartScrapingButton = () => {
  const { searchCampaignsByBrands, loading, error } = useAmazonApi();

  const handleStartScraping = async () => {
    const result = await searchCampaignsByBrands();
    if (result) {
      console.log("Scraping completed successfully:", result);
    } else {
      console.log("Scraping failed or returned no data");
    }
  };

  return (
    <>
      <button
        onClick={handleStartScraping}
        disabled={loading}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        <LightningIcon size="md" />
        {loading ? "Scraping..." : "Start Scraping"}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">Error: {error.message}</p>
        </div>
      )}
    </>
  );
};

export default StartScrapingButton;
