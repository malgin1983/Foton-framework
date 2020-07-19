export class FotonComponent {
	constructor($root, options) {
		this.$root = $root;
		this.listeners = options.listeners || []; //todo
		this.props = options.props || {}
	}

	toHTML() {
		throw new Error(`Need create toHTML method for`)
	}

	init() {
		//empty method for template class
	}
}
