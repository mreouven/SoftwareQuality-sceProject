/*
  ____   ____ _____ ____   ___ ____   ___  _ _ _____ _____ ____ _____ ___  _   _   _    _     ___ _______   __
 / ___| / ___| ____|___ \ / _ \___ \ / _ \| | |_   _| ____/ ___|_   _/ _ \| | | | / \  | |   |_ _|_   _\ \ / /
 \___ \| |   |  _|   __) | | | |__) | | | | | | | | |  _| \___ \ | || | | | | | |/ _ \ | |    | |  | |  \ V /
  ___) | |___| |___ / __/| |_| / __/| |_| |_|_| | | | |___ ___) || || |_| | |_| / ___ \| |___ | |  | |   | |
 |____/ \____|_____|_____|\___/_____|\___/(_|_) |_| |_____|____/ |_| \__\_\\___/_/   \_\_____|___| |_|   |_|
 */
const { describe, it, after, before } = require('mocha');
const Page = require('./lib/basePage');
const locator=require('./utils/locator')
const data=require('./utils/data');



const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
process.on('unhandledRejection', () => {});

(async function run() {
let driver, page;
page = new Page();
driver = page.driver;
await page.visit('https://forms.gov.il/globaldata/getsequence/getHtmlForm.aspx?formtype=biopassport@piba.gov.il');

const nextButton = await driver.findElement({id:locator.nextButton});
await nextButton.click();



// PART2
const FamilyName = await driver.findElement({id:locator.FamilyNameId});
await FamilyName.click();
await FamilyName.sendKeys(data.FamilyName);

const FirstName = await driver.findElement({id:locator.FirstNameId});
await FirstName.click();
await FirstName.sendKeys(data.FirstName);


const Zehout = await driver.findElement({id:locator.ZehoutId});
await Zehout.click();
await Zehout.sendKeys(data.Zehout);


const Citizen1Id = await driver.findElement({id:locator.Citizen1Id});
await Citizen1Id.click();

const EmailAddress = await driver.findElement({id:locator.EmailAddressId});
await EmailAddress.click();
await EmailAddress.sendKeys(data.EmailAddress);

const TelephoneNum = await driver.findElement({id:locator.TelephoneNumId});
await TelephoneNum.click();
await TelephoneNum.sendKeys(data.TelephoneNum);


const BirthDay = await driver.findElement({id:locator.BirthDayId});
await BirthDay.click();
await BirthDay.sendKeys(data.BirthDay);



const BirthMonth = await driver.findElement({id:locator.BirthMonthId});
await BirthMonth.click();
await BirthMonth.sendKeys(data.BirthMonth);

const BirthYear = await driver.findElement({id:locator.BirthYearId});
await BirthYear.click();
await BirthYear.sendKeys(data.BirthYear);

await driver.executeScript("arguments[0].click();",nextButton)




// PART3












})();