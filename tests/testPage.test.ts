import "@testing-library/jest-dom/extend-expect";
import { expect } from "@playwright/test"
import { matchers } from "expect-playwright"
expect.extend(matchers)

import { chromium } from "playwright";
describe('Test Page', () => {
    test('Open test-page', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();        
        await page.goto('http://wpgame.test/test/')        
        await expect(page).toMatchText('.entry-content h5','Привет!');       
        
    })
})