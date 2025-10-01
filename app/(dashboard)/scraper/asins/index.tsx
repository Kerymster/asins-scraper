"use client";

import React, { useState } from "react";
import { useAsinStatus } from "@/components/asins/useAsinStatus";
import AsinTable from "@/components/asins/AsinTable";
import SummaryStats from "@/components/asins/SummaryStats";
import AsinLoadingState from "@/components/asins/AsinLoadingState";
import AuthRequired from "@/components/asins/AuthRequired";
import { mockAsins } from "./mockData";

const AsinsTable = () => {
  const [asins] = useState<string[]>(mockAsins);
  const { statusData, loading, saving, handleStatusToggle, user } =
    useAsinStatus();

  if (loading) {
    return <AsinLoadingState />;
  }

  if (!user) {
    return <AuthRequired />;
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

      {/* Sticky Summary Stats */}
      <div className="sticky top-4 z-10">
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
