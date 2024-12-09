import Image from "next/image"
import Link from "next/link"
import HeroImage from "../../assets/images/HeroSectionImage.png"
import HeroSectionbg from "../../assets/images/heroleft.png"

const HeroSection = () => {
  return (
    <section className=" container ">
      {/* Background Image */}
      <Image
        src={HeroSectionbg}
        alt="Hero Section Background"
        className="h-[130%] absolute inset-0 w-full 
        object-cover md:object-contain md:*:object-scale-down -z-10
         top-[-80%] md:top-[-65%] left-[-44%]
        "
      />
      <div className="h-screen max-h-[800px] flex items-center">
        <div className="w-full grid grid-cols-12 ">
          {/* Text Section */}
          <div
            className="w-full col-span-12 md:col-span-7 relative lg:mb-0"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <h1 className="text-3xl font-bold text-white mb-4 leading-normal">
              Empowering your businesses with innovative <br />
              <span className="text-teal text-4xl">Software solutions</span>
            </h1>
            <p className="text-base text-white mb-6 lg:mb-8 font-bold leading-relaxed ">
              Discover how we have transformed businesses across various
              industries through our innovative solutions.
            </p>
            <Link
              href="/contact"
              className="bg-tealgradient border-[0.04rem] border-black text-white py-[0.75rem] lg:py-3 px-[1.5rem] lg:px-6 rounded-lg transition-all duration-1000 ease-in text-[0.875rem] lg:text-[1rem] font-bold 
          hover:bg-[linear-gradient(76deg,#CECECE_0%,#FFF_100%)] hover:shadow-custom-shadow hover:text-custom-text"
            >
              Get Started
            </Link>
          </div>
          {/* Image Section */}
          <div
            data-aos="fade-left"
            data-aos-delay="1000"
            className="col-span-12 md:col-span-5 pt-20 md:pt-10 "
          >
            <Image
              src={HeroImage}
              alt="Hero Image"
              className=" h-[10rem] object-scale-down lg:h-[15rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
