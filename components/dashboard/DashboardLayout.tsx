"use client";

import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";

const DashboardLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1">
          <DashboardContent activeTab={activeTab} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

