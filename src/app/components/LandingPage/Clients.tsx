"use client"
import Image from "next/image"
import "swiper/css" // Import Swiper styles
import { Autoplay, Navigation } from "swiper/modules" // Import required modules
import { Swiper, SwiperSlide } from "swiper/react"
import BRT from "../../assets/images/brt-centers logo.png"
import ClearEats from "../../assets/images/cleareats-logo.png"
import Logo from "../../assets/images/image 243.png"
import KP from "../../assets/images/KP-Securities Logo.png"
import VTKLogo from "../../assets/images/VTK Logo.png"
import WizzLogo from "../../assets/images/wizz-logistics.png"
import Resource from "../../assets/images/resource.png"
import HeroSectionbg from "../../assets/images/heroleft.png"

const Clients = () => {
  const clients = [
    {
      image: VTKLogo,
      alt: "VTK Logo",
    },
    {
      image: KP,
      alt: "KP Logo",
    },
    {
      image: BRT,
      alt: "BRT Logo",
    },
    {
      image: ClearEats,
      alt: "ClearEats Logo",
    },
    {
      image: Logo,
      alt: "Logo",
    },
    {
      image: WizzLogo,
      alt: "Wizz Logo",
    },
    {
      image: Resource,
      alt: "Resource Logo",
    },
  ]
  return (
    <div
      data-aos="fade-up"
      className="font-poppins flex flex-col bg-[rgba(13,36,29,0.81)] backdrop-blur-md h-auto pt-8 md:py-16 w-full relative"
    >
      <div className="text-center container mb-4 md:mb-10 ">
        <h1 className="text-white text-2xl md:text-3xl font-semibold">
          Who Love To Work With Us
        </h1>
      </div>
      <Image
        src={HeroSectionbg}
        alt="Hero Section Background"
        className=" h-[240%]  absolute 
        rotate-[-50deg]
        object-scale-down -z-10
         top-[-65%] md:top-[-65%] left-[-60%]
        "
      />

      {/* Swiper Section for Client Logos */}
      <div className="pt-[3rem] md:px-8 cursor-pointer">
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={900} // Added speed for smooth autoplay
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="h-24">
                <Image
                  className="object-center object-scale-down w-full h-full"
                  src={client.image}
                  alt={client.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Clients
