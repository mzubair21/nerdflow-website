import AosInit from "../components/LandingPage/AosInit"
import ClientTestimonials from "../components/LandingPage/ClientTestimonials"
import Footer from "../components/LandingPage/Footer"
import Header from "../components/LandingPage/Header"
import FAQ from "../components/Services/FAQ"
import Pricing from "../components/Services/Pricing"
import Projects from "../components/Services/Projects"
import Services from "../components/Services/service"

const page = () => {
  return (
    <>
      {/** */}
      <AosInit />
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
