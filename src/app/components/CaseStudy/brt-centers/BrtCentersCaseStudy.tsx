import Image from "next/image"
import CaseStudyBg from "@/app/assets/images/CaseStudyBg.png"
import CaseStudyLeft from "@/app/assets/images/CaseStudyLeft.png"
import main from "@/app/assets/images/laptop.png"
import medical from "@/app/assets/images/medical.png"
import slide1bg from "./assets/brt1.png"
import slide2bg from "./assets/brt2.png"
import slide3bg from "./assets/brt3.png"

import CaseStudySwiper from "../CaseStudySwiper"

const slides = [
  {
    image: slide1bg,
    heading: "User  Centric Authentication",
    description:
      "Laravel brings a host of advantages to CRM development. Its expressive syntax, modular architecture, and extensive ecosystem make it ideal for crafting tailored CRM solutions. With features like ORM (Eloquent), routing, caching, and security, Laravel accelerates development while ensuring a secure foundation.",
  },
  {
    image: slide2bg,
    heading: "Data  Centric Authentication",
    description:
      "Laravel brings a host of advantages to CRM development. Its expressive syntax, modular architecture, and extensive ecosystem make it ideal for crafting tailored CRM solutions. With features like ORM (Eloquent), routing, caching, and security, Laravel accelerates development while ensuring a secure foundation.",
  },
  {
    image: slide3bg,
    heading: "Advanced Data Analytics",
    description:
      "Laravel brings a host of advantages to CRM development. Its expressive syntax, modular architecture, and extensive ecosystem make it ideal for crafting tailored CRM solutions. With features like ORM (Eloquent), routing, caching, and security, Laravel accelerates development while ensuring a secure foundation.",
  },
]

const BrtCentersCaseStudy = () => {
  return (
    <div data-aos="fade-up">
      <div className="relative h-[28rem]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url(${CaseStudyBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "-25%",
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 flex items-end h-[28rem] bg-custom-gradient2">
          <div className="container flex flex-col gap-4">
            <h1 className="text-white font-semibold text-3xl">
              <span className="text-teal">BRT</span> Centers
            </h1>
            <p className="text-white text-lg">
              Explore Technological Horizons: Insights, Trends, and Innovations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between  py-10 relative container">
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-[25rem] absolute -top-[50%] -left-[10%] hidden xl:block">
          <Image
            src={CaseStudyLeft}
            alt="Plan Left Background"
            className="absolute inset-0 w-auto h-auto -z-10"
          />
        </div>
        <div className="w-full md:w-[55%] pt-8 md:pb-12 text-white">
          <h1 className="text-[2.125rem] md:text-2xl font-bold mb-4">
            Introduction
          </h1>
          <p className="text-base md:text-lg">
            Introducing our innovative CRM solution, designed to elevate the
            efficiency and effectiveness of BRT Centers, a distinguished
            healthcare institution. With a strong commitment to improving
            operational workflows and enhancing patient care, our CRM serves as
            a tailored platform that streamlines checkups, simplifies
            documentation tasks, and expedites the process of report generation.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-[20rem] h-[15rem] md:w-[30rem] md:h-[20rem] mt-6 md:mt-0">
          <Image src={medical} alt="medical image" />
        </div>
      </div>

      {/* Main Image and Description */}
      <div className="pt-6 container">
        <div className="w-[18rem] md:w-[38.6rem] h-[12rem] md:h-[23.6rem] mx-auto mb-2 md:mb-12">
          <Image src={main} alt="main screen"></Image>
        </div>
        <div>
          <p className="text-sm md:text-lg text-white">
            Leveraging advanced technology and a deep understanding of
            healthcare management, our solution is poised to redefine how BRT
            Centers approaches daily operations, ensuring seamless processes and
            optimized patient experiences. By providing intuitive tools for
            checkup creation, secure data storage, and swift report creation,
            our CRM empowers BRT Centers to focus on what truly matters –
            delivering top-notch healthcare services while maintaining the
            highest standards of operational efficiency.
          </p>
        </div>
      </div>

      {/* BRT Modules */}
      <div className="mt-8 container text-white">
        <h1 className="text-[1.8rem] md:text-[2.125rem] font-semibold">
          BRT <span className="text-teal">Modules</span>
        </h1>
        <p className="text-sm md:text-lg">
          Laravel brings a host of advantages to CRM development. Its expressive
          syntax, modular architecture, and extensive ecosystem make it ideal
          for crafting tailored CRM solutions. With features like ORM
          (Eloquent), routing, caching, and security, Laravel accelerates
          development while ensuring a secure foundation.
        </p>
      </div>

      {/* Slider Section */}
      <CaseStudySwiper slides={slides} />
    </div>
  )
}

export default BrtCentersCaseStudy
