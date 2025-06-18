"use client"

import { Mail, Phone, User, Calendar, MapPin, GraduationCap, Award, Hash, Smile, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function PersonalInfo() {
  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6 space-y-6">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Email Address</div>
              <div className="text-sm">kristisipes@gmail.com</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Phone Number</div>
              <div className="text-sm">+62-921-019-112</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Gender</div>
              <div className="text-sm">Female</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Birthdate</div>
              <div className="text-sm">May 20, 2000</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Living Address</div>
              <div className="text-sm">New York, NY, 10001, United States</div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Education Information</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">University</div>
              <div className="text-sm">Boston University</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Award className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Qualification Held</div>
              <div className="text-sm">Bachelor of Engineering</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Hash className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Year Graduation</div>
              <div className="text-sm">2014</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Referral</div>
              <div className="text-sm">Not Provided</div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Notes</h3>
        <div className="relative">
          <Input placeholder="Write note..." className="pr-20" />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Smile className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Hash className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Paperclip className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
