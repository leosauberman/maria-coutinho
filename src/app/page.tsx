import Hero from '@/sections/Hero'
import Sobre from '@/sections/Sobre'
import Contato from '@/sections/Contato'
import Ajudar from '@/sections/Ajudar'
import Atendimento from '@/sections/Atendimento'
import FAQ from '@/sections/FAQ'
import Location from '@/sections/Location'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Sobre />
      <Atendimento />
      <Ajudar />
      <FAQ />
      <Location />
      <Contato />
      <WhatsAppButton />
    </>
  )
}
