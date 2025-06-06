"use client"
import { useEffect, useState } from 'react'

const WhatsAppButton = () => {
  const [isMobile, setIsMobile] = useState(false)
  const phoneNumber = "5521981678584"
  const message = "Olá, vim pelo site e queria saber mais sobre a consulta!"

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    }
    checkMobile()
  }, [])

  const whatsappUrl = isMobile
    ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 group flex items-center"
      aria-label="Chat on WhatsApp"
    >
      <span className="fixed bottom-11 right-28 bg-neutral-dark text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-md">
        Agende sua consulta
      </span>
      <div className="bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50">
        <svg
          className="w-15 h-15"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
        </svg>
      </div>
    </a>
  )
}

export default WhatsAppButton