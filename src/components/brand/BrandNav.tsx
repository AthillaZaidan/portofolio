import { navItems } from "./content";

export function BrandNav() {
  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 grid grid-cols-12 items-start gap-x-3 px-5 py-5 mix-blend-multiply md:px-[2.4vw] md:py-[2vw]"
      aria-label="Primary navigation"
    >
      <a
        href="#home"
        className="col-span-3 w-fit font-mono text-sm font-semibold tracking-[-0.04em] text-[#171717] md:col-span-2 md:text-lg"
        aria-label="Back to top"
      >
        AZ
      </a>
      <div className="col-span-9 flex flex-wrap justify-end gap-x-5 gap-y-1 font-mono text-xs text-[#555] md:col-span-10 md:gap-x-8 md:text-sm [&_a]:transition-colors hover:[&_a]:text-[#171717]">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
