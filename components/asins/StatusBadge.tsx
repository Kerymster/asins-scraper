import React from "react";
import { AsinStatus } from "./types";

interface StatusBadgeProps {
  status?: AsinStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  if (!status || !status.checked) {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        Pending
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
      Processed
    </span>
  );
};

export default StatusBadge;
