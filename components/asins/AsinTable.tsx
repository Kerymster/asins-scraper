import React from "react";
import AsinRow from "./AsinRow";
import { AsinStatusData } from "./types";
import DocumentIcon from "@/icons/DocumentIcon";
import SpinnerIcon from "@/icons/SpinnerIcon";

interface AsinTableProps {
  asins: string[];
  statusData: AsinStatusData;
  saving: string | null;
  onStatusToggle: (asin: string) => void;
  loading?: boolean;
}

const AsinTable: React.FC<AsinTableProps> = ({
  asins,
  statusData,
  saving,
  onStatusToggle,
  loading = false,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative">
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
          <div className="flex items-center">
            <SpinnerIcon size="md" className="text-amber-500" />
            <span className="ml-2 text-slate-600 text-sm">
              Loading status data...
            </span>
          </div>
        </div>
      )}
      <div className="px-6 py-4 border-b border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800">ASINs List</h3>
        <p className="text-sm text-slate-600 mt-1">
          {asins.length} ASINs found
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
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {asins.map((asin) => {
              const status = statusData[asin];
              return (
                <AsinRow
                  key={asin}
                  asin={asin}
                  status={status}
                  saving={saving === asin}
                  onStatusToggle={onStatusToggle}
                />
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
          <h3 className="text-sm font-medium text-slate-900">No ASINs found</h3>
          <p className="text-sm text-slate-500 mt-1">
            Start by adding some ASINs to track their processing status.
          </p>
        </div>
      )}
    </div>
  );
};

export default AsinTable;
