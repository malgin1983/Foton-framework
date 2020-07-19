import { FotonComponent } from '../../core/FotonComponent'
import { getTemplate } from './themplate'

export class EditMenu extends FotonComponent {
	static className = 'edit-menu'

	constructor($root, options) {
		super($root, {
			name: 'EditMenu',
			listeners: ['click', 'input'],
			...options
		})
	}

	toHTML() {
		const store = {}
		return getTemplate(store)
	}

	onClick(event) {
		this.$emit('onClickEditMenu', event.target) // example
	}

	onInput(event) {
		console.log('onInput', event)
	}
}
