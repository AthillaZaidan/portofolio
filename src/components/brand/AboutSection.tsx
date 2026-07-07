import { principles } from "./content";
import { SectionHead } from "./SectionHead";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-20 md:px-[2.4vw] md:py-[9vw]">
      <SectionHead title="About" caption="Profile" />
      <div className="grid grid-cols-12 gap-x-3 gap-y-10">
        <p className="col-span-12 max-w-[78rem] animate-[rise_.9s_cubic-bezier(.16,1,.3,1)_both] text-[9vw] font-medium leading-[.94] tracking-[-0.07em] md:col-span-10 md:text-[6.6vw]">
          I work where machine learning, web systems, and operational tooling meet. The throughline is practical evidence:
          measurable model performance, admin flows that survive real users, and interfaces that make technical decisions legible.
        </p>
      </div>
      <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle, index) => (
          <article
            className="min-h-52 animate-[rise_.9s_cubic-bezier(.16,1,.3,1)_both] border border-[#d8d2c6] bg-[#ebe6dc] p-5"
            style={{ animationDelay: `${index * 90}ms` }}
            key={principle}
          >
            <span className="font-mono text-xs text-[#174fff]">{String(index + 1).padStart(2, "0")}</span>
            <p className="mt-12 text-2xl font-medium leading-[1.05] tracking-[-0.05em]">{principle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
