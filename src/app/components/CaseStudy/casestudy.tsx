"use client";
import Image from "next/image";
import { useState } from "react";
import CaseStudyBg from "../../assets/images/CaseStudyBg.png";
import CaseStudyLeft from "../../assets/images/CaseStudyLeft.png";
import main from "../../assets/images/laptop.png";
import medical from "../../assets/images/medical.png";
import user from "../../assets/images/usercentric.png";
import leftArrow from "../../assets/svgs/leftArrow.svg";
import rightArrow from "../../assets/svgs/rightArrow.svg";

const slides = [
  {
    image: user,
    heading: "User  Centric Authentication",
    description:
      "Laravel brings a host of advantages to CRM development. Its expressive syntax, modular architecture, and extensive ecosystem make it ideal for crafting tailored CRM solutions. With features like ORM (Eloquent), routing, caching, and security, Laravel accelerates development while ensuring a secure foundation.",
  },
  {
    image: user,
    heading: "Data  Centric Authentication",
    description:
      "Laravel brings a host of advantages to CRM development. Its expressive syntax, modular architecture, and extensive ecosystem make it ideal for crafting tailored CRM solutions. With features like ORM (Eloquent), routing, caching, and security, Laravel accelerates development while ensuring a secure foundation.",
  },
  {
    image: user,
    heading: "User  Centric Authentication",
    description:
      "Laravel brings a host of advantages to CRM development. Its expressive syntax, modular architecture, and extensive ecosystem make it ideal for crafting tailored CRM solutions. With features like ORM (Eloquent), routing, caching, and security, Laravel accelerates development while ensuring a secure foundation.",
  },
  {
    image: user,
    heading: "User  Centric Authentication",
    description:
      "Laravel brings a host of advantages to CRM development. Its expressive syntax, modular architecture, and extensive ecosystem make it ideal for crafting tailored CRM solutions. With features like ORM (Eloquent), routing, caching, and security, Laravel accelerates development while ensuring a secure foundation.",
  },
];

const casestudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
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
          <div className="container">
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
      <div className=" text-white relative w-full h-[18rem] md:h-[30rem] px-6 md:px-14 py-10 flex flex-col items-center container mb-12">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-[50%] md:top-[30%] lg:top-[40%] -translate-y-1/2"
        >
          <Image src={leftArrow} alt="Previous Slide" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-[50%] md:top-[30%] lg:top-[40%]  -translate-y-1/2"
        >
          <Image src={rightArrow} alt="Next Slide" />
        </button>

        {/* Slider Content */}
        <div className="text-center">
          {/* Image */}
          <div className="w-[20rem] sm:w-[25rem] lg:w-[60rem] md:w-[35rem] h-[10rem] md:h-[15rem] mx-auto lg:mb-6">
            <Image
              src={slides[currentIndex].image}
              alt={`Slide ${currentIndex}`}
            />
          </div>

          {/* Heading */}
          <h2 className="text-xl pt-6 md:text-[2.125rem] font-semibold">
            {slides[currentIndex].heading}
          </h2>

          {/* Description */}
          <p className="text-sm md:text-md mt-4 px-4 md:px-12">
            {slides[currentIndex].description}
          </p>

          {/* Dots */}
          <div className="flex justify-center mt-8">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-2 md:w-3 h-2 md:h-3 mx-1 rounded-full ${
                  index === currentIndex ? "bg-teal" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default casestudy;
