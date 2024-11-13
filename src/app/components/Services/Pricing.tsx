"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PricingImage from "../../assets/images/pricingLeft.png";

const Pricing = () => {
  const router = useRouter();

  const navigateToPricing = () => {
    router.push("/pricing");
  };

  const navigateToContact = () => {
    router.push("/contact");
  };

  return (
    <div className="relative font-poppins h-[25rem] container">
      {/* Image on the left */}
      <Image
        src={PricingImage}
        alt="Descriptive Alt Text"
        className="absolute -left-[5%] top-0 h-full object-cover w-[30%] z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-center items-center text-center p-8">
        <h1 className="text-white text-[2.5rem] font-semibold">
          See Our Plans and Pricing
        </h1>
        <p className="text-white text-[1.25rem]">
          Have a project in mind? Let’s collaborate and bring your vision to
          life!
        </p>

        <div className="mt-6 flex flex-row space-x-6 justify-center font-bold text-[1.25rem]">
          <button
            onClick={navigateToPricing}
            className=" text-white p-4 w-[13rem] rounded-[1.25rem] transition-all duration-300 ease-in-out" // Add transition for smooth effect
            style={{
                background: "rgba(53, 53, 53, 0.44)",
              border: "1.276px solid #5E5E5E",
              backdropFilter: "blur(2.55px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(52, 224, 161, 0.64)";
              e.currentTarget.style.boxShadow =
                "0px 0px 7.21px 0px rgba(255, 255, 255, 0.76)";
              e.currentTarget.style.backdropFilter = "blur(2px)";
              e.currentTarget.style.borderRadius = "20px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#353535"; // Original background
              e.currentTarget.style.boxShadow = "none"; // Original box-shadow
              e.currentTarget.style.borderRadius = "1.25rem"; // Original border-radius
            }}
          >
            See Pricing
          </button>

          <button
            onClick={navigateToContact}
            className=" text-white p-4 w-[13rem] rounded-[1.25rem] transition-all duration-300 ease-in-out" 
            style={{
              background: "rgba(53, 53, 53, 0.44)",
              border: "1.276px solid #5E5E5E",
              backdropFilter: "blur(2.55px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(52, 224, 161, 0.64)";
              e.currentTarget.style.boxShadow =
                "0px 0px 7.21px 0px rgba(255, 255, 255, 0.76)";
              e.currentTarget.style.backdropFilter = "blur(2px)";
              e.currentTarget.style.borderRadius = "20px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#353535"; // Original background
              e.currentTarget.style.boxShadow = "none"; // Original box-shadow
              e.currentTarget.style.borderRadius = "1.25rem"; // Original border-radius
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
