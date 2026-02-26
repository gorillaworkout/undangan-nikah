"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Gift, Copy, Check } from "lucide-react";

interface GiftInfo {
  type: string;
  bankName?: string;
  accountNumber?: string;
  accountHolder?: string;
  label?: string;
  address?: string;
  phone?: string;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 rounded-full bg-[var(--cream)] px-3 py-1 text-xs text-[var(--charcoal)]/60 transition-all hover:bg-[var(--gold-light)] hover:text-white"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3" /> Tersalin
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" /> Salin
        </>
      )}
    </button>
  );
}

export default function GiftSection({ gifts }: { gifts: GiftInfo[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 bg-[var(--cream)]">
      <div className="mx-auto max-w-lg px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-[var(--sage)]">
            Amplop Digital
          </p>
          <div className="ornament-divider mt-4">
            <span className="text-[var(--gold)] text-xs">✦</span>
          </div>
          <p className="font-[family-name:var(--font-lora)] mt-6 text-sm text-[var(--charcoal)]/60 leading-relaxed">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun jika Anda ingin memberikan tanda kasih, dapat melalui:
          </p>
        </motion.div>

        <div className="space-y-4">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-[var(--gold-light)]/20 bg-white p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {gift.type === "bank" ? (
                <div className="flex items-start gap-4">
                  <CreditCard className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--gold)]" />
                  <div className="flex-1">
                    <p className="font-[family-name:var(--font-lora)] text-xs text-[var(--charcoal)]/50">
                      {gift.bankName}
                    </p>
                    <p className="font-[family-name:var(--font-playfair)] mt-1 text-lg text-[var(--charcoal)]">
                      {gift.accountNumber}
                    </p>
                    <p className="font-[family-name:var(--font-lora)] mt-0.5 text-sm text-[var(--charcoal)]/70">
                      a.n. {gift.accountHolder}
                    </p>
                    <div className="mt-3">
                      <CopyButton text={gift.accountNumber!} />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4">
                  <Gift className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--gold)]" />
                  <div>
                    <p className="font-[family-name:var(--font-lora)] text-sm font-semibold text-[var(--charcoal)]">
                      {gift.label}
                    </p>
                    <p className="font-[family-name:var(--font-lora)] mt-1 text-xs text-[var(--charcoal)]/60 leading-relaxed">
                      {gift.address}
                    </p>
                    <p className="font-[family-name:var(--font-lora)] mt-1 text-xs text-[var(--gold)]">
                      {gift.phone}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
