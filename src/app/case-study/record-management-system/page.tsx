import dynamic from "next/dynamic"
import React from "react"
const ResourceCaseStudy = dynamic(
  () =>
    import(
      "@/app/components/CaseStudy/record-management-system/RecordManagementSystemCaseStudy"
    )
)

function page() {
  return <ResourceCaseStudy />
}

export default page
