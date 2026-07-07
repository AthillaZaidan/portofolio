export function SectionHead({ title, caption }: { title: string; caption: string }) {
  return (
    <header className="mb-12 overflow-hidden md:mb-[5vw]">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-current/55 before:h-px before:w-8 before:bg-current/35">
        {caption}
      </p>
      <h2 className="animate-[titleUp_1s_cubic-bezier(.87,0,.13,1)] text-[18vw] font-semibold uppercase leading-[.86] tracking-[-0.08em] md:text-[10.5vw]">
        {title}
      </h2>
    </header>
  );
}
