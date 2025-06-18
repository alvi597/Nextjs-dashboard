"use client"

import { ChevronDown, Download, Filter, Search, Clock, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const attendanceData = [
  {
    date: "June 15, 2023",
    day: "Thursday",
    employees: [
      {
        name: "John Smith",
        department: "Engineering",
        clockIn: "08:55 AM",
        clockOut: "05:10 PM",
        status: "On Time",
        hours: "8h 15m",
      },
      {
        name: "Sarah Johnson",
        department: "Marketing",
        clockIn: "09:15 AM",
        clockOut: "05:30 PM",
        status: "Late",
        hours: "8h 15m",
      },
      {
        name: "Michael Brown",
        department: "Design",
        clockIn: "08:45 AM",
        clockOut: "04:45 PM",
        status: "Early Leave",
        hours: "8h 0m",
      },
      {
        name: "Emily Davis",
        department: "HR",
        clockIn: "-",
        clockOut: "-",
        status: "Absent",
        hours: "0h 0m",
      },
      {
        name: "Robert Wilson",
        department: "Support",
        clockIn: "09:00 AM",
        clockOut: "06:00 PM",
        status: "On Time",
        hours: "9h 0m",
      },
    ],
  },
]

export function AttendancePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Attendance</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            Today
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42 / 45</div>
            <div className="text-xs text-green-600 mt-1">93.3% attendance</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">On Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38</div>
            <div className="text-xs text-green-600 mt-1">90.5% punctuality</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <div className="text-xs text-red-600 mt-1">9.5% late</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Absent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-red-600 mt-1">6.7% absent</div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Attendance</CardTitle>
          <CardDescription>June 15, 2023 - Thursday</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search employees..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="rounded-md border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Clock In
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Clock Out
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hours
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {attendanceData[0].employees.map((employee, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.clockIn}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.clockOut}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.hours}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        className={
                          employee.status === "On Time"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : employee.status === "Late"
                              ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                              : employee.status === "Early Leave"
                                ? "bg-orange-100 text-orange-700 hover:bg-orange-100"
                                : "bg-red-100 text-red-700 hover:bg-red-100"
                        }
                      >
                        {employee.status === "On Time" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {employee.status === "Late" && <Clock className="h-3 w-3 mr-1" />}
                        {employee.status === "Absent" && <XCircle className="h-3 w-3 mr-1" />}
                        {employee.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
