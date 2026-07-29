import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { achievements, type Achievement } from "@/data/achievements";
import { BrandReveal } from "./BrandReveal";
import { SectionHead } from "./SectionHead";

export function AchievementSection() {
  const [leadAchievement, ...supportingAchievements] = achievements;

  return (
    <section
      id="achievements"
      className="bg-[#f4f1ea] px-5 py-20 text-[#171717] md:px-[2.4vw] md:py-[9vw]"
    >
      <SectionHead title="Achievements" caption="Competition results" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:items-start">
        <BrandReveal className="md:col-span-7">
          <AchievementLink
            achievement={leadAchievement}
            className="group block bg-[#e3ded4]"
            mediaClassName=""
            imageClassName="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
            contentClassName="grid gap-6 p-5 sm:grid-cols-[1fr_auto] sm:items-end md:p-7"
            titleClassName="mt-3 text-[clamp(2.7rem,10vw,5rem)] font-semibold leading-[.9] tracking-[-0.055em] text-balance md:text-[5.3vw]"
          />
        </BrandReveal>

        <div className="space-y-5 md:col-span-5">
          {supportingAchievements.map((achievement, index) => (
            <BrandReveal
              delay={(index + 1) * 0.09}
              key={achievement.project}
            >
              <AchievementLink
                achievement={achievement}
                className="group grid bg-[#ebe6dc] sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                mediaClassName=""
                imageClassName="aspect-[16/10] h-full w-full object-cover transition duration-700 group-hover:scale-[1.035] group-focus-visible:scale-[1.035] sm:aspect-auto"
                contentClassName="flex min-h-64 flex-col justify-between p-5 md:min-h-[18rem] md:p-6"
                titleClassName="mt-3 text-[clamp(2.3rem,9vw,3.8rem)] font-semibold leading-[.92] tracking-[-0.05em] text-balance md:text-[3.6vw]"
              />
            </BrandReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementLink({
  achievement,
  className,
  mediaClassName,
  imageClassName,
  contentClassName,
  titleClassName,
}: {
  achievement: Achievement;
  className: string;
  mediaClassName: string;
  imageClassName: string;
  contentClassName: string;
  titleClassName: string;
}) {
  return (
    <a
      className={`${className} outline-none transition duration-300 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#174fff] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1ea]`}
      href={achievement.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${achievement.project} on GitHub`}
    >
      <div className={`overflow-hidden ${mediaClassName}`}>
        <Image
          className={imageClassName}
          src={achievement.image}
          alt={`${achievement.project} project interface`}
          width={achievement.imageWidth}
          height={achievement.imageHeight}
          sizes="(max-width: 768px) 100vw, 58vw"
        />
      </div>
      <div className={contentClassName}>
        <div>
          <p className="font-mono text-xs text-[#174fff]">
            {achievement.event}
            {!achievement.event.includes(achievement.year) &&
              `, ${achievement.year}`}
          </p>
          <h3 className={titleClassName}>{achievement.result}</h3>
        </div>
        <div className="max-w-md">
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg font-semibold">{achievement.project}</p>
            <ArrowUpRight
              className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1"
              aria-hidden="true"
              strokeWidth={1.8}
            />
          </div>
          <p className="mt-3 text-sm leading-[1.65] text-[#4d4a43]">
            {achievement.description}
          </p>
        </div>
      </div>
    </a>
  );
}
