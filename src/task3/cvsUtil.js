import fs from 'fs'
import cvs from 'csvtojson'

export const task2 = () => {
    const inputFileName = './input.csv'
    const outputFileName = './out.txt'

    let from = fs.createReadStream(inputFileName)
    let to = fs.createWriteStream(outputFileName)

    cvs().fromStream(from).subscribe(line => {
        try {
            to.write(JSON.stringify(line) + '\n')
        } catch (error) {
            console.log(error)
        }
    })
}


