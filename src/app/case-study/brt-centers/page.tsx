import dynamic from "next/dynamic"
import React from "react"
const BrtCentersCaseStudy = dynamic(
  () => import("@/app/components/CaseStudy/brt-centers/BrtCentersCaseStudy")
)

function page() {
  return <BrtCentersCaseStudy />
}

export default page
