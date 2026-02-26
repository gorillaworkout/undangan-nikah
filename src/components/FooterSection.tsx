"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

export default function FooterSection({
  hashtag,
  footerText,
}: {
  hashtag: string;
  footerText: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Gradient transition */}
      <div className="h-24 bg-gradient-to-b from-[var(--warm-white)] to-[#1a1a1a]" />

      <div
        className="py-20 text-center"
        style={{
          background:
            "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
        }}
      >
        <motion.p
          className="font-[family-name:var(--font-cormorant)] text-base text-gray-400 leading-relaxed max-w-sm mx-auto px-6"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami
          apabila Bapak/Ibu/Saudara/i berkenan hadir untuk
          memberikan doa restu
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-sm text-gray-500">
            اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] uppercase text-[var(--gold-light)]/60">
            Wassalamualaikum Warahmatullahi Wabarakatuh
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.7, type: "spring" }}
        >
          <div className="ornament-divider mb-6">
            <Heart
              className="h-3 w-3 text-[var(--gold-light)]/40"
              fill="currentColor"
            />
          </div>

          <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-white italic">
            {footerText}
          </p>

          <p className="font-[family-name:var(--font-cormorant)] mt-4 text-sm tracking-[0.3em] text-[var(--gold-light)]/40">
            {hashtag}
          </p>
        </motion.div>

        <div className="mt-16 border-t border-white/5 pt-6">
          <p className="font-[family-name:var(--font-cormorant)] text-xs text-gray-600">
            © 2026 · Made with{" "}
            <Heart className="inline h-3 w-3 text-red-400/40" fill="currentColor" />{" "}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
