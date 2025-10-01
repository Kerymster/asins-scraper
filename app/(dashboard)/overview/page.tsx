"use client";

import React from "react";
import { useCheckedAsins } from "@/components/asins/useCheckedAsins";
import AsinDisplayTable from "@/components/asins/AsinDisplayTable";
import CheckIcon from "@/icons/CheckIcon";

const DashboardOverview = () => {
  const { checkedAsins, statusData, loading } = useCheckedAsins();

  // Processed count is just the length of checked ASINs
  const processedCount = checkedAsins.length;

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Dashboard Overview
          </h2>
          <p className="text-slate-600">
            Welcome to your ASIN Scraper dashboard!
          </p>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
            <span className="ml-3 text-slate-600">
              Loading dashboard data...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Dashboard Overview
        </h2>
        <p className="text-slate-600">
          Welcome to your ASIN Scraper dashboard!
        </p>
      </div>

      {/* Processed ASINs Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600">
              Processed ASINs
            </p>
            <p className="text-3xl font-bold text-slate-900">
              {processedCount}
            </p>
            <p className="text-sm text-slate-500 mt-1">
              ASINs marked as processed
            </p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <CheckIcon size="md" className="text-green-600" />
          </div>
        </div>
      </div>

      {/* Processed ASINs Display Table */}
      <AsinDisplayTable asins={checkedAsins} statusData={statusData} />
    </div>
  );
};

export default DashboardOverview;
