"use client";

import React from "react";
import LoginButton from "./LoginButton";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl mb-4 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
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
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            ASIN Scraper
          </h1>
          <p className="text-slate-600">
            Welcome back! Please sign in to continue.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">
              Sign in to your account
            </h2>

            <LoginButton className="w-full justify-center" />

            <div className="mt-6 text-sm text-slate-500">
              By signing in, you agree to our Terms of Service and Privacy
              Policy
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-1 gap-4">
          <div className="flex items-center space-x-3 text-slate-600">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="text-sm">Secure authentication</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-600">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="text-sm">Real-time data scraping</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-600">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="text-sm">Advanced analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

