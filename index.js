const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  path: "/wd/hub",
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9",
    deviceName: "HUAWEI Y6s",
    app: "C:/Users/shoon/Downloads/AYAPay_Sub_Test_140322_2_Old_BankLink.apk",
    appPackage: "com.ayaplus.subscriber.test",
    // appActivity: "com.ayaplus.subscriber.test/.MainActivity",
    automationName: "UiAutomator2",
  },
};

async function main() {
  const client = await wdio.remote(opts); //start appium session

  //   const field = await client.$("android.widget.EditText");
  //   await field.setValue("Hello World!");
  //   const value = await field.getText();
  //   assert.strictEqual(value, "Hello World!");

  await client.deleteSession();
}

main();
