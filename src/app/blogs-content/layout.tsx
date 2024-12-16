import dynamic from "next/dynamic"

const Blog = dynamic(() => import("../components/BlogsContent/LaravelBlog"))
const Header = dynamic(() => import("../components/LandingPage/Header"))
const AosInit = dynamic(() => import("../components/LandingPage/AosInit"))

import Loading from "../loading"
import Footer from "../components/LandingPage/Footer"
const page = ({ children }: any) => {
  return (
    <>
      <AosInit />
      <Loading initFakeLoading={true} />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default page
