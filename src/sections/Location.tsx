import React from 'react'

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Onde me encontrar?</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p className="text-gray-600">
                Rua Example, 123 - Sala 45<br />
                Bairro Example - São Paulo, SP<br />
                CEP: 00000-000
              </p>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.7283574504527!2d-43.226005783709425!3d-22.976750598944598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5b0bb0f44db%3A0x6fa346ae1d055948!2sR.%20Gen.%20Rab%C3%AAlo%2C%2045%20-%20G%C3%A1vea%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022793-260!5e0!3m2!1spt-BR!2sbr!4v1745005928977!5m2!1spt-BR!2sbr" 
                width="600" height="450"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location