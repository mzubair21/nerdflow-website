import Image from 'next/image';
import blogImage1 from '../../assets/images/blogImage1.png';
import blogImage2 from '../../assets/images/blogImage2.png';
import blogImage3 from '../../assets/images/blogImage3.png';

const Blogs = () => {
  const blogs = [
    {
      image: blogImage1,
      title: 'Ready to revolutionize your web development journey?',
      description:
        "This high percentage indicates the Metro's crucial role in daily commuting for women.",
      link: 'Read more...',
    },
    {
      image: blogImage2,
      title: "Embrace Laravel's elegance, efficiency, and power",
      description:
        "This high percentage indicates the Metro's crucial role in daily commuting for women.",
      link: 'Read more...',
    },
    {
      image: blogImage3,
      title: 'A robust Customer Relationship Management (CRM) possibility',
      description:
        "This high percentage indicates the Metro's crucial role in daily commuting for women.",
      link: 'Read more...',
    },
  ];

  return (
    <div className="font-poppins py-16 px-2 md:px-10 lg:px-20 container mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-white text-3xl mb-4 font-semibold">
          Our <span className="text-teal">Blogs</span>
        </h1>
        <p className="text-white text-base font-bold font-inter">
          See what our clients have to say about us. Embrace a new level of
          convenience as you access efficient services through this innovative solution.
        </p>
      </div>

      {/* Blogs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href="/blogs-content"
            className="flex flex-col items-center p-4 rounded-lg shadow-lg hover:cursor-pointer"
          >
            {/* Blog Image with hover effect */}
            <div className="w-full h-[15rem] mb-4 overflow-hidden rounded-t-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Title */}
            <h2 className="text-white text-[1.25rem] font-semibold mb-2 text-left">
              {blog.title}
            </h2>

            {/* Blog Description */}
            <p className="text-white text-[0.875rem] text-left font-bold">
              {blog.description}{' '}
              <span className="text-teal hover:underline">{blog.link}</span>
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
