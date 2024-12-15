import dynamic from "next/dynamic"
const LaravelBlog = dynamic(
  () => import("../../components/BlogsContent/LaravelBlog")
)

function page() {
  return <LaravelBlog />
}

export default page
