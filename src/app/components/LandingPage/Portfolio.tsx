import Image from "next/image";
import Link from "next/link";
import ClearEats from "../../assets/images/ClearEats.png";
import DailyBazar from "../../assets/images/DailyBazar.png";
import VTK from "../../assets/images/VTK.png";
import Wizz from "../../assets/images/Wizz.png";
import WizzLeft from "../../assets/images/WizzLeft.png";
import WizzRight from "../../assets/images/WizzRight.png";

const Portfolio = () => {
  return (
    <div className="font-poppins mx-auto" id="portfolio">
      <div className="mb-8 container">
        <h1 className="text-white text-2xl sm:text-4xl font-semibold mb-4">
          Our <span className="text-teal">Portfolio</span>
        </h1>
        <p className="text-[1rem] font-bold sm:text-base w-full sm:w-3/5 text-gray-300">
          Dive into a collection of our finest projects, exemplifying our
          prowess in delivering exceptional websites, applications, and digital
          solutions.
        </p>
      </div>

      {/* Daily Bazar */}
      <section className="font-poppins flex flex-col lg:flex-row items-center justify-between py-14 container mx-auto relative">
        {/* Text Section with Background */}
        <div className="w-full lg:w-[34rem] mb-6 lg:mb-0">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white mb-4">
            Daily Bazaar Web Application
          </h1>
          <p className="text-sm sm:text-base mb-8 font-bold text-white">
            An extensive eCommerce application with a vast array of products and
            a seamless, user-friendly interface.
          </p>
          <Link
            href="/contact"
            className="bg-tealgradient text-white py-3 px-6 rounded-lg hover:bg-teal-600 text-sm sm:text-base font-bold"
          >
            See Case Study
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[35.8rem] h-auto">
          <Image
            src={DailyBazar}
            alt="Daily Bazar Image"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Wizz */}
      <section className="font-poppins flex flex-col-reverse lg:flex-row items-center justify-between py-14 container mx-auto  relative">
        {/* Image Section */}
        <div className="w-full lg:w-[35.8rem] h-auto mb-6 lg:mb-0">
          <Image src={Wizz} alt="Wizz Image" className="w-full h-auto" />
        </div>

        {/* Text Section with Background */}
        <div className="w-full lg:w-[34rem] relative">
          <Image
            src={WizzRight}
            alt="Hero Section Background"
            className="absolute inset-0 w-auto h-auto hidden 2xl:block xl:block -z-10 left-[14%] 2xl:left-[18%]"
            style={{ top: "-150%" }} 
          />

          <Image
            src={WizzLeft}
            alt="Portfolio Background"
            className="absolute inset-0 w-auto h-auto lg:hidden xl:block -z-10"
            style={{ top: "-150%", left: "-180%" }}
          />

          <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white mb-4">
            Wizz Logistics
          </h1>
          <p className="text-sm sm:text-base mb-8 font-bold text-white">
            Automating logistics operations with a custom ERP, optimizing
            inventory management and order processing.
          </p>
          <Link
            href="/contact"
            className="bg-tealgradient text-white py-3 px-6 rounded-lg hover:bg-teal-600 text-sm sm:text-base font-bold"
          >
            See Case Study
          </Link>
        </div>
      </section>

      {/* VTK */}
      <section className="font-poppins flex flex-col lg:flex-row items-center justify-between py-14 container mx-auto  relative">
        {/* Text Section */}
        <div className="w-full lg:w-[34rem] mb-6 lg:mb-0">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white mb-4">
            VTK Legal Solution
          </h1>
          <p className="text-sm sm:text-base mb-8 font-bold text-white">
            Streamlining legal processes with advanced solutions for case
            management, compliance, and documentation.
          </p>
          <Link
            href="/contact"
            className="bg-tealgradient text-white py-3 px-6 rounded-lg hover:bg-teal-600 text-sm sm:text-base font-bold"
          >
            See Case Study
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[35.8rem] h-auto">
          <Image src={VTK} alt="VTK Image" className="w-full h-auto" />
        </div>
      </section>

      {/* Clear Eats */}
      <section className="font-poppins flex flex-col-reverse lg:flex-row items-center justify-between py-14 container mx-auto  relative">
        {/* Image Section */}
        <div className="w-full lg:w-[35.8rem] h-auto mb-6 lg:mb-0">
          <Image
            src={ClearEats}
            alt="Clear Eats Image"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[34rem]">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white mb-4">
            Clear Eats Web Application
          </h1>
          <p className="text-sm sm:text-base mb-8 font-bold text-white">
            Experience the sleek, user-friendly design of Clear Eats through our
            app screenshots.
          </p>
          <Link
            href="/contact"
            className="bg-tealgradient text-white py-3 px-6 rounded-lg hover:bg-teal-600 text-sm sm:text-base font-bold"
          >
            See Case Study
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
