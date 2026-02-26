"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Instagram } from "lucide-react";

interface PersonInfo {
  name: string;
  fullName: string;
  father: string;
  mother: string;
  childOrder: string;
  photo: string;
  instagram: string;
}

function PersonCard({ person, index }: { person: PersonInfo; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.3 }}
    >
      {/* Profile photo placeholder with elegant border */}
      <motion.div
        className="relative mb-8"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative h-52 w-52 sm:h-56 sm:w-56">
          {/* Rotating border */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, var(--gold-light), transparent, var(--gold-light), transparent, var(--gold-light))`,
              padding: 2,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-full w-full rounded-full bg-[var(--cream)]" />
          </motion.div>

          {/* Inner circle */}
          <div className="absolute inset-2 overflow-hidden rounded-full bg-gradient-to-br from-[var(--cream)] to-[var(--cream-dark)] flex items-center justify-center">
            <span className="font-[family-name:var(--font-playfair)] text-5xl text-[var(--gold-light)]/40 italic">
              {person.name.charAt(0)}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.h3
        className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[var(--charcoal)] italic"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.3 + 0.4 }}
      >
        {person.fullName}
      </motion.h3>

      <motion.div
        className="mt-4 space-y-1"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.3 + 0.6 }}
      >
        <p className="font-[family-name:var(--font-cormorant)] text-sm text-[var(--charcoal)]/50">
          {person.childOrder} dari
        </p>
        <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--charcoal)]/80">
          {person.father}
        </p>
        <p className="font-[family-name:var(--font-cormorant)] text-xs text-[var(--charcoal)]/30">
          &
        </p>
        <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--charcoal)]/80">
          {person.mother}
        </p>
      </motion.div>

      <motion.a
        href={`https://instagram.com/${person.instagram.replace("@", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 font-[family-name:var(--font-cormorant)] text-sm text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.3 + 0.8 }}
      >
        <Instagram className="h-3.5 w-3.5" />
        {person.instagram}
      </motion.a>
    </motion.div>
  );
}

export default function CoupleSection({
  groom,
  bride,
}: {
  groom: PersonInfo;
  bride: PersonInfo;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-[var(--cream)]">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-[var(--sage)]">
            Mempelai
          </p>
          <div className="ornament-divider mt-4">
            <Heart
              className="h-4 w-4 text-[var(--gold)]"
              fill="var(--gold)"
            />
          </div>
        </motion.div>

        <div className="grid gap-16 sm:gap-8 sm:grid-cols-2">
          <PersonCard person={groom} index={0} />
          <PersonCard person={bride} index={1} />
        </div>
      </div>
    </section>
  );
}
