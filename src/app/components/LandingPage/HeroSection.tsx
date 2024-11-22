import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../assets/images/HeroSectionImage.png";
import HeroSectionbg from "../../assets/svgs/HeroSectionBg.svg";

const HeroSection = () => {
  return (
    <section className=" mt-44 mb-20 flex flex-col lg:flex-row items-center container relative ">
      {/* Text Section with Background */}
      <div className="w-full lg:w-[40%] relative mb-8 lg:mb-0 flex-1 container">
        {/* Background Image using Image component */}
        <Image
          src={HeroSectionbg}
          alt="Hero Section Background"
          className="absolute inset-0 w-full h-full object-cover -z-10 hidden lg:block"
          style={{ top: "-60%", left: "-10%" }}
        />
        <h1 className="text-3xl font-bold text-white relative z-10 mb-4 leading-normal">
          Empowering your businesses <br /> with innovative <br />
          <span className="text-teal text-4xl z-10">
            Software solutions
          </span>
        </h1>
        <p className="text-base text-white  mb-6 lg:mb-8 font-bold relative z-10 ">
          Discover how we have transformed businesses across various industries <br/>
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
