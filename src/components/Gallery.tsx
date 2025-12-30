"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { galleryImages } from "@/lib/galleryData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

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

        {/* Gallery grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              variants={itemVariants}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            >
              <div
                className={`relative w-full ${
                  index === 0 ? "aspect-square md:aspect-[4/3]" : "aspect-square"
                } bg-[#F0EFED]`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading={index < 4 ? "eager" : "lazy"}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/30 transition-all duration-500" />

                {/* Title on hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm md:text-base font-medium">
                    {image.title}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-3 right-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full text-white"
                  >
                    <path
                      d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
