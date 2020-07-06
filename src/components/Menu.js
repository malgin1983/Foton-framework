import { RComponent } from '../core/RComponent'

export class Menu extends RComponent {
	static className = 'menu'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return `<h1>Hello</h1>`
	}
}

