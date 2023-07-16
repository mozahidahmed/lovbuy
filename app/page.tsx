import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Header from '@/components/Header'
import Team from '@/components/Team'
import Company from '@/components/Company'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <Hero />
      <Product />
      <Team />
      <Company />

    </main>
  )
}
