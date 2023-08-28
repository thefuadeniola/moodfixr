import Hero from '@/components/Hero'
import Steps from '@/components/Steps'
import FormSection from '@/components/FormSection'
import QuoteSection from '@/components/QuoteSection'
import Results from '@/components/Results'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className='h-screen'>
        <Navbar />
        <Hero />
      </header>
      <Steps />
      <FormSection />
      <QuoteSection />
      <Results />
    </main>
  )
}
