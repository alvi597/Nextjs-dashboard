"use client"

import { ChevronDown, Download, Filter, Search, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const employees = [
  {
    id: "EMP001",
    name: "John Smith",
    position: "Senior Developer",
    department: "Engineering",
    salary: "$8,500",
    status: "Paid",
    date: "Jun 1, 2023",
  },
  {
    id: "EMP002",
    name: "Sarah Johnson",
    position: "Marketing Manager",
    department: "Marketing",
    salary: "$7,200",
    status: "Paid",
    date: "Jun 1, 2023",
  },
  {
    id: "EMP003",
    name: "Michael Brown",
    position: "Product Designer",
    department: "Design",
    salary: "$6,800",
    status: "Paid",
    date: "Jun 1, 2023",
  },
  {
    id: "EMP004",
    name: "Emily Davis",
    position: "HR Specialist",
    department: "Human Resources",
    salary: "$5,500",
    status: "Pending",
    date: "Jun 1, 2023",
  },
  {
    id: "EMP005",
    name: "Robert Wilson",
    position: "Customer Support",
    department: "Support",
    salary: "$4,800",
    status: "Paid",
    date: "Jun 1, 2023",
  },
  {
    id: "EMP006",
    name: "Jennifer Taylor",
    position: "Financial Analyst",
    department: "Finance",
    salary: "$6,200",
    status: "Pending",
    date: "Jun 1, 2023",
  },
  {
    id: "EMP007",
    name: "David Miller",
    position: "Sales Representative",
    department: "Sales",
    salary: "$5,900",
    status: "Paid",
    date: "Jun 1, 2023",
  },
]

export function PayrollPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Payroll</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            June 2023
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Run Payroll</Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Payroll</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124,750.00</div>
            <div className="text-xs text-green-600 mt-1">+3.2% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Employees Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42 / 45</div>
            <div className="text-xs text-gray-500 mt-1">93.3% completion</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$6,237.50</div>
            <div className="text-xs text-green-600 mt-1">+2.8% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Next Payroll Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">July 1, 2023</div>
            <div className="text-xs text-gray-500 mt-1">14 days remaining</div>
          </CardContent>
        </Card>
      </div>

      {/* Employee Table */}
      <Card>
        <CardHeader>
          <CardTitle>Employee Payroll</CardTitle>
          <CardDescription>June 2023 payroll period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search employees..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="rounded-md border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      Employee
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      Department
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      Salary
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      Status
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      Date
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                          <div className="text-sm text-gray-500">{employee.position}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.salary}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        className={
                          employee.status === "Paid"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                        }
                      >
                        {employee.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
