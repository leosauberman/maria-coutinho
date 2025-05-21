"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 font-serif">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-primary text-2xl font-bold">
            Maria Coutinho
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary my-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          <div className="hidden md:flex gap-6">
            <Link href="#sobre" className="hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">Sobre</Link>
            <Link href="#ajuda" className="hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">Como posso ajudar</Link>
            <Link href="#atendimento" className="hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">Atendimento</Link>
            <Link href="#faq" className="hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">Perguntas Frequentes</Link>
            <Link href="#localizacao" className="hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">Localização</Link>
            <Link href="#contato" className="hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">Contato</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4">
            <Link href="#sobre" className="hover:text-primary transform transition-transform hover:translate-x-2" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
            <Link href="#ajuda" className="hover:text-primary transform transition-transform hover:translate-x-2" onClick={() => setIsMenuOpen(false)}>Como posso ajudar</Link>
            <Link href="#atendimento" className="hover:text-primary transform transition-transform hover:translate-x-2" onClick={() => setIsMenuOpen(false)}>Atendimento</Link>
            <Link href="#faq" className="hover:text-primary transform transition-transform hover:translate-x-2" onClick={() => setIsMenuOpen(false)}>Perguntas Frequentes</Link>
            <Link href="#localizacao" className="hover:text-primary transform transition-transform hover:translate-x-2" onClick={() => setIsMenuOpen(false)}>Localização</Link>
            <Link href="#contato" className="hover:text-primary transform transition-transform hover:translate-x-2" onClick={() => setIsMenuOpen(false)}>Contato</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header