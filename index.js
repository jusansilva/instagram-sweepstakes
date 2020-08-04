const puppeteer = require('puppeteer');

const start = async (url, order) => {

    const loadComents = async (page, selector) => {
        const buttonPlus = await page.$(selector);
        if (buttonPlus) {
            await buttonPlus.click();
            await page.waitFor(selector, { timeout: 3000 }).catch(() => console.log('timeout'));
            await loadComents(page, selector);
        }
    }

    const getComments = async (page, selector) => {
        const comments = await page.$$eval(selector, links => links.map(link => link.innerText))
        return comments;
    }


    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url);

    await loadComents(page, '.dCJp8');

    const comments = await getComments(page, '.C4VMK span a')

    await browser.close();

    return comments;
}

function count(comments) {
    let count = {};
    comments.forEach(el => {
        count[el] = (count[el] || 0) + 1
    });
    return count;
}

function sort(count, order) {
    const entries = Object.entries(count);
    const sorted = (order == 'asc') ? entries.sort((a, b) => a[1] - b[1]) : entries.sort((a, b) => b[1] - a[1]);
    return sorted
}


exports.sorte = async (url, order, type) => {
    const comments = await start(url, order);
    const commented = comments.filter(el => {
        if(el.indexOf(type) == -1){
            return el;
        }
        })
    const counter = await count(commented);
    const sorterd = await sort(counter, order);
    return sorterd;
}

const random = async (url, type) => {
    const comments = await start(url);
    const commented = comments.filter(el => {
        if(el.indexOf(type) != -1){
            return el;
        }
        })
    const rand = commented[Math.floor(Math.random() * commented.length)];
    return rand;
}
