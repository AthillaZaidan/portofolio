const links = [
  { label: "GitHub", href: "https://github.com/AthillaZaidan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/athillazaidan" },
];

export function Intro() {
  return (
    <header id="top" className="column pt-[16svh] md:pt-[24svh]">
      <div className="max-w-[35rem] xl:grid xl:max-w-none xl:grid-cols-2 xl:grid-rows-[auto_auto_1fr] xl:gap-x-16">
        <h1
          data-reveal
          style={{ "--i": 0 } as React.CSSProperties}
          className="whitespace-nowrap text-display font-semibold tracking-[-0.035em] xl:col-span-2"
        >
          Athilla Zaidan
        </h1>
        <p
          data-reveal
          style={{ "--i": 1 } as React.CSSProperties}
          className="mt-6 text-lead font-medium xl:col-start-1 xl:row-start-2 xl:mt-10"
        >
          itb cs, class of 2028. fullstack by training, ml by obsession.
        </p>
        <div
          data-reveal
          style={{ "--i": 2 } as React.CSSProperties}
          className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 self-start text-body xl:col-start-1 xl:row-start-3"
        >
          <a
            className="rounded-[4px] bg-accent px-5 py-3 font-medium text-accent-ink transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            href="/CV%20Athilla%20Zaidan%20Zidna%20Fann.pdf"
            download
          >
            Download CV
          </a>
          {links.map((link) => (
            <a
              className="group underline decoration-muted underline-offset-[6px] transition-colors hover:decoration-ink"
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
              <span className="ml-1 inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          ))}
        </div>
        <div
          data-reveal
          style={{ "--i": 3 } as React.CSSProperties}
          className="mt-10 space-y-5 text-body xl:col-start-2 xl:row-span-2 xl:row-start-2 xl:mt-10"
        >
          <p>
            i build the boring infrastructure around models (evals, pipelines, judges) because that&rsquo;s where the
            interesting failures hide. right now i&rsquo;m benchmarking llms as an ai engineer intern, which mostly means
            finding creative ways for models to be wrong, then writing it down with error bars.
          </p>
          <p>
            i&rsquo;m drawn to anything with a lid on it. i&rsquo;ve pointed cameras at public transport and asked a model what
            went wrong, taught a classifier to tell fish apart (then taught a judge to tell me when the explanations were
            lying), read thousands of citizen complaints in indonesian so no one has to, and graded vegetables by how tired
            they look. i also write the unglamorous stuff: registration systems that survive real payments, a recommender, a
            strategy game with plugins.
          </p>
          <p>
            a few hackathon podiums so far, mostly from starting the next build before the last one cooled down. currently
            learning mlops, so the pipelines can finally run without me watching them.
          </p>
        </div>
      </div>
    </header>
  );
}
