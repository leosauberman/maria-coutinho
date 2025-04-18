import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen bg-neutral-light flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bem-vindo ao seu espaço de acolhimento
            </h1>
            <p className="text-xl mb-8">
              Atendimento psicológico humanizado e personalizado para seu bem-estar
            </p>
            <a href="https://wa.me/5521981678584?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20a%20consulta!" target='__blank'>
              <button className="bg-primary text-white px-8 py-3 rounded-full hover:opacity-90">
                Agende sua consulta
              </button>
            </a>
          </div>
          
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl flex-shrink-0">
            <Image
              src="/profile.png"
              alt="Maria Rezende Coutinho"
              className="w-full h-full object-cover"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero