"use client"

import { Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const candidates = [
  {
    name: "Marlon Reynolds",
    appliedDate: "29 Oct, 2023",
    rating: 3.5,
    status: "Overall",
    avatar: "MR",
  },
  {
    name: "Regina Hone",
    appliedDate: "29 Oct, 2023",
    rating: 2,
    status: "Overall",
    avatar: "RH",
  },
  {
    name: "Curtis Baumbach",
    appliedDate: "29 Oct, 2023",
    rating: 3,
    status: "Overall",
    avatar: "CB",
  },
  {
    name: "Jaime Anderson",
    appliedDate: "29 Oct, 2023",
    rating: 0,
    status: "Overall",
    avatar: "JA",
  },
]

export function CandidatesList() {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Research and Development</h2>
        </div>

        <div className="flex gap-2 mb-4">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Open</Badge>
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            Research and Development
          </Badge>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Candidates</span>
              <Badge variant="secondary">45</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Job Info</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search" className="pl-10" />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Applying Period</Badge>
          <span className="text-sm text-gray-600">27</span>
        </div>

        <div className="space-y-3">
          {candidates.map((candidate, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                index === 0 ? "bg-blue-50 border-blue-200" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gray-200 text-gray-700 text-sm">{candidate.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium text-sm">{candidate.name}</div>
                  <div className="text-xs text-gray-500">Applied at {candidate.appliedDate}</div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">
                    {candidate.rating} {candidate.status}
                  </span>
                </div>
                <span className="text-xs text-gray-500">3.4</span>
              </div>
            </div>
          ))}
        </div>

        <Button variant="ghost" className="w-full mt-4 text-blue-600">
          <Plus className="h-4 w-4 mr-2" />
          Add Assessment
        </Button>
      </div>
    </div>
  )
}
