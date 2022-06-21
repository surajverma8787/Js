const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay <= 4000)
                resolve('Your fake data ' + url);
            else
                reject('Connection TimeOut');
        }, delay);
    })
}
async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise('/page1');
        let data2 = await fakeRequestPromise('/page2');
    }
    catch (e) {
        console.log(e);
    }
}
makeTwoRequests();