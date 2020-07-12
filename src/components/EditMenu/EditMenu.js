import { FotonComponent } from '../../core/FotonComponent'
import { getTemplate } from './themplate'

export class EditMenu extends FotonComponent {
	static className = 'edit-menu'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		const store = {}
		return getTemplate(store)
	}
}
