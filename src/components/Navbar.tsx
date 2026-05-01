"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function PillLink({
  label,
  href,
  isActive,
  onClick,
}: {
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-[36px] px-[18px] rounded-full bg-white text-black font-semibold text-[14px] uppercase tracking-[0.2px] overflow-hidden cursor-pointer"
    >
      {/* expanding circle from below */}
      <motion.div
        className="absolute left-1/2 bottom-0 rounded-full bg-black z-[1] pointer-events-none"
        initial={{ width: 0, height: 0, x: "-50%", y: 0 }}
        animate={
          isHovered
            ? { width: 120, height: 120, x: "-50%", y: 20 }
            : { width: 0, height: 0, x: "-50%", y: 0 }
        }
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* label stack */}
      <span className="relative inline-block z-[2] h-full leading-[36px]">
        <motion.span
          className="block"
          animate={isHovered ? { y: -40, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {label}
        </motion.span>
        <motion.span
          className="absolute left-0 top-0 block text-white"
          initial={{ y: 40, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {label}
        </motion.span>
      </span>

      {/* active dot */}
      {isActive && (
        <motion.span
          layoutId="pillActive"
          className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-[12px] h-[12px] rounded-full bg-[#0099ff] z-[4]"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </button>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-[3px]"
        >
          {/* logo pill */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-[42px] h-[42px] rounded-full bg-black flex items-center justify-center text-white text-[13px] font-semibold cursor-pointer hover:scale-105 transition-transform"
          >
            AZ
          </button>

          {/* nav pills - desktop */}
          <div className="hidden md:flex items-center h-[42px] bg-black rounded-full p-[3px] gap-[3px]">
            {navLinks.map((link) => (
              <PillLink
                key={link.href}
                label={link.label}
                href={link.href}
                isActive={activeSection === link.href}
                onClick={() => scrollTo(link.href)}
              />
            ))}
          </div>

          {/* mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-[42px] h-[42px] rounded-full bg-black flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={18} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "top center" }}
            className="fixed top-[60px] left-4 right-4 z-[60] bg-black rounded-[27px] p-[3px] md:hidden"
          >
            <div className="flex flex-col gap-[3px]">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 rounded-full bg-white text-black font-medium text-[16px] hover:bg-[#0099ff] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
