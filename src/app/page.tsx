import { Experience } from "@/components/Experience";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { RevealObserver } from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <main>
        <Intro />
        <Experience />
        <Projects />
      </main>
      <footer className="column mt-36 pb-12 text-small text-muted md:mt-48">
        <p className="max-w-[35rem]">
          Athilla Zaidan · Bandung, Indonesia ·{" "}
          <a className="underline underline-offset-4 hover:text-ink" href="#top">
            Back to top
          </a>
        </p>
      </footer>
      <RevealObserver />
    </>
  );
}
