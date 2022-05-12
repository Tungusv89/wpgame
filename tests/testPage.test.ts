import "@testing-library/jest-dom/extend-expect";

import { chromium } from "playwright";
describe('Test Page', () => {
    test('Open test-page', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();        
        // await page.goto('http://wpgame.test/test/')
        // const title = page.locator('div.entry-conten',{ has: page.locator('h5') });
        // await expect(title).toMatchText("Привет!");
        
        await page.goto('https://playwright.dev/');
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
        
    })
})