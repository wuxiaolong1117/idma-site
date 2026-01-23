"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: readonly FAQItem[];
  className?: string;
}

export default function FAQ({ items, className = "" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-semibold text-gray-900">{item.question}</span>
              <span className="text-blue-600 text-xl font-bold ml-4">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                className="px-6 pb-4 text-gray-600"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
