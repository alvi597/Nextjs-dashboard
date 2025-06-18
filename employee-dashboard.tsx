"use client"

import { Header } from "./components/header"
import { EmployeeProfile } from "./components/employee-profile"
import { NavigationTabs } from "./components/navigation-tabs"
import { TimeManagement } from "./components/time-management"
import { Sidebar } from "./components/sidebar"

export default function EmployeeDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto bg-gray-100">
          <EmployeeProfile />
          <NavigationTabs />
          <TimeManagement />
        </div>
      </div>
    </div>
  )
}
