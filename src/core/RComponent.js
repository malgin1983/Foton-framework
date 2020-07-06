export class RComponent {
	constructor($root, options) {
		this.$root = $root;
		this.listeners = options.listeners || []; //todo
	}

	toHTML() {
		throw new Error(`Need create toHTML method for`)
	}

	init() {
		//empty method for template class
	}
}
