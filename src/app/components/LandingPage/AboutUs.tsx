"use client"
import Image from "next/image"
import "swiper/css" // Import Swiper styles
import { Navigation } from "swiper/modules" // Import required modules
import { Swiper, SwiperSlide } from "swiper/react"
import Hadi from "../../assets/images/Hadi.png"
import Muqeet from "../../assets/images/Muqeet.png"
import Tayyab from "../../assets/images/Tayyab.png"

const AboutUs = () => {
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
          modules={[Navigation]}
          loop={true}
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
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="text-center w-full ">
              <Image
                src={Muqeet}
                alt="Muqeet"
                className="mx-auto h-24 w-24 mb-6"
              />
              <h1 className="text-white text-xl font-monserrat font-semibold mb-2">
                KHAWAJA MUQEET
              </h1>
              <p className="text-grey text-base font-semibold font-inter">
                We are always one step ahead; we challenge convention and push
                the boundaries of what can be achieved.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="text-center w-full">
              <Image src={Hadi} alt="Hadi" className="mx-auto h-24 w-24 mb-6" />
              <h1 className="text-white text-xl font-monserrat font-semibold mb-2">
                HADI BUTT
              </h1>
              <p className="text-grey text-base font-semibold font-inter">
                We are always one step ahead; we challenge convention and push
                the boundaries of what can be achieved.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="text-center w-full">
              <Image
                src={Tayyab}
                alt="Tayyab"
                className="mx-auto h-24 w-24 mb-6"
              />
              <h1 className="text-white  text-xl font-monserrat font-semibold mb-2">
                MUHAMMAD TAYYAB
              </h1>
              <p className="text-grey text-base font-semibold font-inter">
                We are always one step ahead; we challenge convention and push
                the boundaries of what can be achieved.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default AboutUs
