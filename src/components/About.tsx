import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { Heading } from "./ui/Heading";
import { Pill } from "./ui/Pill";

export function About() {
  return (
    <section id="about" className="min-h-screen bg-black py-20 lg:py-32" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          <div>
            <AnimatedSection delay={0.1}>
              <Heading as="h2" size="section" className="mb-8" id="about-heading">
                Engineering intelligence at every layer
              </Heading>
            </AnimatedSection>

            <div className="space-y-6">
              {[
                "I'm Athilla Zaidan, a Computer Science sophomore at Institut Teknologi Bandung with a 3.94/4.00 GPA. I operate at the intersection of artificial intelligence and fullstack engineering — building systems that don't just predict, but perform.",
                "My work spans from anomaly detection frameworks achieving 0.846 AUC-ROC, to NLP pipelines processing thousands of citizen aspirations, to production fullstack platforms serving 10,000+ users. I don't silo myself into 'AI' or 'web dev' — I build end-to-end.",
                "Beyond the code, I actively contribute to various organizations and communities — from student-led tech initiatives to national-scale events. I believe engineering is most powerful when it creates tangible, positive impact for society.",
              ].map((text, i) => (
                <AnimatedItem key={i} delay={0.2 + i * 0.1}>
                  <p className="text-[16px] lg:text-[18px] font-normal text-white leading-[1.6]">
                    {text}
                  </p>
                </AnimatedItem>
              ))}
            </div>

            <AnimatedSection delay={0.5} className="mt-8">
              <a href="/Athilla%20Zaidan%20Zidna%20Fann_CV.pdf" download>
                <Pill variant="solid" size="md">Download CV</Pill>
              </a>
            </AnimatedSection>
          </div>

          <AnimatedItem direction="scale">
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.1)_0%,transparent_70%)] -z-10" />
              <div className="rounded-xl overflow-hidden shadow-[rgba(0,153,255,0.15)_0px_0px_0px_1px]">
                <img
                  src="/portrait.jpg"
                  alt="Athilla Zaidan — AI Engineer and Fullstack Developer"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}
