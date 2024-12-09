import BlogPage from "../components/Blogs/BlogPage"
import AosInit from "../components/LandingPage/AosInit"
import Footer from "../components/LandingPage/Footer"
import Header from "../components/LandingPage/Header"

const page = () => {
  return (
    <>
      {/** */}
      <AosInit />
      <Header />
      <BlogPage />
      <Footer />
    </>
  )
}

export default page
