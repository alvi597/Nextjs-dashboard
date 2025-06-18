"use client"

import { Star, Mail, MoreVertical, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function CandidateProfile() {
  return (
    <div className="bg-white border-b border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64" />
            <AvatarFallback className="bg-gray-200 text-gray-700 text-lg">KS</AvatarFallback>
          </Avatar>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                Kristi Sipes
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </h1>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">3.5 Overall</span>
              </div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
            </div>

            <div className="flex gap-12 text-sm">
              <div>
                <div className="text-gray-500 text-xs mb-1">Origin</div>
                <div className="text-gray-900 font-medium">Career Site</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">Applied at</div>
                <div className="text-gray-900 font-medium">13 October, 2023</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">Job Applied</div>
                <div className="text-gray-900 font-medium">Research and Development</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
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
