import dynamic from "next/dynamic"
import React from "react"
const LitigationManagementSystemCaseStudy = dynamic(
  () =>
    import(
      "@/app/components/CaseStudy/litigation-management-system/LitigationManagementSystemCaseStudy"
    )
)

function page() {
  return <LitigationManagementSystemCaseStudy />
}

export default page
