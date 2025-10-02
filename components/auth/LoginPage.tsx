"use client";

import React from "react";
import LoginButton from "./LoginButton";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-lg w-full relative z-10">
        {/* Main Content Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20 relative overflow-hidden">
          {/* Card Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 rounded-3xl"></div>

          <div className="relative z-10">
            {/* Logo/Brand Section */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 rounded-3xl mb-6 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-amber-500/25">
                <svg
                  className="w-10 h-10 text-white drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent mb-3 tracking-tight">
                ASIN Scraper
              </h1>
            </div>

            {/* Login Section */}
            <div className="text-center mb-10">
              <LoginButton className="w-full justify-center" />

              <div className="mt-8 text-sm text-slate-300">
                By signing in, you agree to our{" "}
                <a
                  href="#"
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Features Preview */}
            <div className="grid grid-cols-1 gap-5">
              <div className="flex items-center justify-center space-x-4 text-slate-300 group">
                <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300"></div>
                <span className="text-base font-medium group-hover:text-white transition-colors">
                  Secure authentication
                </span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-slate-300 group">
                <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300"></div>
                <span className="text-base font-medium group-hover:text-white transition-colors">
                  Real-time data scraping
                </span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-slate-300 group">
                <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300"></div>
                <span className="text-base font-medium group-hover:text-white transition-colors">
                  Advanced analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
