"use client";

import React from "react";
import { useAuth } from "@/contexts/AuthContext";

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white/95 via-slate-50/95 to-white/95 shadow-lg border-b border-slate-200/60 backdrop-blur-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              <svg
                className="w-6 h-6 text-white drop-shadow-sm"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              ASIN Scraper
            </h1>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* User Info */}
            <div className="flex items-center space-x-3 bg-slate-50/80 rounded-xl px-3 py-2 backdrop-blur-sm border border-slate-200/50">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-amber-300 shadow-sm"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center border-2 border-amber-300 shadow-sm">
                  <span className="text-white text-sm font-semibold">
                    {(user?.displayName || user?.email || "U")
                      .charAt(0)
                      .toUpperCase()}
                  </span>
                </div>
              )}
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800">
                  {user?.displayName || "User"}
                </p>
                <p className="text-xs text-slate-500 truncate max-w-32">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={signOut}
              className="inline-flex items-center px-4 py-2 border border-slate-300/60 rounded-xl text-sm font-medium text-slate-700 bg-white/80 hover:bg-red-50 hover:border-red-200 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md backdrop-blur-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
