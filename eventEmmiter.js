class EventEmmiter {
    constructor() {
        this.events = {};
    }

    on(eventName, cb) {
        if (this.events[eventName]) {
            this.events[eventName].push(cb)
        } else {
            this.events[eventName] = [cb];
        }
    }

    trigger(eventName, ...rest) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => {
                cb.apply({}, rest);
            })
        }
    }
}

var ee = new EventEmmiter();

ee.on('click', (...rest) => {
    console.log('click', rest);
})

ee.trigger('click');
ee.trigger('click', { test: 'text' });