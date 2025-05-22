import { AuthProvider } from '@/context/AuthContext'
import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import 'notyf/notyf.min.css';



const font = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta-sans', display: 'swap' })

export const metadata: Metadata = {
  title: 'Voow',
  description: 'Buat Undangan Digital Lebih Mudah Dengan VOOW',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="flex min-h-screen flex-col">
          <AuthProvider>
            {children}
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
