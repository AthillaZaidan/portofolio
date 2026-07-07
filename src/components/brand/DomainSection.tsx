import { BrandReveal } from "./BrandReveal";
import { domains, topSkills } from "./content";
import { SectionHead } from "./SectionHead";

export function DomainSection() {
  return (
    <section id="domain" className="px-5 py-20 md:px-[2.4vw] md:py-[9vw]">
      <SectionHead title="Domain" caption="Engineering range" />
      <div className="border-t border-[#171717]">
        {domains.map((domain, index) => (
          <BrandReveal delay={index * 0.1} key={domain.title}>
            <article className="grid grid-cols-12 gap-x-3 gap-y-5 border-b border-[#171717] py-6">
              <span className="col-span-2 font-mono text-sm text-[#174fff]">{String(index + 1).padStart(2, "0")}</span>
              <div className="col-span-10 md:col-span-5">
                <h3 className="text-4xl font-semibold leading-none tracking-[-0.06em] md:text-[4.2vw]">{domain.title}</h3>
                <p className="mt-4 max-w-[38rem] text-base leading-[1.7] text-[#4d4a43] md:text-lg">{domain.text}</p>
              </div>
              <strong className="col-span-10 col-start-3 self-end text-lg font-medium tracking-[-0.03em] md:col-span-4 md:col-start-9 md:text-right">
                {domain.proof}
              </strong>
            </article>
          </BrandReveal>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2" aria-label="Technical skills">
        {topSkills.map((skill) => (
          <span className="rounded-full border border-[#d5cec0] bg-[#fffaf0] px-3 py-1.5 font-mono text-xs text-[#4d4a43]" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
