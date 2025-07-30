import {expect} from '@wdio/globals'
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(
//             expect.stringContaining('You logged into a secure area!'))
//     })
// })

describe('APK App Test', () => {
  it('should open the app and validate UI elements', async () => {
    const appPackage = await driver.getCurrentPackage();
    console.log('Opened package:', appPackage);

    // Replace below with real selectors or test logic
    const el = await $('//android.widget.TextView[@text="Wireless Headphones"]');
    await el.click()
    // await expect(el).toBeDisplayed();
  });
});

