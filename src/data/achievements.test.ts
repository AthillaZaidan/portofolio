import { describe, expect, test } from "bun:test";
import { achievements } from "./achievements";
import { navItems } from "@/components/brand/content";

describe("achievements section content", () => {
  test("publishes the verified competition results", () => {
    expect(achievements).toEqual([
      expect.objectContaining({
        project: "SafeTrip",
        result: "National Winner",
        event: "Garuda Hacks 7.0",
        href: "https://github.com/AthillaZaidan/SafeTrip",
      }),
      expect.objectContaining({
        project: "Cognify",
        result: "4th of 241 teams",
        event: "Harvard HSIL Hackathon Indonesia",
      }),
      expect.objectContaining({
        project: "Vokara",
        result: "5th nationwide",
        event: "Hackfest 2026",
      }),
      expect.objectContaining({
        project: "Scresh",
        result: "Finalist",
        event: "Technoscape 2026",
      }),
    ]);
  });

  test("exposes the achievement section in primary navigation", () => {
    expect(navItems).toContainEqual({
      label: "Achievements",
      href: "#achievements",
    });
  });
});
