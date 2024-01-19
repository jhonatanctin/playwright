// @ts-check
const { test, expect } = require('@playwright/test');
test('Automation exercise', async ({ page }) => {
  await page.goto('https://surveyrc.taxcreditco.com/automation-challenge');
  const newUsrData = {
    name:'jhonas',
    lastname:'martinez',
    email:'jhonas@mail.com',
    street:'fifthy avenue',
    city:'mexico city',
    zipcode:'04630'
  };
  await page.getByLabel('First Name').fill(newUsrData.name);
  await page.getByLabel('Last Name').fill(newUsrData.lastname);
  await page.getByLabel('Email Address').fill(newUsrData.email);
  await page.getByLabel('Street Address').fill(newUsrData.street);
  await page.getByLabel('City').fill(newUsrData.city);
  await page.getByLabel('Zip Code').fill(newUsrData.zipcode);
  await page.locator('.buttonStyle').filter({ hasText: 'Next'}).click();
  await expect(page.getByText('At this time, please answer Yes or No to the following questions:')).toBeVisible();
  for (let i = 0; i < 6; i++){
    await page.locator('.btn').filter({ hasText: 'No'}).nth(i).click();
  }
  await page.locator('.buttonStyle').filter({ hasText: 'Next'}).click();
  await expect( page.getByLabel('Please confirm your first and last name:')).toBeVisible();
  await expect(page.locator('.textbox-tcc')).toHaveValue(newUsrData.name+' '+newUsrData.lastname);
  await page.locator('input#SurveyControl_SurveySubmit').filter({ hasText: 'Submit form'}).click();
  expect(page.url().includes('https://www.experian.com/employer-services')).toBeTruthy();;
});

