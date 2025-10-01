import React from "react";
import { AsinStatusData } from "./types";
import DocumentIcon from "@/icons/DocumentIcon";
import CheckIcon from "@/icons/CheckIcon";
import ClockIcon from "@/icons/ClockIcon";

interface SummaryStatsProps {
  totalAsins: number;
  statusData: AsinStatusData;
}

const SummaryStats: React.FC<SummaryStatsProps> = ({
  totalAsins,
  statusData,
}) => {
  const processedCount = Object.values(statusData).filter(
    (status) => status.checked
  ).length;
  const pendingCount = totalAsins - processedCount;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <DocumentIcon size="sm" className="text-blue-600" />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-slate-500">Total ASINs</p>
            <p className="text-2xl font-semibold text-slate-900">
              {totalAsins}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckIcon size="sm" className="text-green-600" />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-slate-500">Processed</p>
            <p className="text-2xl font-semibold text-slate-900">
              {processedCount}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <ClockIcon size="sm" className="text-gray-600" />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-slate-500">Pending</p>
            <p className="text-2xl font-semibold text-slate-900">
              {pendingCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryStats;
