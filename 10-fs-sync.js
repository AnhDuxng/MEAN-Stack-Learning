const {readFileSync, writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `This is the result of the two files: ${first} and ${second}`,
    { flag:'a' }
)

console.log("done with this task")
console.log("starting the next one")
