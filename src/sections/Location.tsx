import React from 'react'

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Onde me encontrar?</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Gávea</h3>
                <p className="text-gray-600">
                  Rua Mary Pessoa, 91A<br />
                  Gávea - Rio de Janeiro, RJ
                </p>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.096225350708!2d-43.24156352463265!3d-22.983488779201213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd4330a81d8bf%3A0x236a0aa8b55dd2b0!2sRua%20Mary%20Pessoa%2C%2091%20A%20-%20Leblon%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022431-070!5e0!3m2!1spt-BR!2sbr!4v1747847368800!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="300"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Largo do Machado</h3>
                <p className="text-gray-600">
                  Largo do Machado, 21<br />
                  Largo do Machado - Rio de Janeiro, RJ
                </p>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.4926295472534!2d-43.18285562376611!3d-22.93160203833046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f9f4f9b9d51%3A0x8dd1f4acf03da73c!2sLargo%20do%20Machado%2C%2021%20-%20Catete%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022221-020!5e0!3m2!1spt-BR!2sbr!4v1709668547943!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="300"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location