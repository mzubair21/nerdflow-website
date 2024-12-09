import AboutUs from "../components/AboutUs/About"
import AosInit from "../components/LandingPage/AosInit"
import Footer from "../components/LandingPage/Footer"
import Header from "../components/LandingPage/Header"

const page = () => {
  return (
    <>
      {/** */}
      <AosInit />
      <Header />
      <AboutUs />
      <Footer />
    </>
  )
}

export default page
