const { writeFile, readFile } = require('fs')

console.log('Starting the first task...')
// Check file path
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed the first task')
})

console.log('Finished the third task...')

