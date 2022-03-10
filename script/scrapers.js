const puppeteer = require("puppeteer");







// const city = 'green+bay'
// const state = 'wi'

const city = 'de+pere'
const state = 'wi'


async function scrapeRestaurant(url) {
    const browser = await puppeteer.launch();
  const page = await browser.newPage();
    await page.goto(url);
    const restaurants = []

    for (let i = 9; i < 14; i++) {
       
        const [el] = await page.$x(`//*[@id="main-content"]/div/ul/li[${i}]/div/div/div/div[2]/div[1]/div[1]/div[1]/div/div/h3/span/a`);
        const nameSrc = await el.getProperty('textContent');
        const nameSrcText = await nameSrc.jsonValue();
        
        
        
        const [el2] = await page.$x(`//*[@id="main-content"]/div/ul/li[${i}]/div/div/div/div[1]/div/div/div/div/div/div[1]/div/a/img`);
        const imageSrc = await el2.getProperty('src');
        const imageSrcText = await imageSrc.jsonValue();
        
        const [el3] = await page.$x(`//*[@id="main-content"]/div/ul/li[${i}]/div/div/div/div[2]/div[1]/div[1]/div[3]/div/div/div/p/span[1]/a[1]/button/p`);
        const tagSrc = await el3.getProperty('textContent');
        const tagSrcText = await tagSrc.jsonValue();

        restaurants.push({
            name: nameSrcText,
            foodType: tagSrcText,
            imageUrl: imageSrcText,
            

        })


    }
    console.log(restaurants)
    




    
    // console.log({ srcText })
  await browser.close();
}

// scrapeRestaurant(
//     "https://www.amazon.com/BIG-Beef-Charbroil-Cheese-Count/dp/B07P93561S/ref=sr_1_1_sspa?crid=3NHOBR9IUBBAE&keywords=cheeseburger&qid=1646931165&sprefix=cheeseburber%2Caps%2C139&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQVlaQzg1NlRXTjZPJmVuY3J5cHRlZElkPUEwNTQ1Nzk1NFRORU4xVzJSNVlWJmVuY3J5cHRlZEFkSWQ9QTA1MTA5OTgyQ05XNVc2R0YzSTZWJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
//     );
scrapeRestaurant(
    `https://www.yelp.com/search?find_desc=restaurants&find_loc=${city}%2C+${state}`
);
    


    //this is the xpath to the first restaurant on the all restaurants list for any city
    //*[@id="main-content"]/div/ul/li[9]
    //this is the last index of a restaurant on a page
    //*[@id="main-content"]/div/ul/li[18] 

    
    //first title
    //*[@id="main-content"]/div/ul/li[9]/div/div/div/div[2]/div[1]/div[1]/div[1]/div/div/h3/span/a
    //*[@id="main-content"]/div/ul/li[10]/div/div/div/div[2]/div[1]/div[1]/div[1]/div/div/h3/span/a
    //*[@id="main-content"]/div/ul/li[14]/div/div/div/div[2]/div[1]/div[1]/div[1]/div/div/h3/span/a

    
    //image
//*[@id="main-content"]/div/ul/li[9]/div/div/div/div[1]/div/div/div/div/div/div[1]/div/a/img
//*[@id="main-content"]/div/ul/li[10]/div/div/div/div[1]/div/div/div/div/div/div[1]/div/a/img


//tags

//first result
//*[@id="main-content"]/div/ul/li[9]/div/div/div/div[2]/div[1]/div[1]/div[3]/div/div/div/p/span[1]/a[1]/button/p
//*[@id="main-content"]/div/ul/li[9]/div/div/div/div[2]/div[1]/div[1]/div[3]/div/div/div/p/span[1]/a[2]/button/p