import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import SpinnerIcon from "@/icons/SpinnerIcon";

const AsinLoadingState: React.FC = () => {
  const { loading: authLoading } = useAuth();

  const getLoadingMessage = () => {
    if (authLoading) {
      return "Checking authentication...";
    }
    return "Loading your ASINs data...";
  };

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
          <span className="ml-3 text-slate-600">{getLoadingMessage()}</span>
        </div>
      </div>
    </div>
  );
};

export default AsinLoadingState;
