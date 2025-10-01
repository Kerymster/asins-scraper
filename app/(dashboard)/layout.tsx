"use client";

import React from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-10 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
