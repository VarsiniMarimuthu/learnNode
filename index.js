/*
const { format } = require('date-fns')

const {v4: uuid} = require('uuid')
console.log(format(new Date(), 'ddMMyyyy\tHH:mm:ss'))
console.log(uuid())
*/

const logEvents = require('./logEvents')
//events->emit->listen
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
//creating a object
const myEmitter = new MyEmitter();
//on keyword will listen to the event
myEmitter.on('log', (msg) => {
  logEvents(msg);
});
myEmitter.emit('log','log event emitted');