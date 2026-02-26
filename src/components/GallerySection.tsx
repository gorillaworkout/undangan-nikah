"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function GallerySection({
  images,
}: {
  images: GalleryImage[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );

  // Masonry-like heights
  const heights = ["aspect-square", "aspect-[3/4]", "aspect-square", "aspect-[4/3]", "aspect-[3/4]", "aspect-square"];

  return (
    <>
      <section ref={ref} className="relative py-24 bg-[var(--warm-white)]">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-[var(--sage)]">
              Moment Bahagia
            </p>
            <div className="ornament-divider mt-4">
              <span className="text-[var(--gold)] text-xs">✦</span>
            </div>
          </motion.div>

          <div className="columns-2 sm:columns-3 gap-3 sm:gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`gallery-item mb-3 sm:mb-4 cursor-pointer overflow-hidden rounded-lg ${heights[index % heights.length]}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-full w-full bg-gradient-to-br from-[var(--cream)] via-[var(--cream-dark)] to-[var(--cream)] flex items-center justify-center relative overflow-hidden group">
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-center">
                    <p className="font-[family-name:var(--font-playfair)] text-4xl text-[var(--gold-light)]/30 italic">
                      {index + 1}
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-xs text-[var(--gold-light)]/50 mt-1">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <motion.div
              key={lightboxIndex}
              className="max-w-3xl max-h-[80vh] mx-16 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-96 h-96 bg-gradient-to-br from-[var(--cream)] to-[var(--cream-dark)] rounded-lg flex items-center justify-center">
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[var(--gold-light)]">
                  {images[lightboxIndex].alt}
                </p>
              </div>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white/60 hover:text-white transition-colors"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <div className="absolute bottom-6 text-white/40 font-[family-name:var(--font-cormorant)] text-sm tracking-wider">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
