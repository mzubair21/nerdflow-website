"use client"
import Image from "next/image"
import "swiper/css" // Import Swiper styles
import { Navigation } from "swiper/modules" // Import required modules
import { Swiper, SwiperSlide } from "swiper/react"
import AboutBg from "../../assets/images/AboutUsBg.png"
import Hadi from "../../assets/images/Hadi.png"
import Muqeet from "../../assets/images/Muqeet.png"
import Tayyab from "../../assets/images/Tayyab.png"
import illustrator from "../../assets/logos/logos_adobe-illustrator.png"
import incopy from "../../assets/logos/logos_adobe-incopy.png"
import indesign from "../../assets/logos/logos_adobe-indesign.png"
import lightroom from "../../assets/logos/logos_adobe-lightroom.png"
import photoshop from "../../assets/logos/logos_adobe-photoshop.png"
import premiere from "../../assets/logos/logos_adobe-premiere.png"
import android from "../../assets/logos/logos_android-icon.png"
import blender from "../../assets/logos/logos_blender.png"
import cplus from "../../assets/logos/logos_c-plusplus.png"
import csharp from "../../assets/logos/logos_c-sharp.png"
import git from "../../assets/logos/logos_git-icon.png"

const About = () => {
  return (
    <div>
      <div className="relative h-[28rem]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url(${AboutBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "-25%",
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 flex items-end h-[28rem] bg-custom-gradient2">
          <div className="container flex flex-col gap-4">
            <h1 className="text-white font-semibold text-3xl">About Us</h1>
            <p className="text-white text-lg">
              Feel free to contact us for inquiries or support!
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 container">
        <h1 className="text-white text-3xl font-semibold leading-normal">
          <span className="text-teal">Empowering </span> Excellence: Our
          Technological Arsenal
        </h1>
        <p className="text-lg pt-5 text-white">
          At Nerd Flow, we pride ourselves on our advanced technological toolkit
          that fuels our creativity and innovation. From cutting-edge
          programming languages and frameworks to state-of-the-art design tools,
          we harness a diverse range of technologies to bring your digital
          aspirations to life. Discover how our expertise in the latest tech
          trends enables us to craft seamless, impactful solutions for every
          project.
        </p>
      </div>
      <section data-aos="fade-up" className="">
        <div className="text-left font-medium relative container">
          <h1 className="text-3xl text-white">
            Meet Our<span className="text-teal"> Team</span>{" "}
          </h1>
          <p className="text-white text-lg py-3">
            Together, we steer the course of technology and design, dedicated to
            crafting exceptional digital experiences that exceed expectations.
          </p>
        </div>
        {/* Swiper Section for Team Members */}
        <div className="py-[3rem] md:px-20 cursor-pointer container">
          <Swiper
            spaceBetween={60} // Space between slides
            slidesPerView={3} // Show 3 team members per slide
            navigation={true} // Show navigation arrows
            modules={[Navigation]} // Use navigation module
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="text-center w-full">
                <Image
                  src={Muqeet}
                  alt="Muqeet"
                  className="mx-auto h-24 w-24 mb-6"
                />
                <h1 className="text-white text-xl font-monserrat font-semibold mb-2">
                  KHAWAJA MUQEET
                </h1>
                <p className="text-grey text-base font-inter font-semibold">
                  We are always one step ahead; we challenge convention and push
                  the boundaries of what can be achieved
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="text-center w-full">
                <Image
                  src={Hadi}
                  alt="Hadi"
                  className="mx-auto h-24 w-24 mb-6"
                />
                <h1 className="text-white text-xl font-monserrat font-semibold mb-2">
                  HADI BUTT
                </h1>
                <p className="text-grey text-base font-inter font-semibold">
                  We are always one step ahead; we challenge convention and push
                  the boundaries of what can be achieved
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
                <h1 className="text-white text-xl font-monserrat font-semibold mb-2">
                  MUHAMMAD TAYYAB
                </h1>
                <p className="text-grey text-base font-inter font-semibold">
                  We are always one step ahead; we challenge convention and push
                  the boundaries of what can be achieved
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 1 */}
            <SwiperSlide>
              <div className="text-center w-full">
                <Image
                  src={Muqeet}
                  alt="Muqeet"
                  className="mx-auto h-24 w-24 mb-6"
                />
                <h1 className="text-white text-xl font-monserrat font-semibold mb-2">
                  KHAWAJA MUQEET
                </h1>
                <p className="text-grey text-base font-inter font-semibold">
                  We are always one step ahead; we challenge convention and push
                  the boundaries of what can be achieved
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="text-center w-full">
                <Image
                  src={Hadi}
                  alt="Hadi"
                  className="mx-auto h-24 w-24 mb-6"
                />
                <h1 className="text-white text-xl font-monserrat font-semibold mb-2">
                  HADI BUTT
                </h1>
                <p className="text-grey text-base font-inter font-semibold">
                  We are always one step ahead; we challenge convention and push
                  the boundaries of what can be achieved
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
                <h1 className="text-white text-xl font-monserrat font-semibold mb-2">
                  MUHAMMAD TAYYAB
                </h1>
                <p className="text-grey text-base font-inter font-semibold">
                  We are always one step ahead; we challenge convention and push
                  the boundaries of what can be achieved
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section data-aos="fade-up" className="">
        {/* Additional content for technologies */}
        <div className="text-left font-medium relative container">
          <h1 className="text-3xl text-white">
            <span className="text-teal">Technologies</span> We Work On
          </h1>
          <p className="text-white text-lg py-3">
            Leveraging cutting-edge technologies to drive innovation!
          </p>
        </div>

        {/* Technologies Logo Section */}
        <div className=" flex justify-center flex-wrap gap-4 container mt-6 mb-6">
          <div className="w-[8rem] h-[8rem]">
            <Image src={indesign} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={csharp} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={photoshop} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={premiere} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={cplus} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={blender} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={illustrator} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={incopy} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={incopy} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={lightroom} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={android} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={git} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={premiere} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={cplus} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={blender} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={illustrator} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={incopy} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={lightroom} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={android} alt="indesign"></Image>
          </div>
          <div className="w-[8rem] h-[8rem]">
            <Image src={git} alt="indesign"></Image>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
