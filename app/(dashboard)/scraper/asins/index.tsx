"use client";

import React, { useState, useEffect } from "react";
import { useAsinStatus } from "@/hooks/useAsinStatus";
import AsinTable from "@/components/asins/AsinTable";
import SummaryStats from "@/components/asins/SummaryStats";
import AsinLoadingState from "@/components/asins/AsinLoadingState";
import AuthRequired from "@/components/asins/AuthRequired";
import { extractAsinsFromCampaignData } from "@/utils/extractAsins";

const AsinsTable = () => {
  const [asins, setAsins] = useState<string[]>([]);
  const [campaignData, setCampaignData] = useState<any>(null);
  const [dataLoading, setDataLoading] = useState(false);
  const { statusData, loading, saving, handleStatusToggle, user } =
    useAsinStatus();

  // Fetch campaign data on component mount
  useEffect(() => {
    const fetchCampaignData = async () => {
      setDataLoading(true);
      try {
        const response = await fetch("/api/amazon/campaigns", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Campaign data fetched in ASINs page:", data);
        setCampaignData(data);

        // Extract ASINs from campaign data
        const extractedAsins = extractAsinsFromCampaignData(data);
        if (extractedAsins.length > 0) {
          console.log(
            "Updating ASINs with real data:",
            extractedAsins.length,
            "ASINs"
          );
          setAsins(extractedAsins);
        } else {
          console.log("No ASINs extracted, keeping empty array");
        }
      } catch (error) {
        console.error("Error fetching campaign data:", error);
      } finally {
        setDataLoading(false);
      }
    };

    fetchCampaignData();
  }, []);

  // Show loading state until both Firebase data and campaign data are loaded
  if (loading || dataLoading) {
    return <AsinLoadingState />;
  }

  if (!user) {
    return <AuthRequired />;
  }

  // Don't show the table until we have campaign data
  if (!campaignData) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            ASINs Management
          </h2>
          <p className="text-slate-600">
            Manage and track the processing status of your ASINs.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">Loading campaign data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          ASINs Management
        </h2>
        <p className="text-slate-600">
          Manage and track the processing status of your ASINs.
        </p>
      </div>

      {/* Campaign Data Status */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="text-green-800 font-semibold mb-2">
          Campaign Data Loaded
        </h3>
        <div className="text-green-700 text-sm space-y-1">
          <p>
            Found {campaignData[0]?.campaignsByBrand?.ALL?.length || 0}{" "}
            campaigns
          </p>
          <p>Extracted {asins.length} unique ASINs</p>
          {asins.length > 0 && (
            <p className="text-xs text-green-600">
              Sample: {asins.slice(0, 3).join(", ")}
              {asins.length > 3 ? "..." : ""}
            </p>
          )}
        </div>
        <details className="mt-2">
          <summary className="text-green-600 cursor-pointer text-sm">
            View raw data
          </summary>
          <pre className="mt-2 text-xs bg-white p-2 rounded border overflow-auto max-h-40">
            {JSON.stringify(campaignData, null, 2)}
          </pre>
        </details>
      </div>

      {/* Sticky Summary Stats */}
      <div className="sticky top-20 z-40">
        <SummaryStats totalAsins={asins.length} statusData={statusData} />
      </div>

      <AsinTable
        asins={asins}
        statusData={statusData}
        saving={saving}
        onStatusToggle={handleStatusToggle}
      />
    </div>
  );
};

export default AsinsTable;
