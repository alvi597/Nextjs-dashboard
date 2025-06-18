"use client"

import { User, FileText, DollarSign, Clock, Package, File, GraduationCap, Banknote } from "lucide-react"

const tabs = [
  { name: "Personal Information", icon: User, active: false },
  { name: "Contract", icon: FileText, active: false },
  { name: "Payroll", icon: DollarSign, active: false },
  { name: "Time Management", icon: Clock, active: true },
  { name: "Assets", icon: Package, count: 3, active: false },
  { name: "Document", icon: File, count: 8, active: false },
  { name: "Training", icon: GraduationCap, active: false },
  { name: "Finance", icon: Banknote, active: false },
]

export function NavigationTabs() {
  return (
    <div className="bg-white border-b px-6">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              tab.active ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.name}
            {tab.count && <span className="bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 rounded">{tab.count}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}
