"use client"
import React, { useState } from 'react'
import Accordion from '@/components/Accordion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [
    {
      title: "Como funciona a primeira sessão de terapia?",
      content: "A primeira sessão é um espaço de acolhimento e escuta para nos conhecermos, onde você pode compartilhar, no seu tempo, o que o(a) trouxe até a terapia, seus objetivos e aspectos da sua história. É também o momento em que explico como funciona o processo terapêutico, apresento minha abordagem, a Psicanálise, e a forma como conduzo o trabalho clínico. Juntos, conversamos sobre a frequência dos encontros, valores e demais aspectos práticos, sempre com abertura para tirar dúvidas."
    },
    {
      title: "Qual a frequência e a duração das sessões?",
      content: "As sessões têm duração média de 50 minutos e, geralmente, acontecem uma vez por semana. No entanto, a frequência pode ser ajustada conforme a necessidade, demanda emocional e momento do processo terapêutico de cada paciente, sempre respeitando o que for mais adequado para seu cuidado."
    },
    {
      title: "O que é a psicanálise?",
      content: "A psicanálise é uma abordagem terapêutica que tem como base a escuta do inconsciente e o reconhecimento de que há sentidos em nossas experiências que nem sempre são totalmente conscientes. Nos atendimentos, o método da livre associação convida o paciente a falar livremente sobre sua história, seus conflitos e aquilo que o levou a buscar ajuda. Mais do que interpretar ou dar respostas prontas, a psicanálise oferece um espaço de escuta singular, em que cada sujeito pode, no seu tempo, entrar em contato com seus próprios processos e significados. Ao longo do tratamento, é possível elaborar sofrimentos, reconhecer repetições, lidar com angústias e abrir caminhos para escolhas mais conscientes. A clínica psicanalítica não se orienta por normas ou diagnósticos fixos, mas sim pela singularidade de cada sujeito — oferecendo, assim, um espaço de cuidado que respeita sua história, seus tempos e sua forma de existir."
    },
    {
      title: "Qual é o valor da sessão?",
      content: "O Conselho Federal de Psicologia não permite a livre divulgação de valores pelas redes sociais, contudo o valor é informado na primeira sessão ou pelo contato via WhatsApp."
    },
    {
      title: "Aceita plano de saúde?",
      content: "Forneço recibos detalhados que podem ser utilizados para solicitar reembolso junto ao seu plano de saúde. A maioria dos convênios oferecem essa possibilidade. Caso precise de orientações sobre como realizar esse processo, estou à disposição para ajudar."
    },
  ]

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
        <div className="max-w-2xl mx-auto">
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ