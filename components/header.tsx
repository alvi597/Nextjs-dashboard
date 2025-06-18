"use client"

import { MoreHorizontal, Share, Edit, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { PageType } from "../dashboard"

interface HeaderProps {
  currentPage: PageType
}

export function Header({ currentPage }: HeaderProps) {
  const getBreadcrumb = () => {
    switch (currentPage) {
      case "dashboard":
        return <span>Dashboard</span>
      case "employees":
        return (
          <>
            <span>Employee</span>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Employee Detail</span>
          </>
        )
      case "recruitment":
        return (
          <>
            <span>Recruitment</span>
            <span className="mx-2 text-gray-500">/</span>
            <span>Jobs Detail</span>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Research and Development</span>
          </>
        )
      case "calendar":
        return (
          <>
            <span>Calendar</span>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Schedule</span>
          </>
        )
      case "analytics":
        return (
          <>
            <span>Analytics</span>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Overview</span>
          </>
        )
      case "projects":
        return (
          <>
            <span>Projects</span>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Active Projects</span>
          </>
        )
      case "payroll":
        return (
          <>
            <span>Payroll</span>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Monthly Summary</span>
          </>
        )
      case "attendance":
        return (
          <>
            <span>Attendance</span>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Daily Report</span>
          </>
        )
      case "reports":
        return (
          <>
            <span>Reports</span>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Performance</span>
          </>
        )
      case "settings":
        return (
          <>
            <span>Settings</span>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">General</span>
          </>
        )
      default:
        return <span>Dashboard</span>
    }
  }

  const showDetailControls = currentPage === "recruitment" || currentPage === "employees"

  return (
    <header className="bg-slate-700 text-white px-6 py-3 flex items-center justify-between h-12">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-orange-400 text-lg font-bold">⚡ tiimi</span>
        </div>
        <div className="text-sm text-gray-300">{getBreadcrumb()}</div>
      </div>
      <div className="flex items-center gap-3">
        {showDetailControls && (
          <>
            <div className="flex items-center gap-2 text-sm">
              <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600 h-6 w-6">
                <ChevronLeft className="h-3 w-3" />
              </Button>
              <span>1 out of 56</span>
              <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600 h-6 w-6">
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600 h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </>
        )}
        <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600 h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-slate-600 h-8 px-3 text-sm">
          <Share className="h-3 w-3 mr-2" />
          Share
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-slate-600 h-8 px-3 text-sm">
          <Edit className="h-3 w-3 mr-2" />
          Edit Details
        </Button>
      </div>
    </header>
  )
}
