"use client";

import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Phone",
    href: "tel:+18016957966",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:kacecollege@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b5cf6] mb-3">
              Contact
            </p>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-white/60 leading-relaxed">
              Ready to book an appointment or have questions? Reach out directly by
              phone or email.
            </p>
          </motion.div>

          {/* Contact links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                variants={itemVariants}
                href={link.href}
                className="flex flex-col items-center gap-3 p-6 border border-white/10 hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/5 transition-all duration-300 group min-w-[140px]"
              >
                <span className="text-white/60 group-hover:text-[#8b5cf6] transition-colors duration-300">
                  {link.icon}
                </span>
                <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
