const EventEmitter = require('events')

const emitter = new EventEmitter;

emitter.on('order-pizza',()=>{
    console.log('Order received, Your pizza is been prepared')
})
emitter.emit('order-pizza')