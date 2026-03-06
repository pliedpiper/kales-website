"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { galleryImages } from "@/lib/galleryData";

const rotations = [-2.5, 1.8, -1.2, 2.4, -1.8, 1.5, -2.1];
const offsets = [
  { x: 0, y: 0 },
  { x: 8, y: -6 },
  { x: -4, y: 4 },
  { x: 6, y: -8 },
  { x: -8, y: 2 },
  { x: 4, y: -4 },
  { x: -6, y: 6 },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxSlides = galleryImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.title,
  }));

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#8b5cf6] mb-3">
            Portfolio
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Recent Work
          </h2>
        </motion.div>

        {/* Polaroid gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 py-4">
          {galleryImages.map((image, i) => (
            <motion.button
              key={image.src}
              type="button"
              initial={{ opacity: 0, y: 50, rotate: rotations[i] * 2 }}
              whileInView={{
                opacity: 1,
                y: offsets[i].y,
                x: offsets[i].x,
                rotate: rotations[i],
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                y: -12,
                zIndex: 10,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
              className="relative cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-4"
              onClick={() => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
              aria-label={`Open gallery image: ${image.title}`}
              style={{ zIndex: i }}
            >
              <div
                className="bg-white rounded-sm p-2.5 pb-12 md:p-3 md:pb-14"
                style={{
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.06), 0 8px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F0EFED]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    priority={i === 0}
                  />
                </div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                  <p className="text-xs md:text-sm text-[#1A1A1A]/70 truncate">
                    {image.title}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
        plugins={[Captions]}
        captions={{ descriptionTextAlign: "center" }}
        styles={{
          container: { backgroundColor: "rgba(26, 26, 26, 0.95)" },
        }}
        carousel={{ finite: true }}
        animation={{ fade: 300 }}
      />
    </section>
  );
}
