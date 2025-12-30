"use client";

import { motion } from "framer-motion";

const services = [
  {
    category: "Trending Haircuts",
    items: [
      "Euro Hawks",
      "Low Taper Fades with Textured Fringe",
      "Custom Consultations",
    ],
  },
  {
    category: "Additional Services",
    items: ["Waxing", "Hair Coloring"],
  },
  {
    category: "Product Certifications",
    items: ["Gibs", "Sexy Hair", "Paul Mitchell Tea Tree", "Mitch", "STMT"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 max-w-xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#8b5cf6] mb-3">
            Services
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">
            What I Offer
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            From classic cuts to the latest trends, I specialize in creating
            looks that match your style and personality.
          </p>
        </motion.div>

        {/* Services list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {services.map((service) => (
            <motion.div key={service.category} variants={itemVariants}>
              <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-[#1A1A1A] mb-6 pb-4 border-b border-[#E5E7EB]">
                {service.category}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[#6B7280]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-[#E5E7EB] text-center"
        >
          <p className="text-[#6B7280] mb-6">
            Ready for a fresh look? Let&apos;s make it happen.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#8b5cf6] hover:text-[#7c3aed] font-medium transition-colors duration-300 group"
          >
            Get in touch
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
