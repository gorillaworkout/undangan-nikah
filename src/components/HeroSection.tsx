"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  groomName: string;
  brideName: string;
  date: string;
}

export default function HeroSection({ groomName, brideName, date }: HeroProps) {
  const formattedDate = new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--cream)]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.5em] uppercase text-[var(--sage)]">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>

          <div className="ornament-divider my-6">
            <span className="text-[var(--gold)]">✦</span>
          </div>

          <p className="font-[family-name:var(--font-cormorant)] text-lg text-[var(--charcoal)]/70">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </p>

          <p className="font-[family-name:var(--font-lora)] mt-4 max-w-md mx-auto text-sm text-[var(--charcoal)]/60 leading-relaxed">
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
            Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami
          </p>

          <div className="mt-10">
            <motion.h1
              className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl text-[var(--charcoal)] italic"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {groomName}
              <motion.span
                className="block text-3xl sm:text-4xl text-[var(--gold)] my-3 not-italic font-[family-name:var(--font-cormorant)] font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                &
              </motion.span>
              {brideName}
            </motion.h1>
          </div>

          <motion.p
            className="font-[family-name:var(--font-cormorant)] mt-8 text-lg text-[var(--gold)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {formattedDate}
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-[var(--gold-light)]" />
        </motion.div>
      </div>
    </section>
  );
}
