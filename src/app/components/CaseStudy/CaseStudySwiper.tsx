"use client"
import Image, { StaticImageData } from "next/image"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import leftArrow from "../../assets/svgs/leftArrow.svg"
import rightArrow from "../../assets/svgs/rightArrow.svg"

function CaseStudySwiper({
  slides,
}: {
  slides: {
    image: StaticImageData
    heading: string
    description: string
  }[]
}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  return (
    <div className=" text-white relative w-full  px-6 md:px-14 py-10 flex flex-col items-center container">
      <button
        type="button"
        className="absolute swiper_prev z-10 left-4 top-[50%] -translate-y-1/2"
      >
        <Image src={leftArrow} alt="Previous Slide" />
      </button>
      <button className="absolute swiper_next z-10 right-4 top-[50%] -translate-y-1/2">
        <Image src={rightArrow} alt="Next Slide" />
      </button>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        centeredSlides={true}
        spaceBetween={-200}
        loop={true}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper_next",
          prevEl: ".swiper_prev",
        }}
        pagination={{
          clickable: true,
          bulletClass: "greenFilledBullets",
          bulletActiveClass: "greenFilledBulletsActive",
          horizontalClass: "caseStudySwiperPagination",
        }}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: -200,
          },
          520: {
            slidesPerView: 3,
            spaceBetween: -200,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -200,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        className="casestudySlider CenterZoomSlider w-full transition-all duration-300 ease-in-out !overflow-visible"
        onSlideChange={(swiper) => {
          if (currentSlideIndex == swiper.realIndex) return
          setCurrentSlideIndex(swiper.realIndex)
        }}
      >
        {(slides.length > 0 && slides.length <= 3
          ? [
              ...slides,

              {
                image: slides[slides.length - 1].image,
                heading: slides[slides.length - 1].heading,
                description: slides[slides.length - 1].description,
              },
            ]
          : slides
        ).map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${
                currentSlideIndex == index
                  ? "animate-fade-in scale-[1.2] hover:scale-[1.5] hover:animate-fade-in"
                  : "  "
              } transition-all duration-[150] ease-in-out`}
            >
              <div className="h-[200px] md:h-[300px]">
                <Image
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className=" object-scale-down object-center max-h-[150px] md:max-h-[280px] w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container h-[200px] relative text-white">
        {(slides.length > 0
          ? [
              ...slides,

              // {
              //   image: slides[slides.length - 1].image,
              //   heading: "",
              //   description: "",
              // },
            ]
          : slides
        ).map(
          (_, index) =>
            index === currentSlideIndex && (
              <div
                key={index}
                className={`animate-fade-in opacity-0 text-center my-8`}
              >
                <h2 className="text-2xl font-semibold">{_.heading}</h2>
                <p className="text-lg mt-4 line-clamp-3">{_.description}</p>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default CaseStudySwiper
