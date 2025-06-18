"use client"

import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CalendarPage() {
  // Generate days for the calendar
  const generateDays = () => {
    const days = []
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }
    return days
  }

  const days = generateDays()
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-medium">June 2023</span>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weekdays.map((day) => (
          <div key={day} className="text-center font-medium py-2 text-gray-600">
            {day}
          </div>
        ))}
        {/* Empty cells for days before the 1st */}
        <div className="h-32 border rounded-lg bg-white"></div>
        <div className="h-32 border rounded-lg bg-white"></div>
        <div className="h-32 border rounded-lg bg-white"></div>
        {days.map((day) => (
          <div
            key={day}
            className={`h-32 border rounded-lg p-2 ${day === 15 ? "bg-blue-50 border-blue-200" : "bg-white"}`}
          >
            <div className="font-medium text-sm">{day}</div>
            {day === 10 && (
              <div className="mt-1">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs">Team Meeting</Badge>
              </div>
            )}
            {day === 15 && (
              <div className="mt-1">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">Interview</Badge>
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 text-xs mt-1">Project Review</Badge>
              </div>
            )}
            {day === 22 && (
              <div className="mt-1">
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs">Deadline</Badge>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-700 rounded-md p-2">
                  <div className="text-xs font-bold">15</div>
                  <div className="text-xs">Jun</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Team Meeting</div>
                  <div className="text-xs text-gray-500">2:00 PM - 3:30 PM</div>
                </div>
                <Badge>High Priority</Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-700 rounded-md p-2">
                  <div className="text-xs font-bold">15</div>
                  <div className="text-xs">Jun</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Interview: Senior Developer</div>
                  <div className="text-xs text-gray-500">10:00 AM - 11:00 AM</div>
                </div>
                <Badge variant="outline">Medium</Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 text-purple-700 rounded-md p-2">
                  <div className="text-xs font-bold">15</div>
                  <div className="text-xs">Jun</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Project Review</div>
                  <div className="text-xs text-gray-500">4:00 PM - 5:00 PM</div>
                </div>
                <Badge variant="outline">Medium</Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 text-orange-700 rounded-md p-2">
                  <div className="text-xs font-bold">22</div>
                  <div className="text-xs">Jun</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Project Deadline</div>
                  <div className="text-xs text-gray-500">All Day</div>
                </div>
                <Badge>High Priority</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Event Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Meetings</div>
                </div>
                <div className="text-sm text-gray-500">12 events</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Interviews</div>
                </div>
                <div className="text-sm text-gray-500">8 events</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Reviews</div>
                </div>
                <div className="text-sm text-gray-500">5 events</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Deadlines</div>
                </div>
                <div className="text-sm text-gray-500">3 events</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Holidays</div>
                </div>
                <div className="text-sm text-gray-500">2 events</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
