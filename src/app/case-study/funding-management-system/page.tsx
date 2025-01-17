import dynamic from "next/dynamic"
import React from "react"
const FundingManagementSystemCaseStudy = dynamic(
  () =>
    import(
      "@/app/components/CaseStudy/funding-management-system/FundingManagementSystemCaseStudy"
    )
)

function page() {
  return <FundingManagementSystemCaseStudy />
}

export default page
