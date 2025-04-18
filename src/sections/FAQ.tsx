"use client"
import React, { useState } from 'react'
import Accordion from '@/components/Accordion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [
    {
      title: "Como funciona a terapia online?",
      content: "A terapia online é realizada através de videoconferência, em um ambiente seguro e confidencial. Você precisa apenas de um dispositivo com conexão à internet e um espaço privado para realizar as sessões."
    },
    {
      title: "Qual a duração e frequência das sessões?",
      content: "As sessões têm duração de 50 minutos e geralmente acontecem uma vez por semana. A frequência pode ser ajustada de acordo com suas necessidades e objetivos terapêuticos."
    },
    {
      title: "Como sei se a terapia é para mim?",
      content: "A terapia pode beneficiar qualquer pessoa que busque autoconhecimento, desenvolvimento pessoal ou esteja enfrentando desafios emocionais. Podemos realizar uma sessão inicial para avaliar suas necessidades e expectativas."
    }
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