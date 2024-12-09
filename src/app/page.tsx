import dynamic from "next/dynamic"
import Loading from "./loading"

const AboutUs = dynamic(() => import("./components/LandingPage/AboutUs"))
const AosInit = dynamic(() => import("./components/LandingPage/AosInit"))
const Blogs = dynamic(() => import("./components/LandingPage/Blogs"))
const Clients = dynamic(() => import("./components/LandingPage/Clients"))
const ClientTestimonials = dynamic(
  () => import("./components/LandingPage/ClientTestimonials")
)
const Footer = dynamic(() => import("./components/LandingPage/Footer"))
const Header = dynamic(() => import("./components/LandingPage/Header"))
const HeroSection = dynamic(
  () => import("./components/LandingPage/HeroSection")
)
const Portfolio = dynamic(() => import("./components/LandingPage/Portfolio"))
const Services = dynamic(() => import("./components/LandingPage/Services"))

export default function Home() {
  return (
    <div>
      <AosInit />
      <Header />
      <Loading initFakeLoading={true} />
      <HeroSection />
      <Services />
      <Portfolio />
      <Clients />
      <AboutUs />
      <ClientTestimonials bg={true} />
      <Blogs />
      <Footer />
    </div>
  )
}
