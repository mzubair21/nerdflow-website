import Image from "next/image";
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
      description: "Transforming health clinic procedures with a custom CRM, optimizing checkups, subscriptions and invoicing.",
      imageSrc: projectImage4,
    },
  ];

  return (
    <div className="font-poppins flex relative flex-col">
      <div className="text-center">
        <h1 className="text-white text-[2.5rem] font-semibold">
          See More <span className="text-teal">Projects</span>
        </h1>
        <p className="text-white text-[1.25rem] font-normal">
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
            key={index} // Unique key for each project
            className="flex flex-col lg:flex-row items-center justify-between bg-lightblack pt-6 px-6 pb-0 rounded-lg my-8"
          >
            <div className="lg:w-1/2">
              <h2 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-white mb-4">{project.description}</p>
              <button className="bg-tealgradient text-white py-2 px-4 rounded-lg hover:bg-teal-600">
                See Case Study
              </button>
            </div>
            <div className="lg:w-1/2 mt-4 lg:mt-0">
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
