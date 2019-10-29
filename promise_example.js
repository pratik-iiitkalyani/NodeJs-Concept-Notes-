function wait() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            try {
                const num = 6
                resolve(num)
            } catch (err) {
                reject(err)
            }
        }, 3000)
    })
}


async function execute() {
    try {
        console.log("1")
        const a = await wait();
        console.log(a)
        console.log("3")
    } catch (err) {
        console.log("error is:", err)
    }
}


execute();