import dynamic from "next/dynamic"
import React from "react"
const DailyBazarCaseStudy = dynamic(
  () => import("@/app/components/CaseStudy/daily-bazar/DailyBazarCaseStudy")
)

function page() {
  return <DailyBazarCaseStudy />
}

export default page
