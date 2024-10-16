import Image from "next/image";
import AboutRight from '../../assets/images/AboutRight.png';
import AboutBg from "../../assets/images/AboutUsBg.png";
import Hadi from '../../assets/images/Hadi.png';
import Muqeet from '../../assets/images/Muqeet.png';
import Tayyab from '../../assets/images/Tayyab.png';
import illustrator from '../../assets/logos/logos_adobe-illustrator.png';
import incopy from '../../assets/logos/logos_adobe-incopy.png';
import indesign from '../../assets/logos/logos_adobe-indesign.png';
import lightroom from '../../assets/logos/logos_adobe-lightroom.png';
import photoshop from '../../assets/logos/logos_adobe-photoshop.png';
import premiere from '../../assets/logos/logos_adobe-premiere.png';
import android from '../../assets/logos/logos_android-icon.png';
import blender from '../../assets/logos/logos_blender.png';
import cplus from '../../assets/logos/logos_c-plusplus.png';
import csharp from '../../assets/logos/logos_c-sharp.png';
import git from '../../assets/logos/logos_git-icon.png';

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
        <div className="relative z-10 flex items-end h-[28rem] px-14 bg-custom-gradient2">
          <div className="container">
            <h1 className="text-white font-semibold text-[2.5rem]">About Us</h1>
            <p className="text-white text-[1.5rem]">Feel free to contact us for inquiries or support!</p>
          </div>
        </div>
      </div>
     
     <div className="p-8 container">
        <h1 className="text-white text-[2.125rem] font-semibold leading-normal"> <span className="text-teal">
        Empowering </span> Excellence: Our Technological Arsenal</h1>
        <p className="text-[1.125rem] pt-5">At Nerd Flow, we pride ourselves on our advanced technological toolkit that fuels our creativity and innovation. From cutting-edge programming languages and frameworks to state-of-the-art design tools, we harness a diverse range of technologies to bring your digital aspirations to life. Discover how our expertise in the latest tech trends enables us to craft seamless, impactful solutions for every project.</p>
     </div>
     
     <div className="text-left pl-8 font-medium relative container">
        <h1 className="text-[2.125rem]">Meet Our <span className="text-teal">Team</span></h1>
        <p className="text-white text-[1rem]">Together, we steer the course of technology and design, dedicated to crafting exceptional digital experiences that exceed expectations.</p>
    </div>
    <div className="w-full lg:w-[20rem] absolute left-[77%] top-[50%] hidden xl:block">
        <Image
          src={AboutRight}
          alt="Plan Right Background"
          className="absolute inset-0 w-auto h-auto -z-10"
        />
      </div>
        {/* Section with 3 divs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-[3rem] md:px-8 container">
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

      <div className="text-left pl-8 font-medium relative container">
        <h1 className="text-[2.125rem]"><span className="text-teal">Technologies</span> We Work On</h1>
        <p className="text-white text-[1rem]">Leveraging cutting-edge technologies to drive innovation!</p>

        </div>
        {/**Logos */}
        <div className="p-6 flex flex-wrap gap-2 container" >
            <div className="w-[9rem] h-[9rem]">
            <Image src={indesign} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={csharp} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={photoshop} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={premiere} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={cplus} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={blender} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={illustrator} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={incopy} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={premiere} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={cplus} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={blender} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={illustrator} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={incopy} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={lightroom} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={android} alt="indesign" ></Image>
            </div>
            <div className="w-[9rem] h-[9rem]">
            <Image src={git} alt="indesign" ></Image>
            </div>
        </div>
   
    </div>
  );
};

export default About;
