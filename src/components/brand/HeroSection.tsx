export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-5 pb-16 pt-28 md:px-[2.4vw] md:pb-[4.5vw] md:pt-[9vw]"
    >
      <div className="grid grid-cols-12 gap-x-3 gap-y-8">
        <p className="col-span-12 max-w-[18rem] animate-[rise_.9s_cubic-bezier(.16,1,.3,1)_both] text-xl font-medium leading-[1.5] tracking-[-0.03em] md:col-span-4 md:text-[1.45vw]">
          Athilla Zaidan Zidna Fann
        </p>
        <p className="col-span-12 max-w-[34rem] animate-[rise_.9s_cubic-bezier(.16,1,.3,1)_.12s_both] text-lg leading-[1.7] tracking-[-0.03em] text-[#2f2d28] md:col-span-5 md:col-start-6 md:text-[1.35vw]">
          Software and AI engineer from Institut Teknologi Bandung. I build intelligent systems from model design to production
          interfaces.
        </p>
      </div>
      <h1
        className="mt-16 text-[13.5vw] font-semibold uppercase leading-[.84] tracking-[-0.065em] text-[#111] md:mt-0 md:text-[10vw] md:tracking-[-0.075em]"
        aria-label="Engineering Intelligence"
      >
        <TitleLine>Engineering</TitleLine>
        <TitleLine className="text-right">Intelligence</TitleLine>
      </h1>
    </section>
  );
}

function TitleLine({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <b className="block animate-[titleUp_1.25s_cubic-bezier(.87,0,.13,1)_both] font-semibold">{children}</b>
    </span>
  );
}
