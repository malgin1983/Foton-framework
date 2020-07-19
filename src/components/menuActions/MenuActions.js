import { FotonComponent } from '../../core/FotonComponent'

export class MenuActions extends FotonComponent {
	static className = 'menu-actions'

	constructor($root, options) {
		super($root, {
			name: 'MenuActions',
			...options
		})
	}

	init() {
		super.init()

		this.$on('onClickEditMenu', $el => {
			// example
			console.log('onClickEditMenu', $el)
		})
	}

	toHTML() {
		return '<div id="menu-actions">Menu action</div>'
	}
}
