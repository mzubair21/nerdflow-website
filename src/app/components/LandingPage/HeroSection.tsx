import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../assets/images/HeroSectionImage.png";
import HeroSectionbg from "../../assets/svgs/HeroSectionBg.svg";

const HeroSection = () => {
  return (
    <section className="font-poppins mt-28 flex flex-col lg:flex-row items-center justify-between lg:py-10 container relative ">
      {/* Text Section with Background */}
      <div className="w-full lg:w-[55%] relative mb-8 lg:mb-0">
        {/* Background Image using Image component */}
        <Image
          src={HeroSectionbg}
          alt="Hero Section Background"
          className="absolute inset-0 w-full h-full object-cover -z-10 hidden lg:block"
          style={{ top: "-30%", left: "-20%" }}
        />
        <h1 className="text-[2rem] lg:text-[2.813rem] font-bold text-white relative z-10">
          Empowering your businesses with innovative <br />
          <span className="text-teal text-[2.5rem] lg:text-[4rem]">
            Software solutions
          </span>
        </h1>
        <p className="text-base lg:text-lg mb-6 lg:mb-8 font-bold relative z-10 ">
          Discover how we have transformed businesses across various industries
          through our innovative solutions.
        </p>
        <Link
          href="/contact"
          className="bg-tealgradient border-[0.04rem] border-black text-white py-[0.75rem] lg:py-3 px-[1.5rem] lg:px-6 rounded-lg transition-all duration-1000 ease-in text-[0.875rem] lg:text-[1rem] font-bold relative z-10 
    hover:bg-[linear-gradient(76deg,#CECECE_0%,#FFF_100%)] hover:shadow-custom-shadow 
    hover:text-custom-text
  "
        >
          Get Started
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center lg:w-auto">
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="w-[18rem] h-[10rem] lg:w-[25rem] lg:h-[15rem]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
