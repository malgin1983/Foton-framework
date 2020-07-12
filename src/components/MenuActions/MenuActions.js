import { FotonComponent } from '../../core/FotonComponent'
import { Foton } from '../../core/Foton'
import { MenuItem } from '../MenuItem/MenuItem'
import './/MenuActions.css'

export class MenuActions extends FotonComponent {
	static className = 'wrapper-menu'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return '<div id="menu-actions"></div>'
	}

	init() {
		new Foton('#menu-actions', {
			components: [MenuItem , MenuItem , MenuItem, MenuItem],
			className: 'menu-actions-container'
		}).render();
	}
}
