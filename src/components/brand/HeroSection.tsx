"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [introReady, setIntroReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroReady(true), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pb-16 pt-28 md:px-[2.4vw] md:pb-[4.5vw] md:pt-[9vw]"
    >
      <div className="grid grid-cols-12 gap-x-3 gap-y-8">
        <div className="col-span-12 max-w-[34rem] overflow-hidden py-2 md:col-span-10 md:col-start-1">
          <p
            className={`text-lg leading-[1.7] tracking-[-0.03em] text-[#2f2d28] transition-transform duration-1000 ease-[cubic-bezier(.87,0,.13,1)] md:text-[1.35vw] ${
              introReady ? "translate-y-0" : "translate-y-[115%]"
            }`}
          >
            Athilla Zaidan, AI @GDP Labs
          </p>
        </div>
        <div className="col-span-12 max-w-[34rem] overflow-hidden py-2 md:col-span-5 md:col-start-6">
          <p
            className={`text-lg leading-[1.7] tracking-[-0.03em] text-[#2f2d28] transition-transform duration-1000 ease-[cubic-bezier(.87,0,.13,1)] md:text-[1.35vw] ${
              introReady ? "translate-y-0" : "translate-y-[115%]"
            }`}
          >
            Software and AI engineer from Institut Teknologi Bandung. I build intelligent systems from model design to production
            interfaces.
          </p>
        </div>
      </div>
      <h1
        className="absolute bottom-12 left-5 right-5 text-[11.8vw] font-semibold uppercase leading-[.82] tracking-[-0.055em] text-[#111] md:bottom-[3vw] md:left-[2.4vw] md:right-[2.4vw] md:text-[10vw] md:tracking-[-0.075em]"
        aria-label="Engineering Intelligence"
      >
        <TitleLine shown={introReady}>Engineering</TitleLine>
        <TitleLine className="text-right" shown={introReady}>Intelligence</TitleLine>
      </h1>
    </section>
  );
}

function TitleLine({ children, className = "", shown }: { children: React.ReactNode; className?: string; shown: boolean }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <b
        className={`block font-semibold transition-transform duration-[1250ms] ease-[cubic-bezier(.87,0,.13,1)] ${
          shown ? "translate-y-0" : "translate-y-[115%]"
        }`}
      >
        {children}
      </b>
    </span>
  );
}
