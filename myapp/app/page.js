import DonutList from '@/components/client/DonutList/DonutList'
import Hero from '@/components/client/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <DonutList />
    </main>
  )
}
