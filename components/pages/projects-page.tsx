"use client"

import { Plus, Search, MoreHorizontal, Clock, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    name: "Website Redesign",
    description: "Redesign the company website with new branding",
    progress: 75,
    status: "In Progress",
    dueDate: "Jun 30, 2023",
    members: 8,
    tasks: { completed: 24, total: 32 },
  },
  {
    name: "Mobile App Development",
    description: "Develop a new mobile app for customers",
    progress: 40,
    status: "In Progress",
    dueDate: "Aug 15, 2023",
    members: 12,
    tasks: { completed: 18, total: 45 },
  },
  {
    name: "CRM Integration",
    description: "Integrate the new CRM system with existing tools",
    progress: 90,
    status: "Almost Complete",
    dueDate: "Jun 15, 2023",
    members: 5,
    tasks: { completed: 27, total: 30 },
  },
  {
    name: "Employee Onboarding System",
    description: "Create a new digital onboarding experience",
    progress: 20,
    status: "Just Started",
    dueDate: "Sep 1, 2023",
    members: 6,
    tasks: { completed: 8, total: 40 },
  },
  {
    name: "Annual Report 2023",
    description: "Prepare the annual financial and performance report",
    progress: 100,
    status: "Completed",
    dueDate: "May 31, 2023",
    members: 4,
    tasks: { completed: 28, total: 28 },
  },
]

export function ProjectsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search projects..." className="pl-10" />
        </div>
        <Button variant="outline">All Projects</Button>
        <Button variant="outline">My Projects</Button>
        <Button variant="outline">Active</Button>
        <Button variant="outline">Completed</Button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.name} className="hover:border-blue-200 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{project.name}</h3>
                    <Badge
                      className={`${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : project.status === "Almost Complete"
                            ? "bg-blue-100 text-blue-700"
                            : project.status === "In Progress"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Due: {project.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{project.members} members</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>
                    {project.tasks.completed}/{project.tasks.total} tasks
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
