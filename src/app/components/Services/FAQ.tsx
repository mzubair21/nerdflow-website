"use client";
import Image from "next/image";
import { useState } from "react";
import FAQBg from '../../assets/images/FAQBg.png';
import crossIcon from '../../assets/svgs/crossIcon.svg';
import plusIcon from '../../assets/svgs/plusIcon.svg';

// Define the structure of the FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  // State to manage which FAQ is open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null); // index will be a number or null

  // Toggle FAQ visibility
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index); // Toggle between open and closed
  };

  // Array of FAQ questions and answers
  const faqs: FAQItem[] = [
    {
      question: "Alright, but what exactly do you do?",
      answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
    },
    {
      question: "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?",
      answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
    },
    {
      question: "Are your rates competitive?",
      answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
    },
    {
      question: "Why do you have a monthly project cap?",
      answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
    },
  ];

  return (
    <div>
      <div className="text-center flex relative flex-col ">
        <h1 className="text-white font-semibold text-[2.5rem]">
          Frequently Asked Questions
        </h1>
        <p className="text-white">
          See what we have to offer to our customers
        </p>
      </div>
      <div className="w-full lg:w-[25rem] absolute left-[71%] 2xl:left-[74%]">
          <Image
            src={FAQBg}
            alt="Hero Section Background"
            className="absolute inset-0 w-auto h-auto hidden xl:block -z-10"
          />
        </div>
      {/* FAQ Section */}
      <div className="mt-10 w-full container">
        {faqs.map((faq, index: number) => (
          <div
            key={`${faq.question}-${index}`} // Generate unique key
            className="text-white p-12 mb-8 w-full cursor-pointer flex items-start justify-between hover:bg-lightblack hover:border hover:border-lightblack"
            onClick={() => toggleFAQ(index)} // Toggle when clicked
          >
            {/* Numbering */}
            <div className="mr-4 text-white text-[2rem] font-bold">
              {index < 9 ? `0${index + 1}` : index + 1}
            </div>

            {/* FAQ Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center ">
                <h2 className="text-[1.5rem] font-semibold">{faq.question}</h2>
                {openFAQ === index ? (
                  <Image src={crossIcon} alt="Cross Icon" />
                ) : (
                  <Image src={plusIcon} alt="Plus Icon" />
                )}
              </div>

              {openFAQ === index && (
                <p className="mt-2 text-white text-[1.25rem]">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
