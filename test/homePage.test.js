const { describe, it, after, before } = require("mocha");
const Page = require("../lib/basePage");

const locator = require("../utils/locator");
const data = require("../utils/data");

const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

process.on("unhandledRejection", () => {});

(async function example() {
  try {
    describe("application_for_biometric_passport2 testing", async function() {
      this.timeout(50000);
      let driver, page;

      beforeEach(async () => {
        page = new Page();
        driver = page.driver;
        await page.visit(
          "https://forms.gov.il/globaldata/getsequence/getHtmlForm.aspx?formtype=biopassport@piba.gov.il"
        );
      });
      afterEach(async () => {
        await page.quit();
      });

      it("nextTab", async () => {
        const result = await driver.findElement({ id: "nextTab" }).then(
          function() {
            return this; //it was found
          },
          function(err) {
            throw "Unable to find";
          }
        );
      });

      it("Find Element By id", async () => {
        const nextButton = await driver.findElement({ id: "nextTab" });
        await nextButton.click();
        const result = await driver.findElement({ id: "BirthYearId" }).then(
          function() {
            return this; //it was found
          },
          function(err) {
            throw "Unable to find";
          }
        );
      });
      it("Try to put information", async () => {
        const nextButton = await driver.findElement({ id: locator.nextButton });
        await nextButton.click();

        // PART2
        const FamilyName = await driver.findElement({
          id: locator.FamilyNameId
        });
        await FamilyName.click();
        await FamilyName.sendKeys(data.FamilyName);

        const FirstName = await driver.findElement({ id: locator.FirstNameId });
        await FirstName.click();
        await FirstName.sendKeys(data.FirstName);

        const Zehout = await driver.findElement({ id: locator.ZehoutId });
        await Zehout.click();
        await Zehout.sendKeys(data.Zehout);

        const Citizen1Id = await driver.findElement({ id: locator.Citizen1Id });
        await Citizen1Id.click();

        const EmailAddress = await driver.findElement({
          id: locator.EmailAddressId
        });
        await EmailAddress.click();
        await EmailAddress.sendKeys(data.EmailAddress);

        const TelephoneNum = await driver.findElement({
          id: locator.TelephoneNumId
        });
        await TelephoneNum.click();
        await TelephoneNum.sendKeys(data.TelephoneNum);

        const BirthDay = await driver.findElement({ id: locator.BirthDayId });
        await BirthDay.click();
        await BirthDay.sendKeys(data.BirthDay);

        const BirthMonth = await driver.findElement({
          id: locator.BirthMonthId
        });
        await BirthMonth.click();
        await BirthMonth.sendKeys(data.BirthMonth);

        const BirthYear = await driver.findElement({ id: locator.BirthYearId });
        await BirthYear.click();
        await BirthYear.sendKeys(data.BirthYear);

        await driver.executeScript("arguments[0].click();", nextButton);
      });
    });
  } catch (ex) {
    console.log(new Error(ex.message));
  } finally {
  }
})();
