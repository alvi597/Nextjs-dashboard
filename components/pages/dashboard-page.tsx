"use client"

import { BarChart3, Users, Calendar, Clock, DollarSign, TrendingUp, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">Last updated: Today at 09:41 AM</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Recruitments</CardTitle>
            <BarChart3 className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +3 new positions
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-red-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              -1.4% from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Payroll Status</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Processed</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed on May 28
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recruitment Pipeline</CardTitle>
            <CardDescription>Applications by stage for active positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Applied</div>
                  <div className="text-sm text-gray-500">245</div>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Screening</div>
                  <div className="text-sm text-gray-500">120</div>
                </div>
                <Progress value={40} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Interview</div>
                  <div className="text-sm text-gray-500">64</div>
                </div>
                <Progress value={20} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Offer</div>
                  <div className="text-sm text-gray-500">28</div>
                </div>
                <Progress value={10} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Hired</div>
                  <div className="text-sm text-gray-500">12</div>
                </div>
                <Progress value={5} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-700 rounded-md p-2">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Team Meeting</div>
                  <div className="text-xs text-gray-500">Today, 2:00 PM</div>
                </div>
                <div className="text-xs text-gray-500">12 participants</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-700 rounded-md p-2">
                  <Users className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Interview: Senior Developer</div>
                  <div className="text-xs text-gray-500">Tomorrow, 10:00 AM</div>
                </div>
                <div className="text-xs text-gray-500">3 candidates</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 text-orange-700 rounded-md p-2">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Project Deadline</div>
                  <div className="text-xs text-gray-500">Jun 15, 2023</div>
                </div>
                <div className="text-xs text-gray-500">Marketing Campaign</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 text-purple-700 rounded-md p-2">
                  <DollarSign className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Budget Review</div>
                  <div className="text-xs text-gray-500">Jun 16, 2023</div>
                </div>
                <div className="text-xs text-gray-500">Q3 Planning</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
