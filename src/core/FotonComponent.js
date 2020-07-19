import { DomListener } from './DomListener'

export class FotonComponent extends DomListener {
	constructor($root, options) {
		super($root, options.listeners)
		this.name = options.name
		this.emitter = options.emitter
		this.store = options.store
		this.unsubscribers = []
	}

	toHTML() {
		throw new Error(`Need create toHTML method for`)
	}

	$emit(event, ...args) {
		this.emitter.emit(event, ...args)
	}

	$on(event, callback) {
		const unsub = this.emitter.subscribe(event, callback)
		this.unsubscribers.push(unsub)
	}

	$dispatch(action) {
		this.store.dispatch(action)
	}

	init() {
		this.initDOMListeners()
	}

	destroy() {
		this.removeDOMListeners()
		this.unsubscribers.forEach(unsub => unsub())
	}
}
