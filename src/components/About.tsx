"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[#FAF9F7]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Headshot image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#E5E7EB] relative overflow-hidden">
              <Image
                src="/gallery/headshot.png"
                alt="Kace Barthlome - Licensed Cosmetologist and Barber"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
                precision to every cut, blending fresh techniques with a strong
                foundation in both women&apos;s hair and men&apos;s barbering.
              </p>
              <p>
                During 2 1/2 years at{" "}
                <span className="text-[#1A1A1A] font-medium">Sports Clips</span>, I
                earned the Heart of a Champion award in my first year and exceeded
                performance goals in both Utah and Idaho.
              </p>
              <p>
                I currently hold an active Colorado cosmetology license and focus on
                helping every client leave with a look that feels current, confident,
                and tailored to them.
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
