"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import LaravelBg from "../../assets/images/laravel.png";
import laravelRight from "../../assets/images/laravelRight.png";
import quoteBg from "../../assets/images/quoteBg.png";
import Vector from '../../assets/images/Vector.png';

const quotes = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
  "Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
  "Consectetur adipiscing elit. Velit nascetur Consequat faucibus porttitor enim et. Lorem ipsum dolor sit amet."
];

const Blog = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  // Timer for auto-changing quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative h-[28rem]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url(${LaravelBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "-25%",
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 flex items-end h-[28rem] px-14 bg-custom-gradient2">
          <div className="container">
            <h1 className="text-white font-semibold text-[2.5rem]">
              Laravel’s Journey
            </h1>
            <p className="text-white text-[1.5rem]">
              Explore Technological Horizons: Insights, Trends, and Innovations
            </p>
          </div>
        </div>
      </div>

      <div className="text-left  pt-12 pb-12 mb-4 container">
        <h1 className="text-white font-semibold text-[2.125rem]">
          Elevate Your CRM Strategy with Laravel
        </h1>
        <p>
          Laravel brings a host of advantages to CRM development. Its expressive
          syntax, modular architecture, and extensive ecosystem make it ideal
          for crafting tailored CRM solutions. With features like ORM
          (Eloquent), routing, caching, and security, Laravel accelerates
          development while ensuring a secure foundation
        </p>
      </div>

      {/* Quote Section */}
      <div className="relative w-full h-[27.5rem]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={quoteBg}
            alt="quote background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Vector and Quote Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-8 container">
          {/* Vector */}
          <div>
            <Image src={Vector} alt="vector" className="w-16 h-16" />
          </div>

          {/* Quote */}
          <blockquote className="mt-4 text-xl font-semibold text-center text-white lg:px-80">
            {quotes[currentQuote]}
          </blockquote>

          {/* Line below the quote */}
          <div className="mt-10 w-40 h-[4px] bg-white"></div>

          {/* Dots as quote indicators */}
          <div className="flex space-x-2 mt-4">
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentQuote ? "bg-white" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-12 container">
        <h1 className="font-semibold text-[2.125rem]">Why Laravel for CRM?</h1>
        <p>
          Laravel brings a host of advantages to CRM development. Its expressive
          syntax, modular architecture, and extensive ecosystem make it ideal
          for crafting tailored CRM solutions. With features like ORM
          (Eloquent), routing, caching, and security, Laravel accelerates
          development while ensuring a secure foundation
        </p>
      </div>
      <div className="relative container">
        <div className="w-full lg:w-[25rem] absolute -top-[40%] xl:left-[72%] hidden xl:block">
          <Image
            src={laravelRight}
            alt="Plan Left Background"
            className="absolute inset-0 w-auto h-auto -z-10"
          />
        </div>
        <h1 className="font-semibold text-[2.125rem]">Why Laravel for CRM?</h1>
        <p className="mb-8">
          Laravel brings a host of advantages to CRM development. Its expressive
          syntax, modular architecture, and extensive ecosystem make it ideal
          for crafting tailored CRM solutions. With features like ORM
          (Eloquent), routing, caching, and security, Laravel accelerates
          development while ensuring a secure foundation
        </p>
        <p className="mb-8">
          Laravel brings a host of advantages to CRM development. Its expressive
          syntax, modular architecture, and extensive ecosystem make it ideal
          for crafting tailored CRM solutions. With features like ORM
          (Eloquent), routing, caching, and security, Laravel accelerates
          development while ensuring a secure foundation
        </p>
        <p className="mb-8">
          Laravel brings a host of advantages to CRM development. Its expressive
          syntax, modular architecture, and extensive ecosystem make it ideal
          for crafting tailored CRM solutions. With features like ORM
          (Eloquent), routing, caching, and security, Laravel accelerates
          development while ensuring a secure foundation
        </p>
      </div>
    </div>
  );
};

export default Blog;
