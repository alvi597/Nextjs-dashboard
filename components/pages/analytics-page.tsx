"use client"

import { ChevronDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            Last 30 Days
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <div className="text-xs text-green-600 mt-1">+12% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Turnover Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <div className="text-xs text-green-600 mt-1">-0.8% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Time to Hire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24 days</div>
            <div className="text-xs text-red-600 mt-1">+3 days from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cost per Hire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,250</div>
            <div className="text-xs text-green-600 mt-1">-$120 from last month</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recruitment Funnel</CardTitle>
            <CardDescription>Conversion rates by stage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Applications</div>
                  <div className="text-sm text-gray-500">1,245</div>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Screened</div>
                  <div className="text-sm text-gray-500">645 (51.8%)</div>
                </div>
                <Progress value={51.8} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Interviewed</div>
                  <div className="text-sm text-gray-500">320 (25.7%)</div>
                </div>
                <Progress value={25.7} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Offers Made</div>
                  <div className="text-sm text-gray-500">95 (7.6%)</div>
                </div>
                <Progress value={7.6} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Hired</div>
                  <div className="text-sm text-gray-500">68 (5.5%)</div>
                </div>
                <Progress value={5.5} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
            <CardDescription>Employee count by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Engineering</div>
                  <div className="text-sm text-gray-500">420 (33.7%)</div>
                </div>
                <Progress value={33.7} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Sales & Marketing</div>
                  <div className="text-sm text-gray-500">315 (25.2%)</div>
                </div>
                <Progress value={25.2} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Customer Support</div>
                  <div className="text-sm text-gray-500">210 (16.8%)</div>
                </div>
                <Progress value={16.8} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Product</div>
                  <div className="text-sm text-gray-500">185 (14.8%)</div>
                </div>
                <Progress value={14.8} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">HR & Admin</div>
                  <div className="text-sm text-gray-500">118 (9.5%)</div>
                </div>
                <Progress value={9.5} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Hiring Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Employee Referrals</div>
                <div className="text-sm text-gray-500">32%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">LinkedIn</div>
                <div className="text-sm text-gray-500">28%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Company Website</div>
                <div className="text-sm text-gray-500">18%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Job Boards</div>
                <div className="text-sm text-gray-500">14%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Recruitment Agencies</div>
                <div className="text-sm text-gray-500">8%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">On Time</div>
                <div className="text-sm text-gray-500">85.4%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Late Arrivals</div>
                <div className="text-sm text-gray-500">8.2%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Early Departures</div>
                <div className="text-sm text-gray-500">3.5%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Absences</div>
                <div className="text-sm text-gray-500">2.9%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Ratings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Exceptional (5)</div>
                <div className="text-sm text-gray-500">12%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Exceeds Expectations (4)</div>
                <div className="text-sm text-gray-500">28%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Meets Expectations (3)</div>
                <div className="text-sm text-gray-500">45%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Needs Improvement (2)</div>
                <div className="text-sm text-gray-500">10%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Unsatisfactory (1)</div>
                <div className="text-sm text-gray-500">5%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
