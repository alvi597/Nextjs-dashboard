"use client"

import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TimelineRow } from "./timeline-row"

const summaryCards = [
  { title: "Day off", value: "12", change: "+ 12 vs last month", color: "text-gray-900" },
  { title: "Late clock-in", value: "6", change: "+ 2 vs last month", color: "text-gray-900" },
  { title: "Late clock-out", value: "21", change: "+ 12 vs last month", color: "text-gray-900" },
  { title: "No clock-out", value: "2", change: "+ 4 vs last month", color: "text-gray-900" },
  { title: "Off time quota", value: "1", change: "0 vs last month", color: "text-gray-900" },
  { title: "Absent", value: "2", change: "0 vs last month", color: "text-gray-900" },
]

const timelineData = [
  {
    day: "Today",
    clockIn: "09:00 AM",
    clockOut: "08:51 PM",
    duration: "10h 12m",
    segments: [
      { type: "working", start: 18, width: 36, label: "Working time" },
      { type: "break", start: 54, width: 9, label: "Break" },
      { type: "working", start: 63, width: 36, label: "Working time" },
      { type: "overtime", start: 99, width: 27, label: "Over time" },
    ],
  },
  {
    day: "Thursday, 18",
    clockIn: "-",
    clockOut: "-",
    duration: "-",
    status: "Approved",
    isRequestedDayOff: true,
  },
  {
    day: "Wednesday, 17",
    clockIn: "09:00 AM",
    clockOut: "08:51 PM",
    duration: "10h 12m",
    segments: [
      { type: "late", start: 9, width: 9, label: "Late" },
      { type: "working", start: 18, width: 36, label: "Working time" },
      { type: "break", start: 54, width: 9, label: "Break" },
      { type: "working", start: 63, width: 36, label: "Working time" },
    ],
  },
  {
    day: "Tuesday, 16",
    clockIn: "09:00 AM",
    clockOut: "08:51 PM",
    duration: "10h 12m",
    segments: [
      { type: "working", start: 18, width: 36, label: "Working time" },
      { type: "break", start: 54, width: 9, label: "Break" },
      { type: "working", start: 63, width: 36, label: "Working time" },
    ],
  },
  {
    day: "Monday, 15",
    clockIn: "09:00 AM",
    clockOut: "08:51 PM",
    duration: "10h 12m",
    segments: [
      { type: "working", start: 18, width: 36, label: "Working time" },
      { type: "break", start: 54, width: 9, label: "Break" },
      { type: "working", start: 63, width: 36, label: "Working time" },
    ],
  },
]

export function TimeManagement() {
  return (
    <div className="p-6 space-y-6">
      {/* Time period selector */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button className="bg-slate-800 hover:bg-slate-700 text-white h-8 px-4 text-sm rounded-full">
            Attendance
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 h-8 px-4 text-sm">
            Time Off
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 h-8 px-4 text-sm">
            Overtime
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-medium text-gray-900">26 Jan - 26 Feb 2023</span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button className="bg-slate-800 hover:bg-slate-700 text-white h-8 px-4 text-sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Attendance
          </Button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-6 gap-4">
        {summaryCards.map((card) => (
          <div key={card.title} className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 mb-1">{card.value}</div>
            <div className="text-sm font-medium text-gray-900 mb-1">{card.title}</div>
            <div className="text-xs text-gray-500">{card.change}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {timelineData.map((data, index) => (
          <TimelineRow key={index} data={data} />
        ))}
      </div>
    </div>
  )
}
