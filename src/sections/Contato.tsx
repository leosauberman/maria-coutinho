"use client"
import React from 'react'
import { useForm } from '@formspree/react'

const Contato = () => {
  const [state, handleSubmit] = useForm("mnndyqvw")

  if (state.succeeded) {
    return (
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Mensagem enviada!</h3>
            <p className="text-gray-600">Obrigada pelo contato. Retornarei em breve.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Nome"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Mensagem"
                rows={4}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 disabled:opacity-50"
            >
              {state.submitting ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato