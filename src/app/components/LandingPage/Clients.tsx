import Image from "next/image";
import BRT from "../../assets/images/brt-centers logo.png";
import ClearEats from "../../assets/images/cleareats-logo.png";
import AboutBg from '../../assets/images/ClientBg.png';
import Logo from "../../assets/images/image 243.png";
import KP from "../../assets/images/KP-Securities Logo.png";
import VTKLogo from "../../assets/images/VTK Logo.png";
import WizzLogo from "../../assets/images/wizz-logistics.png";

const Clients = () => {
  return (
    <div className="font-poppins flex flex-col bg-[rgba(13,36,29,0.61)] backdrop-blur-sm h-auto py-10 sm:py-12 w-full relative">
     

      <div className="text-center mb-10 ">
        <h1 className="text-white text-[2.25rem] font-semibold">
          Who Love To Work With Us
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center container mx-auto px-4">
         {/* Outer container for background */}
      <div className="w-full lg:w-[15rem] absolute -top-[50%] left-0">
          <Image
            src={AboutBg}
            alt="Hero Section Background"
            className="absolute inset-0 w-auto h-auto hidden lg:block -z-10"
          />
        </div>
        <div className="w-[7rem] h-auto sm:w-[9.8rem]">
          <Image src={VTKLogo} alt="VTK Logo" />
        </div>

        <div className="w-[7rem] h-auto sm:w-[11.8rem]">
          <Image src={KP} alt="KP Logo" />
        </div>

        <div className="w-[4rem] h-auto sm:w-[8.1rem]">
          <Image src={BRT} alt="BRT Logo" />
        </div>

        <div className="w-[10rem] h-auto sm:w-[16rem] mt-4">
          <Image src={ClearEats} alt="ClearEats Logo" />
        </div>

        <div className="w-[6.5rem] h-auto sm:w-[8.1rem]">
          <Image src={Logo} alt="Logo" />
        </div>

        <div className="w-[6.5rem] h-auto sm:w-[8.1rem] mt-6">
          <Image src={WizzLogo} alt="Wizz Logo" />
        </div>
      </div>
    </div>
   
  );
};

export default Clients;
