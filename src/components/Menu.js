import { FotonComponent } from '../core/FotonComponent'

export class Menu extends FotonComponent {
	static className = 'menu'

	constructor($root, options) {
		super($root, {
			name: 'Menu',
			...options
		})
	}

	toHTML() {
		const state = this.store.getState()
		return `<h1>${state.title}</h1>`
	}
}
