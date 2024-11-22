"use client";
import Image from "next/image";
import "swiper/css"; // Import Swiper styles
import { Navigation } from "swiper/modules"; // Import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import BRT from "../../assets/images/brt-centers logo.png";
import ClearEats from "../../assets/images/cleareats-logo.png";
import Logo from "../../assets/images/image 243.png";
import KP from "../../assets/images/KP-Securities Logo.png";
import VTKLogo from "../../assets/images/VTK Logo.png";
import WizzLogo from "../../assets/images/wizz-logistics.png";

const Clients = () => {
  return (
    <div className="font-poppins flex flex-col bg-[rgba(13,36,29,0.61)] backdrop-blur-sm h-auto py-10 sm:py-12 w-full relative">
      <div className="text-center mb-10 ">
        <h1 className="text-white text-3xl font-semibold">
          Who Love To Work With Us
        </h1>
      </div>

      {/* Swiper Section for Client Logos */}
      <div className="py-[3rem] md:px-8 cursor-pointer">
        <Swiper
          spaceBetween={30} // Space between slides (adjustable)
          slidesPerView={5} // Show 5 logos per slide
          navigation={true} // Show navigation arrows
          modules={[Navigation]} // Use navigation module
          breakpoints={{
            0: {
              slidesPerView: 2, // 1 slide on screens smaller than 640px
            },
            640: {
              slidesPerView: 3, // 1 slide on smaller screens
            },
            768: {
              slidesPerView: 3, // 2 slides on medium screens
            },
            1024: {
              slidesPerView: 5, // 5 slides on larger screens
            },
            
          }}
          
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="w-[7rem] h-auto sm:w-[9.8rem] mx-auto">
              <Image src={VTKLogo} alt="VTK Logo" />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="w-[7rem] h-auto sm:w-[11.8rem] mx-auto">
              <Image src={KP} alt="KP Logo" />
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="w-[4rem] h-auto sm:w-[8.1rem] mx-auto">
              <Image src={BRT} alt="BRT Logo" />
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="w-[10rem] h-auto sm:w-[16rem] mx-auto mt-4">
              <Image src={ClearEats} alt="ClearEats Logo" />
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="w-[6.5rem] h-auto sm:w-[8.1rem] mx-auto">
              <Image src={Logo} alt="Logo" />
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div className="w-[6.5rem] h-auto sm:w-[8.1rem] mx-auto mt-6">
              <Image src={WizzLogo} alt="Wizz Logo" />
            </div>
          </SwiperSlide>

          {/* Repeated Slides for better repetition */}
          <SwiperSlide>
            <div className="w-[7rem] h-auto sm:w-[9.8rem] mx-auto">
              <Image src={VTKLogo} alt="VTK Logo" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[7rem] h-auto sm:w-[11.8rem] mx-auto">
              <Image src={KP} alt="KP Logo" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[4rem] h-auto sm:w-[8.1rem] mx-auto">
              <Image src={BRT} alt="BRT Logo" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[10rem] h-auto sm:w-[16rem] mx-auto mt-4">
              <Image src={ClearEats} alt="ClearEats Logo" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[6.5rem] h-auto sm:w-[8.1rem] mx-auto">
              <Image src={Logo} alt="Logo" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[6.5rem] h-auto sm:w-[8.1rem] mx-auto mt-6">
              <Image src={WizzLogo} alt="Wizz Logo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
