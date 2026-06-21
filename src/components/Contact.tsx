"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import { DarkSurfaceCard } from "./ui/DarkSurfaceCard";
import { Pill } from "./ui/Pill";
import { TextReveal } from "./TextReveal";
import { useTilt } from "@/hooks/useTilt";

function GithubIcon({ size = 28, className }: { readonly size?: number; readonly className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 28, className }: { readonly size?: number; readonly className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "athillazaidanstudy@gmail.com",
    href: "mailto:athillazaidanstudy@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/athillazaidan",
    href: "https://github.com/athillazaidan",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/athillazaidan",
    href: "https://linkedin.com/in/athillazaidan",
  },
];

function ContactCard({
  link,
  index,
}: {
  readonly link: (typeof contactLinks)[number];
  readonly index: number;
}) {
  const reducedMotion = useReducedMotion();
  const { ref, tilt, handlers } = useTilt(8);
  const Icon = link.icon;

  const cardStyle = reducedMotion
    ? undefined
    : {
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        background: `radial-gradient(circle at ${tilt.spotlightX}% ${tilt.spotlightY}%, rgba(255,255,255,0.06) 0%, transparent 50%), #090909`,
      };

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex h-full"
    >
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full w-full"
      >
        <DarkSurfaceCard
          ref={ref as React.RefObject<HTMLDivElement>}
          {...handlers}
          className="flex flex-col items-center justify-center p-8 text-center w-full min-h-[180px] group"
          hover={false}
          style={cardStyle}
        >
          <motion.div
            className="text-white mb-3 shrink-0"
            whileHover={reducedMotion ? undefined : { scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Icon size={28} />
          </motion.div>
          <p className="text-[14px] font-medium text-[#a6a6a6] shrink-0">
            {link.label}
          </p>
          <motion.p
            className="mt-1 text-[16px] font-normal text-white break-all leading-tight"
            whileHover={reducedMotion ? undefined : { x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {link.value}
          </motion.p>
        </DarkSurfaceCard>
      </a>
    </motion.div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-black py-20 lg:py-32 overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,153,255,0.05)_0%,transparent_50%)]" />

      <div className="relative max-w-[900px] mx-auto px-6 sm:px-12 text-center">
        <div className="overflow-hidden mb-4">
          <TextReveal
            text="Let's build something"
            className="text-[40px] sm:text-[62px] lg:text-[85px] font-medium text-white leading-[0.95] tracking-[-0.04em]"
            stagger={0.02}
          />
        </div>
        <motion.p
          className="text-[18px] font-normal text-[#a6a6a6] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Got a project, idea, or opportunity? Reach out.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[800px] mx-auto items-stretch">
          {contactLinks.map((link, index) => (
            <ContactCard key={link.label} link={link} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="/Athilla%20Zaidan%20Zidna%20Fann_CV.pdf" download>
            <Pill variant="solid" size="md">Download CV</Pill>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
