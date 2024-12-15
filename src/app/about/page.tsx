import dynamic from "next/dynamic"

const AboutUs = dynamic(() => import("../components/AboutUs/About"))
const AosInit = dynamic(() => import("../components/LandingPage/AosInit"))
const Header = dynamic(() => import("../components/LandingPage/Header"))

import Loading from "../loading"
import Footer from "../components/LandingPage/Footer"

const page = () => {
  return (
    <>
      <AosInit />
      <Loading initFakeLoading={true} />
      <Header />
      <AboutUs />
      <Footer />
    </>
  )
}

export default page
