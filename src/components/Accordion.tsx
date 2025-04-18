import React from 'react'

interface AccordionProps {
  title: string
  content: string
  isOpen: boolean
  onClick: () => void
}

const Accordion = ({ title, content, isOpen, onClick }: AccordionProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{title}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  )
}

export default Accordion