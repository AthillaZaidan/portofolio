"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const About = dynamic(() => import("@/components/About").then((m) => ({ default: m.About })), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills").then((m) => ({ default: m.Skills })), { ssr: false });
const ProjectCarousel = dynamic(() => import("@/components/ProjectCarousel").then((m) => ({ default: m.ProjectCarousel })), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience").then((m) => ({ default: m.Experience })), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact").then((m) => ({ default: m.Contact })), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer").then((m) => ({ default: m.Footer })), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectCarousel />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}