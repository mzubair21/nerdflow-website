"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Vector from "../../assets/images/Vector.png"
import Image from "next/image"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

export default function QuoteSwiper({
  quotes,
}: {
  quotes: {
    text: string
    author?: string
  }[]
}) {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
        bulletClass: "whiteFilledBullets",
        bulletActiveClass: "whiteFilledBulletsActive",
        horizontalClass: "text-center",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      modules={[Pagination, Autoplay, Navigation]}
      className="quotesSwiper w-full h-full"
    >
      {quotes.map((quote, currentQuote) => (
        <SwiperSlide className="cursor-grab" key={currentQuote}>
          <div className="relative z-10 flex flex-col items-center justify-center p-8 container">
            <div>
              <Image src={Vector} alt="vector" className="w-16 h-16" />
            </div>
            <blockquote className="mt-4 w-full text-xl font-semibold text-center text-white lg:w-[80%] lg:max-w-[1000px] py-6 font-inter">
              {quote.text}
            </blockquote>
            {quote.author && (
              <>
                <div className="mt-10 w-40 h-[4px] bg-white"></div>
                <blockquote className="mt-4 w-full text-lg font-semibold text-center text-white lg:px-80 py-6 font-inter">
                  {quote.author}
                </blockquote>
              </>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
