"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.3 }}
    >
      <div className="relative mb-6">
        <div className="h-48 w-48 overflow-hidden rounded-full border-2 border-[var(--gold-light)] p-1">
          <div className="h-full w-full rounded-full bg-[var(--cream)] flex items-center justify-center">
            <span className="font-[family-name:var(--font-playfair)] text-4xl text-[var(--gold-light)] italic">
              {person.name.charAt(0)}
            </span>
          </div>
        </div>
      </div>

      <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[var(--charcoal)] italic">
        {person.fullName}
      </h3>

      <p className="font-[family-name:var(--font-cormorant)] mt-2 text-sm text-[var(--charcoal)]/60">
        {person.childOrder} dari
      </p>
      <p className="font-[family-name:var(--font-lora)] mt-1 text-sm text-[var(--charcoal)]/80">
        {person.father}
      </p>
      <p className="font-[family-name:var(--font-cormorant)] text-xs text-[var(--charcoal)]/50">
        &
      </p>
      <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--charcoal)]/80">
        {person.mother}
      </p>

      <p className="font-[family-name:var(--font-cormorant)] mt-3 text-sm text-[var(--gold)]">
        {person.instagram}
      </p>
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
    <section ref={ref} className="relative py-24 bg-[var(--cream)]">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-[var(--sage)]">
            Mempelai
          </p>
          <div className="ornament-divider mt-4">
            <Heart className="h-4 w-4 text-[var(--gold)]" fill="var(--gold)" />
          </div>
        </motion.div>

        <div className="grid gap-16 sm:grid-cols-2">
          <PersonCard person={groom} index={0} />
          <PersonCard person={bride} index={1} />
        </div>
      </div>
    </section>
  );
}
