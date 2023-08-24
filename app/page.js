import Image from 'next/image'
import Hero from '@/components/Hero'
import FormSection from '@/components/FormSection'
import QuoteSection from '@/components/QuoteSection'
import Results from '@/components/Results'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <FormSection />
      <QuoteSection />
      <Results />
    </main>
  )
}
