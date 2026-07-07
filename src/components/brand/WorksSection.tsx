import Image from "next/image";
import { Project } from "@/types";
import { BrandReveal } from "./BrandReveal";
import { featuredProjects } from "./content";
import { SectionHead } from "./SectionHead";

const filters = ["All", "AI", "Fullstack", "Systems", "Tools"];
const aspectRatios = ["aspect-[16/9]", "aspect-[4/3]", "aspect-[5/4]", "aspect-[1/1]", "aspect-[6/5]"];

export function WorksSection() {
  return (
    <section id="works" className="bg-[#f7f6f2] px-5 py-20 text-[#171717] md:px-[2.4vw] md:py-[9vw]">
      <SectionHead title="Works" caption="Selected projects" />
      <WorkFilters />
      <div className="mt-12 columns-1 gap-5 sm:columns-2 xl:columns-3">
        {featuredProjects.map((project, index) => (
          <BrandReveal className="mb-5 break-inside-avoid" delay={Math.min(index * 0.06, 0.3)} key={project.id}>
            <WorkCard project={project} index={index} />
          </BrandReveal>
        ))}
      </div>
    </section>
  );
}

function WorkFilters() {
  return (
    <nav className="flex flex-wrap gap-x-12 gap-y-4 border-b border-[#171717]/15 pb-3 md:gap-x-20" aria-label="Project categories">
      {filters.map((filter, index) => (
        <span
          className={`text-xl font-semibold uppercase tracking-[0.12em] md:text-2xl ${
            index === 0 ? "border-b border-[#171717] text-[#171717]" : "text-[#77736b]"
          }`}
          key={filter}
        >
          {filter}
        </span>
      ))}
    </nav>
  );
}

function WorkCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      className="group relative block overflow-hidden bg-[#e7e3da] text-[#171717] outline-none transition duration-500 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#174fff]"
      href={project.repoUrl}
      target="_blank"
      rel="noreferrer"
    >
      <div className={`relative ${aspectRatios[index % aspectRatios.length]} max-h-[420px] overflow-hidden`}>
        {project.image ? (
          <Image
            className="object-cover transition duration-700 group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center bg-[#111] text-[18vw] font-semibold uppercase leading-none tracking-[-0.08em] text-[#f4f1ea] md:text-[8vw]">
            {project.title.slice(0, 2)}
          </span>
        )}
        <div className="absolute inset-0 flex translate-y-4 flex-col justify-end bg-[#f7f6f2]/92 p-5 opacity-0 backdrop-blur-sm transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <span className="text-sm uppercase tracking-[0.16em] text-[#6b665d]">{project.role}</span>
          <h3 className="mt-2 text-4xl font-semibold leading-none tracking-[-0.05em]">{project.title}</h3>
          <p className="mt-4 max-w-[34rem] text-sm leading-[1.65] text-[#38352f]">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <li className="rounded-full border border-[#171717]/15 bg-white/55 px-2.5 py-1 text-xs text-[#25231f]" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
          {(project.metrics || project.badge) && (
            <strong className="mt-5 text-sm font-semibold text-[#174fff]">
              {(project.metrics || project.badge || "").replaceAll("—", "at")}
            </strong>
          )}
        </div>
      </div>
    </a>
  );
}
