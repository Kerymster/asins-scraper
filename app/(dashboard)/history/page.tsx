import React from "react";
import ClockIcon from "@/icons/ClockIcon";

export default function HistoryPage() {
  return (
    <div className="flex-1 p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Scraping History
          </h2>
          <p className="text-slate-600">
            View your past scraping activities and results.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="text-center py-12">
            <ClockIcon size="lg" className="text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              No History Yet
            </h3>
            <p className="text-slate-600">
              Start scraping to see your activity history here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
