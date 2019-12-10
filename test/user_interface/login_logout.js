const assert = require("assert");
const puppeteer = require("puppeteer");
const mongoose = require("mongoose");
const user = require("../../model/user");

const stringConnect = "mongodb+srv://dropert:SXlUQZIM1vQfImm2@progweb-hnise.gcp.mongodb.net/cdp?retryWrites=true&w=majority";

function rdString(length) {
  let result = ""; const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const url_home = "https://cdp-ropert-dupland-tomas.000webhostapp.com/";

let browser;
let page;
const string = rdString((Math.random() * 8) + 1);

const test = async () => {

  const test_login = async () => {

    await page.waitFor("#connexion");
    await page.click("#connexion");

    await page.waitFor("body");

    await page.type("#login", "test");
    await page.type("#password", "test");

    await page.waitFor("#aut");
    const wait = page.waitForNavigation();
    await page.click("#aut");
    await wait;

    const url_nextPage = await page.url();

    assert(url_nextPage === url_home + "index.html");
    console.log("Test log in passed");

  };

  const test_logout = async () => {

    await page.waitFor("#deconnect");
    await page.click("#deconnect");

    console.log("Test deconnect passed");

  };

  browser = await puppeteer.launch({ headless: false, args: ["--no-sandbox"], slowMo: 1 });
  page = await browser.newPage();
  page.goto(url_home);
  await Promise.all([test_login(), test_logout()]);
  await browser.close();
};

test();
