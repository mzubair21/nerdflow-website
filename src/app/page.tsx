import AboutUs from "./components/LandingPage/AboutUs";
import Blogs from "./components/LandingPage/Blogs";
import Clients from "./components/LandingPage/Clients";
import ClientTestimonials from "./components/LandingPage/ClientTestimonials";
import Footer from "./components/LandingPage/Footer";
import Header from "./components/LandingPage/Header";
import HeroSection from "./components/LandingPage/HeroSection";
import Portfolio from "./components/LandingPage/Portfolio";
import Services from "./components/LandingPage/Services";

export default function Home(){
  return(
    
    <div>
      <Header/>
      <HeroSection/>
      <Services/>
      <Portfolio/>
      <Clients/>
      <AboutUs/>
      <ClientTestimonials bg={true} />
      <Blogs/>
      <Footer/>
    </div>
  )
}