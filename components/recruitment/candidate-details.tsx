"use client"

import { FileText, File, MessageSquare, Video, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const tabs = [
  { name: "Job Application", icon: FileText, active: true },
  { name: "Resume", icon: File, active: false },
  { name: "Form Submission", icon: MessageSquare, active: false },
  { name: "Interview", icon: Video, active: false },
]

const hiringStages = [
  { name: "Applying", active: true, completed: true },
  { name: "Screening", active: true, completed: true },
  { name: "Interview", active: false, completed: false },
  { name: "Test", active: false, completed: false },
  { name: "Onboarding", active: false, completed: false },
]

const candidateScores = [
  { stage: "Applying", score: 3, maxScore: 5, progress: 60 },
  { stage: "Screening", score: 4, maxScore: 5, progress: 80 },
  { stage: "Interview", score: 0, maxScore: 5, progress: 0 },
  { stage: "Test", score: 0, maxScore: 5, progress: 0 },
  { stage: "Onboarding", score: 0, maxScore: 5, progress: 0 },
]

export function CandidateDetails() {
  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Navigation Tabs */}
      <div className="flex gap-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              tab.active ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.name}
          </button>
        ))}
      </div>

      {/* Move Stage Button */}
      <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-700">
          Move Stage
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Hiring Process */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Hiring Process</h3>
        <div className="flex items-center gap-4 mb-6">
          {hiringStages.map((stage, index) => (
            <div key={stage.name} className="flex items-center">
              <div
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  stage.active
                    ? "bg-blue-600 text-white"
                    : stage.completed
                      ? "bg-gray-200 text-gray-700"
                      : "bg-gray-100 text-gray-500"
                }`}
              >
                {stage.name}
              </div>
              {index < hiringStages.length - 1 && (
                <div className={`w-8 h-0.5 mx-2 ${stage.completed ? "bg-blue-600" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Candidate Score */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Candidate Score</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-3xl font-bold text-center mb-2">3.5</div>
          <div className="text-sm text-gray-600 text-center mb-4">Overall score</div>

          <div className="space-y-3">
            {candidateScores.map((item) => (
              <div key={item.stage} className="flex items-center gap-4">
                <div className="w-20 text-sm text-gray-600">{item.stage}</div>
                <div className="flex-1">
                  <Progress value={item.progress} className="h-2" />
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{item.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs Applied */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Jobs Applied</h3>
          <Button variant="ghost" className="text-blue-600">
            View details
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h4 className="font-medium mb-3">Research and Development Officer</h4>
          <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Fulltime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Jogja</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Onsite</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-gray-500 mb-1">Experience in Years</div>
              <div className="font-medium">4 Years</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Current Employer</div>
              <div className="font-medium">Acme Studio</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Current Salary</div>
              <div className="font-medium">5.000.000 IDR</div>
            </div>
            <div></div>
            <div>
              <div className="text-gray-500 mb-1">Expected Salary</div>
              <div className="font-medium">8.000.000 IDR</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Referred by</div>
              <div className="font-medium">No Referral</div>
            </div>
          </div>
        </div>
      </div>

      {/* Score Card */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Score Card</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium mb-2">Relevant Education</h4>
              <p className="text-sm text-gray-600">
                Refers to the academic background and certifications that a candidate possesses.
              </p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
