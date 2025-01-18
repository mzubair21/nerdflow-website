import "./globals.css"

export const metadata = {
  title: " Software Application Solution | CRM Development | Nerd Flow",
  description:
    "Unlock business potential with Nerd Flow's software application solutions. Expert CRM development for streamlined success. Discover more today!",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="font-poppins">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {children}
      </body>
    </html>
  )
}
