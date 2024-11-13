"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import BlogsBg from "../../assets/images/BlogsBg.png";
import blogImage1 from '../../assets/images/blogImage1.png';
import blogImage2 from '../../assets/images/blogImage2.png';
import blogImage3 from '../../assets/images/blogImage3.png';

// Define a Blog type
interface Blog {
  image: string | StaticImageData;
  title: string;
  description: string;
  category: string;
}

interface BlogsProps {
  filteredBlogs: Blog[];
}

const Blogs = ({ filteredBlogs }: BlogsProps) => {
  return (
    <div className="font-poppins py-16 px-4 mx-auto">
      {/* Blogs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container">
        {filteredBlogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg shadow-lg"
          >
            {/* Blog Image */}
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-[15rem] object-cover mb-4 rounded-t-lg"
            />

            {/* Blog Title */}
            <h2 className="text-white text-[1.25rem] font-semibold mb-2 text-left">
              {blog.title}
            </h2>

            {/* Blog Description */}
            <p className="text-white text-[0.875rem] text-left font-bold">
              {blog.description}{' '}
              <a
                href="/blogs-content"
                className="text-teal hover:underline cursor-pointer"
              >
                Read more...
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const blogs: Blog[] = [
    {
      image: blogImage1,
      title: 'Ready to revolutionize your web development journey?',
      description:
        'This high percentage indicates the Metro\'s crucial role in daily commuting for women.',
      category: 'Web Development',
    },
    {
      image: blogImage2,
      title: 'Embrace Laravel\'s elegance, efficiency, and power',
      description:
        'This high percentage indicates the Metro\'s crucial role in daily commuting for women.',
      category: 'Web Development',
    },
    {
      image: blogImage3,
      title: 'A robust Customer Relationship Management (CRM) possibility',
      description:
        'This high percentage indicates the Metro\'s crucial role in daily commuting for women.',
      category: 'CRM&ERP Development',
    },
    {
      image: blogImage1,
      title: 'SEO Optimization Techniques',
      description:
        'Learn effective strategies for optimizing your content and improving search rankings.',
      category: 'SEO Optimization',
    },
    {
      image: blogImage2,
      title: 'The Power of Social Media Marketing',
      description:
        'Utilize social media platforms to reach and engage with your audience effectively.',
      category: 'Social Media Marketing',
    },
    {
      image: blogImage3,
      title: 'UI/UX Designing Essentials',
      description:
        'Understand the basics of UI/UX design to create user-friendly applications.',
      category: 'UI/UX Designing',
    },
  ];

  // Filter blogs based on the active filter
  const filteredBlogs = activeFilter === "All"
    ? blogs
    : blogs.filter(blog => blog.category === activeFilter);

  return (
    <div>
      <div className="relative h-[28rem]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url(${BlogsBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "-25%",
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 flex items-end h-[28rem] text-left bg-custom-gradient2">
          <div className="container">
            <h1 className="text-white font-semibold text-[2.5rem]">
              Our <span className="text-teal">Blogs</span>
            </h1>
            <p className="text-white text-[1.5rem]">
              Explore Technological Horizons: Insights, Trends, and Innovations
            </p>
          </div>
        </div>
      </div>

      {/* Filter Buttons Section */}
      <div className="py-4">
        <div className="flex overflow-x-auto space-x-2 my-4 container">
          {[
            "All",
            "Web Development",
            "CRM&ERP Development",
            "Mobile Development",
            "SEO Optimization",
            "Social Media Marketing",
            "UI/UX Designing",
          ].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`p-[0.75rem] sm:px-6 sm:py-3 lg:px-3 lg:py-4 rounded-[0.625rem] whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-tealgradient text-white"
                  : "bg-foundation-grey-darker text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Display Filtered Blogs */}
      <Blogs filteredBlogs={filteredBlogs} />
    </div>
  );
};

export default BlogPage;
