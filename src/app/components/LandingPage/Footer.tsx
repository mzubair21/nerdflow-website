import Image from "next/image"
import logo from "../../assets/images/NerdFlowLogo.png"
import line from "../../assets/svgs/line.svg"
import gmail from "../../assets/svgs/mailIcon.svg"
import phone from "../../assets/svgs/phoneIcon.svg"

const Footer = () => {
  return (
    <footer className="bg-teal/5 text-white py-10 font-poppins  mx-auto">
      <div className="flex flex-col gap-2 lg:flex-row justify-between items-start container">
        {/* Left Div - Logo, Heading, Contact Details */}
        <div className="w-full  mb-8 md:mb-0 ">
          {/* Logo */}
          <div className="w-[30%]">
            <Image src={logo} alt="Logo" className="mb-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-2">
            <div>
              {/* Heading */}
              <h2 className="text-xl font-semibold mb-4">Get in touch</h2>

              {/* Description */}
              <p className="text-sm mb-10 font-bold text-grey">
                Get the latest updates and keep in touch with technology.
              </p>

              <div className="mb-12 hidden lg:block">
                <Image src={line} alt="Line" />
              </div>
            </div>

            {/* Contact Details */}
            <div className="text-base  flex flex-col sm:items-center md:items-start">
              <div>
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
          </div>
        </div>

        {/* Right Div - Newsletter, Links */}
        <div className="w-full lg:mt-11">
          {/* Newsletter Heading */}
          <h1 className="text-xl font-semibold mb-4">Subscribe Now</h1>

          {/* Newsletter Description */}
          <p className="text-sm mb-4 text-grey font-bold">
            Get the latest updates and keep in touch with technology.
          </p>

          {/* Email Input and Subscribe Button */}
          <div className="flex mb-6 gap-1">
            <input
              type="email"
              placeholder="Enter your email......"
              className="text-sm w-full px-4 py-4 text-white bg-[#212121] rounded-l font-bold placeholder-white"
            />
            <button className="text-sm bg-tealgradient text-white px-4 py-4 rounded-r font-bold">
              Subscribe
            </button>
          </div>

          {/* Links - Pages and Socials */}
          <div className="flex flex-col">
            {/* Pages Links */}
            <div>
              <ul className="flex flex-wrap justify-between mb-6 font-bold gap-2">
                <h2 className="text-base font-bold text-grey ">Pages</h2>
                <div className="text-sm flex flex-row flex-wrap gap-4">
                  <li>
                    <a href="" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="hover:underline">
                      Services
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
                </div>
              </ul>
            </div>

            {/* Social Follow Links */}
            <div className="">
              <ul className=" flex flex-wrap justify-between font-bold gap-2">
                <h2 className="text-base font-bold text-grey">Follows</h2>
                <div className="text-sm flex flex-row flex-wrap gap-4">
                  <li>
                    <a
                      href="https://www.facebook.com/nerdflow.tech?mibextid=ZbWKwL"
                      className="hover:underline"
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
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
