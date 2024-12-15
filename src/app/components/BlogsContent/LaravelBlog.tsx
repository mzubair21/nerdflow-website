import Image from "next/image"
import { useEffect, useState } from "react"
import LaravelBg from "../../assets/images/laravel.png"
import laravelRight from "../../assets/images/laravelRight.png"
import quoteBg from "../../assets/images/quoteBg.png"
import QuoteSwiper from "./QuotesSwiper"

const quotes: {
  text: string
  author?: string
}[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    author: "John Doe",
  },
  {
    text: "Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
  },
  {
    text: "Consectetur adipiscing elit. Velit nascetur Consequat faucibus porttitor enim et. Lorem ipsum dolor sit amet.",
    author: "Alice Johnson",
  },
]

const LaravelBlog = () => {
  return (
    <div data-aos={"fade-up"}>
      <div className="relative h-[28rem]">
        {/* <!--------Background Image------------!> */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url(${LaravelBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "-25%",
          }}
        ></div>

        {/* <!----------Topic Heading Layer-------------!> */}
        <div className="relative z-10 flex items-end h-[28rem]  bg-custom-gradient2">
          <div className="container flex flex-col gap-4 opacity-80">
            <h1 className="text-white font-semibold text-3xl">
              Laravel’s Journey
            </h1>
            <p className="text-white text-lg">
              Explore Technological Horizons: Insights, Trends, and Innovations
            </p>
          </div>
        </div>
        {/* <!----------End Topic Heading Layer-------------!> */}
      </div>
      <div className="text-left  pt-12 pb-12 mb-4 container">
        <h1 className="text-white font-semibold text-[2.125rem]">
          Elevate Your CRM Strategy with Laravel
        </h1>
        <p className="text-white">
          Laravel brings a host of advantages to CRM development. Its expressive
          syntax, modular architecture, and extensive ecosystem make it ideal
          for crafting tailored CRM solutions. With features like ORM
          (Eloquent), routing, caching, and security, Laravel accelerates
          development while ensuring a secure foundation
        </p>
      </div>
      {/* <!---------Quotes Section----------> */}
      <div data-aos={"fade-up"} className="relative w-full bg-[#61FF9E1F]">
        <div className="absolute inset-0">
          <Image
            src={quoteBg}
            alt="quote background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center p-8 container">
          {/*<!----- Quote Swiper ---> */}
          <QuoteSwiper quotes={quotes} />
          {/*<!----- End Quote Swiper ---> */}
        </div>
        {/* <!---------End Quotes Section----------> */}
      </div>
      {/* <!---------End Quotes Section----------> */}
      {/* <!---------BLOG CONTENT----------> */}
      <div className="relative container py-8 md:py-16 text-white">
        <div className="w-full lg:w-[25rem] absolute top-[0%] xl:left-[72%] hidden xl:block">
          <Image
            src={laravelRight}
            alt="Plan Left Background"
            className="absolute inset-0 w-auto h-auto -z-10"
          />
        </div>
        <div data-aos={"fade-up"} className=" ">
          <h1 className="font-semibold text-[2.125rem] ">
            Why Laravel for CRM?
          </h1>
          <p className="font-inter">
            Laravel brings a host of advantages to CRM development. Its
            expressive syntax, modular architecture, and extensive ecosystem
            make it ideal for crafting tailored CRM solutions. With features
            like ORM (Eloquent), routing, caching, and security, Laravel
            accelerates development while ensuring a secure foundation
          </p>
        </div>
        <div data-aos={"fade-up"} className="">
          <h1 className="font-semibold text-[2.125rem] pt-16">
            Why Laravel for CRM?
          </h1>
          <p className="mb-8 font-inter">
            Laravel brings a host of advantages to CRM development. Its
            expressive syntax, modular architecture, and extensive ecosystem
            make it ideal for crafting tailored CRM solutions. With features
            like ORM (Eloquent), routing, caching, and security, Laravel
            accelerates development while ensuring a secure foundation
          </p>
          <p className="mb-8">
            Laravel brings a host of advantages to CRM development. Its
            expressive syntax, modular architecture, and extensive ecosystem
            make it ideal for crafting tailored CRM solutions. With features
            like ORM (Eloquent), routing, caching, and security, Laravel
            accelerates development while ensuring a secure foundation
          </p>
          <p className="mb-8">
            Laravel brings a host of advantages to CRM development. Its
            expressive syntax, modular architecture, and extensive ecosystem
            make it ideal for crafting tailored CRM solutions. With features
            like ORM (Eloquent), routing, caching, and security, Laravel
            accelerates development while ensuring a secure foundation
          </p>
        </div>
      </div>
      {/* <!---------End BLOG CONTENT----------> */}
    </div>
  )
}

export default LaravelBlog
