"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { config } from "@/config/wedding";
import Cover from "@/components/Cover";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import CoupleSection from "@/components/CoupleSection";
import EventSection from "@/components/EventSection";
import CountdownSection from "@/components/CountdownSection";
import GallerySection from "@/components/GallerySection";
import GiftSection from "@/components/GiftSection";
import RSVPSection from "@/components/RSVPSection";
import FooterSection from "@/components/FooterSection";
import MusicPlayer from "@/components/MusicPlayer";
import Particles from "@/components/Particles";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("Tamu Undangan");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) setGuestName(decodeURIComponent(to));
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    // Scroll to top when opening
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {!isOpen && (
          <Cover
            key="cover"
            groomName={config.groom.name}
            brideName={config.bride.name}
            guestName={guestName}
            date={config.akad.date}
            onOpen={handleOpen}
          />
        )}
      </AnimatePresence>

      {isOpen && (
        <>
          <MusicPlayer src={config.music.src} />
          <Particles />

          <HeroSection
            groomName={config.groom.name}
            brideName={config.bride.name}
            date={config.akad.date}
          />

          <QuoteSection quotes={config.quotes} />

          <CoupleSection groom={config.groom} bride={config.bride} />

          <EventSection akad={config.akad} resepsi={config.resepsi} />

          <CountdownSection date={config.akad.date} />

          <GallerySection images={config.gallery} />

          <GiftSection gifts={config.gifts} />

          <RSVPSection
            groomName={config.groom.name}
            brideName={config.bride.name}
          />

          <FooterSection
            hashtag={config.hashtag}
            footerText={config.footerText}
          />
        </>
      )}
    </main>
  );
}
