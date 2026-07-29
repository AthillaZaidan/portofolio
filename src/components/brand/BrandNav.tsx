import { navItems } from "./content";

export function BrandNav() {
  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 grid grid-cols-12 items-start gap-x-3 px-5 py-5 mix-blend-multiply md:px-[2.4vw] md:py-[2vw]"
      aria-label="Primary navigation"
    >
      <a
        href="#home"
        className="col-span-2 w-fit font-mono text-sm font-semibold tracking-[-0.03em] text-[#171717] md:text-lg md:tracking-[-0.04em]"
        aria-label="Back to top"
      >
        AZ
      </a>
      <div className="col-span-10 flex flex-wrap justify-end gap-x-3 gap-y-1.5 font-mono text-[0.72rem] leading-none text-[#555] sm:gap-x-5 sm:text-xs md:flex-nowrap md:gap-x-6 md:text-sm lg:gap-x-8 [&_a]:min-h-5 [&_a]:transition-colors hover:[&_a]:text-[#171717]">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
