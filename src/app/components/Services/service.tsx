"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ClearEats from "../../assets/images/ClearEats.png";
import DailyLeft from '../../assets/images/DailyBazar Left.png';
import DailyBazar from "../../assets/images/DailyBazar.png";
import serviceBg from "../../assets/images/serviceBg.png";
import VTK from "../../assets/images/VTK.png";
import Wizz from "../../assets/images/Wizz.png";
import WizzRight from "../../assets/images/WizzRight.png";

const Service = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  
  const items = [
    { id: 1, title: "Daily Bazaar Web Application", category: "Web", image: DailyBazar, leftImage: DailyLeft, alt: "Daily Bazar Image", description: "An extensive eCommerce application with a vast array of products and a seamless, user-friendly interface.", reverse: false },
    { id: 2, title: "Wizz Logistics", category: "CRM", image: Wizz, leftImage: WizzRight, alt: "Wizz Image", description: "Automating logistics operations with a custom ERP, optimizing inventory management and order processing.", reverse: true },
    { id: 3, title: "VTK Legal Solution", category: "CRM", image: VTK, leftImage: null, alt: "VTK Image", description: "Streamlining legal processes with advanced solutions for case management, compliance, and documentation.", reverse: false },
    { id: 4, title: "Clear Eats Web Application", category: "Web", image: ClearEats, leftImage: null, alt: "Clear Eats Image", description: "Experience the sleek, user-friendly design of Clear Eats through our app screenshots.", reverse: true },
  ];

  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter(item => {
          if (activeFilter === "Web Development") return item.category === "Web";
          if (activeFilter === "CRM&ERP Development") return item.category === "CRM";
          return false;
        });

  return (
    <div>
      <div className="relative h-[28rem]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url(${serviceBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "-25%",
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 flex items-end h-[28rem] px-14 bg-custom-gradient2">
          <div>
            <h1 className="text-white font-semibold text-[2.5rem]">
              Our <span className="text-teal">Services</span>
            </h1>
            <p className="text-white text-[1.5rem]">
              Elevating Business Solutions: Discover Our Comprehensive Services.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Buttons Section */}
      <div className="flex justify-center space-x-2 my-8">
        {[
          "All",
          "Web Development",
          "CRM&ERP Development",
          "Mobile Development",
          "SEO Optimization",
          "Social Media Marketing",
          "UI/UX Designing",
        ].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded ${
              activeFilter === filter
                ? "bg-tealgradient text-white"
                : "bg-foundation-grey-darker text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Display Filtered Items */}
      <div className="flex flex-col items-center space-y-4">
        {filteredItems.map((item) => (
          <section key={item.id} className="font-poppins flex flex-col lg:flex-row items-center justify-between py-14 container mx-auto px-4 relative">
            {item.reverse ? (
              <>
                <div className="w-full lg:w-[35.8rem] h-auto mb-6 lg:mb-0">
                  <Image src={item.image} alt={item.alt} className="w-full h-auto" />
                </div>
                <div className="w-full lg:w-[34rem] relative">
                  {item.leftImage && (
                    <Image
                      src={item.leftImage}
                      alt={`${item.title} Background`}
                      className="absolute inset-0 w-auto h-auto hidden lg:block -z-10"
                      style={{ top: "-150%", left: "14%" }}
                    />
                  )}
                  <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white mb-4">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base mb-8 font-bold text-gray-300">
                    {item.description}
                  </p>
                  <Link
                    href="/contact"
                    className="bg-tealgradient text-white py-3 px-6 rounded-lg hover:bg-teal-600 text-sm sm:text-base font-bold"
                  >
                    See Case Study
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="w-full lg:w-[34rem] mb-6 lg:mb-0">
                  <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white mb-4">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base mb-8 font-bold text-gray-300">
                    {item.description}
                  </p>
                  <Link
                    href="/contact"
                    className="bg-tealgradient text-white py-3 px-6 rounded-lg hover:bg-teal-600 text-sm sm:text-base font-bold"
                  >
                    See Case Study
                  </Link>
                </div>
                <div className="w-full lg:w-[35.8rem] h-auto">
                  <Image src={item.image} alt={item.alt} className="w-full h-auto" />
                </div>
              </>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Service;
