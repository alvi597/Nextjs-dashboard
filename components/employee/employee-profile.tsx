"use client"

import { ArrowLeft, Plus, ChevronLeft, ChevronRight, MoreVertical, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function EmployeeProfile() {
  return (
    <div className="bg-white px-6 py-4">
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src="/placeholder.svg?height=56&width=56" />
            <AvatarFallback className="bg-teal-100 text-teal-700 font-semibold">PD</AvatarFallback>
          </Avatar>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-xl font-semibold text-gray-900">Panji Dwi</h1>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs px-2 py-1">Active</Badge>
            </div>

            <div className="flex gap-12 text-sm">
              <div>
                <div className="text-gray-500 text-xs mb-1">Last Clocked In</div>
                <div className="text-gray-900 font-medium">A few seconds ago</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">Last Messaged</div>
                <div className="text-gray-900 font-medium">2 Days ago</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">Employee ID</div>
                <div className="text-gray-900 font-medium">#EMP07</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-600">1 of 32</span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
          </Button>

          <Button className="bg-teal-600 hover:bg-teal-700 h-9 px-4 text-sm">
            <Mail className="h-4 w-4 mr-2" />
            Send Email
          </Button>
        </div>
      </div>
    </div>
  )
}
