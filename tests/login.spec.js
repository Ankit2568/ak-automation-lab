const { test, expect } = require('@playwright/test');

test('Invalid password should fail', async ({ page }) => {
  await page.goto('http://localhost:3000/login.html');

  await page.fill('#email', 'test@test.com');
  await page.fill('#password', 'wrong');
  await page.click('button');

  page.on('dialog', dialog => {
    expect(dialog.message()).not.toBe("Login Success");
    dialog.dismiss();
  });
});
