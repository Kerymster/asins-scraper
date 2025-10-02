import React from "react";
import StartScrapingButton from "@/components/scraper/StartScrapingButton";

const SearchSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">ASIN Scraper</h2>
        <p className="text-slate-600">
          Enter ASIN codes to scrape product data from Amazon.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              ASIN Code
            </label>
            <input
              type="text"
              placeholder="Enter ASIN code (e.g., B08N5WRWNW)"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors placeholder:text-slate-500"
            />
          </div>
          <div className="flex justify-end">
            <StartScrapingButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
