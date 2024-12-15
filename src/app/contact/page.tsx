import dynamic from "next/dynamic"

const ContactUs = dynamic(() => import("../components/Contact/ContactUs"))
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
      <ContactUs />
      <Footer />
    </>
  )
}

export default page
