import { Download } from "lucide-react";
import { BrandReveal } from "./BrandReveal";
import { SectionHead } from "./SectionHead";

export function ContactSection() {
  return (
    <section id="contact" className="grid min-h-screen grid-cols-12 gap-x-3 gap-y-10 bg-[#d8d6d0] px-5 py-20 text-[#171717] md:px-[2.4vw] md:py-[9vw]">
      <div className="col-span-12 md:col-span-7">
        <SectionHead title="Contact" caption="Build something real" />
        <BrandReveal className="max-w-5xl" slow>
          <h3 className="text-[13vw] font-medium leading-[.9] tracking-[-0.07em] md:text-[5.7vw]">
            For AI engineering and fullstack systems.
          </h3>
        </BrandReveal>
        <BrandReveal className="mt-8 max-w-2xl" delay={0.09}>
          <p className="text-xl leading-[1.55] tracking-[-0.025em] text-[#3b3832] md:text-3xl">
            Reach me for technical collaboration, internships, or project conversations. Source, profile, and resume are one step away.
          </p>
        </BrandReveal>
      </div>
      <BrandReveal className="col-span-12 self-end md:col-span-4 md:col-start-9" contentClassName="flex flex-col gap-4" delay={0.18}>
        <ContactLink href="https://github.com/athillazaidan" iconUrl="https://cdn.simpleicons.org/github/171717">
          GitHub
        </ContactLink>
        <ContactLink href="https://linkedin.com/in/athillazaidan" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg">
          LinkedIn
        </ContactLink>
        <a className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#171717] px-6 py-5 text-center text-lg font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_18px_40px_rgba(0,0,0,.16)] transition duration-300 hover:-translate-y-1 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]" href="/CV%20Athilla%20Zaidan%20Zidna%20Fann.pdf" download>
          <span className="absolute inset-x-6 top-0 h-px bg-white/35" aria-hidden="true" />
          <Download className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
          Download CV
        </a>
      </BrandReveal>
    </section>
  );
}

function ContactLink({ href, iconUrl, children }: { href: string; iconUrl: string; children: React.ReactNode }) {
  return (
    <a
      className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#c7c2b8] bg-[#f4f1ea] px-6 py-5 text-center text-lg font-semibold text-[#171717] shadow-[inset_0_1px_0_rgba(255,255,255,.8),0_18px_40px_rgba(0,0,0,.08)] transition duration-300 hover:-translate-y-1 hover:border-[#171717] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="absolute inset-x-6 top-0 h-px bg-white" aria-hidden="true" />
      <img className="h-5 w-5 object-contain" src={iconUrl} alt="" width="20" height="20" />
      {children}
    </a>
  );
}
