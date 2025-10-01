import React from "react";
import LockIcon from "@/icons/LockIcon";

const AuthRequired: React.FC = () => {
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
        <div className="text-center">
          <div className="text-slate-400 mb-4">
            <LockIcon size="lg" className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">
            Authentication Required
          </h3>
          <p className="text-slate-500">
            Please sign in to manage your ASINs and track their processing
            status.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthRequired;
