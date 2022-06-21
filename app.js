const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.6)
                resolve('Your fake data ' + url);
            else
                reject('Rejected State');
        }, 1000);
    })
}
fakeRequestPromise('/dogs/1')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })