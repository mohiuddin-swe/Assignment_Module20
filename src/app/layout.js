import './globals.css'
import { Inter } from 'next/font/google'
import "react-quill/dist/quill.snow.css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Assignment 20 Ostad',
  description: 'by Md Mohi Uddin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
