const fs = require('fs')
const cvs = require('csvtojson')

let from = fs.createReadStream('./input.csv')
let to = fs.createWriteStream('./out.txt')

cvs().fromStream(from).subscribe(line => {
    try {
        to.write(JSON.stringify(line) + '\n')
    } catch (error) {
        console.log(error)
    }
})

