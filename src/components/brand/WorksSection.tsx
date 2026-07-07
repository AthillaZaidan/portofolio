import Image from "next/image";
import { featuredProjects } from "./content";
import { SectionHead } from "./SectionHead";

export function WorksSection() {
  return (
    <section id="works" className="bg-[#151515] px-5 py-20 text-[#f4f1ea] md:px-[2.4vw] md:py-[9vw]">
      <SectionHead title="Works" caption="Selected projects" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <a
            className="group animate-[rise_.9s_cubic-bezier(.16,1,.3,1)_both] bg-[#202020] text-[#f4f1ea] transition-transform duration-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d8cff]"
            style={{ animationDelay: `${index * 80}ms` }}
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            key={project.id}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#2b2b2b]">
              {project.image ? (
                <Image
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <span className="absolute inset-0 grid place-items-center text-6xl font-semibold tracking-[-0.08em] text-[#6d8cff]">
                  {project.title.slice(0, 2)}
                </span>
              )}
            </div>
            <div className="p-5">
              <span className="font-mono text-xs text-[#9caeff]">{project.role}</span>
              <h3 className="mt-3 text-4xl font-semibold leading-none tracking-[-0.06em]">{project.title}</h3>
              <p className="mt-4 text-sm leading-[1.7] text-[#d7d1c5]">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <li className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-[#c8c0b2]" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
              {(project.metrics || project.badge) && (
                <strong className="mt-6 block text-sm font-medium text-white">
                  {(project.metrics || project.badge || "").replaceAll("—", "at")}
                </strong>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
