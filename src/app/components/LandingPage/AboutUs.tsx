import Image from "next/image";
import Hadi from '../../assets/images/Hadi.png';
import Muqeet from '../../assets/images/Muqeet.png';
import Tayyab from '../../assets/images/Tayyab.png';

const AboutUs = () => {
  return (
    <div className="font-poppins flex flex-col container mx-auto">
      <div className="text-center pt-8 px-4">
        <h1 className="text-white text-[2.5rem] font-semibold mb-4">About Us</h1>
        <p className="text-white text-[1rem] font-bold md:px-20 lg:px-20">
          Together, we steer the course of technology and design, dedicated to crafting exceptional digital experiences that exceed expectations.
        </p>
      </div>

      {/* Section with 3 divs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 py-[3rem] md:px-8 ">
        {/* First Box */}
        <div className="text-center w-full">
          <Image src={Muqeet} alt="Muqeet" className="mx-auto h-24 w-24 mb-4" />
          <h1 className="text-white text-[1.7rem] font-semibold mb-2">KHAWAJA MUQEET</h1>
          <p className="text-grey text-[0.875rem]">
            We are always one step ahead; we challenge convention and push the boundaries of what can be achieved.
          </p>
        </div>

        {/* Second Box */}
        <div className="text-center w-full">
          <Image src={Hadi} alt="Hadi" className="mx-auto h-24 w-24 mb-4" />
          <h1 className="text-white text-[1.7rem] font-semibold mb-2">HADI BUTT</h1>
          <p className="text-grey text-[0.875rem]">
            We are always one step ahead; we challenge convention and push the boundaries of what can be achieved.
          </p>
        </div>

        {/* Third Box */}
        <div className="text-center w-full">
          <Image src={Tayyab} alt="Tayyab" className="mx-auto h-24 w-24 mb-4" />
          <h1 className="text-white text-[1.7rem] font-semibold mb-2">MUHAMMAD TAYYAB</h1>
          <p className="text-grey text-[0.875rem]">
            We are always one step ahead; we challenge convention and push the boundaries of what can be achieved.
          </p>
        </div>
        


        
      </div>
    </div>
   
  );
};

export default AboutUs;
