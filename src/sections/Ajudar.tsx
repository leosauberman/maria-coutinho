import React from 'react'

const Ajudar = () => {
  return (
    <section id="ajuda" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Como posso te ajudar</h2>
        
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-primary">Abordagem Integrativa</h3>
            <p className="text-gray-700">
              Em meu trabalho clínico, acolho diferentes formas de sofrimento psíquico que podem surgir ao longo da vida. Entre as demandas mais frequentes estão quadros de ansiedade, depressão, experiências traumáticas, perdas e separações, dificuldades com a autoestima, transtornos alimentares, conflitos com o corpo, diagnóstico de TOC, esquizofrenia, questões relacionadas à sexualidade, desafios no ambiente de trabalho, Burnout e sentimentos constantes de autocobrança.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-primary">Acolhimento Personalizado</h3>
            <p className="text-gray-700">
              Cada história é única, e por isso, cada escuta também precisa ser singular. A decisão de buscar um espaço terapêutico pode surgir quando o sofrimento começa a ocupar demais — quando o que antes era possível sustentar sozinho, passa a demandar um espaço de elaboração e cuidado.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-primary">A Psicanálise</h3>
            <p className="text-gray-700">
              A psicanálise oferece essa possibilidade: um espaço de fala, de escuta e de construção. Através da palavra, abrimos caminho para novos sentidos, para o reconhecimento daquilo que nos atravessa e para a chance de escolher viver com mais autenticidade por caminhos mais dignos de bem-estar e saúde.
            </p>
          </div>

          <blockquote className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-xl italic text-gray-700">
              &ldquo;Aquilo que não se elabora, repete-se.&rdquo;
            </p>
            <cite className="block mt-4 text-gray-600">— Sigmund Freud</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Ajudar