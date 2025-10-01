import React from "react";
import StatusBadge from "./StatusBadge";
import { AsinStatusData } from "./types";
import DocumentIcon from "@/icons/DocumentIcon";

interface AsinDisplayTableProps {
  asins: string[];
  statusData: AsinStatusData;
}

const AsinDisplayTable: React.FC<AsinDisplayTableProps> = ({
  asins,
  statusData,
}) => {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800">
          Processed ASINs
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          {asins.length} processed ASINs found
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                ASIN Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {asins.map((asin) => {
              const status = statusData[asin];
              return (
                <tr key={asin} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-slate-900 font-mono">
                        {asin}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {formatDate(status?.updatedAt || null)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {asins.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 mb-2">
            <DocumentIcon size="lg" className="mx-auto" />
          </div>
          <h3 className="text-sm font-medium text-slate-900">
            No Processed ASINs
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            No ASINs have been marked as processed yet. Go to the ASIN Scraper
            to start processing.
          </p>
        </div>
      )}
    </div>
  );
};

export default AsinDisplayTable;
