"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-[#1A1A1A] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-syne)] text-lg font-semibold tracking-tight text-white hover:text-[#8b5cf6] transition-colors duration-300"
          >
            KB
          </a>

          {/* Copyright */}
          <p className="text-sm text-white/40">
            &copy; {currentYear} Kace Barthlome. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
