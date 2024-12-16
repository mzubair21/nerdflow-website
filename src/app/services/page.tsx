import dynamic from "next/dynamic"

const AosInit = React.lazy(() => import("../components/LandingPage/AosInit"))
const Header = dynamic(() => import("../components/LandingPage/Header"))
const Footer = React.lazy(() => import("../components/LandingPage/Footer"))
const Services = dynamic(() => import("../components/Services/service"))

import FAQ from "../components/Services/FAQ"
import Pricing from "../components/Services/Pricing"
import Projects from "../components/Services/Projects"
import Loading from "../loading"
import ClientTestimonials from "../components/LandingPage/ClientTestimonials"
import React from "react"

const page = () => {
  return (
    <>
      {/** */}
      <AosInit />
      <Loading initFakeLoading={true} />
      <Header />
      <Services />
      <Projects />
      <FAQ />
      <ClientTestimonials bg={false} />
      <Pricing />
      <Footer />
    </>
  )
}

export default page
