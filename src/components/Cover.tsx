"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 30%, #2c2c2c 60%, #1a1a1a 100%)",
      }}
      exit={{
        y: "-100%",
        transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
      }}
    >
      {/* 3D Background */}
      <Scene3D variant="cover" />

      {/* Decorative corner ornaments */}
      <div className="pointer-events-none absolute inset-0">
        {[
          "left-4 top-4",
          "right-4 top-4 rotate-90",
          "bottom-4 left-4 -rotate-90",
          "bottom-4 right-4 rotate-180",
        ].map((pos, i) => (
          <svg
            key={i}
            className={`absolute ${pos} h-20 w-20 sm:h-28 sm:w-28 text-[var(--gold-light)] opacity-20`}
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <path d="M0,50 Q0,0 50,0" />
            <path d="M0,40 Q0,10 30,0" />
            <path d="M10,0 Q20,20 0,30" />
            <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.3" />
          </svg>
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.p
          className="font-[family-name:var(--font-cormorant)] text-xs sm:text-sm tracking-[0.5em] uppercase text-[var(--gold-light)]/80"
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          The Wedding of
        </motion.p>

        <motion.h1
          className="font-[family-name:var(--font-playfair)] mt-6 text-5xl sm:text-8xl text-white italic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.span
            className="block"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {groomName}
          </motion.span>
          <motion.span
            className="block text-3xl sm:text-5xl text-[var(--gold-light)] my-2 sm:my-3 not-italic font-[family-name:var(--font-cormorant)] font-light"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.3, duration: 0.6, type: "spring" }}
          >
            &
          </motion.span>
          <motion.span
            className="block"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {brideName}
          </motion.span>
        </motion.h1>

        <motion.p
          className="font-[family-name:var(--font-lora)] mt-6 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {formattedDate}
        </motion.p>

        <motion.div
          className="mt-10 sm:mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[var(--gold-light)]/40 to-transparent" />
          <p className="font-[family-name:var(--font-cormorant)] mt-6 text-xs tracking-[0.3em] uppercase text-gray-500">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <p className="font-[family-name:var(--font-playfair)] mt-2 text-2xl sm:text-3xl text-white">
            {guestName}
          </p>
        </motion.div>

        <motion.button
          onClick={onOpen}
          className="group mt-10 sm:mt-14 inline-flex items-center gap-3 rounded-full border border-[var(--gold-light)]/60 bg-[var(--gold-light)]/5 px-10 py-4 font-[family-name:var(--font-cormorant)] text-sm tracking-[0.25em] uppercase text-[var(--gold-light)] backdrop-blur-sm transition-all hover:border-[var(--gold-light)] hover:bg-[var(--gold-light)]/20 hover:shadow-[0_0_30px_rgba(212,168,67,0.2)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart className="h-4 w-4 transition-transform group-hover:scale-110" />
          Buka Undangan
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
