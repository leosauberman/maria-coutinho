import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-maria-dark py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Maria Coutinho. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer