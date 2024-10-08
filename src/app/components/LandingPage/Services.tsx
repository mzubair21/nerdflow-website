import Image from 'next/image';
import service from '../../assets/svgs/servicelogo.svg';

const Services = () => {
  const services = [
    {
      logo: service,
      title: 'Web Development',
      description: 'We are always one step ahead; we challenge convention and push the boundaries of what can be achieved'
    },
    {
      logo: service,
      title: 'App Development',
      description: 'We anticipate development in the market and industry; then move quickly to adapt our ways of working'
    },
    {
      logo: service,
      title: 'UI/UX Designing',
      description: 'We achieve our goals and consistently deliver with confidence, determination and professionalism'
    },
    {
      logo: service,
      title: 'Search Engine Optimization',
      description: 'We are always one step ahead; we challenge convention and push the boundaries of what can be achieved'
    },
    {
      logo: service,
      title: 'Social Media Marketing',
      description: 'We anticipate development in the market and industry; then move quickly to adapt our ways of working'
    },
    {
      logo: service,
      title: 'Bubble/Workflow',
      description: 'We anticipate development in the market and industry; then move quickly to adapt our ways of working'
    },
  ];

  return (
    <div className="font-poppins px-4 sm:px-10 py-12 sm:py-24 container mx-auto">
      <div className="text-left mb-8">
        <h1 className="text-2xl sm:text-4xl font-semibold text-white mb-4">
          Our <span className="text-teal">Services</span>
        </h1>
        <p className="text-grey mb-2 text-sm sm:text-base font-bold">
          From web development to innovative app solutions, we deliver excellence across every digital dimension.
        </p>
        <p className='text-grey font-bold mb-6 text-sm sm:text-base'>Elevating Business Solutions: Discover Our Comprehensive Services</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
  {services.map((service, index) => (
    <div
      key={index}
      className="border-[0.799px] border-[#122F26] bg-[rgba(0,0,0,0.27)] p-6 flex flex-col text-left"
      style={{ backdropFilter: 'blur(18px)' }}
    >
      <Image src={service.logo} alt={`${service.title} Logo`} className="h-16 mb-4 text-left" />
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 text-left">{service.title}</h2>
      <p className="text-[0.875rem] text-gray-300 text-left">{service.description}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Services;
