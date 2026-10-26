import { experienceEntries } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="column mt-36 md:mt-48">
      <div className="max-w-[35rem] xl:max-w-none">
        <h2 id="experience-title" data-reveal className="text-head font-medium tracking-[-0.02em]">
          Work experience
        </h2>
        <ol className="mt-10 space-y-9">
          {experienceEntries.map((entry, index) => (
            <li
              className="xl:grid xl:grid-cols-2 xl:gap-x-16"
              data-reveal
              style={{ "--i": index % 3 } as React.CSSProperties}
              key={`${entry.company}-${entry.role}`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 xl:flex-col xl:items-start xl:justify-start">
                <h3 className="text-body font-medium">
                  {entry.role}
                  <span className="text-muted">, {entry.company}</span>
                </h3>
                <p className="shrink-0 text-small text-muted tabular-nums">{entry.dateRange}</p>
              </div>
              <ul className="mt-2 space-y-3 text-body xl:mt-0">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
