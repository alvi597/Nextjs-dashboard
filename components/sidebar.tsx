"use client"

import {
  Home,
  Users,
  Calendar,
  FileText,
  Settings,
  HelpCircle,
  BarChart3,
  Briefcase,
  CreditCard,
  UserCheck,
  Building,
} from "lucide-react"
import type { PageType } from "../dashboard"

interface SidebarProps {
  currentPage: PageType
  onPageChange: (page: PageType) => void
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const sidebarItems = [
    { icon: Home, page: "dashboard" as PageType, label: "Dashboard" },
    { icon: Users, page: "employees" as PageType, label: "Employees" },
    { icon: Calendar, page: "calendar" as PageType, label: "Calendar" },
    { icon: BarChart3, page: "analytics" as PageType, label: "Analytics" },
    { icon: Briefcase, page: "recruitment" as PageType, label: "Recruitment" },
    { icon: CreditCard, page: "payroll" as PageType, label: "Payroll" },
    { icon: UserCheck, page: "attendance" as PageType, label: "Attendance" },
    { icon: Building, page: "projects" as PageType, label: "Projects" },
    { icon: FileText, page: "reports" as PageType, label: "Reports" },
    { icon: Settings, page: "settings" as PageType, label: "Settings" },
  ]

  return (
    <div className="w-16 bg-slate-700 flex flex-col items-center py-4 gap-3">
      <div className="w-10 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xs">
        FIX
      </div>

      {sidebarItems.map((item) => (
        <button
          key={item.page}
          onClick={() => onPageChange(item.page)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            currentPage === item.page ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-slate-600 hover:text-white"
          }`}
          title={item.label}
        >
          <item.icon className="h-5 w-5" />
        </button>
      ))}

      <div className="mt-auto">
        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-slate-600 hover:text-white transition-colors">
          <HelpCircle className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
