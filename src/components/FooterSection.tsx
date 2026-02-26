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
      className="relative py-16 text-center"
      style={{
        background: "linear-gradient(180deg, var(--cream) 0%, #1a1a1a 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] uppercase text-[var(--gold-light)]">
        {hashtag}
      </p>

      <div className="ornament-divider my-6">
        <Heart
          className="h-3 w-3 text-[var(--gold-light)]"
          fill="var(--gold-light)"
        />
      </div>

      <p className="font-[family-name:var(--font-cormorant)] text-sm text-gray-400">
        اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ
      </p>

      <p className="font-[family-name:var(--font-playfair)] mt-4 text-xl text-white italic">
        {footerText}
      </p>

      <p className="mt-8 font-[family-name:var(--font-cormorant)] text-xs text-gray-500">
        © 2026 · Made with ❤️
      </p>
    </motion.footer>
  );
}
