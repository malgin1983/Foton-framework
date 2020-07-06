import { RComponent } from '../../core/RComponent'
import { getTemplate } from './themplate'

export class EditMenu extends RComponent {
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
