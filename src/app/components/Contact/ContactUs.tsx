"use client";
import Image from "next/image";
import { useState } from "react";
import ContactLeft from "../../assets/images/ContactLeft.png";
import ContactBg from "../../assets/images/ContactUsBg.png";

const ContactUs = () => {
  const [statusMessage, setStatusMessage] = useState(""); // State for status message
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  }); // State for form fields

  // Handle input change
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatusMessage("Submitting Response...");

    // Simulate API call or response submission
    setTimeout(() => {
      setStatusMessage("Response Sent Successfully!");
      // Clear form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1000);
  };

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
        <div className="relative z-10 flex items-end h-[28rem] bg-custom-gradient2">
          <div className="container">
            <h1 className="text-white font-semibold text-3xl">Contact Us</h1>
            <p className="text-white text-lg">
              Feel free to contact us for inquiries or support!
            </p>
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
        <h1 className="text-3xl font-semibold mb-4">Get in Touch</h1>
        <p className="mb-6 text-lg lg:px-48">
          Kindly complete the form located below, and one of our representatives
          will reach out to you within the next 24 hours. We appreciate your
          cooperation!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First and Last Name */}
          <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-center">
            <div className="w-full md:w-[26.8rem] lg:w-[26.8rem] max-w-[54rem]">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-whitetransparent text-purewhite rounded-[6.141px] border-[1.228px] border-white/20 bg-[rgba(255,255,255,0.05)] shadow-sm focus:ring focus:ring-teal focus:border-teal p-4"
                style={{
                  border: "1.276px solid #5E5E5E",
                  backdropFilter: "blur(2.55px)",
                }}
                placeholder="First Name"
              />
            </div>
            <div className="w-full md:w-[26.8rem] lg:w-[26.8rem] max-w-[54rem]">
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 block bg-white-transparent w-full text-purewhite rounded-[6.141px] border-[1.228px] border-white/20 shadow-sm focus:ring focus:ring-teal focus:border-teal p-4"
                style={{
                  border: "1.276px solid #5E5E5E",
                  backdropFilter: "blur(2.55px)",
                }}
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full max-w-[54rem] mx-auto bg-white-transparent text-purewhite rounded-[6.141px] border-[1.228px] border-white/20 shadow-sm focus:ring focus:ring-teal focus:border-teal p-4"
              style={{
                border: "1.276px solid #5E5E5E",
                backdropFilter: "blur(2.55px)",
              }}
              placeholder="Email"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full max-w-[54rem] mx-auto bg-white-transparent text-purewhite rounded-[6.141px] border-[1.228px] border-white/20 shadow-sm focus:ring focus:ring-teal focus:border-teal p-4"
              style={{
                border: "1.276px solid #5E5E5E",
                backdropFilter: "blur(2.55px)",
              }}
              placeholder="Phone Number"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full max-w-[54rem] mx-auto bg-white-transparent text-purewhite rounded-[6.141px] border-[1.228px] border-white/20 shadow-sm focus:ring focus:ring-teal focus:border-teal p-4"
              style={{
                border: "1.276px solid #5E5E5E",
                backdropFilter: "blur(2.55px)",
              }}
              placeholder="Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-tealgradient text-white py-2 lg:py-3 px-5 lg:px-6 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out text-[0.875rem] lg:text-[1rem] font-bold"
            >
              Submit Response
            </button>
          </div>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-4 text-teal-400 font-semibold">{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
