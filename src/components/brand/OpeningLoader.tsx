"use client";

import { useEffect, useState } from "react";

export function OpeningLoader() {
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setLeaving(true), 700);
    const doneTimer = window.setTimeout(() => setDone(true), 1900);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] grid place-items-center bg-black transition-transform duration-[1200ms] ease-[cubic-bezier(.87,0,.13,1)] ${
        leaving ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-hidden="true"
    >
      <div
        className={`text-center text-white transition-opacity duration-700 ${leaving ? "opacity-0" : "opacity-100"}`}
      >
        <p className="font-sans text-4xl italic leading-none tracking-[-0.1em]">AZ</p>
        <p className="mt-2 text-[9px] uppercase tracking-[0.35em]">portfolio</p>
      </div>
    </div>
  );
}
