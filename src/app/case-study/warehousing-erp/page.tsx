import dynamic from "next/dynamic"
import React from "react"
const WarehousingERPCaseStudy = dynamic(
  () =>
    import("@/app/components/CaseStudy/warehousing-erp/WarehousingERPCaseStudy")
)

function page() {
  return <WarehousingERPCaseStudy />
}

export default page
