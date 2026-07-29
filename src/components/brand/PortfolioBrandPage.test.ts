import { expect, test } from "bun:test";

test("places achievements immediately before contact", async () => {
  const source = await Bun.file(
    new URL("./PortfolioBrandPage.tsx", import.meta.url),
  ).text();

  expect(source).toContain("<AchievementSection />\n      <ContactSection />");
});
