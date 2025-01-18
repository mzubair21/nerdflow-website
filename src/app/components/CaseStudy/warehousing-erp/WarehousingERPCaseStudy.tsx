import Image from "next/image"
import CaseStudyBg from "@/app/assets/images/CaseStudyBg.png"
import CaseStudyLeft from "@/app/assets/images/CaseStudyLeft.png"
import main from "./assets/main.png"
import intro from "./assets/Intro.png"
import slide1bg from "./assets/slide1.png"
import slide2bg from "./assets/slide2.png"
import slide3bg from "./assets/slide3.png"
import slide4bg from "./assets/slide4.png"
import slide5bg from "./assets/slide5.png"
import slide6bg from "./assets/slide6.png"
import slide7bg from "./assets/slide7.png"

import CaseStudySwiper from "../CaseStudySwiper"

const slides = [
  {
    image: slide1bg,
    heading: "User  Centric Authentication",
    description:
      "The Login Page serves as the entry point to Wizz Logistics' versatile ERP system, catering to various user roles such as front desk officers, administrators, and drivers. With stringent security measures, it ensures data protection during logins. Users can create accounts for streamlined access, enhancing overall usability and meeting the diverse needs of the logistics workflow.",
  },
  {
    image: slide2bg,
    heading: "Insightful Data Analytics",
    description:
      "The Dashboard serves as a dynamic hub of insights, presenting crucial metrics including revenue generated, order statistics, and subscription data. This consolidated view empowers Wizz Logistics to assess financial performance, monitor order trends, and track subscription metrics in real time.",
  },
  {
    image: slide3bg,
    heading: "User Management",
    description:
      "The User Management feature offers precision control over Wizz Logistics' ERP system by seamlessly handling user creation, role assignment, and permission configuration. Each user's role is intricately linked to specific permissions, determining their access level within the system.",
  },
  {
    image: slide4bg,
    heading: "Subscription Management",
    description:
      "Within the Subscription Management feature, administrators wield the power to create, oversee, and fine-tune subscription plans, enriching Wizz Logistics' service offerings. These meticulously crafted subscriptions are seamlessly assigned to customers, ensuring a personalized logistics experience.",
  },
  {
    image: slide5bg,
    heading: "Order Processing",
    description:
      "The Order Processing module is a pivotal component of Wizz Logistics' ERP system, enabling the seamless creation, modification, and tracking of orders. This feature streamlines the order fulfillment process, ensuring timely delivery and enhancing customer satisfaction.",
  },
  {
    image: slide6bg,
    heading: "Inventory Management",
    description:
      "The Inventory Management module offers a comprehensive suite of tools for Wizz Logistics to manage inventory, track stock levels, and optimize warehouse operations. This feature ensures that inventory is accurately monitored, minimizing stockouts and enhancing operational efficiency.",
  },
  {
    image: slide7bg,
    heading: "Shipment Tracking",
    description:
      "The Shipment Tracking feature provides real-time visibility into shipment status, allowing Wizz Logistics to monitor shipments, track delivery progress, and communicate with clients. This feature enhances operational transparency and customer satisfaction, ensuring a seamless logistics experience.",
  },
]

const WarehousingERPCaseStudy = () => {
  return (
    <div data-aos="fade-up">
      <div className="relative h-[28rem]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url(${CaseStudyBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "-25%",
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 flex items-end h-[28rem] bg-custom-gradient2">
          <div className="container flex flex-col gap-4">
            <h1 className="text-white font-semibold text-3xl">
              <span className="text-teal">Warehousing</span> ERP
            </h1>
            <p className="text-white text-lg">
              An all-in-one platform for inventory control, warehouse
              operations, and supply chain management.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between  py-10 relative container">
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-[25rem] absolute -top-[50%] -left-[10%] hidden xl:block">
          <Image
            src={CaseStudyLeft}
            alt="Plan Left Background"
            className="absolute inset-0 w-auto h-auto -z-10"
          />
        </div>
        <div className="w-full md:w-[55%] pt-8 md:pb-12 text-white">
          <h1 className="text-[2.125rem] md:text-2xl font-bold mb-4">
            Introduction
          </h1>
          <p className="text-base md:text-lg">
            We are excited to present our state-of-the-art ERP solution,
            developed in close partnership with Wizz Logistics, a trailblazer in
            the dynamic logistics industry. This ERP system marks a significant
            milestone in logistics management, meticulously engineered to
            seamlessly integrate and automate a wide spectrum of internal and
            external operations.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-[20rem] h-[15rem] md:w-[30rem] md:h-[20rem] mt-6 md:mt-0">
          <Image src={intro} alt="Intro image" />
        </div>
      </div>

      {/* Main Image and Description */}
      <div className="pt-6 container">
        <div className="w-[18rem] md:w-[38.6rem] h-[12rem] md:h-[23.6rem] mx-auto mb-2 md:mb-12">
          <Image src={main} alt="main screen"></Image>
        </div>
        <div>
          <p className="text-sm md:text-lg text-white">
            At the core of this ERP lies a comprehensive suite of tools that
            cater to every aspect of logistics, from streamlined order
            processing and optimized inventory management to real-time shipment
            tracking and transparent communication with clients and partners.
            Our tailored ERP empowers Wizz Logistics to navigate complex supply
            chain networks with ease, harnessing cutting-edge technology to
            enhance decision-making and operational performance. Through this
            collaborative endeavor, we have not only elevated logistics
            operations but also reinforced our commitment to innovation,
            delivering a transformative ERP that sets new benchmarks in the
            logistics landscape.
          </p>
        </div>
      </div>

      {/* BRT Modules */}
      <div className="mt-8 container text-white">
        <h1 className="text-[1.8rem] md:text-[2.125rem] font-semibold">
          BRT <span className="text-teal">Modules</span>
        </h1>
        <p className="text-sm md:text-lg">
          Laravel brings a host of advantages to CRM development. Its expressive
          syntax, modular architecture, and extensive ecosystem make it ideal
          for crafting tailored CRM solutions. With features like ORM
          (Eloquent), routing, caching, and security, Laravel accelerates
          development while ensuring a secure foundation.
        </p>
      </div>

      {/* Slider Section */}
      <CaseStudySwiper slides={slides} />
    </div>
  )
}

export default WarehousingERPCaseStudy
