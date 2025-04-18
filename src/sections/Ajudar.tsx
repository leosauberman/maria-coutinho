import React from 'react'

const Ajudar = () => {
  return (
    <section id="ajuda" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Como posso te ajudar</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-primary">Acolhimento Personalizado</h3>
            <p className="text-gray-700">
              Cada pessoa é única, com sua própria história e necessidades. 
              Meu trabalho é criar um espaço seguro e acolhedor onde você possa 
              se expressar livremente, sem julgamentos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-primary">Abordagem Integrativa</h3>
            <p className="text-gray-700">
              Utilizo diferentes técnicas terapêuticas adaptadas ao seu perfil e objetivos.
              Trabalho com uma visão holística que considera aspectos emocionais, 
              comportamentais e relacionais.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-primary">Desenvolvimento Contínuo</h3>
            <p className="text-gray-700">
              O processo terapêutico é uma jornada de autoconhecimento e crescimento.
              Juntos, trabalharemos para desenvolver ferramentas e estratégias que 
              promovam seu bem-estar e qualidade de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ajudar