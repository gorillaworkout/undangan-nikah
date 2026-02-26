"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

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
      {/* 3D floating elements */}
      <Scene3D variant="hero" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B'%3E%3Cpath d='M40 0l40 40-40 40L0 40z' fill-opacity='.06'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg text-[var(--sage)] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </motion.p>

          <div className="ornament-divider my-6">
            <span className="text-[var(--gold)]">✦</span>
          </div>

          <motion.p
            className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl text-[var(--charcoal)]/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Assalamualaikum Warahmatullahi Wabarakatuh
          </motion.p>

          <motion.p
            className="font-[family-name:var(--font-lora)] mt-4 max-w-md mx-auto text-sm text-[var(--charcoal)]/50 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
            Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami
          </motion.p>

          <div className="mt-12 sm:mt-16">
            <motion.h1
              className="font-[family-name:var(--font-playfair)] text-5xl sm:text-8xl text-[var(--charcoal)] italic leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <motion.span
                className="block"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {groomName}
              </motion.span>
              <motion.span
                className="block text-3xl sm:text-5xl text-[var(--gold)] my-2 sm:my-4 not-italic font-[family-name:var(--font-cormorant)] font-light"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                &
              </motion.span>
              <motion.span
                className="block"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {brideName}
              </motion.span>
            </motion.h1>
          </div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
            <p className="font-[family-name:var(--font-cormorant)] mt-4 text-lg sm:text-xl text-[var(--gold)]">
              {formattedDate}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-[var(--gold-light)] opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}
