"use client"

import { useEffect, useState } from "react"

const Loading = ({ initFakeLoading }: { initFakeLoading?: boolean }) => {
  const [loading, setLoading] = useState(initFakeLoading)
  useEffect(() => {
    if (initFakeLoading) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [initFakeLoading])

  return (
    <>
      {initFakeLoading ? (
        <>
          {initFakeLoading && loading ? (
            <div className="fixed top-0 left-0 w-full h-full bg-black z-10 transition-opacity duration-500 ease-out opacity-100">
              <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal border-opacity-50"></div>
                <span className="ml-4 text-xl font-semibold text-white">
                  Loading...
                </span>
              </div>
            </div>
          ) : (
            <div className="fixed top-0 left-0 w-full h-full bg-black z-10 transition-opacity duration-500 ease-out opacity-0 pointer-events-none"></div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Loading

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal border-opacity-50"></div>
      <span className="ml-4 text-xl font-semibold text-white">Loading...</span>
    </div>
  )
}
