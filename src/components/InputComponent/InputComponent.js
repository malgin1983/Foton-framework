import { FotonComponent } from '../../core/FotonComponent'



export class InputComponent extends FotonComponent {
	static className = 'menu-action-item'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return `<input data-id="${this.props.data + 1}" placeholder="Пункт N ${this.props.data + 1}" />`
	}
}

