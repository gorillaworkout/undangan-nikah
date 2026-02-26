"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Calendar, Shirt } from "lucide-react";

interface EventInfo {
  date: string;
  time: string;
  endTime: string;
  venue: string;
  address: string;
  mapsUrl: string;
  dressCode?: string;
}

function EventCard({
  title,
  event,
  index,
}: {
  title: string;
  event: EventInfo;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const formattedDate = new Date(event.date).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-[var(--gold-light)]/20 bg-white p-8 shadow-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--charcoal)] italic text-center">
        {title}
      </h3>

      <div className="ornament-divider my-6">
        <span className="text-[var(--gold)] text-xs">✦</span>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--gold)]" />
          <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--charcoal)]/80">
            {formattedDate}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--gold)]" />
          <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--charcoal)]/80">
            {event.time} - {event.endTime} WIB
          </p>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--gold)]" />
          <div>
            <p className="font-[family-name:var(--font-lora)] text-sm font-semibold text-[var(--charcoal)]">
              {event.venue}
            </p>
            <p className="font-[family-name:var(--font-lora)] mt-1 text-xs text-[var(--charcoal)]/60 leading-relaxed">
              {event.address}
            </p>
          </div>
        </div>

        {event.dressCode && (
          <div className="flex items-start gap-3">
            <Shirt className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--gold)]" />
            <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--charcoal)]/80">
              {event.dressCode}
            </p>
          </div>
        )}
      </div>

      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full rounded-full border border-[var(--gold-light)] py-2.5 text-center font-[family-name:var(--font-cormorant)] text-sm tracking-[0.15em] uppercase text-[var(--gold)] transition-all hover:bg-[var(--gold)] hover:text-white"
      >
        Lihat Lokasi
      </a>
    </motion.div>
  );
}

export default function EventSection({
  akad,
  resepsi,
}: {
  akad: EventInfo;
  resepsi: EventInfo;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 bg-[var(--warm-white)]">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-[var(--sage)]">
            Waktu & Tempat
          </p>
          <div className="ornament-divider mt-4">
            <span className="text-[var(--gold)] text-xs">✦</span>
          </div>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          <EventCard title="Akad Nikah" event={akad} index={0} />
          <EventCard title="Resepsi" event={resepsi} index={1} />
        </div>
      </div>
    </section>
  );
}
