import Image from "next/image"
import Link from "next/link" // Import Link for navigation
import service from "../../assets/svgs/servicelogo.svg"

const Services = () => {
  const services = [
    {
      logo: service,
      title: "Web Development",
      description:
        "We are always one step ahead; we challenge convention and push the boundaries of what can be achieved",
    },
    {
      logo: service,
      title: "App Development",
      description:
        "We anticipate development in the market and industry; then move quickly to adapt our ways of working",
    },
    {
      logo: service,
      title: "UI/UX Designing",
      description:
        "We achieve our goals and consistently deliver with confidence, determination and professionalism",
    },
    {
      logo: service,
      title: "Search Engine Optimization",
      description:
        "We are always one step ahead; we challenge convention and push the boundaries of what can be achieved",
    },
    {
      logo: service,
      title: "Social Media Marketing",
      description:
        "We anticipate development in the market and industry; then move quickly to adapt our ways of working",
    },
    {
      logo: service,
      title: "Bubble/Workflow",
      description:
        "We anticipate development in the market and industry; then move quickly to adapt our ways of working",
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
                className="h-16 mb-4 text-left"
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
