import type { Metadata } from "next";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "./globals.css";
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Maria Rezende Coutinho | Psicóloga',
  description: 'Atendimento psicológico online e presencial para crianças, adolescentes e adultos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.className} ${playfair.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
