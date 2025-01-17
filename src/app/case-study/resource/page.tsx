import dynamic from "next/dynamic"
import React from "react"
const ResourceCaseStudy = dynamic(
  () => import("@/app/components/CaseStudy/resource/ResourceCaseStudy")
)

function page() {
  return <ResourceCaseStudy />
}

export default page
