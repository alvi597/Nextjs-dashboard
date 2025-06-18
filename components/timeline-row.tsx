"use client"

interface TimelineSegment {
  type: "working" | "break" | "overtime" | "late"
  start: number
  width: number
  label: string
}

interface TimelineData {
  day: string
  clockIn: string
  clockOut: string
  duration: string
  status?: string
  isRequestedDayOff?: boolean
  segments?: TimelineSegment[]
}

interface TimelineRowProps {
  data: TimelineData
}

const timeLabels = ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:59"]

export function TimelineRow({ data }: TimelineRowProps) {
  const getSegmentColor = (type: string) => {
    switch (type) {
      case "working":
        return "bg-blue-500"
      case "break":
        return "bg-teal-500"
      case "overtime":
        return "bg-orange-500"
      case "late":
        return "bg-red-500"
      default:
        return "bg-gray-300"
    }
  }

  if (data.isRequestedDayOff) {
    return (
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center">
          <div className="w-24">
            <div className="font-medium text-gray-900 mb-1">{data.day}</div>
            <div className="text-xs text-gray-500 mb-1">Clock-in</div>
            <div className="text-sm font-medium text-gray-900">{data.clockIn}</div>
          </div>

          <div className="flex-1 mx-4">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              {timeLabels.map((time) => (
                <span key={time}>{time}</span>
              ))}
            </div>
            <div className="relative h-8 bg-yellow-400 rounded flex items-center justify-center">
              <span className="text-sm font-medium text-yellow-900">Requested day off</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-700 font-medium">{data.status}</span>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500 mb-1">Clock-out</div>
              <div className="text-sm font-medium text-gray-900">{data.clockOut}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500 mb-1">Duration</div>
              <div className="text-sm font-medium text-gray-900">{data.duration}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex items-center">
        <div className="w-24">
          <div className="font-medium text-gray-900 mb-1">{data.day}</div>
          <div className="text-xs text-gray-500 mb-1">Clock-in</div>
          <div className="text-sm font-medium text-gray-900">{data.clockIn}</div>
        </div>

        <div className="flex-1 mx-4">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            {timeLabels.map((time) => (
              <span key={time}>{time}</span>
            ))}
          </div>

          <div className="relative h-8 bg-gray-100 rounded overflow-hidden">
            {data.segments?.map((segment, index) => (
              <div
                key={index}
                className={`absolute h-full ${getSegmentColor(segment.type)} flex items-center justify-center`}
                style={{
                  left: `${segment.start}%`,
                  width: `${segment.width}%`,
                }}
              >
                <span className="text-xs text-white font-medium">{segment.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">Clock-out</div>
            <div className="text-sm font-medium text-gray-900">{data.clockOut}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">Duration</div>
            <div className="text-sm font-medium text-gray-900">{data.duration}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
