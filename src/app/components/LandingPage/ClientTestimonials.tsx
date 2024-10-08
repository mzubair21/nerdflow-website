import Image from 'next/image';
import clientImage from '../../assets/images/clientImage.png'; // Sample client image
import star from '../../assets/svgs/star.svg'; // Star image for ratings

const ClientTestimonials = () => {
  const testimonials = [
    {
      image: clientImage,
      name: 'Mr Smith',
      feedback: 'RR Technologies is the key to the success of our brands. A solid team of strategic planners and brilliant creations enables them to provide world-class service.',
      rating: 5, 
    },
    {
        image: clientImage,
        name: 'Mr Smith',
        feedback: 'RR Technologies is the key to the success of our brands. A solid team of strategic planners and brilliant creations enables them to provide world-class service.',
        rating: 5, 
      },
    {
        image: clientImage,
        name: 'Mr Smith',
        feedback: 'RR Technologies is the key to the success of our brands. A solid team of strategic planners and brilliant creations enables them to provide world-class service.',
        rating: 5, 
      },
      {
        image: clientImage,
        name: 'Mr Smith',
        feedback: 'RR Technologies is the key to the success of our brands. A solid team of strategic planners and brilliant creations enables them to provide world-class service.',
        rating: 5, 
      },
      {
        image: clientImage,
        name: 'Mr Smith',
        feedback: 'RR Technologies is the key to the success of our brands. A solid team of strategic planners and brilliant creations enables them to provide world-class service.',
        rating: 5, 
      },
      {
        image: clientImage,
        name: 'Mr Smith',
        feedback: 'RR Technologies is the key to the success of our brands. A solid team of strategic planners and brilliant creations enables them to provide world-class service.',
        rating: 5, 
      },
  ];

  return (
    <div className="font-poppins bg-[rgba(13,36,29,0.61)] backdrop-blur-sm py-16 w-full">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white text-[2.5rem] font-semibold">Client Testimonials</h1>
          <p className="text-white text-[1rem] font-bold">
            See what our clients have to say about us. Embrace a new level of convenience
            with efficient services through our innovative solutions.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex p-6 items-start w-[100%] gap-2 border border-green bg-[rgba(0,0,0,0.27)] h-auto flex-col justify-between"
            >
              {/* Image and Name Inline */}
              <div className="flex items-center">
                <Image src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full mr-4" />
                <h2 className="text-lg font-semibold text-white">{testimonial.name}</h2>
              </div>

              {/* Client Feedback */}
              <p className="text-white text-[0.875rem] font-bold">{testimonial.feedback}</p>

              {/* Ratings */}
              <div className="flex">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Image key={i} src={star} alt="star" className="h-6 w-6 mr-1" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
