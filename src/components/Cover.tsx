"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface CoverProps {
  groomName: string;
  brideName: string;
  guestName: string;
  date: string;
  onOpen: () => void;
}

export default function Cover({
  groomName,
  brideName,
  guestName,
  date,
  onOpen,
}: CoverProps) {
  const formattedDate = new Date(date).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)",
      }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } }}
    >
      {/* Decorative corners */}
      <div className="pointer-events-none absolute inset-0">
        <svg className="absolute left-4 top-4 h-24 w-24 text-[var(--gold-light)] opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M0,50 Q0,0 50,0" />
          <path d="M0,40 Q0,10 30,0" />
          <path d="M10,0 Q20,20 0,30" />
        </svg>
        <svg className="absolute right-4 top-4 h-24 w-24 rotate-90 text-[var(--gold-light)] opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M0,50 Q0,0 50,0" />
          <path d="M0,40 Q0,10 30,0" />
          <path d="M10,0 Q20,20 0,30" />
        </svg>
        <svg className="absolute bottom-4 left-4 h-24 w-24 -rotate-90 text-[var(--gold-light)] opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M0,50 Q0,0 50,0" />
          <path d="M0,40 Q0,10 30,0" />
          <path d="M10,0 Q20,20 0,30" />
        </svg>
        <svg className="absolute bottom-4 right-4 h-24 w-24 rotate-180 text-[var(--gold-light)] opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M0,50 Q0,0 50,0" />
          <path d="M0,40 Q0,10 30,0" />
          <path d="M10,0 Q20,20 0,30" />
        </svg>
      </div>

      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.p
          className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-[var(--gold-light)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The Wedding of
        </motion.p>

        <motion.h1
          className="font-[family-name:var(--font-playfair)] mt-4 text-5xl sm:text-7xl text-white italic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {groomName}
          <span className="block text-3xl sm:text-4xl text-[var(--gold-light)] my-2 not-italic font-[family-name:var(--font-cormorant)]">&</span>
          {brideName}
        </motion.h1>

        <motion.p
          className="font-[family-name:var(--font-lora)] mt-6 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {formattedDate}
        </motion.p>

        <motion.div
          className="mt-10 border-t border-[var(--gold-light)]/20 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.3em] uppercase text-gray-500">
            Kepada Yth.
          </p>
          <p className="font-[family-name:var(--font-playfair)] mt-2 text-xl text-white">
            {guestName}
          </p>
        </motion.div>

        <motion.button
          onClick={onOpen}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--gold-light)] bg-transparent px-8 py-3 font-[family-name:var(--font-cormorant)] text-sm tracking-[0.2em] uppercase text-[var(--gold-light)] transition-all hover:bg-[var(--gold-light)] hover:text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart className="h-4 w-4" />
          Buka Undangan
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
