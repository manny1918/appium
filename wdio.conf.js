export const config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'], // or your spec location
  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'ci_pixel_9', // Update to match your emulator
    'appium:platformVersion': '16.0', // Update to match your AVD version
    'appium:app': './apps/amzn.apk', // ✅ Path to your APK
    'appium:automationName': 'UiAutomator2',
    'appium:autoGrantPermissions': true
  }],

  logLevel: 'info',
  bail: 0,
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: ['appium'],

  framework: 'mocha', // or 'cucumber' if using cucumber
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
