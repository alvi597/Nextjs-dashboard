"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ChartSection() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Monthly revenue for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px] w-full">
          {/* Placeholder for chart */}
          <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25">
            <div className="text-center">
              <div className="text-lg font-semibold text-muted-foreground">Chart Placeholder</div>
              <div className="text-sm text-muted-foreground">Revenue data visualization would go here</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
