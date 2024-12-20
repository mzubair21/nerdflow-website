import "./globals.css"

export const metadata = {
  title: "NerdFlow Landing Page",
  description: "Generated by Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="font-poppins">{children}</body>
    </html>
  )
}
