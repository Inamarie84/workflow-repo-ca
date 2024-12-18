import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to venue details from home page", async ({ page }) => {
    await page.goto("/");

    await page.waitForSelector("#venue-container a");

    await page.locator("#venue-container a").first().click();

    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
