import React from 'react'

const Contato = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato