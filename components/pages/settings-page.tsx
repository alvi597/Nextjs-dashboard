"use client"

import { Save, Bell, Shield, Users, Building, Palette, Globe, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start bg-blue-50 text-blue-700">
            <Building className="h-4 w-4 mr-2" />
            General
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="h-4 w-4 mr-2" />
            User Management
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Palette className="h-4 w-4 mr-2" />
            Appearance
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Globe className="h-4 w-4 mr-2" />
            Localization
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Database className="h-4 w-4 mr-2" />
            Data & Privacy
          </Button>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details and branding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="Tiimi Technologies" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Company Email</Label>
                  <Input id="company-email" type="email" defaultValue="contact@tiimi.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-address">Address</Label>
                <Textarea id="company-address" defaultValue="123 Business Street, Tech City, TC 12345" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-phone">Phone Number</Label>
                  <Input id="company-phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-website">Website</Label>
                  <Input id="company-website" defaultValue="https://tiimi.com" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>System Preferences</CardTitle>
              <CardDescription>Configure system-wide settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <div className="text-sm text-gray-500">Receive email notifications for important updates</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-save Changes</Label>
                  <div className="text-sm text-gray-500">Automatically save changes as you work</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <div className="text-sm text-gray-500">Require 2FA for all admin accounts</div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data Export</Label>
                  <div className="text-sm text-gray-500">Allow users to export their data</div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Working Hours */}
          <Card>
            <CardHeader>
              <CardTitle>Working Hours</CardTitle>
              <CardDescription>Set default working hours for your organization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-time">Start Time</Label>
                  <Input id="start-time" type="time" defaultValue="09:00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-time">End Time</Label>
                  <Input id="end-time" type="time" defaultValue="17:00" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Working Days</Label>
                <div className="flex gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <Button
                      key={day}
                      variant={day === "Sat" || day === "Sun" ? "outline" : "default"}
                      size="sm"
                      className={day === "Sat" || day === "Sun" ? "" : "bg-blue-600 hover:bg-blue-700"}
                    >
                      {day}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Integrations */}
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect with third-party services and tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">S</span>
                  </div>
                  <div>
                    <div className="font-medium">Slack</div>
                    <div className="text-sm text-gray-500">Team communication and notifications</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">G</span>
                  </div>
                  <div>
                    <div className="font-medium">Google Workspace</div>
                    <div className="text-sm text-gray-500">Calendar and email integration</div>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">M</span>
                  </div>
                  <div>
                    <div className="font-medium">Microsoft Teams</div>
                    <div className="text-sm text-gray-500">Video conferencing and collaboration</div>
                  </div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
