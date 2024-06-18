const eventEmitter = require('events')

const customEmitter = new eventEmitter()

// on and emit methods
// keep track of the orders
// addtitional arguments
// built-in modules ultilize it

customEmitter.on('respone', (name, id) => {
    console.log(`data received user ${name} with id ${id}`)
})
customEmitter.on('respone', () => {
    console.log('other data receive 1')
})

customEmitter.emit('respone', 'john', 5)