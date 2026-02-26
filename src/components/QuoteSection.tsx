"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Quote {
  text: string;
  source: string;
}

export default function QuoteSection({ quotes }: { quotes: Quote[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-[var(--warm-white)]">
      <div className="mx-auto max-w-2xl px-6 text-center">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <span className="font-[family-name:var(--font-playfair)] text-6xl text-[var(--gold-light)] opacity-30">
              ❝
            </span>
            <p className="font-[family-name:var(--font-cormorant)] -mt-6 text-xl leading-relaxed text-[var(--charcoal)]/80 italic">
              {quote.text}
            </p>
            <p className="font-[family-name:var(--font-lora)] mt-4 text-sm text-[var(--gold)]">
              — {quote.source}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
