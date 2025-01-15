import Image from "next/image"
import Link from "next/link" // Import Link for navigation
// import service from "../../assets/svgs/servicelogo.svg"
import Ai from "../../assets/images/Ai.png"
import WebDevelopment from "../../assets/images/WebDevelopment.png"
import UiUx from "../../assets/images/UiUx.png"
import Seo from "../../assets/images/Seo.png"
import SocialMediaMarketing from "../../assets/images/SocialMediaMarketing.png"
import WebDesigning from "../../assets/images/WebDesigning.png"

const Services = () => {
  const services = [
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
      logo: WebDesigning,
      title: "Website Development",
      description:
        "Creating responsive, fast-loading, and secure websites for your business.",
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
        <p className="text-white opacity-60 mb-2 text-base font-bold font-inter">
          From web development to innovative app solutions, we deliver
          excellence across every digital dimension.
        </p>
        <p className="text-white opacity-60 font-bold mb-6 text-base font-inter">
          Elevating Business Solutions: Discover Our Comprehensive Services
        </p>
      </div>

      {/* Cards Section */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {services.map((service, index) => (
          <Link href="/contact" key={index} passHref>
            <div className="h-full border-[0.799px] border-[#122F26] bg-[rgba(0,0,0,0.27)] p-6 flex flex-col text-left group transition-all duration-300 ease-out cursor-pointer hover:border-[#122F26] hover:bg-greenhover hover:backdrop-blur-[18px] pb-8">
              <Image
                src={service.logo}
                alt={`${service.title} Logo`}
                className="h-16 w-16 object-scale-down mb-4 text-left invert"
              />
              <h2 className="text-lg font-semibold text-white mb-4 text-left group-hover:text-black">
                {service.title}
              </h2>
              <p className="text-base font-bold text-gray-300 text-left group-hover:text-black">
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
