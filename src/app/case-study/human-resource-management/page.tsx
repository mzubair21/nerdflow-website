import dynamic from "next/dynamic"
import React from "react"
const HumanResourceManagementCaseStudy = dynamic(
  () =>
    import(
      "@/app/components/CaseStudy/human-resource-management/HumanResourceManagementCaseStudy"
    )
)

function page() {
  return <HumanResourceManagementCaseStudy />
}

export default page
