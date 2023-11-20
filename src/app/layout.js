import { Barlow_Semi_Condensed, Inter } from 'next/font/google'
import './globals.css'

const barlow = Barlow_Semi_Condensed({ subsets: ['latin'], weight:['500', '600'] })

export const metadata = {
  title: 'Testimonials grid section',
  description: 'Challenged by Frontend Mentor. Developed by Ribika Yonas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
