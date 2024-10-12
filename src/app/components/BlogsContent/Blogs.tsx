import Image from "next/image";
import LaravelBg from "../../assets/images/laravel.png";
import laravelRight from "../../assets/images/laravelRight.png";
import quoteBg from "../../assets/images/quoteBg.png";
import Vector from '../../assets/images/Vector.png';


const Blog = () => {
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

      <div className="text-left px-16 pt-8 mb-4">
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
        <div className="relative z-10 flex flex-col items-center justify-center p-8">
          {/* Vector */}
          <div>
            <Image src={Vector} alt="vector" className="w-16 h-16" />
          </div>

          {/* Quote */}
          <blockquote className="mt-4 text-xl font-semibold text-center text-white px-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.
          </blockquote>
        </div>
      </div>

      <div className="p-12">
        <h1 className="font-semibold text-[2.125rem]">Why Laravel for CRM?</h1>
        <p>
          Laravel brings a host of advantages to CRM development. Its expressive
          syntax, modular architecture, and extensive ecosystem make it ideal
          for crafting tailored CRM solutions. With features like ORM
          (Eloquent), routing, caching, and security, Laravel accelerates
          development while ensuring a secure foundation
        </p>
      </div>
      <div className="p-12 relative">
        <div className="w-full lg:w-[25rem] absolute -top-[40%] left-[71%] hidden xl:block">
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