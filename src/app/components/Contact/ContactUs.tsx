import Image from "next/image";
import ContactLeft from '../../assets/images/ContactLeft.png';
import ContactBg from "../../assets/images/ContactUsBg.png";

const ContactUs = () => {
  return (
    <div>
      <div className="relative h-[28rem]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url(${ContactBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "-25%",
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 flex items-end h-[28rem] px-14 bg-custom-gradient2">
          <div className="container">
            <h1 className="text-white font-semibold text-[2.5rem]">Contact Us</h1>
            <p className="text-white text-[1.5rem]">Feel free to contact us for inquiries or support!</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[20rem] absolute top-[20%] hidden xl:block">
        <Image
          src={ContactLeft}
          alt="Plan Left Background"
          className="absolute inset-0 w-auto h-auto -z-10"
        />
      </div>

      <div className="container mx-auto px-4 py-10 text-center text-white">
        <h1 className="text-[2.125rem] font-semibold mb-4">Get in Touch</h1>
        <p className="mb-6 text-[1.125rem] lg:px-48">
          Kindly complete the form located below, and one of our representatives will reach out to you within the next 24 hours. We appreciate your cooperation!
        </p>

        <form className="space-y-4">
          {/* First and Last Name */}
          <div className="flex flex-col lg:flex-row gap-2 justify-center ">
          <div className="w-full lg:w-[26.8rem]">
              <label htmlFor="firstName" className="sr-only">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="mt-1 block w-full bg-whitetransparent text-purewhite rounded-[6.141px] border-[1.228px] border-white/20 bg-[rgba(255,255,255,0.05)] shadow-sm focus:ring focus:ring-teal focus:border-teal p-4"  style={{border: '1.276px solid #5E5E5E',   backdropFilter: 'blur(2.55px)'}}
                placeholder="First Name"
              />
            </div>
            <div className="w-full lg:w-[26.8rem]">
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="mt-1 block bg-white-transparent w-full text-purewhite rounded-[6.141px] border-[1.228px] border-white/20 shadow-sm focus:ring focus:ring-teal focus:border-teal p-4"  style={{border: '1.276px solid #5E5E5E',   backdropFilter: 'blur(2.55px)',}}
                placeholder="Last Name"
              />
            </div>
           
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full max-w-[54rem] mx-auto bg-whitetransparent text-purewhite rounded-[6.141px] border-[1.228px] border-white/20 bg-[rgba(255,255,255,0.05)] shadow-sm focus:ring focus:ring-teal focus:border-teal p-4" style={{border: '1.276px solid #5E5E5E',   backdropFilter: 'blur(2.55px)'}}
              placeholder="Email"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full max-w-[54rem] mx-auto bg-whitetransparent text-purewhite rounded-[6.141px] border-[1.228px] border-white/20 bg-[rgba(255,255,255,0.05)] shadow-sm focus:ring focus:ring-teal focus:border-teal p-4" style={{border: '1.276px solid #5E5E5E',   backdropFilter: 'blur(2.55px)'}}
              placeholder="Phone Number"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 block w-full max-w-[54rem] mx-auto bg-whitetransparent text-purewhite rounded-[6.141px] border-[1.228px] border-white/20 bg-[rgba(255,255,255,0.05)] shadow-sm focus:ring focus:ring-teal focus:border-teal p-4" style={{border: '1.276px solid #5E5E5E',   backdropFilter: 'blur(2.55px)'}}
              placeholder="Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button className="bg-tealgradient text-white py-2 lg:py-3 px-5 lg:px-6 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out text-[0.875rem] lg:text-[1rem] font-bold">
              Submit Response
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
