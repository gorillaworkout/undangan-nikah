"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function getTimeLeft(targetDate: string) {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="countdown-box rounded-xl px-4 py-5 text-center min-w-[80px]">
      <p className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[var(--gold)]">
        {String(value).padStart(2, "0")}
      </p>
      <p className="font-[family-name:var(--font-cormorant)] mt-1 text-xs tracking-[0.2em] uppercase text-[var(--charcoal)]/50">
        {label}
      </p>
    </div>
  );
}

export default function CountdownSection({ date }: { date: string }) {
  const [time, setTime] = useState(getTimeLeft(date));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft(date)), 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <section ref={ref} className="relative py-24 bg-[var(--cream)]">
      <div className="mx-auto max-w-xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-[var(--sage)]">
            Menghitung Hari
          </p>
          <div className="ornament-divider mt-4 mb-10">
            <span className="text-[var(--gold)] text-xs">✦</span>
          </div>

          <div className="flex justify-center gap-3 sm:gap-4">
            <CountdownBox value={time.days} label="Hari" />
            <CountdownBox value={time.hours} label="Jam" />
            <CountdownBox value={time.minutes} label="Menit" />
            <CountdownBox value={time.seconds} label="Detik" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
