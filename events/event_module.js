// require EventEmitter class(class is container of bunch of releted method and property)
const EventEmitter = require('events');

// create instance(object) of EventEmitter class
const emitter = new EventEmitter();

// Register is listener that is interested in an event

/* listner is function that will be called when event is raised
on or addListner */
emitter.on('messageLogged', ()=> {
	console.log('lisnter is called')
})

// emit is use to raise an event/ signalling that a event is happen
emitter.emit('messageLogged')               // messageLogged-> name of event

/** note- if you register the listner after calling the emit method
nothing would have happen Because when we call emit method this emitter
iterate all registered listner and calls them synchronously */s