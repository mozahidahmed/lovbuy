import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './GlobalRedux/provider'
import CartProvider from '@/components/Context/Cart'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/shared/Footer'
import NextAuthSessionProvider from './providers/sessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LovBuy e-Commerce',
  description: 'Shop in Your Hand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        <NextAuthSessionProvider>
          <Providers>
            <CartProvider>{children}</CartProvider>
          </Providers>
        </NextAuthSessionProvider>

        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></script>
        <script src="https://unpkg.com/react-query/dist/react-query.production.min.js"></script>
      </body>
    </html>
  )
}
