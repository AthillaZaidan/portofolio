"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

const withImages = projects.filter((project) => project.image);

export function Projects() {
  const [currentId, setCurrentId] = useState(projects[0]?.id);
  const [activeId, setActiveId] = useState<string | undefined>(withImages[0]?.id);
  const current = projects.find((project) => project.id === currentId);

  function show(id: string) {
    setCurrentId(id);
    setActiveId(withImages.some((project) => project.id === id) ? id : undefined);
  }

  // As the page scrolls, the last row whose top has passed a focus line becomes current. The line sits near the
  // middle of the screen and slides toward the bottom over the final stretch, so the last rows still get their turn.
  useEffect(() => {
    const rows = [...document.querySelectorAll<HTMLElement>("[data-project]")];
    let frame = 0;

    function update() {
      frame = 0;
      const view = window.innerHeight;
      const remaining = document.documentElement.scrollHeight - view - window.scrollY;
      const zone = view * 0.6;
      let line = view * 0.45;
      if (remaining < zone) line += (view * 0.95 - line) * (1 - Math.max(remaining, 0) / zone);

      let current = rows[0];
      for (const row of rows) {
        if (row.getBoundingClientRect().top <= line) current = row;
      }
      if (current) show(current.getAttribute("data-project")!);
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="projects" aria-labelledby="projects-title" className="column mt-36 md:mt-48">
      <div className="xl:flex xl:gap-16">
        <div className="max-w-[35rem] xl:w-[35rem] xl:shrink-0">
          <h2 id="projects-title" data-reveal className="text-head font-medium tracking-[-0.02em]">
            Projects that made it out alive
          </h2>
          <ul className="ledger mt-8">
            {projects.map((project, index) => (
              <li
                data-reveal
                data-project={project.id}
                style={{ "--i": index % 3 } as React.CSSProperties}
                key={project.id}
              >
                {project.image && index < 3 && (
                  <Image
                    className="mt-6 aspect-[16/10] w-full bg-surface object-cover object-top xl:hidden"
                    src={project.image}
                    alt={`${project.title} interface`}
                    width={1120}
                    height={700}
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                )}
                <a
                  className="row group block py-4 outline-offset-2 transition-colors duration-300"
                  data-current={project.id === currentId}
                  {...(project.repoUrl && { href: project.repoUrl, target: "_blank", rel: "noreferrer" })}
                  onMouseEnter={() => show(project.id)}
                  onFocus={() => show(project.id)}
                >
                  <span className="flex items-baseline justify-between gap-6 text-body">
                    <span className="font-medium">
                      {project.title}
                      {project.repoUrl && (
                        <span className="ml-1.5 inline-block text-muted opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100">
                          ↗
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 text-small text-muted tabular-nums">
                      {project.role} · {project.year}
                    </span>
                  </span>
                  <span className="mt-1 block text-body">{project.description}</span>
                  {project.result && (
                    <span className="row-result mt-1.5 block text-small font-medium text-accent">{project.result}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="sticky top-[24svh] hidden flex-1 self-start xl:block" aria-hidden="true">
          <div className="relative grid aspect-[16/10] w-full max-w-[34rem] place-items-center overflow-hidden bg-surface">
            <span
              className={`text-head font-medium tracking-[-0.02em] transition-opacity duration-700 ${
                activeId ? "opacity-0" : "opacity-100"
              }`}
            >
              {current?.title}
            </span>
            {withImages.map((project) => (
              <Image
                key={project.id}
                className={`absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-700 ease-out ${
                  project.id === activeId ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
                }`}
                src={project.image!}
                alt=""
                width={1088}
                height={680}
                sizes="34rem"
              />
            ))}
          </div>
          {current && (
            <p className="mt-3 text-small text-muted">
              {current.title}, {current.role.toLowerCase()} · {current.year}
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}
