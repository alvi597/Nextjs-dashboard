"use client"

import { ChevronDown, Download, Filter, Search, FileText, BarChart3, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const reports = [
  {
    name: "Monthly Attendance Report",
    description: "Detailed attendance statistics for all employees",
    type: "Attendance",
    lastGenerated: "June 14, 2023",
    status: "Ready",
    size: "2.4 MB",
  },
  {
    name: "Recruitment Analytics",
    description: "Hiring funnel and candidate performance metrics",
    type: "Recruitment",
    lastGenerated: "June 13, 2023",
    status: "Ready",
    size: "1.8 MB",
  },
  {
    name: "Payroll Summary",
    description: "Monthly payroll breakdown by department",
    type: "Payroll",
    lastGenerated: "June 1, 2023",
    status: "Ready",
    size: "3.2 MB",
  },
  {
    name: "Performance Review Report",
    description: "Employee performance ratings and feedback",
    type: "Performance",
    lastGenerated: "May 30, 2023",
    status: "Generating",
    size: "-",
  },
  {
    name: "Department Productivity",
    description: "Project completion rates by department",
    type: "Productivity",
    lastGenerated: "June 10, 2023",
    status: "Ready",
    size: "1.5 MB",
  },
  {
    name: "Training Completion Report",
    description: "Employee training progress and certifications",
    type: "Training",
    lastGenerated: "June 8, 2023",
    status: "Ready",
    size: "900 KB",
  },
]

export function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            All Reports
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <div className="text-xs text-green-600 mt-1">+3 this month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ready to Download</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">21</div>
            <div className="text-xs text-gray-500 mt-1">87.5% completion</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Most Popular</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Attendance</div>
            <div className="text-xs text-gray-500 mt-1">45% of downloads</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Last Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Today</div>
            <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
          </CardContent>
        </Card>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="cursor-pointer hover:border-blue-200 transition-colors">
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <div className="font-medium">HR Reports</div>
            <div className="text-sm text-gray-500">8 reports</div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:border-blue-200 transition-colors">
          <CardContent className="p-4 text-center">
            <BarChart3 className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="font-medium">Analytics</div>
            <div className="text-sm text-gray-500">6 reports</div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:border-blue-200 transition-colors">
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <div className="font-medium">Time Tracking</div>
            <div className="text-sm text-gray-500">5 reports</div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:border-blue-200 transition-colors">
          <CardContent className="p-4 text-center">
            <FileText className="h-8 w-8 mx-auto mb-2 text-orange-600" />
            <div className="font-medium">Financial</div>
            <div className="text-sm text-gray-500">5 reports</div>
          </CardContent>
        </Card>
      </div>

      {/* Reports List */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Generate and download reports for your organization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search reports..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="space-y-4">
            {reports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 text-blue-700 rounded-md p-2">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">{report.name}</div>
                    <div className="text-sm text-gray-500">{report.description}</div>
                    <div className="flex items-center gap-4 mt-1">
                      <Badge variant="outline">{report.type}</Badge>
                      <span className="text-xs text-gray-500">Last generated: {report.lastGenerated}</span>
                      {report.size !== "-" && <span className="text-xs text-gray-500">Size: {report.size}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    className={
                      report.status === "Ready"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                    }
                  >
                    {report.status}
                  </Badge>
                  {report.status === "Ready" && (
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
