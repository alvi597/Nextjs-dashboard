"use client"

import { CandidateProfile } from "../recruitment/candidate-profile"
import { CandidatesList } from "../recruitment/candidates-list"
import { CandidateDetails } from "../recruitment/candidate-details"
import { PersonalInfo } from "../recruitment/personal-info"

export function RecruitmentPage() {
  return (
    <div className="flex h-full">
      <CandidatesList />
      <div className="flex-1 flex flex-col">
        <CandidateProfile />
        <CandidateDetails />
      </div>
      <PersonalInfo />
    </div>
  )
}
