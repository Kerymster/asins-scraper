import React from "react";
import StatusBadge from "./StatusBadge";
import { AsinStatus } from "./types";
import SpinnerIcon from "@/icons/SpinnerIcon";

interface AsinRowProps {
  asin: string;
  status?: AsinStatus;
  saving: boolean;
  onStatusToggle: (asin: string) => void;
}

const AsinRow: React.FC<AsinRowProps> = ({
  asin,
  status,
  saving,
  onStatusToggle,
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
    <tr className="hover:bg-slate-50 transition-colors">
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
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => onStatusToggle(asin)}
          disabled={saving}
          className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
            saving
              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
              : status?.checked
              ? "bg-red-100 text-red-700 hover:bg-red-200 cursor-pointer"
              : "bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer"
          }`}
        >
          {saving ? (
            <>
              <SpinnerIcon size="sm" className="mr-2" />
              Saving...
            </>
          ) : status?.checked ? (
            "Mark as Pending"
          ) : (
            "Mark as Processed"
          )}
        </button>
      </td>
    </tr>
  );
};

export default AsinRow;
