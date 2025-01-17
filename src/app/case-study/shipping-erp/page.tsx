import dynamic from "next/dynamic"
import React from "react"
const ShippingERPCaseStudy = dynamic(
  () => import("@/app/components/CaseStudy/shipping-erp/ShippingERPCaseStudy")
)

function page() {
  return <ShippingERPCaseStudy />
}

export default page
