import ContactUs from "../components/Contact/ContactUs"
import AosInit from "../components/LandingPage/AosInit"
import Footer from "../components/LandingPage/Footer"
import Header from "../components/LandingPage/Header"

const page = () => {
  return (
    <>
      {/** */}
      <AosInit />
      <Header />
      <ContactUs />
      <Footer />
    </>
  )
}

export default page
