import './globals.css'
import { Noto_Serif_TC } from 'next/font/google'

const inter = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ["400","700"],
})

export const metadata = {
  title: 'Maxro Resolution -- A Next.js App.',
  description: 'Web site Resolution detection.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
