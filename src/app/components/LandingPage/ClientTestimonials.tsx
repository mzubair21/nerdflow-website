import Image from "next/image"
import clientImage from "../../assets/images/clientImage.png" // Sample client image
import star from "../../assets/svgs/star.svg" // Star image for ratings

const ClientTestimonials = ({ bg = true }) => {
  const testimonials = [
    {
      image: clientImage,
      name: "Ariel Walcott",
      feedback:
        "I really appreciate your sense of detail and how there is little to no errors very consistently. Great experiences with Hadi always! Thank you for consistency no matter what the order size. Always follows through and has a great energy with it as well! Well done!",
      rating: 5,
    },
    {
      image: clientImage,
      name: "Sander Lubbers",
      feedback:
        "I thought it wasn’t possible and they made it happen! So nice!",
      rating: 5,
    },
    {
      image: clientImage,
      name: "Omer Misbah Shami",
      feedback:
        "Got a task done from Hadi on a short notice. Delivery was very quick and spot on. He handled everything professionally and covered all the requirements at a low cost. Would definitely recommend and come back here myself if needed.",
      rating: 5,
    },
    {
      image: clientImage,
      name: "Clarence",
      feedback:
        "Was awesome working with Hadi, quick responses, code works perfectly, a good understanding of the tasks given. We are excited to work on future projects with Hadi!",
      rating: 5,
    },
    {
      image: clientImage,
      name: "Andre Auls",
      feedback:
        "This was my first time using this platform and this was an amazing experience. He was available & very patient. Thanks a lot! This guy is the absolute best. I am very impressed with his work. I will continue to do business with him. Thanks a lot!",
      rating: 5,
    },
    {
      image: clientImage,
      name: "Mohad",
      feedback:
        "Very easy to work with Hadi. He met our needs and delivered very quickly. I can't wait to do more projects in the future.",
      rating: 5,
    },
    {
      image: clientImage,
      name: "Yanik Senhouse",
      feedback:
        "Every deliverable has been on time. If I have any questions or changes to be made, I get very clear explanations and feedback on the changes being made. All in all, the experience has been good thus far. So far working with Hadi has been a pleasant experience. We met via Teams several times before getting the project started. Hadi and the team are working quickly on their deliverables which is a plus. If everything continues as is, I'd definitely hire them for other projects.",
      rating: 5,
    },
    {
      image: clientImage,
      name: "Kane Butler",
      feedback:
        "Helpful and efficient process. Work carried out to a high standard. Instructions carried out with good communication.",
      rating: 5,
    },
  ]

  return (
    <div
      data-aos="fade-up"
      className={`font-poppins py-8 lg:py-16 w-full ${
        bg ? "bg-[rgba(13,36,29,0.61)] backdrop-blur-sm" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl mb-4 font-semibold">
            Client Testimonials
          </h1>
          <p className="text-white text-sm font-bold font-inter">
            See what our clients have to say about us. Embrace a new level of
            convenience with efficient services through our innovative
            solutions.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex p-6 items-start w-[100%] gap-4 border border-green bg-[rgba(0,0,0,0.27)] h-full flex-col justify-start"
            >
              {/* Image and Name Inline */}
              <div className="flex items-center">
                {/* <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                /> */}
                <h2 className="text-lg font-semibold text-white">
                  {testimonial.name}
                </h2>
              </div>

              {/* Client Feedback */}
              <p className="text-white text-sm font-inter text-justify font-bold">
                {testimonial.feedback}
              </p>

              {/* Ratings */}
              <div className="flex mt-auto">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Image
                      key={i}
                      src={star}
                      alt="star"
                      className="h-6 w-6 mr-1"
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientTestimonials
