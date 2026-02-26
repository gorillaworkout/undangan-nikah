"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function GallerySection({ images }: { images: GalleryImage[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 bg-[var(--warm-white)]">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-[var(--sage)]">
            Galeri
          </p>
          <div className="ornament-divider mt-4">
            <span className="text-[var(--gold)] text-xs">✦</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item aspect-square overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full w-full bg-gradient-to-br from-[var(--cream)] to-[var(--cream-dark)] flex items-center justify-center">
                <p className="font-[family-name:var(--font-cormorant)] text-sm text-[var(--gold-light)]">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
