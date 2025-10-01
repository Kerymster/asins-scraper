import React from "react";
import ChartIcon from "@/icons/ChartIcon";

export default function AnalyticsPage() {
  return (
    <div className="flex-1 p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Analytics</h2>
          <p className="text-slate-600">
            View detailed analytics and insights from your scraping activities.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="text-center py-12">
            <ChartIcon size="lg" className="text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Analytics Coming Soon
            </h3>
            <p className="text-slate-600">
              Advanced analytics features will be available soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
