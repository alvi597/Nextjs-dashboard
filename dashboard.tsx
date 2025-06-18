"use client"

import { useState } from "react"
import { Header } from "./components/header"
import { Sidebar } from "./components/sidebar"
import { EmployeePage } from "./components/pages/employee-page"
import { RecruitmentPage } from "./components/pages/recruitment-page"
import { CalendarPage } from "./components/pages/calendar-page"
import { AnalyticsPage } from "./components/pages/analytics-page"
import { ProjectsPage } from "./components/pages/projects-page"
import { PayrollPage } from "./components/pages/payroll-page"
import { AttendancePage } from "./components/pages/attendance-page"
import { ReportsPage } from "./components/pages/reports-page"
import { SettingsPage } from "./components/pages/settings-page"
import { DashboardPage } from "./components/pages/dashboard-page"

export type PageType =
  | "dashboard"
  | "employees"
  | "recruitment"
  | "calendar"
  | "analytics"
  | "projects"
  | "payroll"
  | "attendance"
  | "reports"
  | "settings"

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState<PageType>("recruitment")

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />
      case "employees":
        return <EmployeePage />
      case "recruitment":
        return <RecruitmentPage />
      case "calendar":
        return <CalendarPage />
      case "analytics":
        return <AnalyticsPage />
      case "projects":
        return <ProjectsPage />
      case "payroll":
        return <PayrollPage />
      case "attendance":
        return <AttendancePage />
      case "reports":
        return <ReportsPage />
      case "settings":
        return <SettingsPage />
      default:
        return <DashboardPage />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-1 flex flex-col">
        <Header currentPage={currentPage} />
        <div className="flex-1 overflow-auto bg-gray-100">{renderPage()}</div>
      </div>
    </div>
  )
}
