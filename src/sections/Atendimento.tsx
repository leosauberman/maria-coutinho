import React from 'react'

const Atendimento = () => {
  return (
    <section id="atendimento" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Tipos de Atendimento</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-neutral-light p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-primary font-serif">Atendimento Online</h3>
            <p className="text-gray-700">
              Pensado para oferecer mais praticidade e conforto, o atendimento on-line permite que você cuide da sua saúde mental dentro da sua rotina, no seu tempo e no seu espaço. Mesmo à distância, priorizo criar um ambiente acolhedor, seguro e ético, onde possamos construir juntos uma escuta sensível e transformadora.
            </p>
            <p className="text-gray-700 mt-4">
              Essa modalidade também é uma excelente alternativa para brasileiros que vivem em outros estados ou no exterior, tornando possível o acesso à terapia, mesmo fora do país. Com sigilo, cuidado e responsabilidade, o acompanhamento pode acontecer de forma segura, independente da localização.
            </p>
          </div>

          <div className="bg-neutral-light p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-primary font-serif">Atendimento Presencial</h3>
            <p className="text-gray-700">
              O atendimento presencial oferece a possibilidade de um contato direto, num espaço preparado para acolher você com escuta, sigilo e cuidado. Em um ambiente tranquilo e reservado, construímos juntos um espaço de confiança, onde você pode se expressar com liberdade e segurança para explorar suas vivências e emoções.
            </p>
          </div>
        </div>

        <div className="bg-neutral-light p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-primary font-serif">Plano de Saúde</h3>
          <p className="text-gray-700">
            Para garantir mais praticidade e melhor custo-benefício, ofereço recibos detalhados das sessões, que podem ser utilizados para solicitação de reembolso junto ao seu plano de saúde.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Atendimento