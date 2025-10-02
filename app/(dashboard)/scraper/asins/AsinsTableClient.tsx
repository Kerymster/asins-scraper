"use client";

import React, { useState, useEffect } from "react";
import { useAsinStatus } from "@/hooks/useAsinStatus";
import AsinTable from "@/components/asins/AsinTable";
import SummaryStats from "@/components/asins/SummaryStats";
import AsinLoadingState from "@/components/asins/AsinLoadingState";
import AuthRequired from "@/components/asins/AuthRequired";

interface AsinsTableClientProps {
  campaignData: any;
}

const AsinsTableClient = ({ campaignData }: AsinsTableClientProps) => {
  const [asins] = useState<string[]>([]);
  const { statusData, loading, saving, handleStatusToggle, user } =
    useAsinStatus();

  // Log campaign data when it's available
  useEffect(() => {
    if (campaignData) {
      console.log("Campaign data received in ASINs page:", campaignData);
    }
  }, [campaignData]);

  if (loading) {
    return <AsinLoadingState />;
  }

  if (!user) {
    return <AuthRequired />;
  }

  return (
    <>
      {/* Campaign Data Display */}
      {campaignData && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Campaign Data Available
          </h3>
          <p className="text-blue-700 text-sm">
            Found {campaignData.campaigns?.length || 0} campaigns
          </p>
          <details className="mt-2">
            <summary className="text-blue-600 cursor-pointer text-sm">
              View raw data
            </summary>
            <pre className="mt-2 text-xs bg-white p-2 rounded border overflow-auto max-h-40">
              {JSON.stringify(campaignData, null, 2)}
            </pre>
          </details>
        </div>
      )}

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
    </>
  );
};

export default AsinsTableClient;
