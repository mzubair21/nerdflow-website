import Image from "next/image";
import logo from "../../assets/images/NerdFlowLogo.png";
import line from "../../assets/svgs/line.svg";
import gmail from "../../assets/svgs/mailIcon.svg";
import phone from "../../assets/svgs/phoneIcon.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-5 lg:px-5 font-poppins container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Left Div - Logo, Heading, Contact Details */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          {/* Logo */}
          <div className="w-[30%] -ml-4">
            <Image src={logo} alt="Logo" className="mb-6" />
          </div>
          {/* Heading */}
          <h2 className="text-xl font-semibold mb-4">Get in touch</h2>

          {/* Description */}
          <p className="text-sm mb-10 font-bold text-grey">
            Get the latest updates and keep in touch with technology.
          </p>

          <div className="mb-12">
            <Image src={line} alt="Line" />
          </div>

          {/* Contact Details */}
          <div className="text-[1rem]">
            <p className="mb-4 flex items-center">
              <Image src={phone} alt="phone Icon" />
              <span className="font-bold ml-2">+1 (123) 456-7890</span>
            </p>
            <p className="flex items-center">
              <Image src={gmail} alt="Gmail Icon" />
              <span className="font-bold ml-2">info@nerdflow.tech</span>
            </p>
          </div>
        </div>

        {/* Right Div - Newsletter, Links */}
        <div className="w-full lg:w-1/2">
          {/* Newsletter Heading */}
          <h1 className="text-xl font-semibold mb-4">Subscribe Now</h1>

          {/* Newsletter Description */}
          <p className="text-[1rem] mb-4 text-grey font-bold">
            Get the latest updates and keep in touch with technology.
          </p>

          {/* Email Input and Subscribe Button */}
          <div className="flex mb-6 gap-1">
            <input
              type="email"
              placeholder="Enter your email......"
              className="w-full px-4 py-4 text-white bg-[#212121] rounded-l font-bold placeholder-white"
            />
            <button className="bg-tealgradient text-white px-4 py-4 rounded-r font-bold">
              Subscribe
            </button>
          </div>

          {/* Links - Pages and Socials */}
          <div className="flex flex-col">
            {/* Pages Links */}
            <div>
              <ul className="flex flex-wrap space-x-8 mb-6 font-bold">
                <h2 className="text-lg font-bold text-grey mb-2">Pages</h2>
                <li>
                  <a href="" className="hover:underline ml-5">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:underline">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="hover:underline">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Follow Links */}
            <div>
              <ul className="flex flex-wrap space-x-8 font-bold">
                <h2 className="text-lg font-bold text-grey">Follow Us</h2>
                <li>
                  <a
                    href="https://www.facebook.com/nerdflow.tech?mibextid=ZbWKwL"
                    className="hover:underline ml-16"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/nerdflowltd?igsh=MXI5NG52enc2NGJiaw=="
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Insta
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/nerd-flow/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fiverr
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
