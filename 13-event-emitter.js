const EventEmitter =  require('events');
const customEmitter = new EventEmitter();

//on will listen for emit
//emit will emit the event.

customEmitter.on('response', (name, id) => {
    console.log(`data recieved ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log('some other logic')
})

customEmitter.emit('response', 'john', 34)