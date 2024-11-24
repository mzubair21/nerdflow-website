import Image from "next/image";
import Link from "next/link";
import projectImage1 from "../../assets/images/projectImage1.png";
import projectImage2 from "../../assets/images/projectImage2.png";
import projectImage3 from "../../assets/images/projectImage3.png";
import projectImage4 from "../../assets/images/projectImage4.png";
import ProjectBg from '../../assets/images/ProjectsBg.png';

const Projects = () => {
  
  const projects = [
    {
      title: "Raasta Web Application",
      description: "Our web development projects combine cutting-edge technology with creative design to deliver seamless user experiences and impactful digital solutions.",
      imageSrc: projectImage1,
    },
    {
      title: "Welsh Token Solution",
      description: "Our web development projects combine cutting-edge technology with creative design to deliver seamless user experiences and impactful digital solutions.",
      imageSrc: projectImage2,
    },
    {
      title: "Coupon Cove",
      description: "Our web development projects combine cutting-edge technology with creative design to deliver seamless user experiences and impactful digital solutions.",
      imageSrc: projectImage3,
    },
    {
      title: "BRT Centers",
      description: "Transforming health clinic procedures with a custom CRM, optimizing checkups, subscriptions, and invoicing.",
      imageSrc: projectImage4,
    },
  ];

  return (
    <div className="font-poppins flex relative flex-col">
      <div className="text-center py-5">
        <h1 className="text-white text-3xl font-semibold">
          See More <span className="text-teal">Projects</span>
        </h1>
        <p className="text-white text-lg font-normal pt-4">
          Explore our full range of innovative projects and discover more
          cutting-edge solutions
        </p>
      </div>
      <div className="w-full lg:w-[25rem] absolute top-[30%]">
        <Image
          src={ProjectBg}
          alt="Hero Section Background"
          className="absolute inset-0 w-auto h-auto hidden lg:block -z-10"
        />
      </div>
      {/* Projects Section */}
      <div className="container mx-auto mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start lg:items-stretch lg:justify-between bg-lightblack rounded-lg my-8"
          >
            <div className="lg:w-1/2 p-12">
              <h2 className="text-xl font-semibold text-white mb-2 border-grey">
                {project.title}
              </h2>
              <p className="text-white mb-9 font-normal w-[80%]">{project.description}</p>
              <Link
                href="/case-study"
                className="bg-tealgradient border-[0.04rem] shadow-custom-shadow-small border-black text-white py-[0.75rem] lg:py-3 px-[1.5rem] lg:px-6 rounded-lg transition-all duration-1000 ease-in text-[0.875rem] lg:text-[1rem] font-bold relative z-10 
                  hover:bg-[linear-gradient(76deg,#CECECE_0%,#FFF_100%)] hover:shadow-custom-shadow 
                  hover:text-custom-text "
              >
                See Case Study
              </Link>
            </div>
            <div className="lg:w-1/2 mt-4 lg:mt-0 flex items-end">
              <Image
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
