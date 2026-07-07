import Image from "next/image";
import { BrandReveal } from "./BrandReveal";
import { principles } from "./content";
import { SectionHead } from "./SectionHead";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-20 md:px-[2.4vw] md:py-[9vw]">
      <SectionHead title="About" caption="Profile" />
      <div className="grid grid-cols-12 gap-x-3 gap-y-10">
        <BrandReveal className="col-span-12 max-w-5xl md:col-span-7" slow>
          <h3 className="text-[clamp(3rem,12vw,5.25rem)] font-medium leading-[.93] tracking-[-0.045em] text-balance md:text-[5.6vw] md:leading-[.9] md:tracking-[-0.07em]">
            Proof-first systems, built to ship.
          </h3>
        </BrandReveal>
        <BrandReveal className="col-span-12 max-w-2xl md:col-span-4 md:col-start-9" delay={0.09}>
          <p className="text-lg leading-[1.6] tracking-[-0.02em] text-[#34312c] md:text-3xl md:leading-[1.55] md:tracking-[-0.025em]">
            I work where machine learning, web systems, and operational tooling meet. The throughline is practical evidence:
            measurable model performance, resilient admin flows, and interfaces that make technical decisions legible.
          </p>
        </BrandReveal>
      </div>
      <div className="mt-14 grid gap-3 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {principles.map((principle, index) => (
          <BrandReveal delay={index * 0.09} key={principle.title}>
            <article className="group relative min-h-[22rem] overflow-hidden bg-[#171717] text-[#f4f1ea] sm:min-h-[28rem]">
              <Image
                className="object-cover opacity-70 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-55"
                src={principle.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="font-mono text-xs text-white/70">{String(index + 1).padStart(2, "0")}</span>
                <h4 className="mt-8 text-3xl font-medium leading-[1] tracking-[-0.04em] md:leading-[.98] md:tracking-[-0.055em]">{principle.title}</h4>
                <p className="mt-4 text-sm leading-[1.6] text-white/78">{principle.text}</p>
              </div>
            </article>
          </BrandReveal>
        ))}
      </div>
    </section>
  );
}
