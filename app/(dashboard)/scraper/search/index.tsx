import LightningIcon from "@/icons/LightningIcon";
import React from "react";

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
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            />
          </div>
          <div className="flex justify-end">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              <LightningIcon size="md" />
              Start Scraping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
