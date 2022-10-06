const fs = require("fs")
const path = require("path")
if (!fs.existsSync('Logs')) {
    fs.mkdir('Logs', err => {
        process.chdir('./Logs')
        for (i = 0; i < 11; i++) {
            fs.appendFile(`log${i}`, `Log ${i} text file`, function (err) {
                if (err) throw err;
            });
            const filename = path.basename(`./Logs/log${i}.txt`)
            console.log(filename)
        }
        if (err) {
            throw err
        }
        console.log('Directory is created.')
    })


}

