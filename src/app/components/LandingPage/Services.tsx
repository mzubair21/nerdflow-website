import Image from "next/image"
import Link from "next/link" // Import Link for navigation
// import service from "../../assets/svgs/servicelogo.svg"
import Ai from "../../assets/images/Ai.png"
import WebDevelopment from "../../assets/images/WebDevelopment.png"
import UiUx from "../../assets/images/UiUx.png"
import Seo from "../../assets/images/Seo.png"
import SocialMediaMarketing from "../../assets/images/SocialMediaMarketing.png"
import WebDesigning from "../../assets/images/WebDesigning.png"
import DataEngineering from "../../assets/images/DataEngineering.png"
import Sass from "../../assets/images/Sass.png"
import CRM from "../../assets/images/CRM.png"

const Services = () => {
  const services = [
    {
      logo: CRM,
      title: "CRM & ERP Development",
      description:
        "Automating and streamlining your business processes with custom CRM and ERP solutions.",
    },
    {
      logo: Ai,
      title: "AI Development",
      description:
        "Revolutionizing your business with tailored AI solutions that enhance efficiency.",
    },
    {
      logo: WebDevelopment,
      title: "App Development",
      description:
        "Building intuitive and scalable apps for seamless user experiences.",
    },
    {
      logo: UiUx,
      title: "UI/UX Design",
      description:
        "Crafting engaging and user-friendly interfaces that captivate and convert.",
    },
    {
      logo: WebDesigning,
      title: "Website Development",
      description:
        "Creating responsive, fast-loading, and secure websites for your business.",
    },
    {
      logo: Sass,
      title: "SaaS Development",
      description:
        "Building scalable and secure SaaS applications that cater to your unique business needs.",
    },
    {
      logo: Seo,
      title: "Search Engine Optimization",
      description:
        "Boosting your online visibility with effective SEO strategies.",
    },
    {
      logo: SocialMediaMarketing,
      title: "Social Media Marketing",
      description:
        "Growing your brand's presence and engagement through social media.",
    },
    {
      logo: DataEngineering,
      title: "Data Engineering",
      description:
        "Transforming raw data into actionable insights with robust engineering solutions.",
    },
  ]

  return (
    <div
      data-aos="fade-up"
      // data-aos-anchor-placement="top-center"
      className=" container  mx-auto text-white"
    >
      <div className="text-left mb-8 ">
        <h1 className="text-3xl  font-semibold text-white mb-4">
          Our <span className="text-teal">Services</span>
        </h1>
        <p className="text-white opacity-60 mb-2 text-base font-inter">
          From web development to innovative app solutions, we deliver
          excellence across every digital dimension.
        </p>
        <p className="text-white opacity-60 mb-6 text-base font-inter">
          Elevating Business Solutions: Discover Our Comprehensive Services
        </p>
      </div>

      {/* Cards Section */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {services.map((service, index) => (
          <Link
            href={`/services?category=${service.title}`}
            key={index}
            passHref
          >
            <div className="h-full rounded-lg border-[0.799px] border-[#2D2D2D] bg-[rgba(0,0,0,0.27)] p-6 flex flex-col items-start text-left group transition-all duration-300 ease-out cursor-pointer hover:border-[#122F26] hover:border-white hover:backdrop-blur-[18px] pb-8">
              <Image
                src={service.logo}
                alt={`${service.title} Logo`}
                className=" h-20 object-scale-down object-left mb-5 text-left"
              />
              <h2 className="text-lg font-medium text-white mb-4 text-left ">
                {service.title}
              </h2>
              <p className="text-base text-gray-300 text-left ">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services
