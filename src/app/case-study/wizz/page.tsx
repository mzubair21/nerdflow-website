import dynamic from "next/dynamic"
import React from "react"
const WizzCaseStudy = dynamic(
  () => import("@/app/components/CaseStudy/wizz/WizzCaseStudy")
)

function page() {
  return <WizzCaseStudy />
}

export default page
