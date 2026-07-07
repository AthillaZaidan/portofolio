import { SectionHead } from "./SectionHead";

export function ContactSection() {
  return (
    <section id="contact" className="grid min-h-screen grid-cols-12 gap-x-3 gap-y-10 bg-[#174fff] px-5 py-20 text-white md:px-[2.4vw] md:py-[9vw]">
      <div className="col-span-12 md:col-span-7">
        <SectionHead title="Contact" caption="Build something real" />
        <h3 className="max-w-5xl text-[13vw] font-medium leading-[.9] tracking-[-0.07em] md:text-[5.7vw]">
          For AI engineering and fullstack systems.
        </h3>
        <p className="mt-8 max-w-2xl text-xl leading-[1.55] tracking-[-0.025em] text-white/85 md:text-3xl">
          Reach me for technical collaboration, internships, or project conversations. Source, profile, and resume are one step away.
        </p>
      </div>
      <div className="col-span-12 flex flex-col justify-end gap-3 md:col-span-4 md:col-start-9">
        <ContactLink href="https://github.com/athillazaidan">GitHub</ContactLink>
        <ContactLink href="https://linkedin.com/in/athillazaidan">LinkedIn</ContactLink>
        <a className="rounded-full bg-[#111] px-5 py-4 text-center font-semibold text-white transition-transform hover:scale-[1.02]" href="/CV%20Athilla%20Zaidan%20Zidna%20Fann.pdf" download>
          Download CV
        </a>
      </div>
    </section>
  );
}

function ContactLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="rounded-full bg-white px-5 py-4 text-center font-semibold text-[#174fff] transition-transform hover:scale-[1.02]"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
