"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function RSVPSection({
  groomName,
  brideName,
}: {
  groomName: string;
  brideName: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    attendance: "hadir",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to API/database
    console.log("RSVP:", formData);
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="relative py-24 bg-[var(--warm-white)]">
      <div className="mx-auto max-w-lg px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-[var(--sage)]">
            Konfirmasi Kehadiran
          </p>
          <div className="ornament-divider mt-4">
            <span className="text-[var(--gold)] text-xs">✦</span>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-[var(--gold-light)]/20 bg-white p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {submitted ? (
            <div className="py-8 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-[var(--sage)]" />
              <p className="font-[family-name:var(--font-playfair)] mt-4 text-xl text-[var(--charcoal)] italic">
                Terima Kasih!
              </p>
              <p className="font-[family-name:var(--font-lora)] mt-2 text-sm text-[var(--charcoal)]/60">
                Konfirmasi kehadiran Anda telah kami terima.
                <br />
                Kami menantikan kehadiran Anda.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-[family-name:var(--font-cormorant)] mb-2 block text-xs tracking-[0.15em] uppercase text-[var(--charcoal)]/50">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-[var(--gold-light)]/30 bg-transparent px-4 py-2.5 font-[family-name:var(--font-lora)] text-sm outline-none transition-all focus:border-[var(--gold)]"
                  placeholder="Nama lengkap Anda"
                />
              </div>

              <div>
                <label className="font-[family-name:var(--font-cormorant)] mb-2 block text-xs tracking-[0.15em] uppercase text-[var(--charcoal)]/50">
                  Kehadiran
                </label>
                <select
                  value={formData.attendance}
                  onChange={(e) =>
                    setFormData({ ...formData, attendance: e.target.value })
                  }
                  className="w-full rounded-lg border border-[var(--gold-light)]/30 bg-transparent px-4 py-2.5 font-[family-name:var(--font-lora)] text-sm outline-none transition-all focus:border-[var(--gold)]"
                >
                  <option value="hadir">Hadir</option>
                  <option value="tidak">Tidak Hadir</option>
                  <option value="mungkin">Masih Ragu</option>
                </select>
              </div>

              <div>
                <label className="font-[family-name:var(--font-cormorant)] mb-2 block text-xs tracking-[0.15em] uppercase text-[var(--charcoal)]/50">
                  Jumlah Tamu
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full rounded-lg border border-[var(--gold-light)]/30 bg-transparent px-4 py-2.5 font-[family-name:var(--font-lora)] text-sm outline-none transition-all focus:border-[var(--gold)]"
                >
                  <option value="1">1 Orang</option>
                  <option value="2">2 Orang</option>
                  <option value="3">3 Orang</option>
                  <option value="4">4 Orang</option>
                  <option value="5">5 Orang</option>
                </select>
              </div>

              <div>
                <label className="font-[family-name:var(--font-cormorant)] mb-2 block text-xs tracking-[0.15em] uppercase text-[var(--charcoal)]/50">
                  Ucapan & Doa
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-[var(--gold-light)]/30 bg-transparent px-4 py-2.5 font-[family-name:var(--font-lora)] text-sm outline-none transition-all focus:border-[var(--gold)]"
                  placeholder={`Ucapan & doa untuk ${groomName} & ${brideName}`}
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 font-[family-name:var(--font-cormorant)] text-sm tracking-[0.15em] uppercase text-white transition-all hover:bg-[var(--gold-dark)]"
              >
                <Send className="h-4 w-4" />
                Kirim
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
