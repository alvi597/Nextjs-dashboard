"use client"

import { EmployeeProfile } from "../employee/employee-profile"
import { NavigationTabs } from "../employee/navigation-tabs"
import { TimeManagement } from "../employee/time-management"

export function EmployeePage() {
  return (
    <>
      <EmployeeProfile />
      <NavigationTabs />
      <TimeManagement />
    </>
  )
}
