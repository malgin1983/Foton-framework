import { RComponent } from '../../core/RComponent'
import { React } from '../../core/React'
import { Menu } from '../Menu'

export class MenuActions extends RComponent {
	static className = 'menu-actions'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return '<div id="menu-actions"></div>'
	}

	init() {
		new React('#menu-actions', {
			components: [Menu, Menu, Menu],
		}).render();
	}
}
