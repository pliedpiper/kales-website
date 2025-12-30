"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[#FAF9F7]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#E5E7EB] relative overflow-hidden">
              {/* Placeholder for headshot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F0EFED] flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#6B7280]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-[#6B7280] uppercase tracking-wider">
                    Photo coming soon
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#8b5cf6]/20 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b5cf6] mb-3">
              About
            </p>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-8">
              Crafting
              <br />
              Confidence
            </h2>

            <div className="space-y-6 text-[#6B7280] leading-relaxed">
              <p>
                As a licensed cosmetologist and barber since 2021, I bring passion and
                precision to every cut. My journey in the industry has been marked by
                dedication to mastering both classic techniques and trending styles.
              </p>
              <p>
                Recognized as an{" "}
                <span className="text-[#1A1A1A] font-medium">All Star MVP</span> at
                Sports Clips, I take pride in delivering cuts that not only look great
                but make my clients feel their best.
              </p>
            </div>

            {/* Stats/credentials */}
            <div className="mt-10 pt-10 border-t border-[#E5E7EB] grid grid-cols-2 gap-6">
              <div>
                <p className="font-[family-name:var(--font-syne)] text-3xl font-bold text-[#1A1A1A]">
                  2021
                </p>
                <p className="text-sm text-[#6B7280] mt-1">Licensed Since</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-syne)] text-3xl font-bold text-[#1A1A1A]">
                  CO
                </p>
                <p className="text-sm text-[#6B7280] mt-1">State Licensed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
