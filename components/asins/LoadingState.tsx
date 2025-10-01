import React from "react";
import SpinnerIcon from "@/icons/SpinnerIcon";

interface LoadingStateProps {
  message?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  message = "Loading ASINs data...",
}) => {
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
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <div className="flex items-center justify-center">
          <SpinnerIcon size="lg" className="text-amber-500" />
          <span className="ml-3 text-slate-600">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
