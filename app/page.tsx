import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Team from '@/components/Team'
import Company from '@/components/Company'

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
