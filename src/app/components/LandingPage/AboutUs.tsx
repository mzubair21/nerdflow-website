"use client"
import Image from "next/image"
import "swiper/css" // Import Swiper styles
import { Autoplay, Navigation } from "swiper/modules" // Import required modules
import { Swiper, SwiperSlide } from "swiper/react"
import Hadi from "../../assets/images/Hadi.png"
import Muqeet from "../../assets/images/Muqeet.png"
import Tayyab from "../../assets/images/Tayyab.png"
import Samar from "../../assets/images/Samar.png"
import Wajeeha from "../../assets/images/Wajeeha.jpg"
import Arisha from "../../assets/images/Arisha.jpg"
import Qasim from "../../assets/images/Qasim.png"
import Zubair from "../../assets/images/Zubair.png"
import Nimrah from "../../assets/images/Nimrah.png"
import Omar from "../../assets/images/Omar.png"

const AboutUs = () => {
  const team = [
    {
      name: "Khawaja Muqeet",
      role: "Frontend Developer",
      image: Muqeet,
      description:
        "Visionary leader steering NerdFlow's growth with innovative strategies and client-centric solutions.",
    },
    {
      name: "Hadi Butt",
      role: "Backend Developer",
      image: Hadi,
      description:
        "Tech mastermind driving cutting-edge innovation and overseeing the development of robust AI systems.",
    },
    {
      name: "Muhammad Tayyab",
      role: "Full Stack Developer",
      image: Tayyab,
      description:
        "Ensuring operational excellence with a focus on streamlined processes and team efficiency.",
    },
    {
      name: "Samar Ali",
      role: "CSO",
      image: Samar,
      description:
        "Strategist empowering NerdFlow's success with data-driven insights and business development expertise.",
    },
    {
      name: "Wajeeha Usman",
      role: "UI/UX Designer",
      image: Wajeeha,
      description:
        "Passionate coder crafting seamless and engaging user interfaces for web and mobile platforms.",
    },
    {
      name: "Areesha Tariq",
      role: "Graphic Designer",
      image: Arisha,
      description:
        "Building strong client relationships and identifying opportunities for impactful collaborations.",
    },
    {
      name: "Qasim Afzal",
      role: "Backend Developer",
      image: Qasim,
      description:
        "Expert in Laravel, delivering scalable and secure backend solutions tailored to client needs.",
    },
    {
      name: "Muhammad Zubair",
      role: "Frontend Developer",
      image: Zubair,
      description:
        "Inspiring team leader ensuring timely delivery of exceptional and innovative software solutions.",
    },
    {
      name: "Nimrah Kamran",
      role: "Frontend Developer",
      image: Nimrah,
      description:
        "Innovative designer creating intuitive and visually appealing user experiences for global audiences.",
    },
    {
      name: "Omar Waheed",
      role: "Frontend Developer",
      image: Omar,
      description:
        "Dedicated to identifying growth opportunities and fostering meaningful client partnerships.",
    },
  ]
  return (
    <div data-aos="fade-up" className="flex flex-col container mx-auto">
      <div className="text-center py-16 px-4">
        <h1 className="text-white text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-white text-base font-bold md:px-20 lg:px-20">
          Together, we steer the course of technology and design, dedicated to
          crafting exceptional digital experiences that exceed expectations.
        </p>
      </div>

      {/* Swiper Section for Team Members */}
      <div className="py-[3rem] md:px-8 cursor-pointer">
        <Swiper
          spaceBetween={60}
          slidesPerView={3}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {team.map((member, index) => (
            <SwiperSlide>
              <div className="text-center w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-24 w-24 mb-6 rounded-full object object-top object-cover border-white border-4"
                />
                <h1 className="text-white text-xl font-monserrat font-semibold mb-2 uppercase">
                  {member.name}
                </h1>
                <p className="text-grey text-base font-inter font-semibold">
                  {member.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default AboutUs
