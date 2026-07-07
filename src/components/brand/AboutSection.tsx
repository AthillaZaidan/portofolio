import { BrandReveal } from "./BrandReveal";
import { principles } from "./content";
import { SectionHead } from "./SectionHead";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-20 md:px-[2.4vw] md:py-[9vw]">
      <SectionHead title="About" caption="Profile" />
      <div className="grid grid-cols-12 gap-x-3 gap-y-10">
        <BrandReveal className="col-span-12 max-w-5xl md:col-span-7" slow>
          <h3 className="text-[13vw] font-medium leading-[.9] tracking-[-0.07em] md:text-[5.6vw]">
            Engineering useful intelligence.
          </h3>
        </BrandReveal>
        <BrandReveal className="col-span-12 max-w-2xl md:col-span-4 md:col-start-9" delay={0.09}>
          <p className="text-xl leading-[1.55] tracking-[-0.025em] text-[#34312c] md:text-3xl">
            I work where machine learning, web systems, and operational tooling meet. The throughline is practical evidence:
            measurable model performance, resilient admin flows, and interfaces that make technical decisions legible.
          </p>
        </BrandReveal>
      </div>
      <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle, index) => (
          <BrandReveal delay={index * 0.09} key={principle}>
            <article className="min-h-52 border border-[#d8d2c6] bg-[#ebe6dc] p-5">
              <span className="font-mono text-xs text-[#174fff]">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-12 text-2xl font-medium leading-[1.05] tracking-[-0.05em]">{principle}</p>
            </article>
          </BrandReveal>
        ))}
      </div>
    </section>
  );
}
