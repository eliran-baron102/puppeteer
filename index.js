const puppeteer = require('puppeteer');
const credentials = require('./credentials');


(async () => {
const browser = await puppeteer.launch({
headless:false,
args: ['--window-setViewport=1920,1080']});
// browser open new window
const page= await browser.newPage()
// size of the browser
page.setViewport({height:1080,width:1920})
// browser port
await page.goto('https://www.instagram.com/')
// screenshot port
await page.screenshot({path:'google.png'})
await page.waitFor(() => document.querySelectorAll('input').length)
await page.type('[name=username]', credentials.username)
await page.type('[name=password]', credentials.password)
await page.evaluate(() => {
    // document.querySelector('.sqdOP').click()
    document.querySelector('.Igw0E').firstElementChild.click();
  })
  await page.waitFor(() => document.querySelector('[placeholder=Search]'));

  await page.evaluate(() => document.querySelector('[href="/accounts/activity/"]').click());

  await page.waitFor(() => document.querySelectorAll('[role=button] ._5f5mN').length);

  await page.evaluate(() => {
      const elements = document.querySelectorAll('[role=button] ._5f5mN');

      elements.forEach((element) => {
          if (element.innerText === 'Follow') {
              element.click();
          }
      });
  });
//   Igw0E     IwRSH      eGOV_         _4EzT

 

// how match time to wait util the close function
await page.waitFor(40000)
// close the browser
await browser.close()
})();
