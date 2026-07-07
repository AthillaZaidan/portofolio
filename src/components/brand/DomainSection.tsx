import { BrandReveal } from "./BrandReveal";
import { domains, topSkills } from "./content";
import { SectionHead } from "./SectionHead";
import { TechStackCarousel } from "./TechStackCarousel";

export function DomainSection() {
  return (
    <section id="domain" className="px-5 py-20 md:px-[2.4vw] md:py-[9vw]">
      <SectionHead title="Domain" caption="Engineering range" />
      <div className="border-t border-[#171717]">
        {domains.map((domain, index) => (
          <BrandReveal delay={index * 0.1} key={domain.title}>
            <article className="grid grid-cols-12 gap-x-3 gap-y-5 border-b border-[#171717] py-6 md:py-8">
              <span className="col-span-2 font-mono text-sm text-[#174fff]">{String(index + 1).padStart(2, "0")}</span>
              <div className="col-span-10 md:col-span-5">
                <h3 className="text-[clamp(2.15rem,9.5vw,3.25rem)] font-semibold leading-[.96] tracking-[-0.045em] text-balance md:text-[4.2vw] md:leading-none md:tracking-[-0.06em]">{domain.title}</h3>
                <p className="mt-4 max-w-[38rem] text-base leading-[1.7] text-[#4d4a43] md:text-lg">{domain.text}</p>
              </div>
              <strong className="col-span-10 col-start-3 self-end text-base font-medium leading-snug tracking-[-0.02em] md:col-span-4 md:col-start-9 md:text-right md:text-lg md:tracking-[-0.03em]">
                {domain.proof}
              </strong>
            </article>
          </BrandReveal>
        ))}
      </div>
      <TechStackCarousel skills={topSkills} />
    </section>
  );
}
